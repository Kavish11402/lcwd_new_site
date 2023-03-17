import TopBanner from "@/Components/HomePageComponent/TopBanner";
import OurServices from "@/Components/HomePageComponent/OurServices";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import PremiumCoursesHub from "@/Components/HomePageComponent/PremiumCoursesHub";
import FreeCoursesHub from "@/Components/HomePageComponent/FreeCoursesHub";
import StudentsPlaced from "@/Components/HomePageComponent/StudentsPlaced";
import ReviewSection from "@/Components/HomePageComponent/ReviewSection";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";
import {topFreeCourses} from "@/Api_Services/apiServices";


export default function index({top3Courses})
{
    return(
        <>
            <TopBanner/>
            <OurServices/>
            <WhyLCWD/>
            <YoutubeCount/>
            <PremiumCoursesHub/>
            <FreeCoursesHub top3Courses={top3Courses} />
            <StudentsPlaced/>
            <ReviewSection/>
            <LCWDStrategy/>
          </>
      );
}

export async function getServerSideProps(context)
{
    const data = await topFreeCourses();
    data.sort( (obj1 , obj2) => { return obj1.order - obj2.order } )

    return {
        props: { top3Courses : data.slice(0,3) }, // will be passed to the page component as props
    };
}