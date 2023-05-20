import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import bestExplanation from "@/Assets/Icons/businessman.png";
import qualityContent from "@/Assets/Icons/content.png";
import languages from "@/Assets/Icons/languages.png";
export default function WhyLCWD()
{
  return(
      <div className={"py-10 flex flex-col justify-center"}>

          <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> Why Learn Code With Durgesh ? </h1>

          {/*<div className={"flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-20"}>

              <ExplanationCard icon={languages} title={"Courses In Hindi"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
              <ExplanationCard icon={qualityContent} title={"Quality Content"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
              <ExplanationCard icon={bestExplanation} title={"Best Explanation"} description={"Each and every concepts are well explained so that you can learn effectively."}/>

          </div>*/}


          <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 2xl:gap-x-28 gap-y-12 w-fit mx-auto lg:px-10"}>

              <ExplanationCard
                  icon={languages}
                  title={"Courses In Hindi"}
                  description={"Our courses is in Hindi language. Some times we mix hindi and english to make our learners understand."}
              />

              <ExplanationCard
                  icon={qualityContent}
                  title={"Quality Content"}
                  description={"We focus on quality of content. Our moto is to provide quality education at very affordable price."}
              />


              <div className={"lg:col-span-2 xl:col-span-1 lg:flex lg:flex-row lg:justify-center xl:inline"}>
                  <ExplanationCard
                      icon={bestExplanation}
                      title={"Best Explanation"}
                      description={"We always take example for make learner understand the concepts and topics. We always look for best explanation."}
                  />
              </div>

          </div>


      </div>
  );
}