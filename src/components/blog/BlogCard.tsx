import { Blog } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { productNoImage } from "../../../public";
interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row border shadow-sm  transition-all hover:scale-105 hover:shadow-lg border-blue-100 rounded-lg gap-2 mb-4 px-4 items-center">
      {/* Image Section */}
      <div className="md:w-1/4 w-full mt-4 md:mt-0">
        <Image
          alt={blog.title}
          loading="lazy"
          width={350}
          height={180}
          decoding="async"
          className="rounded-sm"
          src={blog.thumbImg || productNoImage}
        />
      </div>

      {/* Content Section */}
      <div className="p-2 md:p-4 w-full md:w-3/4">
        <h3 className="text-primaryColor text-xl font-semibold transition-colors">
          <Link href={`/blog/${blog.postSlug}`}>
            <span className="line-clamp-1">{blog.postTitle}</span>
          </Link>
        </h3>
        {/* <p className="my-3 text-base text-slate-400 line-clamp-3">
          {blog.postDetails}
        </p> */}

        {/* Footer Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              alt="avatar"
              loading="lazy"
              width={40}
              height={40}
              decoding="async"
              className="w-10 rounded-full"
              src={blog?.thumbImg}
            />
            <div>
              <h5 className="text-slate-300 text-sm">
                <span className=" text-black font-semibold">
                  {blog.postedBy}
                </span>
              </h5>
              <span className="text-xs text-slate-400">
                {blog.postDateTime}
              </span>
            </div>
          </div>
          <span className="text-sm text-slate-400">
            {blog?.likeCount} 👍️ Likes
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
