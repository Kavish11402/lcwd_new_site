import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ReviewCard from "@/Components/HomePageComponent/SingleReuseableComponents/ReviewCard";

export default function ReviewHub()
{
  return(
    <div>

      <HeroCard backgroundCss={"bg-reviewBannerImg"} title={"Our Reviews"} subTitle={"Reviews given by out Students"} showSocialMedia={false} showLogo={true}/>

        <div className={"flex flex-col"}>

            <ReviewCard
                ReviewMsg={"Hi Sir, I completed this course with project, you have provided awesome contents on this course. Thank you so much.... please bring for this frontEnd course from scratch in ReactJs."}
                ReviewerName={"Vithal Nagappa Nivargi"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Excellent teaching. I really enjoyed this course and the format it was presented in. In-depth concepts of spring boot & micros Api_Services have been clearly explained. The concepts were explained in a very detailed way using real-world examples. Thanks for this beautiful course."}
                ReviewerName={"Chandrashekhar Sharnagat"}
                ReviewerDesignation={"Student"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Nice course, lots of content is provided"}
                ReviewerName={"Aritra Khatua"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Best Course👌👌👌 जीसको भी spring SpringBoot सिखना होगा durgesh sir से ही सिखे.👍 आसन भाषा मे पढायी है सब चिझे बेहेतरीन कोर्से❤‍🔥☝🏻🔥"}
                ReviewerName={"Rakesh Kawade"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"I learn lots of thing by this course. concept are very depth on spring boot. Thanks"}
                ReviewerName={"Vikash Mishra"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Trainer is very friendly with all of us which is very great as we are not hesitating to ask any doubts which makes this training complete in a very cool way. Thanks for the  great  effort you put to explain all the things in a very clear and concise way."}
                ReviewerName={"Afjal Karim Ansari"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Best course with clear explanation in easy way to understand the spring framework"}
                ReviewerName={"Pooja Yadav"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Thank you so much sir, you have covered a lot of topics and continuously providing us with new other topics. Since I am a new learner, I found your videos and this batch very helpful. Your detailed explanation and patience are your strength, keep it up! Best wishes to you and your team!"}
                ReviewerName={"Pinke.chowdhury"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"This Course contain excellent explanation of concept."}
                ReviewerName={"Amar bharati"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Superb sir love to take every course of yours Your knowledge and teaching is awesome"}
                ReviewerName={"Anant7856"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"The way to teach I don't think someone can cover content like you. Your explanation is crisp clear and up to the mark .Anyone easily understood all the concept. I don't have words too explain the ocean of your knowledge you have solution for every problem and The person from Non IT background also can easily grasp the things by watching your YouTube videos .I crack my interview  and selected in reputed banking domain company by watching your videos only sir. You are GOD of java for us. I don't have words to say thank you to you but I wish you got millions of subscribers and may you spread this knowledge of ocean all over the keen learners... Having best wishes from all of us....Happy Coding Durgesh Sir :):)"}
                ReviewerName={"Shraddha"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"Explained in very simple way.. Really helpful to learn backend completely.. Thank you sir"}
                ReviewerName={"Vaibhav"}
                ReviewerDesignation={"Student"}
                RatingInInteger={5}
                marginFor={"reviewPage"}
            />

        </div>

    </div>
  );
}