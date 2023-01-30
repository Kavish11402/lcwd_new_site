import Image from "next/image";

export default function SocialMediaFollowers({ handleImage , handleFollowers , handleOtherInfo })
{
  return(

      <div className={"flex flex-row py-5"}>

          <div className={"flex flex-col justify-center"}>
              <Image className={"w-20 mr-3"} src={handleImage} alt={"SocialMediaHandleImage"} />
          </div>


          <div className={"flex flex-col justify-center"}>

              <h1 className={"!text-black text-center font-semibold text-[3.2rem] px-6"}>{handleFollowers}</h1>

              <p className={"text-center text-xl"}>{handleOtherInfo}</p>

          </div>

      </div>

  );
}