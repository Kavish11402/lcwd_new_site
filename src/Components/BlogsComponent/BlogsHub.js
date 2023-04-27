import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ShortBlogCard from "@/Components/BlogsComponent/ShortBlogCard";
import BlogCategories from "./BlogCategories";
import {useContext, useEffect, useRef, useState} from "react";
import courseHomeContext from "@/Context/CourseHomeContext";
import {toast} from "react-toastify";
import {useRouter} from "next/router";


function blogNotFoundComponent(keyword)
{

    return(
        <div className={"text-center text-4xl space-y-4"}>

            <p>No any blogs found by the keyword</p>
            <p className={"font-bold underline italic underline-offset-8"}>
                {`"${keyword}"`}
            </p>

        </div>
    )

}



export default function BlogsHub({ allBlogs = [], title = "Blogs", subtitle = "Exiting And Hot Topics in Detail", showSocialMedia = true })
{

    const { allGlobalBlogs , setAllGlobalBlogs } = useContext(courseHomeContext)
    const  [allShortBlogs , setAllShortBlogs ] = useState([])
    const searchText = useRef("")
    const router = useRouter()


    useEffect(
        ()=>{
            setAllShortBlogs(allBlogs)
            if(router.asPath==="/blogs")
            {
                setAllGlobalBlogs(allBlogs)
            }
        }
        ,[]
    )
    useEffect(
        ()=>{
            setAllShortBlogs(allBlogs)
            if(router.asPath==="/blogs")
            {
                setAllGlobalBlogs(allBlogs)
            }
        }
        ,[allBlogs]
    )




    function handleSearch(e)
    {
        e.preventDefault();
        console.warn("Search Text =>> ",searchText.current.value)
        let temp = allGlobalBlogs.filter(
            (singleBlog)=>
            { return singleBlog.title.match( new RegExp(searchText.current.value,"gi"))!=null }
        )
        console.log(temp)

        if(temp.length===0)
        {
            toast.info("We apologize, but we couldn't find any results that match your search. Please try again with different keywords", {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


        setAllShortBlogs(temp)
    }





    return (
        <div className={"w-screen lg:w-auto overflow-x-clip lg:overflow-x-visible"}>
            <HeroCard
                showLogo={false}
                backgroundCss={"bg-blogBannerImg"}
                title={title}
                subTitle={subtitle}
                showSocialMedia={showSocialMedia}
            />
            {console.log(allBlogs)}
            <div className={"flex flex-col md:flex-row"}>
                <BlogCategories />
                <div className={"w-full md:w-[85%]  md:py-16 mx-auto"}>

                    {/* Search Box */}
                    <div className={"w-[90%] 2xl:w-[60%] mx-auto"}>
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

                            <form onSubmit={ (e)=>{ handleSearch(e) } }>
                                <input required ref={searchText} className={ "w-full h-12 pl-12 pr-24 rounded-3xl transition-all border-2 focus:border-secondary-dark focus:outline-0 focus:ring-0 ease-in" }
                                       type={"text"} placeholder={"Search For Blog"}  />


                                <button
                                    type={"submit"}
                                    className={`mr-[2.46px]
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
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>


                    {/* Single Blogs */}
                    <div className={"p-8 md:p-16 mt-20  space-y-20"}>
                        {
                            ( allShortBlogs.length!==0 )?

                                allShortBlogs.map((singleBlog) => {
                                    return (
                                        <ShortBlogCard
                                            key={singleBlog.id} blogTitle={singleBlog.title}
                                            blogShortDescription={singleBlog.short_description}
                                            blogSlug={singleBlog.slug}
                                        />
                                    );
                                })
                                :
                                blogNotFoundComponent(searchText.current.value)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}