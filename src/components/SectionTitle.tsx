interface inputProps {
  title: string;
  shortDesc?: string;
  color?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  shortDesc,
  className = "justify-center text-center mb-5 lg:mb-[60px]",
}: inputProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-center font-bold uppercase text-2xl lg:text-[35px]">
        {title}
      </h1>
      <p className="text-primaryColor capitalize text-sm md:text-regular mt-2 lg:mt-3 mb-1">
        {shortDesc}
      </p>
    </div>
  );
}
