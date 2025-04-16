"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import proImage from "../../../public/images/Products iamge/product-13 1 (1).png";
import { useSelector } from "react-redux";
import { noOrderImg } from "../../../public";
import { useLazyGetOrderListQuery } from "@/features/auth/authApi";
import Loading from "./loading";
import Cookies from "js-cookie";

export default function OrderList() {
  const [getOrderList, { data, isLoading, error }] = useLazyGetOrderListQuery();
  const [orderData, setOrderData] = useState([]);

  const mobileNo = Cookies.get("mobileNo");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await getOrderList({ mobileNo }).unwrap();
        setOrderData(result);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    if (mobileNo) {
      fetchOrders();
    }
  }, [getOrderList, mobileNo]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-fixed min-w-[640px] w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Order ID</th>
            <th className="p-2">Payment Method</th>
            <th className="p-2">Address</th>
            <th className="p-2">Order Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderData && orderData?.length > 0 ? (
            orderData?.map((order: any) => (
              <tr key={order.id} className="border-t border-gray-300">
                <td className="p-2">{order.orderId}</td>
                <td className="p-2">{order.paymentMethod}</td>
                <td className="p-2">{order.address}</td>
                <td className="p-2">{order.orderDate}</td>
                <td className="p-2">
                  {order.isProcessed === false ? (
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      Pending
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Completed
                    </span>
                  )}
                </td>
                <td className="p-2">{order.grandTotal} tk</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="py-10">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={noOrderImg}
                    alt="No orders found"
                    width={440}
                    height={300}
                  />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
