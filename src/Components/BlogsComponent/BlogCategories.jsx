import { getBlogCategories } from "@/Api_Services/apiServices";
import blogContext from "@/Context/BlogContext";
import React, { Fragment, useContext, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import {useRouter} from "next/router";

const BlogCategories = () => {
  const { categories, setCategories } = useContext(blogContext);
  const router = useRouter()

  useEffect(() => {
    if (!categories) {
      // load categories
      loadBlogCategories();
    }
  }, []);

  const loadBlogCategories = async () => {
    try {
      const cats = await getBlogCategories();
      setCategories(cats);
    } catch (error) { }
  };

  return (
    <>
      {/* categories on big screen  */}

      <div className={"hidden lg:block w-64 relative bg-stone-50 drop-shadow-xl"} >
        <div className={"sticky top-28 mb-16 mx-5"}>

          {/* Category Text */}
          <div className={ "w-fit py-2 mx-auto font-semibold text-primary-dark my-5 text-3xl flex flex-row space-x-1" } >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-auto" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>

            <h1 className={"underline underline-offset-4"}>Categories</h1>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-auto" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>

          </div>

          <div className={" text-lg space-y-4"}>

            <Link className="block" href={`/blogs`}>
              <div className={`flex flex-row justify-center cursor-pointer border-2 ${ ( ((router.asPath).replace("/blogs/category/",""))===(`/blogs`) ) ? "border-secondary-dark text-white bg-sky-400" :"border-sky-400 text-secondary-dark bg-white" } hover:border-secondary-dark hover:text-white hover:bg-sky-400 transition-all ease-linear rounded-xl py-1 uppercase`} >
                <p className={"font-medium"}>All Blogs</p>
              </div>
            </Link>

            {categories &&
              categories.map((cat, index) => (
                <Link
                  className="block"
                  href={`/blogs/category/${cat.id}/${cat.title}`}
                  key={index}
                >
                  <div className={`flex flex-row justify-center cursor-pointer border-2  ${ ( ((router.asPath).replace("/blogs/category/",""))===(`${cat.id}/${cat.title}`) ) ? "border-secondary-dark text-white bg-sky-400" :"border-sky-400 text-secondary-dark bg-white" } hover:border-secondary-dark hover:text-white hover:bg-sky-400  transition-all ease-linear rounded-xl py-1 uppercase`} >
                    <p className={"font-medium"}>{cat.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* categories on mobile phone */}

      <div className={"lg:hidden z-40 flex flex-row justify-end p-4"}>
        <Menu as="div" className={"relative"}>

          <div>
            <Menu.Button className={"text-xl font-semibold rounded-md bg-secondary-medium px-4 py-2" } >
              Categories
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-primary-light">
              <div className={"flex flex-col justify-center p-2 divide-y-2 divide-black"}>



                <Menu.Item className={`py-3 ${ ( ((router.asPath).replace("/blogs/category/",""))===(`/blogs`) ) ? "bg-sky-400" :"" }`}>

                  <Link className="block" href={`/blogs`}>
                    <p className={"text-xl font-medium w-fit mx-auto"}>All Blogs</p>
                  </Link>


                </Menu.Item>


                {categories && categories.map((cat, index) =>
                    (
                        <Menu.Item key={index} className={`py-3 ${ ( ((router.asPath).replace("/blogs/category/",""))===(`${cat.id}/${cat.title}`) ) ? "bg-sky-400" :"" }`}>

                          <Link className="block" href={`/blogs/category/${cat.id}/${cat.title}`} >
                            <p className={"text-xl font-medium w-fit mx-auto"}>{cat.title}</p>
                          </Link>


                        </Menu.Item>
                    )
                )}









              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default BlogCategories;