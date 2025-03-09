interface Props {
  shippingDelivery: string;
}
function Shipping({ shippingDelivery }: Props) {
  return (
    <div>
      <div className=" px-2.5  lg:px-0 mt-10 md:mt-14 lg:mt-20 xl:mt-[50px] ">
        <p
          dangerouslySetInnerHTML={{ __html: shippingDelivery }}
          className=" text-primaryColor text-regular font-semibold space-x-2 mb-5  font-titleFont "
          style={{ fontFamily: "YourDesiredFont, sans-serif" }}
        ></p>
      </div>
    </div>
  );
}

export default Shipping;
