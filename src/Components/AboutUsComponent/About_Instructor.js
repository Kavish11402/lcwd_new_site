import Image from "next/image";
import sirImage from "src/Assets/Images/About_instructor/sirPic.png"
import bg1 from "src/Assets/Images/About_instructor/bg1.png"
import bgProp_left from "src/Assets/Images/About_instructor/bg2_left.png"
import bgProp_right from "src/Assets/Images/About_instructor/bg2_right.png"

export default function About_Instructor()
{
    return(
        <div className={"p-8 md:p-14 xl:p-16 space-y-16"}>



            <div className={"flex flex-col justify-center relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100 4xl:w-[110rem] 4xl:mx-auto"}>

                <Image className={"hidden lg:block -z-30 absolute -top-60 lg:-right-44 xl:-right-80 w-[100rem]"} src={bg1} alt={"background"}/>


                <Image className={"mx-auto xl:absolute xl:top-20 4xl:top-10 xl:right-0 w-[18rem] sm:w-[24rem] xl:w-[35rem] 4xl:w-[40rem]"} src={sirImage} alt={"Durgesh Tiwari Image"}/>


                <div className={"h-[24rem] xl:h-[54rem] flex flex-col justify-center"}>

                   <div className={"p-0 xl:px-16 2xl:px-24 space-y-5"}>

                       <h1 className={"mx-auto xl:mx-0 text-center font-bold text-4xl sm:text-6xl xl:text-[3.4rem] 2xl:text-[5rem] w-fit p-2"}>
                           Durgesh Kumar Tiwari
                       </h1>

                       <h2 className={"text-justify mx-auto xl:mx-0 text-lg sm:text-xl xl:text-2xl w-[18.5rem] sm:w-[30rem] xl:w-[32rem] 2xl:w-[49rem] p-2"}>
                           Founder Learn code with Durgesh, Corporate/Academic Trainer, Technology enthusiast
                       </h2>

                   </div>

                </div>

            </div>

            <div className={"relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100 4xl:w-[110rem] 4xl:mx-auto"}>

                <Image className={"hidden lg:block -z-30 absolute top-0 lg:-left-[24rem] xl:-left-[27rem] lg:w-[40rem] xl:w-[50rem]"} src={bgProp_left} alt={"background prop left"}/>

                <Image className={"hidden lg:block -z-30 absolute lg:-top-64 xl:-top-80 -right-[27rem] lg:w-[40rem] xl:w-[50rem]"} src={bgProp_right} alt={"background prop right"}/>

                <div className={"h-[30rem] md:h-[35rem] xl:h-[54rem] flex flex-col justify-center"}>

                    <p className={"font-medium text-lg md:text-2xl lg:text-3xl mx-auto w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-[60%] md:leading-[3rem] lg:leading-[3rem] xl:leading-[4.5rem] text-justify"}>
                        Durgesh Sir is a fun loving, entertaining personality famous over the internet for his
                        teaching style and knowledge in various technologies. The way he handles the issues and
                        explains the concepts to students is commendable. He always keeps the environment lite
                        with his humor and that is what students love the most about him.
                    </p>

                </div>
            </div>

            <div className={"relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100 4xl:w-[110rem] 4xl:mx-auto"}>

                <Image className={"hidden lg:block -z-30 absolute top-0 lg:-left-[29rem] xl:-left-[27rem] lg:w-[46rem] xl:w-[50rem]"} src={bgProp_left} alt={"background prop left"}/>

                <Image className={"hidden lg:block -z-30 absolute lg:-top-10 xl:-top-52 lg:-right-[27rem] -right-[30rem] lg:w-[40rem] xl:w-[50rem]"} src={bgProp_right} alt={"background prop right"}/>


                {/* h-[30rem] md:h-[35rem] xl:h-[54rem] flex flex-col justify-center */}
                <div className={"h-[40rem] md:h-[50rem] xl:h-[54rem] flex flex-col justify-center space-y-20"}>

                    {/* font-bold text-lg md:text-2xl lg:text-3xl mx-auto w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-[60%] md:leading-[3rem] lg:leading-[3rem] xl:leading-[4.5rem] text-justify */}
                    <p className={"font-medium text-lg md:text-2xl lg:text-3xl mx-auto w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-[60%] text-justify md:leading-[3rem] lg:leading-[3rem] xl:leading-[4rem]"}>
                        He is an engineering graduate having more than 6 years of experience as a corporate trainer,
                        summer trainer and faculty program trainer and also an educator. He has taught more than 10 lakhs
                        students online and offline both.

                    </p>

                    <p className={"font-medium text-lg md:text-2xl lg:text-3xl mx-auto w-[20rem] sm:w-[30rem] md:w-[40rem] xl:w-[60%] text-justify md:leading-[3rem] lg:leading-[3rem] xl:leading-[4rem]"}>
                        Founder of Substring technologies and Learn code with Durgesh, Durgesh sir is a versatile personality,
                        an entrepreneur, a successful youtuber with more than 2 lakhs of subscribers, a freelancer, a
                        programmer/developer and most importantly, a continuous learner.

                    </p>

                </div>
            </div>


        </div>
    );
}