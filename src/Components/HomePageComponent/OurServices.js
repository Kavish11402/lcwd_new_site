import developmentIcon from "@/Assets/Icons/development.png"
import corporate_training from "@/Assets/Icons/corporate_training.png"
import collage_training from "@/Assets/Icons/collage_Training.png"
import seminar from "@/Assets/Icons/seminar.png"
import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";


export default function OurServices()
{
    return(
        <div className={"py-10 flex flex-col justify-center"}>

            <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> Services We Provide </h1>

            <div className={"grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-28 gap-y-12 w-fit mx-auto "}>

                <ExplanationCard icon={corporate_training} title={"Corporate Training"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
                <ExplanationCard icon={seminar} title={"Seminar"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
                <ExplanationCard icon={developmentIcon} title={"Development"} description={"Each and every concepts are well explained so that you can learn effectively."}/>
                <ExplanationCard icon={collage_training} title={"Collage Training"} description={"Each and every concepts are well explained so that you can learn effectively."}/>

            </div>

        </div>
    );
}