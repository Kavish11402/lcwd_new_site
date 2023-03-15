import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";

import writeCode from "@/Assets/Icons/writeCode.png";
import buildSomething from "@/Assets/Icons/buildSomething.png";
import watchVideo from "@/Assets/Icons/watchVideo.png";

export default function LCWDStrategy()
{
  return(

    <div className={"py-10 flex flex-col justify-center"}>

        <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> We follow simple learning strategy </h1>

        <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 2xl:gap-x-28  gap-y-12 w-fit mx-auto lg:px-10"}>

            <ExplanationCard icon={watchVideo} title={"Watch video"} description={"The first step to learn programming is to watch video carefully and take notes."}/>
            <ExplanationCard icon={writeCode} title={"Write code"} description={"Just watching video is not enough. Now write that every single line of code and execute that. Remember, dont expect your code to run first time."}/>

            <div className={"lg:col-span-2 xl:col-span-1 lg:flex lg:flex-row lg:justify-center xl:inline"}>
                <ExplanationCard icon={buildSomething} title={"Build Something"} description={"Most important step is to build something. Just learning the syntax is not enough. Take some time and build something."}/>
            </div>

        </div>

    </div>
  );
}