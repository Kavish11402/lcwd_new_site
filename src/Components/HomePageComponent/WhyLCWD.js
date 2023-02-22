import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import cardIcon from "@/Assets/Icons/icons8-presentation-100.png";

export default function WhyLCWD()
{
  return(
      <div className={"py-10 flex flex-col justify-center"}>

          <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> Why Learn Code With Durgesh ? </h1>

          <div className={"flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-20"}>

              <ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
              <ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
              <ExplanationCard icon={cardIcon} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/>

          </div>

      </div>
  );
}