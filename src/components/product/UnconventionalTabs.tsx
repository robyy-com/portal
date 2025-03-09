"use client";

import { Tab } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import Description from "./Description";
import Instruction from "./Instruction";
import Reviews from "./Reviews";
import Shipping from "./Shipping";

interface Tab {
  title: string;
  component: ReactNode;
}

export default function UnconventionalTabs({
  description,
  productHistory,
  reviews,
  shippingDelivery,
}: any) {
  const tabs: Tab[] = [
    {
      title: "Description",
      component: <Description description={description} />,
    },
    {
      title: "Reviews (223)",
      component: <Reviews reviews={reviews} />,
    },
    {
      title: "Shipping & Delivery",
      component: <Shipping shippingDelivery={shippingDelivery} />,
    },
    {
      title: "Product History",
      component: <Instruction productHistory={productHistory} />,
    },
  ];

  return (
    <Tab.Group defaultIndex={0}>
      {({ selectedIndex }) => (
        <div>
          {/* Tab Buttons */}
          <Tab.List className="mt-12 flex justify-between text-center bg-[#F9F9F9] py-6 rounded-xl">
            {tabs.map((tab, index) => (
              <Tab key={index} as={Fragment}>
                <div className="w-[25%] border-none outline-none focus:outline-none focus:ring-0">
                  <button
                    className={`border-none outline-none focus:outline-none focus:ring-0 hover relative transition-all text-sm md:text-2xl text-secondarytext hover:text-textColor hover:font-bold ${
                      selectedIndex === index
                        ? "!text-textColor font-bold"
                        : "text-secondarytext hover:text-textColor"
                    }`}
                  >
                    {tab.title}
                    <div
                      className={selectedIndex === index ? "active" : ""}
                    ></div>
                  </button>
                </div>
              </Tab>
            ))}
          </Tab.List>

          {/* Tab Panels */}
          <Tab.Panels>
            {tabs.map((tab, index) => (
              <Tab.Panel key={index} className="w-full px-8">
                {tab.component}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
}
