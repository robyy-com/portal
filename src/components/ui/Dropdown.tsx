import Image from "next/image";
import Link from "next/link";
import productImage from "../../../public/images/noImage/product_no_image.jpg";
interface props {
  searchproducts: any;
  onSelect: () => void;
}

export default function Dropdown({ searchproducts, onSelect }: props) {
  return (
    <div className="h-72 bg-white w-full absolute left-0 top-14 p-4 shadow-lg rounded overflow-y-auto dropdown-container transition-all duration-700 ease-in-out">
      <ul>
        {searchproducts &&
          searchproducts?.length > 0 &&
          searchproducts?.slice(0, 10)?.map((product: any) => (
            <Link
              key={product.Id}
              href={`/product/${product.productSlug}`}
              onClick={() => onSelect()}
            >
              <li className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-slate-100">
                <div className="w-16">
                  <Image
                    src={product?.proImage || productImage}
                    alt="product"
                    className=" rounded-lg"
                    width={100}
                    height={150}
                  />
                </div>
                <div className="w-full ">
                  <h4 className="text-sm lg:text-base  text-textColor font-semibold">
                    {product.title}
                  </h4>
                  <p className="text-base text-textColor font-semibold ">
                    TK {product.salesPrice}
                  </p>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
