import CourseCard from "@/Components/HomePageComponent/SingleReuseableComponents/CourseCard";
import Link from "next/link";

export default function FreeCoursesHub({top3Courses})
{
    let flag = 1
  return(
      <div className={"py-10"}>

          <h1 className={"mb-10 lg:mb-16 text-center font-bold underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl"}> Top Free Courses </h1>

          <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 2xl:gap-x-28 gap-y-12 w-fit mx-auto lg:px-10"}>


              {
                  top3Courses.map(
                      (singleCourse) => {
                          if (singleCourse.hide===false)
                          {
                              if(flag<=2)
                              {
                                  flag++
                                  return(
                                      <CourseCard
                                          key={singleCourse.id}
                                          data = {"api"}
                                          bannerImage={singleCourse.courseBanner}
                                          bannerTitle={singleCourse.pageTitle}
                                          bannerDescription={singleCourse.pageDescription}
                                          fullLink={"https://www.youtube.com/watch?v=ekDGDYLEw7Y"}
                                          activeStatus={true}
                                      />
                                  )
                              }
                              return (
                                  <div key={singleCourse.id} className={"lg:col-span-2 xl:col-span-1 lg:flex lg:flex-row lg:justify-center xl:inline"}>
                                      <CourseCard
                                          key={singleCourse.id}
                                          data = {"api"}
                                          bannerImage={singleCourse.courseBanner}
                                          bannerTitle={singleCourse.pageTitle}
                                          bannerDescription={singleCourse.pageDescription}
                                          fullLink={"https://www.youtube.com/watch?v=ekDGDYLEw7Y"}
                                          activeStatus={true}
                                      />
                                  </div>
                              )
                          }

                      }
                  )
              }


          </div>

          <div className={"flex flex-row justify-center lg:justify-end lg:pr-14 mt-12"}>


              <Link href={'/courses'}>
                  <h1 className={"bg-secondary-dark hover:bg-secondary-medium transition-all ease-in-out rounded-md py-2 text-center text-xs font-semibold text-white px-3 lg:px-10 lg:text-md"} >
                      More Free Courses..
                  </h1>
              </Link>

          </div>

      </div>
  );
}