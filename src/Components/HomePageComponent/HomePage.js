import TopBanner from "@/Components/HomePageComponent/TopBanner";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import Top4LatestVideo from "@/Components/HomePageComponent/Top4LatestVideo";
import FreeCourses from "@/Components/HomePageComponent/FreeCourses";

export default function HomePage()
{
  return(
      <>
          <TopBanner/>
          <WhyLCWD/>
          <Top4LatestVideo/>
          <YoutubeCount/>
          <FreeCourses/>
          <LCWDStrategy/>
      </>
  );
}