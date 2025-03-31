import Image1 from "../../public/images/topbrand/Anua.jpg";
import Image2 from "../../public/images/topbrand/CareNel.jpg";
import Image3 from "../../public/images/topbrand/Cosrx.jpg";
import Image4 from "../../public/images/topbrand/Skin1004.jpg";
import CollectionCard from "./common/CollectionCard";
const Collection = () => {
  const topbrand = [
    { id: 1, image: Image1, slug: "anua" },
    { id: 2, image: Image2, slug: "carenel" },
    { id: 3, image: Image3, slug: "cosrx" },
    { id: 1, image: Image4, slug: "skin-1004" },
  ];
  return (
    <section className="section-gap">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 w-full">
        {topbrand.map((brand: any) => (
          <CollectionCard key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
