import TopBanner from "@/Components/HomePageComponent/TopBanner";
import Top4LatestVideo from "@/Components/HomePageComponent/Top4LatestVideo";
import WhyLCWD from "@/Components/HomePageComponent/WhyLCWD";
import SubscribeShow from "@/Components/HomePageComponent/SubscribeShow";
import FreeCourses from "@/Components/HomePageComponent/FreeCourses";
import YoutubeCount from "@/Components/HomePageComponent/YoutubeCount";
import BottomWhyLCWD from "@/Components/HomePageComponent/BottomWhyLCWD";

export default function HomePage()
{
  return(
      <div>
          <TopBanner/>
          <WhyLCWD/>
          <Top4LatestVideo/>
          <YoutubeCount/>
          <FreeCourses/>
          <SubscribeShow/>
          <BottomWhyLCWD/>
      </div>
  );
}