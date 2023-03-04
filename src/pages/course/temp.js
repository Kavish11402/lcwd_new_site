import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";

export default function temp()
{
    let lSymbol = "</"
    let rSymbol = ">"
    return(
      <div className={"border-2 border-black flex flex-row"}>


          <div className={"border-2 border-red-600  p-7"}>


              <div className={"bg-stone-100 rounded-3xl drop-shadow-xl p-6 flex flex-col justify-center space-y-8"}>

                  {/* Embedded Youtube Video */}
                  <div className={"border-2 border-black mx-auto"}>
                      <YoutubePlayer videoId={"9GCeaRPT9Bc"}/>
                  </div>

                  {/* Video Description */}
                  <div className={"border-2 border-black"}>

                      <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                          Description
                      </h1>

                      <p className={"mx-6 text-lg mt-4"}>
                          In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh
                          going to start
                      </p>

                  </div>

                  {/* Provided Code */}
                  <div className={"border-2 border-black"}>
                      <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                          {lSymbol}Code{rSymbol}
                      </h1>

                      <pre className={"mx-6 text-lg mt-4"}>
                          In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh
                          going to start
                      </pre>
                  </div>

                  {/* Previous / Next Video Buttons */}
                  <div className={"border-2 border-black flex flex-row justify-center space-x-20"}>


                      {/* Previous Button */}
                      <a href={"#_"}
                         className={`   relative 
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    p-4 px-7 py-4 
                                    overflow-hidden 
                                    font-bold
                                    text-xl 
                                    text-indigo-600 
                                    transition 
                                    duration-300 
                                    ease-out 
                                    border-2 
                                    border-secondary-medium 
                                    rounded-full 
                                    shadow-md group`}
                      >
                      <span className={`absolute 
                                        inset-0 
                                        flex 
                                        items-center 
                                        justify-center 
                                        w-full h-full 
                                        text-white 
                                        duration-300 
                                        translate-x-full 
                                        bg-secondary-medium 
                                        group-hover:translate-x-0 
                                        ease`}>
                          <svg
                              className={"w-8 h-8"}
                              fill={"none"} stroke={"currentColor"}
                              viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                          >
                              <path
                                  strokeLinecap={"round"} strokeLinejoin={"round"}
                                  strokeWidth={"3"} d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}
                              >
                              </path>
                          </svg>

                      </span>
                          <span
                              className={"absolute flex items-center justify-center w-full h-full text-secondary-medium transition-all duration-300 transform group-hover:-translate-x-full ease"}>
                          Previous Video
                      </span>
                          <span className={"relative invisible"}> Previous Video </span>
                      </a>


                      {/* Next Button */}
                      <a href={"#_"}
                         className={`   relative 
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    p-4 px-10 py-4 
                                    overflow-hidden 
                                    font-bold
                                    text-xl 
                                    text-indigo-600 
                                    transition 
                                    duration-300 
                                    ease-out 
                                    border-2 
                                    border-secondary-medium 
                                    rounded-full 
                                    shadow-md group`}
                      >
                      <span className={`absolute 
                                        inset-0 
                                        flex 
                                        items-center 
                                        justify-center 
                                        w-full h-full 
                                        text-white 
                                        duration-300 
                                        -translate-x-full 
                                        bg-secondary-medium 
                                        group-hover:translate-x-0 
                                        ease`}>
                          <svg
                              className={"w-8 h-8"}
                              fill={"none"} stroke={"currentColor"}
                              viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                          >
                              <path
                                  strokeLinecap={"round"} strokeLinejoin={"round"}
                                  strokeWidth={"3"} d={"M14 5l7 7m0 0l-7 7m7-7H3"}>
                              </path>
                          </svg>

                      </span>
                          <span
                              className={"absolute flex items-center justify-center w-full h-full text-secondary-medium transition-all duration-300 transform group-hover:translate-x-full ease"}>
                          Next Video
                      </span>
                          <span className={"relative invisible"}>
                          Next Video
                      </span>
                      </a>


                  </div>


              </div>


          </div>


          <div className={"border-2 border-green-600 "}></div>

      </div>
  );
}