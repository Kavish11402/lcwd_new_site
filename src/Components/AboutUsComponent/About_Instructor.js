import Image from "next/image";
import sirImage from "src/Assets/Images/About_instructor/sirPic.png"


export default function About_Instructor()
{
    return(

        <div className={"rounded-3xl bg-stone-200 drop-shadow-xl mx-auto w-[93%] lg:w-[70%] p-5 lg:p-10 flex flex-col justify-center"}>


            <div className={"w-fit h-fit mx-auto rounded-full p-2 bg-gradient-to-r from-secondary-dark to-primary-dark"}>
                <div className={" mx-auto border-4 md:border-8 border-white rounded-full w-52 md:w-72 lg:w-[20rem] h-52 md:h-72 lg:h-[20rem] overflow-clip"}>
                    <Image className={"w-56 lg:w-64 mx-auto mt-6"} src={sirImage} alt={"LCWD Logo"}/>
                </div>
            </div>




            <h1 className={"mx-auto text-center font-bold text-4xl lg:text-6xl py-4 lg:py-6 bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}>
                Durgesh Kumar Tiwari
            </h1>

            <p className={"mx-auto text-center text-base lg:text-lg"}>
                Founder of <b>Learn code with Durgesh</b>, Corporate/Academic Trainer, Technology enthusiast
            </p>

            <h2 className={"mx-auto text-center font-semibold text-3xl lg:text-4xl text-slate-800 mt-6 mb-4 lg:mt-8 lg:mb-6"}>-- ABOUT --</h2>

            <div className={"p-6 border-dotted border-[5px] rounded-3xl border-secondary-medium space-y-6"}>

                <p className={"mx-auto text-justify text-md lg:text-xl"}>
                    Durgesh Sir is a fun loving, entertaining personality famous over the internet for his
                    teaching style and knowledge in various technologies. The way he handles the issues and
                    explains the concepts to students is commendable. He always keeps the environment lite
                    with his humor and that is what students love the most about him.
                </p>

                <p className={"mx-auto text-justify text-md lg:text-xl"}>
                    He is an engineering graduate having more than 6 years of experience as a corporate trainer,
                    summer trainer and faculty program trainer and also an educator. He has taught more than 10 lakhs
                    students online and offline both.
                </p>

                <p className={"mx-auto text-justify text-md lg:text-xl"}>
                    Founder of Substring technologies and Learn code with Durgesh, Durgesh sir is a versatile personality,
                    an entrepreneur, a successful youtuber with more than 2 lakhs of subscribers, a freelancer, a
                    programmer/developer and most importantly, a continuous learner.
                </p>

            </div>


        </div>

    );
}