import MostPopular from "@/components/blog/MostPopular";
import { fetchBlogsCategory } from "@/utils/apiServices";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogs = await fetchBlogsCategory();
  return (
    <section className="container mx-auto mt-12">
      <h2 className=" flex items-center gap-4 xl:mb-12 text-regular md:text-xl lg:text-3xl xl:text-[35px] font-bold">
        All Blogs <FaArrowRightLong />
      </h2>
      <p className="text-center mb-5"></p>
      <div className="grid lg:grid-cols-[1fr_440px] grid-cols-1 py-10 gap-10 ">
        <div>{children}</div>
        <div className="grid grid-cols-1 gap-5 ">
          <MostPopular blogs={blogs} />
          {/* <RecentBlog blogs={blogs} /> */}
        </div>
      </div>
    </section>
  );
}
