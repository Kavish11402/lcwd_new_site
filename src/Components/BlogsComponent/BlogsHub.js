import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ShortBlogCard from "@/Components/BlogsComponent/ShortBlogCard";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";


export default function BlogsHub({allBlogs})
{
    console.log(allBlogs)
    return(
        <div className={"w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible"}>
            <HeroCard showLogo={false} backgroundCss={"bg-blogBannerImg"} title={"Blogs"} subTitle={"Exiting And Hot Topics in Detail"} showSocialMedia={true} />

            <div className={"flex flex-col md:flex-row"}>

                <div className={"hidden md:block w-60 relative bg-stone-50 drop-shadow-xl "}>

                    <div className={"sticky top-28 mb-16 mx-5"}>

                        <div className={"w-fit py-2 mx-auto font-semibold text-primary-dark my-5 text-3xl flex flex-row space-x-1"}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                                 stroke="currentColor" className="w-6 h-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>

                            <h1 className={"underline underline-offset-4"}>Categories</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                                 stroke="currentColor" className="w-6 h-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>
                        </div>

                        <div className={"text-secondary-dark text-lg space-y-4"}>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>All Blogs</p>
                            </div>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>Technology</p>
                            </div>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>Food</p>
                            </div>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>Cars</p>
                            </div>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>Kitchen</p>
                            </div>

                            <div className={`flex flex-row justify-center cursor-pointer border-2 border-sky-400 hover:text-white bg-white hover:bg-sky-400 transition-all ease-linear rounded-3xl py-1`}>
                                <p className={"font-medium"}>Aviation</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={"md:hidden z-50 flex flex-row justify-end p-4"}>

                    <Menu as="div" className={"relative"}>

                        <div>
                            <Menu.Button className={"text-xl font-semibold rounded-md bg-black bg-opacity-20 px-4 py-2"}>
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
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg bg-primary-light">
                                <div className={"flex flex-col justify-center p-2 divide-y-2 "}>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            All Blogs
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Technology
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Food
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Cars
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Kitchen
                                        </button>
                                    </Menu.Item>

                                    <Menu.Item className={"py-3"}>
                                        <button className={"text-xl font-medium"}>
                                            Aviation
                                        </button>
                                    </Menu.Item>

                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                </div>


                <div className={"w-full md:w-[85%] space-y-20 p-8 md:p-16 mx-auto"}>

                    {/* Search Box */}
                    <div className={"w-[80%] 2xl:w-[60%] mx-auto"}>

                        <div className={"relative my-2 drop-shadow-2xl"}>

                            <span className={"absolute inset-y-0 flex items-center pl-3"} >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>

                            </span>

                            <input className={"w-full h-12 pl-12 pr-24 rounded-3xl transition-all border-2 focus:border-secondary-dark focus:outline-0 focus:ring-0 ease-in"} type={"text"} placeholder={"Search For Blog"} />

                            <span className={`  mr-[2.46px]
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
                                                lg:text-xl`} >

                                <button>
                                    Search
                                </button>

                            </span>

                        </div>

                    </div>



                    {

                        allBlogs.map(
                            (singleBlog)=>
                            {
                                return(
                                    <ShortBlogCard key={singleBlog.id} blogTitle={singleBlog.title} blogShortDescription={singleBlog.short_description} blogSlug={singleBlog.slug} />
                                )
                            }
                        )

                    }


                </div>

            </div>
        </div>
    );
}