import Link from "next/link";
function RecentBlog({ blogs }: any) {
  return (
    <div>
      <div className="border border-blue-100 rounded-lg pt-5 px-4 mt-6">
        <h3 className="text-primaryColor text-xl lg:text-2xl font-semibold">
          Recent Post
        </h3>
        <ul className="space-y-5 my-5">
          {/* List item 1 */}
          {blogs.length > 0 ? (
            blogs.map((item: any) => (
              <li className="sidebar-card cursor-pointer" key={item?.postTitle}>
                <Link
                  href={`/blog/${item.postSlug}`}
                  className="font-medium text-primaryColor transition-all text-base"
                >
                  {item?.postTitle}
                </Link>
                <p className="text-slate-400 text-sm mt-1">
                  <strong> Written by:</strong>
                  <Link href={`/blog/${item.blogSlug}`} className="mx-1">
                    {item?.postedBy}
                  </Link>
                  <span className="mx-1">·</span>
                  {item?.likeCount} Likes
                </p>
              </li>
            ))
          ) : (
            <p>not found recent post</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecentBlog;
