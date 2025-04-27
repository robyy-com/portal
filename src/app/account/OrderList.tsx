"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { noOrderImg } from "../../../public";
import { useLazyGetOrderListQuery } from "@/features/auth/authApi";
import Loading from "./loading";
import Cookies from "js-cookie";
import { api_key } from "@/utils/helper";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";

export default function OrderList() {
  const [getOrderList, { data, isLoading, error }] = useLazyGetOrderListQuery();
  const [orderData, setOrderData] = useState([]);

  const mobileNo = Cookies.get("mobileNo");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await getOrderList({ mobileNo, api_key }).unwrap();
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
                <td className="p-2 block lg:flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full ${
                        order.orderStatus === "Pending" ||
                        order.orderStatus === "Processing" ||
                        order.orderStatus === "Delivered"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      } text-white flex items-center justify-center`}
                    >
                      <FaClockRotateLeft />
                    </div>
                    <p
                      className={`p-0 m-0 text-[10px] ${
                        order.orderStatus === "Pending" ||
                        order.orderStatus === "Processing" ||
                        order.orderStatus === "Delivered"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Pending
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full ${
                        order.orderStatus === "Processing" ||
                        order.orderStatus === "Delivered"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      } text-white flex items-center justify-center`}
                    >
                      <BsBoxSeam />
                    </div>
                    <p
                      className={`p-0 m-0 text-[10px] ${
                        order.orderStatus === "Processing" ||
                        order.orderStatus === "Delivered"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Processing
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full ${
                        order.orderStatus === "Delivered"
                          ? "bg-yellow-400"
                          : "bg-gray-400"
                      } text-white flex items-center justify-center`}
                    >
                      <LiaTruckPickupSolid />
                    </div>
                    <p
                      className={`p-0 m-0 text-[10px] ${
                        order.orderStatus === "Delivered"
                          ? "text-black"
                          : "text-gray-400"
                      }`}
                    >
                      Delivered
                    </p>
                  </div>
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
