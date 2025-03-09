"use client";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  setShow: (value: boolean) => void;
}

function ExpComment({ setShow }: props) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userIP, setUserIP] = useState("192.168.0.1");

  const validate = () => {
    const errors: any = {};
    if (!phone) errors.phone = "Please enter your Phone number ";
    if (!message) errors.message = "Please enter your Message";
    if (!agree) errors.agree = "You must agree to the terms";
    return Object.keys(errors).length ? errors : null;
  };

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    fetchIP();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const data = {
      custName: "",
      custMobileNo: phone,
      custEmail: "",
      comments: message,
      logIdentifier: "EXP",
      iPLogged: userIP,
    };

    try {
      const response = await fetch("https://api.robyy.com/v1.1.0/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("thank you your feedback!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setPhone("");
        setMessage("");
        setAgree(false);
        setErrors({});
        setTimeout(() => {
          setShow(false);
        }, 5000);
      } else {
        const errorData = await response.json();

        toast.error("Error: " + errorData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto ">
      <ToastContainer />
      <form className="space-y-4 w-full md:w-[65%] " onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
          <div>
            <label
              className="block text-base text-textColor mb-1 font-medium"
              htmlFor="phone"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label
            className="block mb-1 text-base text-textColor font-medium"
            htmlFor="message"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded h-32"
          ></textarea>
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>
        <div className="xl:flex lg:justify-between">
          <div>
            <input
              className=" w-4"
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label className="ml-2" htmlFor="agree">
              I have read and agree to the terms
            </label>
            {errors.agree && <p className="text-red-600">{errors.agree}</p>}
          </div>
          <button
            type="submit"
            className="mt-3 xl:mt-0 w-full xl:w-[20%] bg-textColor text-white p-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpComment;
