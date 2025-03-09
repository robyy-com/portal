import BlogDetails from "@/components/blog/BlogDetails";
import { fetchSingleBlog } from "@/utils/apiServices";
async function SingleBlog({ params }: any) {
  const { blogSlug } = params;

  const blog: any[] = await fetchSingleBlog(blogSlug);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }
  return <BlogDetails blog={blog} />;
}

export default SingleBlog;
