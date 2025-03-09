import { Category } from "@/types/types";
import CustomLink from "../common/CustomLink";

interface Props {
  categories: Category[];
}

function AllCategory({ categories }: Props) {
  return (
    <div>
      <ul className="h-[300px] overflow-auto ml-2">
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => (
            <CustomLink
              path={`/category/${category.categorySlug}` || ""}
              key={category.cat_id}
            >
              {category.categoryName}
              <span className="text-thirdtextColor">
                ({category.totalProd})
              </span>
            </CustomLink>
          ))
        ) : (
          <p>No categories found!</p>
        )}
      </ul>
    </div>
  );
}

export default AllCategory;
