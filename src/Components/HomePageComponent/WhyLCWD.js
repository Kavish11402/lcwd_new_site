import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";

import cardIcon from "@/Assets/Icons/icons8-presentation-100.png";

export default function WhyLCWD()
{
  return(
      <div className={"flex flex-col justify-center py-20"}>

          <h1 className={"text-center text-2xl font-bold underline underline-offset-8 text-primary-dark mb-16 lg:text-5xl lg:mb-24"}> Why Learn Code With Durgesh ? </h1>

          <div className={"w-fit grid grid-cols-1 gap-12 mx-auto lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:gap-16 xl:gap-24"}>

              <div><ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/></div>
              <div><ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/></div>
              <div className={"lg:col-span-2 2xl:col-auto"}><ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/></div>


          </div>
      </div>
  );
}