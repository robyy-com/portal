import CollectionCard from "./common/CollectionCard";
const Collection = () => {
  return (
    <section className="section-gap">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 w-full">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
  );
};

export default Collection;
