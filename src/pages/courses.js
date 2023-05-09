import React from "react";
import FreeCoursesHub from "@/Components/CoursesComponent/FreeCoursesHub";
import Head from "next/head";
import { getFreeCourses } from "@/Api_Services/apiServices";

export default function courses({ courses }) {
  return (
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
        <FreeCoursesHub courses={courses} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await getFreeCourses();

  return {
    props: { courses: data }, // will be passed to the page component as props
  };
}
