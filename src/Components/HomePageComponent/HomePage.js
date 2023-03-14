import TopBanner from "@/Components/HomePageComponent/TopBanner";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import FreeCoursesHub from "@/Components/HomePageComponent/FreeCoursesHub";
import ReviewSection from "@/Components/HomePageComponent/ReviewSection";
import PremiumCoursesHub from "@/Components/HomePageComponent/PremiumCoursesHub";
import StudentsPlaced from "@/Components/HomePageComponent/StudentsPlaced";
import OurServices from "@/Components/HomePageComponent/OurServices";

export default function HomePage()
{
  return(
      <>
          <TopBanner/>
          <OurServices/>
          <WhyLCWD/>
          <YoutubeCount/>
          <PremiumCoursesHub/>
          <FreeCoursesHub/>
          <StudentsPlaced/>
          <ReviewSection/>
          <LCWDStrategy/>

      </>
  );
}