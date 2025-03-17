"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [userIP, setUserIP] = useState<string>("192.168.0.1");

  const validate = () => {
    const errors: any = {};
    if (email == "") errors.email = "Please enter your email";
    if (phone == "") errors.phone = "Please enter your Phone number ";
    if (name == "") errors.name = "Please enter your Name ";
    if (message == "") errors.message = "Please enter your Message";
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      console.log(errors);

      return;
    }

    setIsSubmitting(true);

    const data = {
      custName: name,
      custMobileNo: phone,
      custEmail: email,
      comments: message,
      logIdentifier: "GIT",
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
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
        setPhone("");
        setName("");
        setMessage("");
        setAgree(false);
        setErrors({});
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
    <div className="container mx-auto lg:p-6">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-3">
        <div className="xl:pr-[100px]">
          <div className=" border-b  border-borderColor  pb-2 lg:pb-4">
            <h2 className="lg:text-xl text-regular  font-medium text-primaryColor lg:mb-2">
              STORE ADDRESS
            </h2>
            <p className=" text-sm font-normal text-secondaryColor">
              Korbona, Kalu Mistrir Mor, Rajshashi.
            </p>
          </div>
          <div className=" border-b  border-borderColor py-2 lg:py-4">
            <h2 className="lg:text-xl text-regular  font-medium text-primaryColor mb-2">
              HOTLINE
            </h2>
            <p className=" text-sm font-normal text-secondaryColor">
              +8801960710948
            </p>
          </div>
          <div className="border-b  border-borderColor py-2 lg:py-4">
            <h2 className="lg:text-xl text-regular  font-medium text-primaryColor mb-2">
              EMAIL US
            </h2>
            <p className=" text-sm font-normal text-secondaryColor">
              info@robyy.com
            </p>
          </div>
          <div className=" pt-2 lg:pt-4">
            <h2 className="lg:text-xl text-regular  font-medium text-primaryColor mb-2">
              SERVICE TIME
            </h2>
            <p className=" text-sm font-normal text-secondaryColor">
              Always Open
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="lg:text-[26px] text-xl font-semibold text-textColor mb-6">
            GET IN TOUCH
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              <div>
                <label
                  className="block text-base text-textColor mb-1 font-medium"
                  htmlFor="email"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="xxxx@gmail.com"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
              </div>
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
              <div>
                <label
                  className="block mb-1 text-base text-textColor font-medium"
                  htmlFor="name"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
                {errors.name && <p className="text-red-600">{errors.name}</p>}
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
              {errors.message && (
                <p className="text-red-600">{errors.message}</p>
              )}
            </div>
            <div className="xl:flex lg:justify-between">
              <div>
                <input
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
                className="mt-3 xl:mt-0 w-full xl:w-[30%] bg-textColor text-white p-2 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
