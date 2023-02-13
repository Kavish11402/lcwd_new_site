import HeroCard from "@/Components/MasterTemplets/HeroCard";
import ReviewCard from "@/Components/HomePageComponent/SingleReuseableComponents/ReviewCard";

import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp"

export default function ReviewHub()
{
  return(
    <div>

      <HeroCard useCase={"bg-reviewBannerImg"} title={"Our Reviews"} subTitle={"Reviews given by out Students"} showSocialMedia={false} showLogo={true}/>

        <div className={"flex flex-col"}>

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

            <ReviewCard
                ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                ReviewerImg={durgesh_sir_DP}
                ReviewerName={"Kavish Mathur"}
                ReviewerDesignation={"Intern"}
                RatingInInteger={3}
                marginFor={"reviewPage"}
            />

        </div>


    </div>
  );
}