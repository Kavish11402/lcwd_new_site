import Image from "next/image";
import CompanyCircle from "@/Assets/Images/CompanyCircle.png"
import lcwdLogo from "../../Assets/Logos/lcwd_logo.png"

export default function StudentsPlaced()
{
  return(
      <div className={"py-10 flex flex-col xl:flex-row justify-around"}>

          <div className={"flex flex-col justify-center"}>

              <div className={"flex flex-row justify-center "}>

                  <div className={"hidden xl:block border-4 rounded-3xl border-primary-dark"}></div>
                  <div className={"xl:pl-4 pt-5 pb-10  flex flex-col justify-center"}>
                      <p className={"text-4xl lg:text-6xl underline underline-offset-8 font-semibold text-primary-dark text-center xl:text-left"}>Placements</p>
                      <p className={"mt-5 text-lg lg:text-2xl font-medium text-gray-400 text-center"}>Our Students Placed in Top Companies</p>
                  </div>

              </div>

          </div>

          <div className={"relative w-fit"}>

              <div className={"absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center"}>


                  <div className={"border-[10px] lg:border-[25px] border-dotted animate-Border-Rotation border-secondary-dark mx-auto w-fit p-8 xl:p-12 rounded-full"}>
                      <Image className={"w-[8rem] lg:w-[11rem] animate-Image-Rotation"} src={lcwdLogo} alt={"LCWD Logo"}/>
                  </div>




              </div>

              <div className={"w-screen xl:w-fit"}>
                  <Image className={"w-[325px] lg:w-[520px] mx-auto xl:mx-10 rotate-[30deg] animate-Image-Rotation"} src={CompanyCircle} alt={"Image"}/>
              </div>

          </div>

      </div>
  );
}