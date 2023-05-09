import Head from "next/head";
import PremiumCoursesHub from "@/Components/CoursesComponent/PremiumCoursesHub";

export default function premiumCourses()
{
  return(
      <>
        <Head>
          <title>{"Free Courses | Learn Code With Durgesh"}</title>
          <meta
              name={"keywords"}
              content={
                "free popular courses,free courses learn code with durgesh, programming tutorial in hindi, free coding courses in hindi, learn programming in hindi, best tutorial for learning coding"
              }
          />

          <meta
              name={"description"}
              content={"Free and Popular courses learn code with durgesh"}
          />
        </Head>
        <div>
            <PremiumCoursesHub/>
        </div>
      </>
  );
}