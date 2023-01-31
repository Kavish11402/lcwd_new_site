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
      /* Writing for Small Devices */
      <div className={"flex flex-col border-4 border-black"}>

          <div className={""}> <Image src={manWithComputer} alt={"Man With Computer"} className={"mx-auto"} /> </div>

          {/* Don't display it on small devices */}
          {/*<div className={"rounded-full my-24 border-[1px] border-zinc-500"}></div>*/}



          <div className={"flex flex-col justify-center"}>



              <h1 className={"text-center text-4xl font-bold py-6     bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}> Learn Code With Durgesh </h1>

              <div className={"mt-1 flex flex-row justify-center font-semibold text-2xl text-zinc-600"}>
                  <h1 className={"text-center mr-2"}> Master </h1>
                  <h1 className={"text-center"} ref={typedText} >  </h1>
              </div>




              <p className={"mt-4 text-center mx-4 text-zinc-600 "}>
                  Best Video Courses in <b>HINDI</b>, These courses are totally free of cost.
                  Thousands of people learn from these courses daily.
                  Our effort is to make you learn the technology in Practical way.
              </p>

              <div className={"mt-10 flex flex-row justify-center font-semibold text-zinc-600"}>

                  {/*<h1 className={"bg-primary-medium hover:bg-primary-dark transition-all ease-in-out text-white px-5 py-3 rounded-xl text-2xl mx-16"}>Premium Courses</h1>*/}

                  <Link target={'_blank'} href={"https://courses.learncodewithdurgesh.com/learn"}>
                      <h1 className={"mx-2 border-2 px-3 py-2 rounded-xl  border-primary-medium"}>
                          Premium Courses
                      </h1>
                  </Link>


                  {/* TODO -> Add "/courses" link to the below Link's href */}
                  <Link href={"/"}>
                      <h1 className={"mx-2 border-2 px-3 py-2 rounded-xl border-secondary-medium"}>
                          Top Free Courses
                      </h1>
                  </Link>

              </div>


              <div className={"mt-10 flex flex-col justify-center"}>

                  <div className={"flex flex-row justify-center mb-2"}>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg className={"w-8 h-8 text-secondary-dark"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>



                  </div>

                  <p className={"text-center font-bold text-3xl"}>2000+</p>
                  <p className={"text-center text-gray-700 text-lg"}>Happy Students</p>

              </div>



          </div>


      </div>
  );
}