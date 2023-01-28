import Image from "next/image";
import manWithComputer from "@/Assets/Images/manComp.svg"
export default function TopBanner()
{
  return(
      <div className={"flex flex-row border-2 border-black"}>

          <div className={"w-1/2 py-32"}>
              <Image src={manWithComputer} alt={"Man With Computer"} className={"mx-auto"} />
          </div>

          <div className={"rounded-full my-24 border-[1px] border-zinc-500"}></div>

          <div className={"w-1/2 flex flex-col justify-center"}>


              <h1 className={"text-center text-6xl font-bold py-7 bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-transparent"}> Learn Code With Durgesh </h1>
              <h1 className={"text-center text-4xl font-semibold mt-1 text-zinc-600"}> Master Programming </h1>


              <p className={"mt-10 text-center w-4/5 text-lg mx-auto text-zinc-600 font-semibold"}>
                  Best Video Courses in HINDI, These courses are totally free of cost.
                  Thousands of people learn from these courses daily.
                  Our effort is to make you learn the technology in Practical way.
              </p>

              <div className={"mt-16 flex flex-row justify-center"}>

                  {/*<h1 className={"bg-primary-medium hover:bg-primary-dark transition-all ease-in-out text-white px-5 py-3 rounded-xl text-2xl mx-16"}>Premium Courses</h1>*/}

                  <h1 className={"mx-16 border-2 border-primary-medium hover:border-primary-dark hover:bg-primary-dark hover:text-white transition-all ease-in-out px-5 py-3 rounded-xl text-2xl text-zinc-600"}>
                      Premium Courses
                  </h1>

                  <h1 className={"mx-16 border-2 border-secondary-medium hover:border-secondary-dark hover:bg-secondary-dark hover:text-white transition-all ease-in-out px-5 py-3 rounded-xl text-2xl text-zinc-600"}>
                      Top Free Courses
                  </h1>

              </div>


              <div className={"mt-24 flex flex-col justify-center"}>

                  <div className={"flex flex-row justify-center mb-4"}>

                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>
                      <div className={"border-2 border-secondary-dark rounded-full mx-1"} >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-10 h-10 text-secondary-dark">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                          </svg>
                      </div>

                  </div>

                  <p className={"text-center font-bold text-3xl"}>2000+</p>
                  <p className={"text-center text-gray-700 text-xl"}>Happy Students</p>

              </div>



          </div>

      </div>
  );
}