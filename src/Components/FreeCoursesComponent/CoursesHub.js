import SingleCourse from "@/Components/FreeCoursesComponent/SingleCourse";
import HeroCard from "../MasterTemplets/HeroCard";
export default function CoursesHub({ courses }) {
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
        <div className={"pt-5 lg:pt-10"}>
          <div
            className={
              "mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-4  2xl:gap-x-10 gap-y-20 mb-20"
            }
          >
            {courses.map((singleCourse) => {
              return (
                <SingleCourse
                  key={singleCourse.id}
                  courseUrl={singleCourse.courseUrl}
                  bannerImg={singleCourse.courseBanner}
                  bannerTittle={singleCourse.pageTitle}
                  bannerDesc={singleCourse.pageDescription}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
