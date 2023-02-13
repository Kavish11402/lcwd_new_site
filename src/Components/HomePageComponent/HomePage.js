import TopBanner from "@/Components/HomePageComponent/TopBanner";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import FreeCoursesHub from "@/Components/HomePageComponent/FreeCoursesHub";
import ReviewSection from "@/Components/HomePageComponent/ReviewSection";
import PremiumCoursesHub from "@/Components/HomePageComponent/PremiumCoursesHub";

export default function HomePage()
{
  return(
      <>
          <TopBanner/>
          {/* TODO -> Add Our Services Here */}
          <WhyLCWD/>
          <YoutubeCount/>
          <PremiumCoursesHub/>
          <FreeCoursesHub/>
          {/* TODO -> Add Students Placed Component here */}
          <ReviewSection/>
          <LCWDStrategy/>

          {/*<Top4LatestVideo/>*/}
      </>
  );
}