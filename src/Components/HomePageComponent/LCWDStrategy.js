import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import writeCode from "@/Assets/Icons/writeCode.svg";
import buildSomething from "@/Assets/Icons/buildSomething.svg";
import watchVideo from "@/Assets/Icons/watchVideo.svg";

export default function LCWDStrategy()
{
  return(
      <div className={"flex flex-col justify-center py-20"}>
          {/*  */}
        <h1 className={"text-center text-2xl font-bold underline underline-offset-8 text-primary-dark mb-16 lg:text-5xl lg:mb-24 capitalize"}> We follow simple learning strategy </h1>

        <div className={"w-fit grid grid-cols-1 gap-12 mx-auto lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:gap-16 xl:gap-24"}>

            <div><ExplanationCard icon={watchVideo} title={"Watch video"} description={"The first step to learn programming is to watch video carefully and take notes."}/></div>

            <div><ExplanationCard icon={writeCode} title={"Write code"} description={"Just watching video is not enough. Now write that every single line of code and execute that. Remember, dont expect your code to run first time."}/></div>

            <div className={"lg:col-span-2 2xl:col-auto"}><ExplanationCard icon={buildSomething} title={"Build Something"} description={"Most important step is to build something. Just learning the syntax is not enough. Take some time and build something."}/></div>







        </div>
      </div>
  );
}