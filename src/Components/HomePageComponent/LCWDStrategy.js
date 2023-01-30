import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import writeCode from "@/Assets/Icons/writeCode.svg";
import buildSomething from "@/Assets/Icons/buildSomething.svg";
import watchVideo from "@/Assets/Icons/watchVideo.svg";

export default function LCWDStrategy()
{
  return(
      <div className={"flex flex-col justify-center py-20"}>
        <h1 className={"text-center text-5xl font-bold underline underline-offset-8 text-primary-dark mb-24 capitalize"}> We follow simple learning strategy </h1>
        <div className={"w-fit grid grid-cols-3 gap-24 mx-auto"}>
          <ExplanationCard icon={watchVideo} title={"Watch video"} description={"The first step to learn programming is to watch video carefully and take notes."}/>
          <ExplanationCard icon={writeCode} title={"Write code"} description={"Just watching video is not enough. Now write that every single line of code and execute that. Remember, dont expect your code to run first time."}/>
          <ExplanationCard icon={buildSomething} title={"Build Something"} description={"Most important step is to build something. Just learning the syntax is not enough. Take some time and build something."}/>
        </div>
      </div>
  );
}