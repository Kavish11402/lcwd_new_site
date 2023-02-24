import React from "react";
import CoursesHub from "@/Components/FreeCoursesComponent/CoursesHub";
import Head from "next/head";

export default function courses()
{
  return(
      <>
          <Head>
              <title>
                  Free Programming Courses in Hindi | Learn Code With Durgesh
              </title>
              <meta name={'keywords'}
                    content={'free popular courses,free courses learn code with durgesh, programming tutorial in hindi, free coding courses in hindi, learn programming in hindi, best tutorial for learning coding'}/>

              <meta name={'description'}
                    content={'Free and Popular courses learn code with durgesh'}/>
          </Head>
          <CoursesHub/>
      </>
  );
}