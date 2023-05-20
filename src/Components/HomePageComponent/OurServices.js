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

                <ExplanationCard
                    icon={corporate_training}
                    title={"Corporate Training"}
                    description={"We are one of the learning corporate training providers. We provide training to employees of IT company on different tools and technologies like C, java, C++, Python, Javascript, Spring Boot, Django, Machine learning etc."}
                />

                <ExplanationCard
                    icon={seminar}
                    title={"Seminar"}
                    description={"We provide technical seminar on trending topics to introduce technologies. Seminar is very much important for enhance the knowledge about tech."}
                />

                <ExplanationCard
                    icon={developmentIcon}
                    title={"Development"}
                    description={"We develop websites and android applications to solve client problems. We already worked with hundreds of client to make their business profitable."}
                />

                <ExplanationCard
                    icon={collage_training}
                    title={"Collage Training"}
                    description={"We provide college training for both faculties and students. We already trained lakhs of student online as well as offline. We visited many colleges and institutes to motivate peoples to learn new technologies."}
                />

            </div>

        </div>
    );
}