import ReviewCard from "@/Components/HomePageComponent/SingleReuseableComponents/ReviewCard";
import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function ReviewSection()
{

    return(
        <div className={"py-20"}>



            <div> <h1 className={"text-center font-bold pb-10 underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl pt-7"}> Recent Reviews </h1> </div>

            <Slider
                slidesToShow={2}
                autoplay={true}
                speed={1500}
                autoplaySpeed={5000}
                responsive={
                    [
                        {  breakpoint: 480, settings: { slidesToShow: 1 } },
                        { breakpoint: 768, settings: { slidesToShow: 1 } }
                    ]} >


                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={4}
                />



                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={2}
                />



                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={4}
                />



                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={5}
                />



                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={1}
                />



                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={3}
                />



            </Slider>

            <div className={"flex flex-row justify-end pr-14"}>

                <Link href={'/'}>
                    <h1 className={"bg-primary-medium hover:bg-amber-300 transition-all ease-in-out rounded-md py-2 text-center text-md font-semibold text-zinc-600 lg:px-16 lg:text-xl"} >
                        More Reviews..
                    </h1>
                </Link>

            </div>






        </div>
    );
}