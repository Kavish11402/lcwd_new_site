import Image from "next/image";
import CountUp from "react-countup";


function checkNum(num)
{
    if ( Number.isInteger(num) )
        return <CountUp start={0} end={num} duration={2} delay={0.2} separator={","} decimals={0}/>

    return <CountUp start={0} end={num} duration={2} delay={0.2} separator={","} decimals={2}/>
}

export default function SocialMediaFollowers({ handleImage , handleFollowers , handleFollowersExtention , handleOtherInfo , socialMediaActiveStatus })
{
  return(

      <div className={"flex flex-col lg:flex-row justify-center py-5"}>

          <div className={"my-auto mx-auto  lg:mr-4 w-fit"}>
              <Image className={"w-12 lg:w-20"} src={handleImage} alt={"SocialMediaHandleImage"} />
          </div>

          <div className={"flex flex-col justify-center"}>
              <h1 className={"!text-black text-center font-semibold text-[1.7rem] md:text- lg:text-[3.2rem] px-6"}>
                  { socialMediaActiveStatus && checkNum(handleFollowers) }
                  {handleFollowersExtention}
              </h1>
              <p className={"text-center text-md lg:text-xl"}>{handleOtherInfo}</p>
          </div>

      </div>
  );
}