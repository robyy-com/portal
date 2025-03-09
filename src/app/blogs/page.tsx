import BlogCard from "@/components/blog/BlogCard";
import { fetchBlogs } from "@/utils/apiServices";
import Link from "next/link";

async function BlogPage() {
  const blogs: any[] = await fetchBlogs();

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

export default BlogPage;
