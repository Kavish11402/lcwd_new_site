import SingleCourse from "@/Components/FreeCoursesComponent/SingleCourse";

export default function CoursesHub()
{
  return(
      <div>
        {/* Free Courses */}
          <div className={"pt-5 lg:pt-10"}>

              <h1 className={"mb-10 lg:mb-16 text-center font-bold underline underline-offset-8 text-primary-dark text-4xl md:text-5xl lg:text-6xl"}> Our Free Courses </h1>

              <div className={"mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-9 lg:gap-x-32 gap-y-20 mb-20"}>

                  <SingleCourse/>  <SingleCourse/>  <SingleCourse/>
                  <SingleCourse/>  <SingleCourse/>  <SingleCourse/>
                  <SingleCourse/>  <SingleCourse/>  <SingleCourse/>
                  <SingleCourse/>  <SingleCourse/>


              </div>

          </div>
      </div>
  );
}