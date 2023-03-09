import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";
import {Tab} from "@headlessui/react";

export default function CourseHome()
{
    let lSymbol = "</"
    let rSymbol = ">"
    return(
        <div className={"flex flex-row "}>

            <div className={"px-0 py-6 lg:p-7"}>

                <div className={"bg-stone-100 rounded-3xl drop-shadow-xl px-2 py-6 lg:p-6 flex flex-col justify-center space-y-9"}>

                    {/* Embedded Youtube Video */}
                    <div className={"mx-auto"}>
                        <YoutubePlayer videoId={"9GCeaRPT9Bc"}/>
                    </div>

                    <div className={"hidden lg:block"}>
                        {/* Video Description */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[70rem]"}>

                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                Description
                            </h1>

                            <p className={"mx-6 text-lg mt-8 text-justify"}>
                                In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh going to start
                            </p>

                        </div>

                        {/* Divider Line */}
                        <div className={"rounded-full border border-gray-400 mx-28"}></div>

                        {/* Provided Code */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[70rem]"}>
                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                {lSymbol}Code{rSymbol}
                            </h1>

                            <p className={"mx-6 text-lg mt-4"}>
                                In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh
                                going to start
                            </p>
                        </div>

                        {/* Divider Line */}
                        <div className={"rounded-full border border-gray-400 mx-28"}></div>
                    </div>

                    {/* Previous / Next Video Buttons */}
                    <div className={"hidden lg:flex flex-row justify-center space-x-20"}>


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

                    <div className={"lg:hidden flex flex-row justify-around"}>

                        {/* Previous Button */}
                        <a href={"#_"} className={`flex flex-row justify-center px-3 py-3 font-bold text-base text-secondary-medium border-2 border-secondary-medium rounded-full`} >
                            <svg
                                className={"my-auto w-8 h-8 mr-2"}
                                fill={"none"} stroke={"currentColor"}
                                viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                            >
                                <path
                                    strokeLinecap={"round"} strokeLinejoin={"round"}
                                    strokeWidth={"2"} d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}
                                >
                                </path>
                            </svg>
                            <div className={"w-max h-fit my-auto"}>
                                Previous Video
                            </div>
                        </a>

                        {/* Next Button */}
                        <a href={"#_"} className={`flex flex-row justify-center px-3 py-3 font-bold text-base text-secondary-medium border-2 border-secondary-medium rounded-full`} >
                            <div className={"w-max h-fit my-auto"}>
                                Next Video
                            </div>
                            <svg
                                className={"my-auto w-8 h-8 ml-2"}
                                fill={"none"} stroke={"currentColor"}
                                viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                            >
                                <path
                                    strokeLinecap={"round"} strokeLinejoin={"round"}
                                    strokeWidth={"2"} d={"M14 5l7 7m0 0l-7 7m7-7H3"}>
                                </path>
                            </svg>
                        </a>

                    </div>

                    <div className={"lg:hidden"}>

                        <Tab.Group defaultIndex={0}>

                            <Tab.List className={"flex flex-row justify-center"}>

                                <div className={"flex flex-col lg:flex-row justify-center w-fit bg-primary-medium/30 p-2 rounded-xl space-y-2 lg:space-y-0 lg:space-x-2 mt-4 "}>

                                    {/* Overview Button */}
                                    <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                        " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                        " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                        Overview
                                    </Tab>

                                    {/* Course Content Button */}
                                    <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                                        " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                                        " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                                        Course Content
                                    </Tab>

                                </div>

                            </Tab.List>

                            <Tab.Panels className={"mt-10 lg:mx-16"}>

                                {/* Overview View */}
                                <Tab.Panel>
                                    <div className={"space-y-9"}>
                                        {/* Video Description */}
                                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[70rem]"}>

                                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                Description
                                            </h1>

                                            <p className={"mx-6 text-lg mt-8 text-justify"}>
                                                In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh going to start
                                            </p>

                                        </div>

                                        {/* Divider Line */}
                                        <div className={"rounded-full border border-gray-400 mx-10 lg:mx-28"}></div>

                                        {/* Provided Code */}
                                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[70rem]"}>
                                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                {lSymbol}Code{rSymbol}
                                            </h1>

                                            <p className={"mx-6 text-lg mt-4"}>
                                                In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh
                                                going to start
                                            </p>
                                        </div>

                                    </div>
                                </Tab.Panel>

                                {/* Course Content View */}
                                <Tab.Panel>
                                    <div className={"space-y-6 px-2 lg:px-28"}>
                                        <PlayerCourseCard courseTitle={"Lets Start new series Deployment Project on Digital Ocean in Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"What is cloud About Digital Ocean Understanding Client requirements"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Creating First Virtual Machine using Droplet Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Changing root password droplet very important video"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Using Database on Droplet Database Installation on cloud"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Connecting GUI with MySQL Server running on droplet DB on cloud"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Build Jar With Production environment Variables Spring Boot cloud Spring boot on Digital Ocean"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Uploading Spring Boot Jar to Virtual Machine in Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Deploying Spring Boot on VM Installing JRE Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Creating Linux Script for Spring boot startsh stopsh Run spring boot in background Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Building React App to deploy Preparing react app for hosting on node server in Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Installing Node JS on VM Deploy React Application on Droplet Deployment on cloud in Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Working with pm2 how to manage node process Deployment on Digital Ocean"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Buying Cheapest domain for Spring boot Application Buying domain live"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Pointing Domain to IP Working with Nginx Server Working with Ubuntu Firewall Cloud Deployment"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Point domain to Backend Spring Boot Application Step by step Deployment on cloud in Hindi"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Installing Free SSL on Spring Boot and React Application Deployment in Cloud"} courseLink={"#"}/>
                                        <PlayerCourseCard courseTitle={"Finish Deployment Series Why Linux is important for developer"} courseLink={"#"}/>
                                    </div>
                                </Tab.Panel>

                            </Tab.Panels>

                        </Tab.Group>

                    </div>

                </div>

            </div>

            <div className={"hidden lg:block space-y-5 p-5 overflow-y-scroll my-auto h-[117vh] bg-stone-100 rounded-3xl drop-shadow-xl mr-6"}>

                <PlayerCourseCard courseTitle={"Lets Start new series Deployment Project on Digital Ocean in Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"What is cloud About Digital Ocean Understanding Client requirements"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Creating First Virtual Machine using Droplet Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Changing root password droplet very important video"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Using Database on Droplet Database Installation on cloud"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Connecting GUI with MySQL Server running on droplet DB on cloud"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Build Jar With Production environment Variables Spring Boot cloud Spring boot on Digital Ocean"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Uploading Spring Boot Jar to Virtual Machine in Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Deploying Spring Boot on VM Installing JRE Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Creating Linux Script for Spring boot startsh stopsh Run spring boot in background Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Building React App to deploy Preparing react app for hosting on node server in Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Installing Node JS on VM Deploy React Application on Droplet Deployment on cloud in Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Working with pm2 how to manage node process Deployment on Digital Ocean"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Buying Cheapest domain for Spring boot Application Buying domain live"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Pointing Domain to IP Working with Nginx Server Working with Ubuntu Firewall Cloud Deployment"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Point domain to Backend Spring Boot Application Step by step Deployment on cloud in Hindi"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Installing Free SSL on Spring Boot and React Application Deployment in Cloud"} courseLink={"#"}/>
                <PlayerCourseCard courseTitle={"Finish Deployment Series Why Linux is important for developer"} courseLink={"#"}/>

            </div>

        </div>
    );
}