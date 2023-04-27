import SingleCourse from "@/Components/FreeCoursesComponent/SingleCourse";
import HeroCard from "../MasterTemplets/HeroCard";
import {toast} from "react-toastify";
import {useContext, useEffect, useRef, useState} from "react";
import courseHomeContext from "@/Context/CourseHomeContext";
import {useRouter} from "next/router";
import ShortBlogCard from "@/Components/BlogsComponent/ShortBlogCard";

function courseNotFoundComponent(keyword)
{

    return(
        <div className={"text-center text-4xl space-y-4 mx-auto w-fit mb-20"}>

            <p>No any course found by the keyword</p>
            <p className={"font-bold underline italic underline-offset-8"}>
                {`"${keyword}"`}
            </p>

        </div>
    )

}


function displayCourse(allShortCourses)
{
    return(
        <div className={"mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-10  2xl:gap-x-10 gap-y-20 mb-20"} >
            {
                allShortCourses.map((singleCourse) => {
                    return (
                        <SingleCourse
                            key={singleCourse.id}
                            courseUrl={singleCourse.courseUrl}
                            bannerImg={singleCourse.courseBanner}
                            bannerTittle={singleCourse.courseName}
                            bannerDesc={singleCourse.pageDescription}
                        />
                    );
                })
            }
        </div>
    )
}


export default function CoursesHub({ courses })
{
    const { allGlobalCourses , setAllGlobalCourses } = useContext(courseHomeContext)
    const  [allShortCourses , setAllShortCourses ] = useState([])
    const searchText = useRef("")
    const router = useRouter()



    useEffect(
        ()=>{
            setAllShortCourses(courses)
            if(router.asPath==="/courses")
            {
                setAllGlobalCourses(courses)
            }
        }
        ,[]
    )
    useEffect(
        ()=>{
            setAllShortCourses(courses)
            if(router.asPath==="/courses")
            {
                setAllGlobalCourses(courses)
            }
        }
        ,[courses]
    )



    function handleSearch(e)
    {
        e.preventDefault();
        console.warn("Search Text =>> ",searchText.current.value)
        let temp = allGlobalCourses.filter(
            (singleCourse)=>
            { return singleCourse.courseName.match( new RegExp(searchText.current.value,"gi"))!=null }
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


        setAllShortCourses(temp)
    }

  return (
    <>
      <HeroCard
        backgroundCss={"bg-blogBannerImg p-5"}
        title={"Free Courses"}
        subTitle={"Follow up quality free courses on this platform in hindi"}
        showSocialMedia={false}
        showLogo={false}
      />
      <div>
        {/* Free Courses */}
        <div className={"pt-5 lg:pt-10 space-y-24"}>

            {/* Search Box */}
            <div className={"w-[90%] 2xl:w-[60%] mx-auto"}>
                <form onSubmit={ (e)=>{ handleSearch(e) } }>
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

                </div>
                    <div className={"mt-4 px-10"}>
                    <button
                        type={"reset"}
                        onClick={ ()=>{ setAllShortCourses(courses) } }
                        className={"cursor-pointer hover:text-red-500 transition-all ease-linear"}
                    >
                        Show all ...
                    </button>
                </div>
                </form>
            </div>



              <div>
                  {
                      ( allShortCourses.length!==0 )?

                          displayCourse(allShortCourses)
                          :
                          courseNotFoundComponent(searchText.current.value)
                  }
              </div>



        </div>
      </div>
    </>
  );
}
