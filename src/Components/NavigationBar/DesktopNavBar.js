import Image from "next/image";
import lcwdLogo from "../../Assets/Logos/lcwd_logo.png"
import youtubeLogo from "../../Assets/Icons/youtube.png"
import Link from "next/link";

export default function DesktopNavBar()
{
  return(
      <div>

          <div className={"invisible lg:visible z-50 fixed top-0 left-0 right-0 backdrop-blur-lg bg-neutral-300/20 drop-shadow-2xl flex flex-row justify-between lg:px-6 xl:px-20 py-1"}>

              <div>

                  <Link href={'/'} className={"flex flex-row"}>
                      <Image className={"w-16"} src={lcwdLogo} alt={"LCWD Logo"}/>
                      <h1 className={"ml-5 h-fit my-auto font-semibold text-4xl bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}>LCWD</h1>
                  </Link>

              </div>

              <div className={"flex flex-row cursor-default text-lg  font-semibold"}>

                  <Link href={'/'} className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>
                      Home
                  </Link>

                  <Link className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"} href={"/blogs"}>
                      Blogs
                  </Link>

                  <Link className={"mr-5 h-fit my-auto text-red-600 transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"} target={'_blank'} href={"https://courses.learncodewithdurgesh.com/learn"}>
                      Premium Courses
                  </Link>

                  <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Free Courses</h1>

                  <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>About</h1>


                  <Link className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"} href={"/ContactUs"}>
                      Contact
                  </Link>




                  <Link className={"h-fit my-auto text-red-600 flex flex-row transition-all ease-linear hover:-translate-y-1"} target={`_blank`} href={`https://www.youtube.com/learncodewithdurgesh`}>
                      <Image className={"h-6 w-6 mr-2 my-auto"} src={youtubeLogo} alt={"LCWD Logo"}/>
                      <p>Youtube</p>
                  </Link>

              </div>

          </div>

      </div>
  );
}