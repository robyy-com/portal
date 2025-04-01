import Link from "next/link";

function AboutDetails() {
  return (
    <div>
      <div>
        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold"> Acquaintance:</h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            A warm welcome to “ROBYY.com” online shop. Here, you can purchase
            high-quality cosmetics and skincare products at retail prices.
            “ROBYY.com” online shop supplies all types of cosmetics and skincare
            products at retail prices all over the country.
          </p>
        </div>
        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold"> Privacy:</h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            <Link
              className=" text-white font-semibold text-lg"
              href="https://www.robyy.com/"
            >
              “ROBYY.com”
            </Link>{" "}
            stores all the information of the customers in its own database and
            does not share this information with anyone.
          </p>
        </div>
        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold">
            Required Information:
          </h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            For placing an order with{" "}
            <Link
              className=" text-white font-semibold text-lg"
              href="https://www.robyy.com/"
            >
              “ROBYY.com”
            </Link>{" "}
            the following information is collected from the customer: <br />
            Customer's name. <br />
            Customer's mobile number. <br />
            Customer's address.
          </p>
        </div>

        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl  text-white font-bold">
            {" "}
            Delivery Timeline:{" "}
          </h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            All products in stock at{" "}
            <Link
              className=" text-white font-semibold text-lg"
              href="https://www.robyy.com/"
            >
              “ROBYY.com”
            </Link>{" "}
            are delivered within a short time frame. For Dhaka, delivery is
            completed within 2 working days, and for other districts, it takes 3
            to 5 working days.
          </p>
        </div>

        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl  text-white font-bold">Payment Process:</h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            Customers can place orders either through Cash on Delivery or
            advance payment.
            <br /> The delivery charge within Dhaka is 60 Taka, and for other
            districts, the home delivery charge is 120 Taka.
          </p>
        </div>
        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold"> Return Policy:</h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            Customers can return products under the following circumstances:{" "}
            <br />
            If the wrong product is delivered by{" "}
            <Link
              className=" text-white font-semibold text-lg"
              href="https://www.robyy.com/"
            >
              “ROBYY.com”
            </Link>
            . <br />
            If the wrong shade is delivered by{" "}
            <Link
              className=" text-white font-semibold text-lg"
              href="https://www.robyy.com/"
            >
              “ROBYY.com”
            </Link>
            . <br />
            The product must be checked in front of the delivery man (otherwise,
            complaints will not be accepted). <br />
            Complaints or exchange requests must be made within a maximum of 3
            working days; otherwise, they will not be accepted.
          </p>
        </div>

        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold"> Exchange Policy: </h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            √ Exchange requests cannot be made if the product has been used.
            <br />
            √ If the product is kept intact, the customer can apply for an
            exchange. <br />√ If the wrong product is ordered, the customer will
            bear the delivery charge for the exchange process.
          </p>
        </div>
        <div className="mb-7  lg:mb-12">
          <h2 className="text-xl text-white font-bold"> Refund Policy: </h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            Refund requests are not accepted after the delivery of the correct
            product .<br />
            Approved refunds will be processed within 3 working days. <br />
            Refunds will be issued through the same payment method
            used for the order.
          </p>
        </div>

        <div className="mb-7  lg:mb-12">
          <h2 className="text-lg text-white font-bold">
            Phone: +8801960710948
          </h2>
          <h2 className="text-lg text-white font-bold">
            Email: info@robyy.com
          </h2>
          <h2 className="text-lg text-white font-bold">
            Address: Korbona, Kalu Mistrir Mor, Rajshashi.
          </h2>
        </div>

        <div className="mb-7 lg:mb-12">
          <h2 className="text-xl text-white font-bold">
            Join the ROBYY Family
          </h2>
          <p className="mt-2 lg:mt-5 text-base lg:text-regular font-normal text-thirdtextColor leading-[34px]">
            Thank you for choosing ROBYY. We invite you to explore our
            collections, join our community, and share in the beauty and
            elegance of our creations. Follow us on social media and subscribe
            to our newsletter to stay updated on the latest arrivals, exclusive
            offers, and behind-the-scenes glimpses of our design process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
