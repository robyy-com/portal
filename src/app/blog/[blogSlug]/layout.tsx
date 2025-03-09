import MostPopular from "@/components/blog/MostPopular";
import { fetchBlogsCategory } from "@/utils/apiServices";

export default async function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogs = await fetchBlogsCategory();
  return (
    <section className=" container mx-auto mt-10">
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
