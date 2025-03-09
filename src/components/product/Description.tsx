interface Props {
  description: string;
}
function Description({ description }: Props) {
  return (
    <div className=" px-2.5  lg:px-0 mt-10 md:mt-14 lg:mt-20 xl:mt-[50px] ">
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className=" text-primaryColor text-regular font-semibold space-x-2 mb-5  font-titleFont "
        style={{ fontFamily: "YourDesiredFont, sans-serif" }}
      ></p>
      {/* <div className=" mt-10 md:mt-14 lg:mt-20 xl:mt-[100px] ">
        <h3 className=" text-2xl font-bold text-textColor mb-5">
          Illuminate Your Space
        </h3>
        <p className=" text-regular text-fivthtextColor">
          Elevate your living space with the unparalleled elegance of our
          Radiant Luxe Aura - Premium Crystal Ornament. Crafted with meticulous
          attention to detail, this exclusive ornament exudes sophistication and
          opulence, instantly becoming the focal point of any room. Elevate your
          living space with the unparalleled elegance of our Radiant Luxe Aura -
          Premium Crystal Ornament. Crafted with meticulous attention to detail,
          this exclusive ornament exudes sophistication and opulence, instantly
          becoming the focal point of any room.
        </p>
      </div> */}

      {/* <div className=" mt-10 md:mt-12 lg:mt-20 xl:mt-[100px]  ">
        <h3 className=" text-2xl font-bold text-textColor mb-5">
          Illuminate Your Space
        </h3>
        <p className=" text-regular text-fivthtextColor">
          Indulge in the mesmerizing allure of hand-selected crystals,
          delicately arranged to capture and reflect light in the most
          enchanting manner. Each facet of this exquisite ornament sparkles with
          a brilliance that transcends ordinary decor, adding a touch of luxury
          to your home like never before. Indulge in the mesmerizing allure of
          hand-selected crystals, delicately arranged to capture and reflect
          light in the most enchanting manner. Each facet of this exquisite
          ornament sparkles with a brilliance that transcends ordinary decor,
          adding a touch of luxury to your home like never before. Indulge in
          the mesmerizing allure of hand-selected crystals, delicately arranged
          to capture and reflect light in the most enchanting manner. Each facet
          of this exquisite ornament sparkles with a brilliance that transcends
          ordinary decor, adding a touch of luxury to your home like never
          before. Indulge in the mesmerizing allure of hand-selected crystals,
          delicately arranged to capture and reflect light in the most
          enchanting manner. Each facet of this exquisite ornament sparkles with
          a brilliance that transcends ordinary decor, adding a touch of luxury
          to your home like never before.
        </p>
      </div> */}
    </div>
  );
}

export default Description;
