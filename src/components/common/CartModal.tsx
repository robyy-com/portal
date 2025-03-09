"use client";
import { motion } from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
interface CartModalProps {
  children: ReactNode;
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function CartModal({ children, show, setShow }: CartModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const over = {
    open: {
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return createPortal(
    <motion.div
      ref={overlay}
      className="fixed z-20 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 h-full border-2  border-borderColor shadow-lg"
      initial={{ opacity: 0 }}
      animate={show ? "open" : "closed"}
      variants={over}
    >
      <motion.div
        ref={wrapper}
        initial="closed" // Initially set to "closed" to start off-screen
        animate={show ? "open" : "closed"}
        variants={sidebarVariants}
        className="absolute top-0 right-0 h-screen w-[90%] sm:w-2/3 md:w-3/5 lg:w-3/6 xl:w-2/6 bg-white p-4 pb-6 xl:p-6"
      >
        <div className="flex justify-between">
          <h3 className="text-regular xl:text-2xl font-bold">Shopping Cart</h3>
          <button onClick={() => onDismiss()}>
            <IoMdClose size={30} />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
}
