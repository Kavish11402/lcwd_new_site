import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import writeCode from "@/Assets/Icons/writeCode.svg";
import buildSomething from "@/Assets/Icons/buildSomething.svg";
import watchVideo from "@/Assets/Icons/watchVideo.svg";

export default function LCWDStrategy()
{
  return(
      <div className={"flex flex-col justify-center py-10 mb-24"}>

          <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> Why Learn Code With Durgesh ? </h1>

          <div className={"flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-20"}>

              <ExplanationCard icon={watchVideo} title={"Watch video"} description={"The first step to learn programming is to watch video carefully and take notes."}/>

              <ExplanationCard icon={writeCode} title={"Write code"} description={"Just watching video is not enough. Now write that every single line of code and execute that. Remember, dont expect your code to run first time."}/>

              <ExplanationCard icon={buildSomething} title={"Build Something"} description={"Most important step is to build something. Just learning the syntax is not enough. Take some time and build something."}/>

        </div>

      </div>
  );
}