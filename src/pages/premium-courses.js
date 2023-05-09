import Head from "next/head";
import PremiumCoursesHub from "@/Components/CoursesComponent/PremiumCoursesHub";

export default function premiumCourses()
{
  return(
      <>
        <Head>
          <title>{"Premium Courses | Learn Code With Durgesh"}</title>
          <meta
              name={"keywords"}
              content={
                "premium course,top free premium course for learners"
              }
          />

          <meta
              name={"description"}
              content={"premium courses learn code with durgesh"}
          />
        </Head>
        <div>
            <PremiumCoursesHub/>
        </div>
      </>
  );
}