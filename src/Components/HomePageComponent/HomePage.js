import TopBanner from "@/Components/HomePageComponent/TopBanner";
import Top4LatestVideo from "@/Components/HomePageComponent/Top4LatestVideo";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import FreeCourses from "@/Components/HomePageComponent/FreeCourses";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import LCWDStrategy from "@/Components/HomePageComponent/LCWDStrategy";

export default function HomePage()
{
  return(
      <div>
          <TopBanner/>
          <WhyLCWD/>
          <Top4LatestVideo/>
          <YoutubeCount/>
          <FreeCourses/>
          {/*<SubscribeShow/>*/}
          <LCWDStrategy/>
      </div>
  );
}