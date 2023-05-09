import HeroCard from "@/Components/MasterTemplets/HeroCard";
import SingleCourse from "@/Components/CoursesComponent/SingleCourse";
import premiumCourseBanner1 from "@/Assets/Images/premiumCourseBanner1.png";
import premiumCourseBanner2 from "@/Assets/Images/premiumCourseBanner2.png";
import premiumCourseBundle1 from "@/Assets/Images/premiumCourseBunddle1.png";


export default function PremiumCoursesHub()
{
  return(

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
            {/*<div className={"w-[90%] 2xl:w-[60%] mx-auto"}>
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
            </div>*/}



            <div>


                <div className={"mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-10  2xl:gap-x-10 gap-y-20 mb-20"} >


                    <SingleCourse
                        data={"hardcoded"}
                        courseUrl={"https://courses.learncodewithdurgesh.com/learn/Master-Spring-Boot-With-Project"}
                        bannerImg={premiumCourseBanner1}
                        bannerTittle={"Master Spring Boot with Real time Project"}
                        bannerDesc={"In this course, you will learn everything you need to know about developing applications with Spring Boot, the popular Java framework for building microservices and web applications. (Backend with Java)"}
                    />

                    <SingleCourse
                        data={"hardcoded"}
                        courseUrl={"https://courses.learncodewithdurgesh.com/learn/Ecommerce-using-React-js"}
                        bannerImg={premiumCourseBanner2}
                        bannerTittle={"Complete Ecommerce Project using  Rect JS (Electronic Store)"}
                        bannerDesc={"In this project we are going to create E Commerce project using React JS. This is a project-based front-end course in Hindi."}
                    />

                    <SingleCourse
                        data={"hardcoded"}
                        courseUrl={"https://courses.learncodewithdurgesh.com/learn/Fullstack-React-Spring-Boot"}
                        bannerImg={premiumCourseBundle1}
                        bannerTittle={"Full Stack React + Spring Boot"}
                        bannerDesc={"This bundle contain two important front-end and backed course . This is full stack bundle containing full eCommerce project using spring boot and reacts step by step."}
                    />


                </div>


            </div>



          </div>
        </div>
      </>

  );
}