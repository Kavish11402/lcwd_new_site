import Image from "next/image";

export default function SocialMediaFollowers({ handleImage , handleFollowers , handleOtherInfo })
{
  return(

      <div className={"flex flex-row justify-center py-5"}>

          <div className={"flex flex-col justify-center"}>
              <Image className={"w-12 lg:w-20 mr-3"} src={handleImage} alt={"SocialMediaHandleImage"} />
          </div>

          <div className={"flex flex-col justify-center"}>
              <h1 className={"!text-black text-center font-semibold text-[1.7rem] lg:text-[3.2rem] px-6"}>{handleFollowers}</h1>
              <p className={"text-center text-md lg:text-xl"}>{handleOtherInfo}</p>
          </div>

      </div>
  );
}