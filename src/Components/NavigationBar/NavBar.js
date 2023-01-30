import Image from "next/image";
import lcwdLogo from "../../Assets/Logos/lcwd_logo.png"
import youtubeLogo from "../../Assets/Icons/youtube.png"
import Link from "next/link";

export default function NavBar()
{

  return(
      <div className={"z-50 fixed top-0 left-0 right-0 backdrop-blur-lg bg-neutral-300/20 drop-shadow-2xl flex flex-row justify-between px-20 py-1"}>


          <div>

              <Link href={'/'} className={"flex flex-row"}>

                  <Image className={"w-16"} src={lcwdLogo} alt={"LCWD Logo"}/>
                  <h1 className={"ml-5 h-fit my-auto font-semibold text-4xl bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}>LCWD</h1>

              </Link>

          </div>

          {/*text-black*/}
          <div className={"flex flex-row cursor-default text-lg  font-semibold"}>

              {/*hover:text-primary-dark*/}
              <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Home</h1>
              <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Blogs</h1>
              <h1 className={"mr-5 h-fit my-auto text-red-600 transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Premium Courses</h1>
              <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Free Courses</h1>
              <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>About</h1>
              <h1 className={"mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1"}>Contact</h1>

              <h1 className={"h-fit my-auto text-red-600 flex flex-row transition-all ease-linear hover:-translate-y-1"}>
                  <Image className={"h-6 w-6 mr-2 my-auto"} src={youtubeLogo} alt={"LCWD Logo"}/>
                  <p>Youtube</p>
              </h1>


          </div>

      </div>

  );
}