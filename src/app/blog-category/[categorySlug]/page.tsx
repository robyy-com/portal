import BlogCard from "@/components/blog/BlogCard";
import { fetchBlogSingleCategory } from "@/utils/apiServices";
import Link from "next/link";

async function BlogCategoryPage({ params }: any) {
  const { categorySlug } = params;
  const blogs: any[] = await fetchBlogSingleCategory(categorySlug);

  return (
    <>
      <div className="container mx-auto px-2.5 xl:px-0 ">
        <div className="  ">
          <div className=" ">
            {blogs &&
              blogs.map((blog: any, inex: number) => (
                <Link href={`/blog/${blog.postSlug}`} key={inex}>
                  <BlogCard blog={blog} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCategoryPage;
