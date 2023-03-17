import SingleCourse from "@/Components/FreeCoursesComponent/SingleCourse";

export default function CoursesHub({courses})
{
  return(
      <div>
        {/* Free Courses */}
          <div className={"pt-5 lg:pt-10"}>

              <h1 className={"mb-10 lg:mb-24 text-center font-bold underline underline-offset-8 text-primary-dark text-4xl md:text-5xl lg:text-6xl"}> Our Free Courses </h1>

              <div className={"mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-4  2xl:gap-x-10 gap-y-20 mb-20"}>

                  {
                      courses.map(
                          (singleCourse)=>{
                              return(
                                  <SingleCourse
                                      key={singleCourse.id}
                                      bannerImg={singleCourse.courseBanner}
                                      bannerTittle={singleCourse.pageTitle}
                                      bannerDesc={singleCourse.pageDescription}
                                  />
                              )
                          }
                      )
                  }

              </div>

          </div>
      </div>
  );
}