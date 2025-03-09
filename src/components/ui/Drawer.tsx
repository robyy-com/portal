import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { logo } from "../../../public";

interface DrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 z-50 overflow-hidden ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-out`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-out ${
                isOpen ? "opacity-75" : "opacity-0"
              }`}
              onClick={onClose}
            ></div>

            <section
              className={`absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-500 ease-out`}
            >
              <div className="w-72">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Image src={logo} alt="Logo" />
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          onClick={onClose}
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Close panel</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 px-4 sm:px-6">
                    {/* Content */}
                    {children}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
