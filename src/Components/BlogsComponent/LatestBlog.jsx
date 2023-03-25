import { getLatestBlogs } from "@/Api_Services/apiServices";
import blogContext from "@/Context/BlogContext";
import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import ReviewCard from "../HomePageComponent/SingleReuseableComponents/ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const LatestBlog = () => {
  const { latestBlogs, setLatestBlogs } = useContext(blogContext);
  useEffect(() => {
    console.log(latestBlogs);
    if (!latestBlogs) {
      loadLatestBlogs();
    }
  }, []);

  const loadLatestBlogs = async () => {
    try {
      const blogs = await getLatestBlogs();
      setLatestBlogs(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-3">
        <h1 className="p-5 underline underline-offset-8 lg:text-5xl text-primary-dark text-center text-2xl font-bold">
          Trending Blogs
        </h1>
        <Slider
          className={"my-6 w-[97%] overflow-clip mx-auto"}
          slidesToShow={3}
          autoplay={true}
          speed={1500}
          autoplaySpeed={5000}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 1023,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
        >
          {latestBlogs &&
            latestBlogs.map((blog, index) => (
              <div
                key={index}
                className="max-w-sm min-h-[20rem] overflow-hidden shadow-lg  rounded-xl border-b-secondary-medium border-b-8 drop-shadow-xl bg-card-color"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{blog.title}</div>
                  <p className="text-gray-700 text-base line-clamp-6">
                    {blog.short_description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <Link href={`/blogs/${blog.slug}`}>
                    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Read
                    </span>
                  </Link>
                  <Link href={`/blogs`}>
                    <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Blogs
                    </span>
                  </Link>
                  <Link
                    href={`https://courses.learncodewithdurgesh.com`}
                    target={"_blank"}
                  >
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Premium Courses
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default LatestBlog;
