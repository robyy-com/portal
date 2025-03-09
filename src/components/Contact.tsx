"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="section-gap block md:grid grid-cols-12 gap-12 container mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : "initial"}
        className="lg:col-span-7 md:col-span-12 col-span-12"
      >
        <Image src="" alt="contact-img" className="w-full h-full" />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : "initial"}
        transition={{ duration: 0.5 }}
        className="col-span-5"
      >
        <h2 className="text-secondaryColor text-2xl md:text-3xl font-bold mb-10 mt-10 md:mt-0 text-center md:text-left">
          Request Your Free Consultation Today.
        </h2>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
          <Input placeholder="Company Name:" name="companyName" />
          <Input placeholder="Company Email:" name="companyEmail" />
          <Input placeholder="Contact Number:" name="companyNumber" />
          <Input placeholder="Location:" name="location" />
          <Input placeholder="Company Size:" name="companyName" />
          <Input placeholder="Company Type:" name="companyName" />
        </div>
        <div className="mt-6">
          <Textarea placeholder="Your Message:" name="message" rows={8} />
        </div>

        <div className="flex justify-center mt-8">
          <Button title="Submit Comment" isIcon={true} width={44} />
        </div>
      </motion.div>
    </section>
  );
}
