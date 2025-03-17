"use client";
import { useState } from "react";
import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaComments,
  FaTimes,
} from "react-icons/fa";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 md:right-12 flex flex-col  gap-2 items-center z-10">
      {/* Animated Chat Options */}
      <div
        className={`flex flex-col gap-2 mb-2 transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="https://wa.me/01960710948"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.facebook.com/share/15onWZRzDV/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaFacebookMessenger size={24} />
        </a>
      </div>

      {/* Chat Button with Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#343434] text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:bg-[#555454]"
      >
        {isOpen ? (
          <FaTimes size={28} className="animate-spin-slow" />
        ) : (
          <FaComments size={28} className="animate-spin-slow" />
        )}
      </button>
    </div>
  );
}
