import ratingIcon from "@/Assets/Icons/rating.png"
import enrollmentIcon from "@/Assets/Icons/enrollments.png"
import videoIcon from "@/Assets/Icons/watchVideo.png"
import nullIcon from "@/Assets/Icons/null.png"

import Image from "next/image";
import Link from "next/link";
import {Tab} from "@headlessui/react";
import ExplanationCard from "@/Components/HomePageComponent/SingleReuseableComponents/ExplanationCard";
import SingleCourseOverview from "@/Components/FreeCoursesComponent/SingleCourseOverview";
import {getCourseDetail, getCourseVideos} from "@/Api_Services/apiServices";

export default function CourseOverview({courseData , courseVideoData})
{
  return(
      <div>

          <div className={"bg-secondary-dark lg:min-h-[48rem] 2xl:min-h-[40rem] py-12 lg:pl-8 2xl:pl-24 relative"}>

              <div className={"lg:w-[50%]  2xl:w-[52rem] text-white p-3"}>

                  <h1 className={"font-bold text-5xl lg:text-6xl mb-8"}>
                      {courseData.courseName}
                  </h1>

                  <h3 className={"text-lg lg:text-[1.4rem] text-gray-100 line-clamp-7 leading-10 mb-6"}>
                      {courseData.courseNameDescription}
                  </h3>

                  <div className={"flex flex-row text-2xl font-medium mb-3"}>
                      <h1 className={"underline"}>Language:</h1> <p className={"ml-4 translate-y-0.5"}>HINDI</p>
                  </div>

                  <div className={"flex flex-row"}>

                      <h3 className={"text-2xl underline font-medium"}>Rating: </h3>

                      <div className={"flex flex-row ml-4 translate-y-0.5"}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"}
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"}
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"}
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"}
                                    clipRule="evenodd"
                              />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-500">
                              <path fillRule="evenodd"
                                    d={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"}
                                    clipRule="evenodd"
                              />
                          </svg>
                      </div>

                  </div>

              </div>

              <div className={"lg:absolute lg:top-8 lg:right-8 xl:right-12 2xl:right-28 mt-14 lg:mt-0 py-8 bg-stone-300/70 backdrop-blur-lg h-[48rem] mx-auto w-[21rem] md:w-[36rem] lg:w-[27rem] xl:w-[36rem] rounded-3xl drop-shadow-2xl"}>


                  <img className={"w-[18rem] md:w-[32rem] lg:w-[25rem] xl:w-[32rem] mx-auto rounded-[2rem]"} src={`${courseData.courseBanner}`} alt={"Course Banner Image"} />

                  <Link href={`/course/${courseData.courseUrl}/${courseVideoData[0].id}`}>
                      <h2 className={"mt-7 bg-primary-medium hover:hover:scale-105 transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-zinc-600 md:text-2xl w-52 lg:w-96 mx-auto"}>
                          Start Learning
                      </h2>
                  </Link>

                  <div className={"mx-7 lg:mx-10"}>

                      <h1 className={"mt-5 font-bold text-2xl"}>
                          Features of this Course :
                      </h1>

                      <div className={"pl-5 mt-5 space-y-3"}>

                          <div className={"flex flex-row space-x-3"}>

                              <svg className="w-6 h-6 translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  18 + Quality Videos
                              </h1>

                          </div>

                          <div className={"flex flex-row space-x-3"}>

                              <svg className="w-6 h-6 translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  1000 + Enrollments
                              </h1>

                          </div>

                          <div className={"flex flex-row space-x-3"}>

                              <svg className="w-6 h-6 translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                  />
                              </svg>

                              <h1 className={"text-lg"}>
                                  5 out of 5 Students Reviews
                              </h1>

                          </div>

                          <div className={"flex flex-row space-x-3"}>

                              <svg className="w-6 h-6 translate-y-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
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

          <div className={"mt-2 mb-28 lg:my-24 2xl:my-60"}>

              <Tab.Group defaultIndex={1}>

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

                  <Tab.Panels className={"mt-10 lg:mx-16"}>

                      {/* Overview View */}
                      <Tab.Panel>
                          <div>
                              <div className={"mx-5 lg:mx-16"}>

                                  <h1 className={"font-bold text-3xl underline underline-offset-8 text-center lg:text-left"}>Description of the Course</h1>

                                  <p className={"text-lg md:text-xl leading-9 lg:mx-24 my-7 text-justify"}>
                                      {courseData.courseNameDescription}
                                  </p>

                              </div>

                              <h2 className={"px-2 lg:px-0 w-fit mx-auto font-bold text-3xl lg:text-4xl text-center lg:text-left underline underline-offset-8 mt-28 mb-14 capitalize"}>Key Highlights off our Course</h2>

                              <div className={"flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 lg:space-x-20"}>
                                  <ExplanationCard icon={videoIcon} title={"18 + Videos"} description={"Each video contain source code if they have."}/>
                                  <ExplanationCard icon={enrollmentIcon} title={"1000+ Enrollments"} description={"Almost 1000+ user already enrolled for this course"}/>
                                  <ExplanationCard icon={ratingIcon} title={"5.0/5.0 Rating"} description={"Rating, All students likes this course."}/>
                              </div>

                          </div>
                      </Tab.Panel>

                      {/* Course Content View */}
                      <Tab.Panel>
                          <div className={"space-y-6 px-2 lg:px-28"}>

                              {
                                  courseVideoData.map(
                                      (singleVideoData)=>
                                      {
                                          return(
                                              <SingleCourseOverview key={singleVideoData.id} courseTitle={`${singleVideoData.videoTitle}`} courseLink={"#"}/>
                                          )
                                      }
                                  )
                              }


                          </div>
                      </Tab.Panel>

                      {/* Materials View */}
                      <Tab.Panel>
                          <div className={""}>
                              <div className={"mx-16"}>
                                  <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>Provided Materials</h1>
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




export async function getServerSideProps(context)
{
    const {courseOverview} = context.params;
    const courseData = await getCourseDetail(courseOverview)
    const courseVideoData = await getCourseVideos(courseData.id)
    courseVideoData.sort( (obj1 , obj2) => { return obj1.id - obj2.id } )

    return {
        props: {courseData , courseVideoData},
    }

}