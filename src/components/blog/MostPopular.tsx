import Link from "next/link";
const MostPopular = ({ blogs }: any) => {
  return (
    <div className="border border-blue-100 rounded-lg pt-5 px-4">
      <h3 className="text-primaryColor text-xl lg:text-2xl font-semibold">
        Blog Post Categories 👍️
      </h3>
      <ul className="space-y-5 my-5">
        {/* List item 1 */}
        {blogs.length > 0 ? (
          blogs.map((item: any) => (
            <li className="sidebar-card cursor-pointer " key={item?.postTitle}>
              <Link
                href={`/blog-category/${item.categorySlug}`}
                className="font-medium hover:text-black text-primaryColor transition-transform text-regular"
              >
                {item?.categoryName}
              </Link>
              {/* <p className="text-slate-400 text-sm mt-1">
                <strong> Written by:</strong>
                <Link href={`/blog/${item.categorySlug}`} className="mx-1">
                  {item?.postedBy}
                </Link>
                <span className="mx-1">·</span>
                {item?.likeCount} Likes
              </p> */}
            </li>
          ))
        ) : (
          <p>not found recent post</p>
        )}
      </ul>
    </div>
  );
};

export default MostPopular;
