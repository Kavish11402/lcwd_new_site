import courseImage from "@/Assets/Images/digital_ocean_serias.webp"
import ratingIcon from "@/Assets/Icons/rating.png"
import enrollmentIcon from "@/Assets/Icons/enrollments.png"
import videoIcon from "@/Assets/Icons/watchVideo.png"
import nullIcon from "@/Assets/Icons/null.png"

import Image from "next/image";
import Link from "next/link";
import {Tab} from "@headlessui/react";
import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import SingleCourseOverview from "@/Components/FreeCoursesComponent/SingleCourseOverview";

export default function temp()
{
  return(
      <div>

          <div className={"bg-secondary-dark py-12 pl-32 relative"}>

              <div className={"w-[55rem] text-white p-3"}>

                  <h1 className={"font-bold text-6xl mb-8"}>
                      Digital Ocean Series: Deployment on Cloud
                  </h1>

                  <h3 className={"text-[1.4rem] text-gray-100 leading-10 mb-6"}>
                      This course is focused on providing hands-on experience with deploying applications on
                      DigitalOcean&apos;s cloud platform using Droplets. Students will learn how to create and configure
                      Droplets, connect to them via SSH, and use popular tools such as Git, Nginx, and Node.js to
                      deploy web applications. The course will also cover best practices for securing and managing
                      Droplets, as well as scaling and monitoring applications. By the end of the course, students
                      will have the skills and knowledge necessary to deploy and manage their own applications on
                      DigitalOcean&apos;s platform.
                  </h3>

                  <div className={"flex flex-row text-2xl font-medium mb-3"}>
                      <h1 className={"underline"}>Language:</h1> <p className={"ml-4 translate-y-0.5"}>HINDI</p>
                  </div>

                  <div className={"flex flex-row"}>

                      <h3 className={"text-2xl underline font-medium"}>Rating: </h3>

                      <div className={"flex flex-row ml-4 translate-y-0.5"}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                              />
                          </svg>
                      </div>

                  </div>


              </div>

              <div className={"absolute top-8 right-36 py-8 bg-stone-300/70 backdrop-blur-lg h-[48rem] w-[36rem] rounded-3xl drop-shadow-2xl"}>

                  <Image className={"w-[32rem] mx-auto rounded-[2rem]"} src={courseImage} alt={"Course Banner Image"}/>

                  <Link href={`/`}>
                      <h2 className={"mt-7 bg-primary-medium hover:hover:scale-105 transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-zinc-600 lg:text-2xl w-96 mx-auto"}>
                          Start Learning
                      </h2>
                  </Link>


                  <div className={"mx-10"}>

                      <h1 className={"mt-5 font-bold text-2xl"}>
                          Features of this Course :
                      </h1>

                      <div className={"pl-5 mt-3 space-y-2"}>

                          <div className={"flex flex-row"}>

                              <svg className=" w-8 h-8 -translate-y-1" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" >
                                  <path
                                      strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  18 + Quality Videos
                              </h1>

                          </div>

                          <div className={"flex flex-row"}>

                              <svg className=" w-8 h-8 -translate-y-1" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" >
                                  <path
                                      strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  1000 + Enrollments
                              </h1>

                          </div>

                          <div className={"flex flex-row"}>

                              <svg className=" w-8 h-8 -translate-y-1" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" >
                                  <path
                                      strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  5 out of 5 Students Reviews
                              </h1>

                          </div>

                          <div className={"flex flex-row"}>

                              <svg className=" w-8 h-8 -translate-y-1" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" >
                                  <path
                                      strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  Course will be in Hindi
                              </h1>

                          </div>

                      </div>



                  </div>




              </div>

          </div>

          <div className={"my-60"}>

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

                          {/* Provided Code Button */}
                          <Tab className={"transition-all ease-linear w-80 rounded-xl py-2.5 text-xl font-medium text-secondary-dark outline-0 border-2 border-transparent" +
                              " ui-selected:bg-white ui-selected:shadow ui-selected:border-secondary-dark" +
                              " ui-not-selected:text-gray-400 ui-not-selected:hover:bg-white/[0.5] ui-not-selected:hover:text-secondary-dark"}>
                              Materials
                          </Tab>

                      </div>

                  </Tab.List>

                  <Tab.Panels className={"mt-10 mx-16"}>

                      {/* Overview View */}
                      <Tab.Panel>
                          <div>
                              <div className={"mx-16"}>

                                  <h1 className={"font-bold text-3xl underline underline-offset-8"}>Description of the Course</h1>

                                  <p className={"text-xl leading-9 mx-24 my-7 text-justify"}>
                                      This course is focused on providing hands-on experience with deploying applications on
                                      DigitalOcean&apos;s cloud platform using Droplets. Students will learn how to create and configure
                                      Droplets, connect to them via SSH, and use popular tools such as Git, Nginx, and Node.js to
                                      deploy web applications. The course will also cover best practices for securing and managing
                                      Droplets, as well as scaling and monitoring applications. By the end of the course, students
                                      will have the skills and knowledge necessary to deploy and manage their own applications on
                                      DigitalOcean&apos;s platform.
                                  </p>

                              </div>


                              <h2 className={"w-fit mx-auto font-bold text-4xl underline underline-offset-8 mt-28 mb-14 capitalize"}>Key Highlights off our Course</h2>

                              <div className={"flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-20"}>
                                  <ExplanationCard icon={videoIcon} title={"18 + Videos"} description={"Each video contain source code if they have."}/>
                                  <ExplanationCard icon={enrollmentIcon} title={"1000+ Enrollments"} description={"Almost 1000+ user already enrolled for this course"}/>
                                  <ExplanationCard icon={ratingIcon} title={"5.0/5.0 Rating"} description={"Rating, All students likes this course."}/>
                              </div>

                          </div>
                      </Tab.Panel>

                      {/* Course Content View */}
                      <Tab.Panel>
                          <div className={"space-y-6 px-28"}>

                              <SingleCourseOverview courseTitle={"Lets Start new series Deployment Project on Digital Ocean in Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"What is cloud About Digital Ocean Understanding Client requirements"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Creating First Virtual Machine using Droplet Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Changing root password droplet very important video"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Using Database on Droplet Database Installation on cloud"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Connecting GUI with MySQL Server running on droplet DB on cloud"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Build Jar With Production environment Variables Spring Boot cloud Spring boot on Digital Ocean"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Uploading Spring Boot Jar to Virtual Machine in Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Deploying Spring Boot on VM Installing JRE Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Creating Linux Script for Spring boot startsh stopsh Run spring boot in background Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Building React App to deploy Preparing react app for hosting on node server in Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Installing Node JS on VM Deploy React Application on Droplet Deployment on cloud in Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Working with pm2 how to manage node process Deployment on Digital Ocean"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Buying Cheapest domain for Spring boot Application Buying domain live"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Pointing Domain to IP Working with Nginx Server Working with Ubuntu Firewall Cloud Deployment"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Point domain to Backend Spring Boot Application Step by step Deployment on cloud in Hindi"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Installing Free SSL on Spring Boot and React Application Deployment in Cloud"} courseLink={"#"}/>
                              <SingleCourseOverview courseTitle={"Finish Deployment Series Why Linux is important for developer"} courseLink={"#"}/>

                          </div>
                      </Tab.Panel>

                      {/* Materials View */}
                      <Tab.Panel>
                          <div className={""}>
                              <div className={"mx-16"}>
                                  <h1 className={"font-bold text-3xl underline underline-offset-8 mx-auto w-fit"}>Provided Materials</h1>
                                  <Image className={"mt-28 mx-auto w-72"} title={"Nothing is Uploaded Yet"} src={nullIcon} alt={"Null Icon"}/>
                              </div>
                          </div>
                      </Tab.Panel>

                  </Tab.Panels>

              </Tab.Group>

          </div>


      </div>
  );
}