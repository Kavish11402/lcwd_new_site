import TopBanner from "@/Components/HomePageComponent/TopBanner";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import FreeCourses from "@/Components/HomePageComponent/FreeCourses";
import ReviewSection from "@/Components/HomePageComponent/ReviewSection";

export default function HomePage()
{
  return(
      <>
          <TopBanner/>



          {/* TODO -> Add Our Services Here */}
          <WhyLCWD/>
          <YoutubeCount/>
          {/* TODO -> Add Premium course Component here */}
          <FreeCourses/>
          {/* TODO -> Add Students Placed Component here */}
          <ReviewSection/>
          <LCWDStrategy/>



          {/*<Top4LatestVideo/>*/}



      </>
  );
}