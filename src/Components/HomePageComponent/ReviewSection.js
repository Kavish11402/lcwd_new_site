import ReviewCard from "@/Components/HomePageComponent/SingleReuseableComponents/ReviewCard";
import durgesh_sir_DP from "@/Assets/Images/durgesh_sir.webp"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



export default function ReviewSection()
{

    return(
        <div className={"py-10"}>

            <h1 className={"text-center font-bold underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl"}> Recent Reviews </h1>


            <Slider className={"my-6 w-[97%] mx-auto"}
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
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={4}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={2}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={4}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={5}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={1}
                    marginFor={"homePageReview"}
                />

                <ReviewCard
                    ReviewMsg={"It was a great experience having love Durgesh sir as a mentor. Thank you sir for teaching DSA concepts in a graspable manner and supporting us throughout the course"}
                    ReviewerImg={durgesh_sir_DP}
                    ReviewerName={"Kavish Mathur"}
                    ReviewerDesignation={"Employee"}
                    RatingInInteger={3}
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