import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";
import {Tab} from "@headlessui/react";
import {getCourseDetail, getCourseVideos} from "@/Api_Services/apiServices";
import React, {useState} from "react";
import HTMLDataParser from "@/Components/MasterTemplets/HTMLDataParser";


import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-python";
import "prismjs/components/prism-http";
import "prismjs/components/prism-xml-doc";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";


export default function CourseHome({courseVideoData , courseOverview , videoID })
{

    console.log(courseVideoData)


    const urlVideoIndex = courseVideoData.findIndex( (obj)=> obj.id === videoID )
    const baseArrayIndex  = courseVideoData[0].id

    const [videoDetail , setVideoDetail] = useState(
        {
            youtube_embed_Id : courseVideoData[urlVideoIndex].get_video_id ,
            video_id : courseVideoData[urlVideoIndex].id
        }
    )

    let lSymbol = "</"
    let rSymbol = ">"

    return(
        <div className={"flex flex-row "}>

            <div className={"px-0 py-6 lg:p-7"}>

                <div className={"bg-stone-100 rounded-3xl drop-shadow-xl px-2 py-6 lg:p-6 flex flex-col justify-center space-y-9"}>

                    {/* Embedded Youtube Video */}
                    <div className={"mx-auto"}>
                        <YoutubePlayer videoId={`${videoDetail.youtube_embed_Id}`} autoPlayFeatureSwitch={false} />
                    </div>

                    <div className={"hidden lg:block"}>
                        {/* Video Description */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>

                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                Description
                            </h1>

                            <div className={"mx-6 text-lg mt-8"}>

                                <HTMLDataParser htmlData={courseVideoData[videoDetail.video_id-baseArrayIndex].videoDescription} />

                            </div>

                        </div>

                        {/* Divider Line */}
                        <div className={"rounded-full border border-gray-300 my-10 mx-20"}></div>

                        {/* Provided Code */}
                        <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>
                            <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                {lSymbol}Code{rSymbol}
                            </h1>


                            <div className={"mx-6 text-lg mt-4"}>

                                

                            </div>
                        </div>

                    </div>

{/*                     Previous / Next Video Buttons
                    <div className={"hidden lg:flex flex-row justify-center space-x-20"}>


                         Previous Button
                        <Link
                            href={`/course/${courseOverview}/${(videoDetail.video_id)-1}`}
                            onClick={ ()=>{
                                    setVideoDetail(
                                        {
                                            youtube_embed_Id : courseVideoData[ (videoDetail.video_id - baseArrayIndex)-1 ].get_video_id ,
                                            video_id : courseVideoData[ (videoDetail.video_id - baseArrayIndex)-1 ].id
                                        }
                                    )
                            } }
                           className={`
                                    ${ baseArrayIndex===videoDetail.video_id ? "hidden" : "block" }
                                    relative 
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
                        </Link>


                         Next Button
                        <Link
                            href={`/course/${courseOverview}/${videoDetail.video_id+1}`}
                            onClick={ ()=>{
                                setVideoDetail(
                                    {
                                        youtube_embed_Id : courseVideoData[ (videoDetail.video_id - baseArrayIndex)+1 ].get_video_id ,
                                        video_id : courseVideoData[ (videoDetail.video_id - baseArrayIndex)+1 ].id
                                    }
                                )
                            } }
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
                        </Link>

                    </div>

                    <div className={"lg:hidden flex flex-row justify-around"}>

                         Previous Button
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

                         Next Button
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

                    </div>*/}

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

                                            <div className={"mx-6 text-lg mt-8 text-justify"}>
                                                <HTMLDataParser htmlData={courseVideoData[videoDetail.video_id-baseArrayIndex].videoDescription} />
                                            </div>

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
                                        {
                                            courseVideoData.map(
                                                (singleVideo)=>{
                                                    return(
                                                        <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} setVideoDetail={setVideoDetail} courseOverview={courseOverview} selected={ singleVideo.id === videoDetail.video_id } />
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                </Tab.Panel>

                            </Tab.Panels>

                        </Tab.Group>

                    </div>

                </div>

            </div>

            <div className={"hidden lg:block space-y-5 p-5 overflow-y-scroll my-7 h-[160vh] bg-stone-100 rounded-3xl drop-shadow-xl mr-6"}>


                {
                    courseVideoData.map(
                        (singleVideo)=>{
                            return(
                                <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} setVideoDetail={setVideoDetail} courseOverview={courseOverview} selected={ singleVideo.id === videoDetail.video_id } />
                            )
                        }
                    )
                }


            </div>

        </div>
    );
}

export async function getServerSideProps(context)
{
    const {courseOverview} = context.params;
    const videoID = Number(context.query.courseHome);
    const courseData = await getCourseDetail(courseOverview)
    const courseVideoData = await getCourseVideos(courseData.id)
    /*courseVideoData.sort( (obj1 , obj2) => { return obj1.id - obj2.id } )*/

    return {
        props: {courseVideoData , courseOverview , videoID},
    }

}