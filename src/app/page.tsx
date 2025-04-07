import Adds from "@/components/adds/Adds";
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import BestDeals from "@/components/BestDeals";
import Blogs from "@/components/Blogs";
import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import NewArrivals from "@/components/NewArrivals";
import Support from "@/components/Support";
import TrendingProducts from "@/components/TrendingProducts";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Adds location="below-top-nav" />
        <div className=" ">
          <Banner />
        </div>
        <Adds location="below-slider" />
        <div className=" mt-5">
          <BestDeals />
        </div>

        <div className=" mt-5">
          <Collection />
        </div>

        <div className="bg-bgColor">
          <Categories />
        </div>
        <Adds location="below-category" className="mt-5" />
        <div className=" mt-5">
          <AllProducts />
        </div>
        <div className="bg-bgColor">
          <NewArrivals />
        </div>

        <Adds location="above-trending" />
        <div className=" mt-5">
          <TrendingProducts />
        </div>
        {/* <div className=" mt-5">
          <TopTen />
        </div> */}

        <div className="mt-5 py-10">{/* <FlashSale /> */}</div>
        {/* <div className=" mt-5">
          <HotOffer />
        </div> */}
        <Adds location="above-blog-post" />
        <div className=" mt-5">
          <Blogs />
          <Support />
        </div>
      </div>

      {/* <Newsletter /> */}
    </main>
  );
}
