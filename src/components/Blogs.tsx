import { fetchBlogs } from "@/utils/apiServices";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const Blogs = async () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: { slidesToShow: 3, slidesToScroll: 3, initialSlide: 2 },
  //     },
  //     { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  //   ],
  // };

  const blogs: any[] = await fetchBlogs();

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="py-10">
      <h2 className="font-bold uppercase text-2xl md:text-[35px] mb-5">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {blogs ? (
          blogs.slice(0, 4).map((blogItem: any) => (
            <Link
              href={`blog/${blogItem?.postSlug}`}
              key={blogItem.postTitle}
              className="shadow hover:shadow-md bg-white rounded-lg overflow-hidden cursor-pointer productcard flex flex-col h-full"
            >
              <Image
                className="object-cover w-full h-48"
                src={blogItem?.thumbImg}
                width={400}
                height={400}
                alt="missing image"
              />
              <div className="p-4 flex flex-col  h-full">
                <Link
                  href={`blog/${blogItem?.postSlug}`}
                  className="text-regular md:text-xl font-semibold text-gray-800"
                >
                  {blogItem.postTitle}
                </Link>
                <p className=" mt-4 text-base md:text-lg text-gray-600">
                  {truncateText(blogItem.postDetails, 100)}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>not found blogs...!</p>
        )}
      </div>
      <div className="mt-1 flex justify-center">
        <Link href="/blogs">
          <Button isIcon={true} title="More Blogs" />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
