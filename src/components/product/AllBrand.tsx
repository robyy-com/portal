import { Brand } from "@/types/types";
import CustomLink from "../common/CustomLink";

interface Props {
  brands: Brand[];
}

function AllBrand({ brands }: Props) {
  return (
    <div>
      <ul className="h-[300px] overflow-auto ml-2">
        {brands && brands?.length > 0 ? (
          brands.map(({ brandId, brandSlug, brandName, totalProd }: any) => (
            <CustomLink path={`/brand/${brandSlug}`} key={brandId}>
              {brandName}
              <span className=" text-thirdtextColor">({totalProd || 0})</span>
            </CustomLink>
          ))
        ) : (
          <p>not found brand.......!</p>
        )}
      </ul>
    </div>
  );
}

export default AllBrand;
