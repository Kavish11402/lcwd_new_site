import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ShortBlogCard from "@/Components/BlogsComponent/ShortBlogCard";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BlogCategories from "./BlogCategories";

export default function BlogsHub({
  allBlogs = [],
  title = "Blogs",
  subtitle = "Exiting And Hot Topics in Detail",
  showSocialMedia = true,
}) {
  console.log(allBlogs);
  return (
    <div className={"w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible"}>
      <HeroCard
        showLogo={false}
        backgroundCss={"bg-blogBannerImg"}
        title={title}
        subTitle={subtitle}
        showSocialMedia={showSocialMedia}
      />

      <div className={"flex flex-col md:flex-row"}>
        <BlogCategories />
        <div className={"w-full md:w-[85%] space-y-20 p-8 md:p-16 mx-auto"}>
          {/* Search Box */}
          {/* <div className={"w-[80%] 2xl:w-[60%] mx-auto"}>
            <div className={"relative my-2 drop-shadow-2xl"}>
              <span className={"absolute inset-y-0 flex items-center pl-3"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>

              <input
                className={
                  "w-full h-12 pl-12 pr-24 rounded-3xl transition-all border-2 focus:border-secondary-dark focus:outline-0 focus:ring-0 ease-in"
                }
                type={"text"}
                placeholder={"Search For Blog"}
              />

              <span
                className={`  mr-[2.46px]
                                                absolute 
                                                right-0 
                                                inset-y-[2.46px]
                                                flex 
                                                items-center 
                                                px-4 
                                                bg-primary-medium 
                                                hover:bg-primary-light 
                                                transition-all 
                                                ease-in-out 
                                                rounded-r-3xl 
                                                py-2 
                                                text-center 
                                                text-base 
                                                font-semibold 
                                                text-zinc-600 
                                                lg:text-xl`}
              >
                <button>Search</button>
              </span>
            </div>
          </div> */}

          {allBlogs.map((singleBlog) => {
            return (
              <ShortBlogCard
                key={singleBlog.id}
                blogTitle={singleBlog.title}
                blogShortDescription={singleBlog.short_description}
                blogSlug={singleBlog.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
