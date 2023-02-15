import Image from "next/image";
import manWithComputer from "@/Assets/Images/manComp.svg"
import Link from "next/link";
import {useEffect, useRef} from "react";
import Typed from "typed.js";
export default function TopBanner()
{
    const typedText = useRef(null);

    useEffect(() => {
        let typed = new Typed(typedText.current,
            {
                strings: ["Programming", "Coding", "Technology", "Development" , "Skills" , "Logic Building"],
                startDelay: 500, typeSpeed: 30, backSpeed: 15, backDelay: 1000, shuffle: true, loop: true
            });

        return () => { typed.destroy(); };
    }, []);


  return(
      <div className={"flex flex-col lg:flex-row lg:h-[89vh]"}>

          <div className={"px-3 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-0"}>


              <Image src={manWithComputer} alt={"Man With Computer"} className={"mx-auto w-[400px] md:w-[500px] lg:w-[400px] xl:w-auto"} />



          </div>

          <div className={"hidden lg:inline-flex rounded-full lg:my-16 xl:my-24 border border-zinc-500"}></div>

          <div className={"flex flex-col justify-center lg:w-1/2"}>

              <h1 className={"text-center text-[2.5rem] xl:text-6xl font-bold py-6 lg:py-7 bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}>
                  Learn Code With Durgesh
              </h1>

              <div className={"mt-1 flex flex-row justify-center font-semibold text-2xl lg:text-3xl xl:text-4xl text-zinc-600"}>
                  <h1 className={"text-center mr-2"}> Master </h1>
                  <h1 className={"text-center text-primary-dark"} ref={typedText} >  </h1>
              </div>

              <p className={"mt-4 text-center mx-auto text-zinc-600 lg:mt-7 xl:mt-10 sm:w-[700px] lg:w-[90%] lg:text-base xl:text-lg lg:mx-auto xl:font-semibold xl-w-4/5"}>
                  Best Video Courses in <b>HINDI</b>, These courses are totally free of cost.
                  Thousands of people learn from these courses daily.
                  Our effort is to make you learn the technology in Practical way.
              </p>

              <div className={"mt-10 flex flex-row justify-center font-semibold text-zinc-600 xl:mt-16"}>

                  <Link target={'_blank'} href={"https://courses.learncodewithdurgesh.com/learn"}>
                      <h1 className={"mx-2 border-2 px-3 py-2 rounded-xl border-primary-medium lg:mx-8 xl:mx-16 lg:hover:border-primary-dark lg:hover:bg-primary-dark lg:hover:text-white lg:transition-all lg:ease-in-out lg:px-2 xl:px-5 lg:py-3 lg:text-lg xl:text-2xl lg:text-zinc-600"}>
                          Premium Courses
                      </h1>
                  </Link>

                  {/* TODO -> Add "/courses" link to the below Link's href */}
                  <Link href={"/"}>
                      <h1 className={"mx-2 border-2 px-3 py-2 rounded-xl border-secondary-medium lg:mx-8 xl:mx-16 lg:hover:border-secondary-dark lg:hover:bg-secondary-dark lg:hover:text-white lg:transition-all lg:ease-in-out lg:px-2 xl:px-5 lg:py-3 lg:text-lg xl:text-2xl lg:text-zinc-600"}>
                          Top Free Courses
                      </h1>
                  </Link>

              </div>

              <div className={"mt-10 flex flex-col justify-center"}>

                  <div className={"flex flex-row justify-center mb-2 xl:mb-4"}>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >

                          <svg className={"w-8 h-8 xl:w-10 xl:h-10 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>

                      </div>

                  </div>

                  <p className={"text-center font-bold lg:text-2xl xl:text-3xl"}>2000+</p>
                  <p className={"text-center text-gray-700 text-lg lg:text-base xl:text-xl"}>Happy Students</p>

              </div>

          </div>

      </div>
  );
}