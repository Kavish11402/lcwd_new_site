import ReviewCard from "@/Components/HomePageComponent/SingleReuseableComponents/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



export default function ReviewSection()
{

    return(
        <div className={"py-10"}>

            <h1 className={"text-center font-bold underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl"}> Recent Reviews </h1>


            <Slider className={"my-6 w-[97%] overflow-clip mx-auto"}
                    slidesToShow={ 2 }
                    autoplay={true}
                    speed={1500}
                    autoplaySpeed={5000}
                    responsive=
                        {
                            [
                                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                                { breakpoint: 1023, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                            ]
                        }
            >

                <ReviewCard
                    ReviewMsg={"Hi Sir, I completed this course with project, you have provided awesome contents on this course. Thank you so much.... please bring for this frontEnd course from scratch in ReactJs."}
                    ReviewerName={"Vithal Nagappa Nivargi"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"Excellent teaching. I really enjoyed this course and the format it was presented in. In-depth concepts of spring boot & micros Api_Services have been clearly explained. The concepts were explained in a very detailed way using real-world examples. Thanks for this beautiful course."}
                    ReviewerName={"Chandrashekhar Sharnagat"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={3}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"Best Course👌👌👌 जीसको भी spring SpringBoot सिखना होगा durgesh sir से ही सिखे.👍 आसन भाषा मे पढायी है सब चिझे बेहेतरीन कोर्से❤‍🔥☝🏻🔥"}
                    ReviewerName={"Rakesh Kawade"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"I learn lots of thing by this course. concept are very depth on spring boot. Thanks"}
                    ReviewerName={"Vikash Mishra"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"Trainer is very friendly with all of us which is very great as we are not hesitating to ask any doubts which makes this training complete in a very cool way. Thanks for the  great  effort you put to explain all the things in a very clear and concise way."}
                    ReviewerName={"Afjal Karim Ansari"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"Thank you so much sir, you have covered a lot of topics and continuously providing us with new other topics. Since I am a new learner, I found your videos and this batch very helpful. Your detailed explanation and patience are your strength, keep it up! Best wishes to you and your team!"}
                    ReviewerName={"Pinke.chowdhury"}
                    ReviewerDesignation={"Student"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

            </Slider>

            <div className={"flex flex-row justify-center lg:justify-end lg:pr-14"}>

                <Link href={'/Reviews'}>
                    <h1 className={"bg-secondary-dark hover:bg-secondary-medium transition-all ease-in-out rounded-md py-2 text-center text-xs font-semibold text-white px-3 lg:px-10 lg:text-md"} >
                        More Reviews..
                    </h1>
                </Link>

            </div>

        </div>
    );
}