import bannerBg from "@/Assets/Images/banner_bg.jpg";
import CourseCard from "@/Components/HomePageComponent/SingleReuseableComponents/CourseCard";

export default function Top4LatestVideo()
{

    return(
        <div>

            <div>
                <h1 className={"text-center text-3xl lg:text-5xl font-bold underline underline-offset-8 pt-7 text-primary-dark"}> Latest Videos </h1>
            </div>

            <div className={"flex flex-col lg:flex-row justify-center space-y-5 py-12 lg:space-x-12 lg:space-y-0"}>

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

                <CourseCard
                    bannerImage={bannerBg}
                    bannerTitle={"Sending Attachment with email using Java and Gmail in simple way | Hindi"}
                    bannerDescription={"In this video, we will be learning how to send an email with an attachment using Java and Gmail in Hindi. We will be using the JavaMail API library to accomplish this task."}
                    bannerVideoID={"ekDGDYLEw7Y"}
                />

            </div>

        </div>
    );
}