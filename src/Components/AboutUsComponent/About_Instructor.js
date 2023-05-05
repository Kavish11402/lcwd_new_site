import Image from "next/image";
import sirImage from "src/Assets/Images/About_instructor/sirPic.png"
import bg1 from "src/Assets/Images/About_instructor/bg1.png"
import bgProp_left from "src/Assets/Images/About_instructor/bg2_left.png"
import bgProp_right from "src/Assets/Images/About_instructor/bg2_right.png"

export default function About_Instructor()
{
    return(
        <div className={"p-16 space-y-16"}>

            <div className={"relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100"}>

                <Image className={"-z-30 absolute -top-60 -right-80 w-[100rem]"} src={bg1} alt={"Durgesh Tiwari Image"}/>


                <Image className={"absolute top-20 -right-36 w-[48rem]"} src={sirImage} alt={"Durgesh Tiwari Image"}/>


                <div className={"h-[90vh] flex flex-col justify-center"}>

                   <div className={"px-24 mb-36 space-y-5"}>

                       <h1 className={"font-bold text-[5rem] w-fit"}>
                           Durgesh Kumar Tiwari
                       </h1>

                       <h2 className={"text-2xl w-[49rem]"}>
                           Founder Learn code with Durgesh, Corporate/Academic Trainer, Technology enthusiast
                       </h2>

                   </div>

                </div>

            </div>


            <div className={"relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100"}>

                <Image className={"-z-30 absolute top-0 -left-[27rem] w-[50rem]"} src={bgProp_left} alt={"background prop left"}/>

                <Image className={"-z-30 absolute -top-80 -right-[27rem] w-[50rem]"} src={bgProp_right} alt={"background prop right"}/>

                <div className={"h-[90vh] flex flex-col justify-center"}>

                    <p className={"font-bold text-3xl mx-auto w-[60%] leading-[4.5rem]"}>
                        Durgesh Sir is a fun loving, entertaining personality famous over the internet for his
                        teaching style and knowledge in various technologies. The way he handles the issues and
                        explains the concepts to students is commendable. He always keeps the environment lite
                        with his humor and that is what students love the most about him.
                    </p>

                </div>
            </div>


            <div className={"relative overflow-clip rounded-[3rem] shadow-lg drop-shadow-2xl bg-stone-100"}>

                <Image className={"-z-30 absolute top-0 -left-[27rem] w-[50rem]"} src={bgProp_left} alt={"background prop left"}/>

                <Image className={"-z-30 absolute -top-80 -right-[27rem] w-[50rem]"} src={bgProp_right} alt={"background prop right"}/>

                <div className={"h-[90vh] flex flex-col justify-center space-y-20"}>

                    <p className={"font-bold text-3xl mx-auto w-[60%] leading-[4.5rem]"}>
                        He is an engineering graduate having more than 6 years of experience as a corporate trainer,
                        summer trainer and faculty program trainer and also an educator. He has taught more than 10 lakhs
                        students online and offline both.

                    </p>

                    <p className={"font-bold text-3xl mx-auto w-[60%] leading-[4.5rem]"}>
                        Founder of Substring technologies and Learn code with Durgesh, Durgesh sir is a versatile personality,
                        an entrepreneur, a successful youtuber with more than 2 lakhs of subscribers, a freelancer, a
                        programmer/developer and most importantly, a continuous learner.

                    </p>

                </div>
            </div>

        </div>
    );
}