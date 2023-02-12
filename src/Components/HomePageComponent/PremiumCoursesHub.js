import CourseCard from "@/Components/HomePageComponent/SingleReuseableComponents/CourseCard";
import bannerBg from "@/Assets/Images/banner_bg.jpg";
import Link from "next/link";

export default function PremiumCoursesHub()
{
  return(

      <div className={"py-10"}>

        <h1 className={"mb-10 lg:mb-16 text-center font-bold underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl"}> Our Premium Courses </h1>

        {/* TODO -> Add Mapping function of each video here */}
        <div className={"mb-9 lg:mb-12 flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-40"}>

          <CourseCard
              bannerImage={bannerBg}
              bannerTitle={"Sending Attachment with email using Java and Gmail in simple way | Hindi"}
              bannerDescription={"In this video, we will be learning how to send an email with an attachment using Java and Gmail in Hindi. We will be using the JavaMail API library to accomplish this task."}
              bannerVideoID={"ekDGDYLEw7Y"}
          />

          <CourseCard
              bannerImage={bannerBg}
              bannerTitle={"Sending Attachment with email using Java and Gmail in simple way | Hindi"}
              bannerDescription={"In this video, we will be learning how to send an email with an attachment using Java and Gmail in Hindi. We will be using the JavaMail API library to accomplish this task."}
              bannerVideoID={"ekDGDYLEw7Y"}
          />

          <CourseCard
              bannerImage={bannerBg}
              bannerTitle={"Sending Attachment with email using Java and Gmail in simple way | Hindi"}
              bannerDescription={"In this video, we will be learning how to send an email with an attachment using Java and Gmail in Hindi. We will be using the JavaMail API library to accomplish this task."}
              bannerVideoID={"ekDGDYLEw7Y"}
          />

        </div>

        <div className={"flex flex-row justify-center lg:justify-end lg:pr-14"}>
          <Link href={'/FreeCourses'}>
            <h1 className={"bg-secondary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-xs font-semibold text-black px-3 lg:px-10 lg:text-md"} >
              More Premium Courses..
            </h1>
          </Link>
        </div>

      </div>

  );
}