import Image from "next/image";

function BlogDetails({ blog }: any) {
  return (
    <div className="container mx-auto px-2.5 xl:px-0">
      <div className="mx-auto">
        {/* Hero Image */}
        <Image
          alt={blog.postTitle}
          loading="lazy"
          width={800}
          height={410}
          decoding="async"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
          src={blog.thumbImg}
        />

        {/* Title */}
        <h1 className="text-2xl md:text-4xl  mt-10 font-bold text-primaryColor mb-4">
          {blog.postTitle}
        </h1>

        {/* Author and Published Date */}
        <div className="flex items-center mb-4">
          <Image
            alt={blog.postedBy}
            loading="lazy"
            width={48}
            height={48}
            decoding="async"
            className="w-12 h-12 rounded-full border-2 border-gray-300 mr-3"
            src={blog.thumbImg}
          />
          <p className="text-sm text-gray-600">
            <span className=" text-base font-bold">{blog.postedBy}</span>
            <span className="text-gray-500"> - {blog.postDateTime}</span>
          </p>
        </div>

        {/* Blog Content */}
        <p
          className="text-base text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.postDetails }}
        ></p>

        {/* Likes Count */}
        <div className="mt-6">
          <span className="text-sm text-gray-500">
            {blog?.likeCount} Likes{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
