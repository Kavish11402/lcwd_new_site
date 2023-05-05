import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";
import {Tab} from "@headlessui/react";
import {getCodeOfVideo, getCourseDetail, getCourseVideos} from "@/Api_Services/apiServices";
import React, {useContext, useEffect, useState} from "react";
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



import CustomLoader from "@/Components/Misc/CustomLoader";
import courseHomeContext from "@/Context/CourseHomeContext";
import {useRouter} from "next/router";
import Head from "next/head";
import Link from "next/link";


export default function CourseHome({courseOverview , videoID })
{
    const [loadPage , setLoadPage] = useState(false)

    const router = useRouter()
    const {courseHome} = router.query

    const { courseDetails, setCourseDetails , courseVideos, setCourseVideos , videoCode, setVideoCode } = useContext(courseHomeContext)
    const [currentVideo , setCurrentVideo] = useState(null)


    function previousVideo()
    {
        const currentVideoIndex = courseVideos.findIndex(x => x.id ===currentVideo.id )

        if ( currentVideoIndex === 0 )
            return currentVideo.id
        else
            return courseVideos[currentVideoIndex-1].id
    }

    function nextVideo()
    {
        const currentVideoIndex = courseVideos.findIndex(x => x.id ===currentVideo.id )

        if ( currentVideoIndex === ( (courseVideos.length)-1 ) )
            return currentVideo.id
        else
            return courseVideos[currentVideoIndex+1].id
    }

    async function load()
    {
        getCourseDetail(courseOverview).then(
                (data) =>
                {
                    setCourseDetails(data)
                    getCourseVideos(data.id) .then( (data2) => {  setCourseVideos(data2) })
                })

    }

    async function loadCurrentVideo()
    {
        getCodeOfVideo(videoID) .then( (data3) => {  setVideoCode(data3); } )
    }


    useEffect(() =>
    {
        loadCurrentVideo()
    }, [currentVideo]);

    useEffect(()=>
    {
        return ()=>{
            setCourseVideos(null)
            setCourseDetails(null)
            setVideoCode(null)
        }
    }
        ,[]
    )

    useEffect(
        ()=>
        {
            const highlight = async () => { await Prism.highlightAll(); };
            highlight();
        }
        ,[videoCode]
    )

    useEffect( ()=>
        {
            if(courseVideos!==null)
            {

                const temp = courseVideos.find( (obj)=> obj.id === videoID  )
                setCurrentVideo({...temp} )


                if(videoCode===null)
                {setVideoCode([])}
            }
            else
            {
                load()
            }
        }
        ,[courseVideos , courseHome])

    useEffect(
        ()=>{
            if(currentVideo) {
                setLoadPage(true)
            }
            else {
                setLoadPage(false)
            }
        }
        ,[currentVideo]
    )

    return(

        <>

            <div>
                {
                    loadPage ?
                        <>
                            <Head>
                                <title>{currentVideo.videoTitle} | Learn Code With Durgesh</title>
                                <meta name="keywords" content={ `${ currentVideo.videoTitle }`  }/>
                                <meta name="description" content={currentVideo.videoTitle}/>
                            </Head>

                            {/* Add Ad. Here  */}
                            <div></div>

                            <div className={"flex flex-row p-6 space-x-6"}>


                                <div className={"lg:w-[70%] xl:w-[80%] w-[100%]"}>
                                    <div className={"bg-stone-100 rounded-3xl drop-shadow-xl px-2 py-6 lg:p-6 flex flex-col justify-center space-y-9"}>


                                        {/* Embedded Youtube Video */}
                                        <div>
                                            <YoutubePlayer videoId={`${currentVideo.get_video_id}`} autoPlayFeatureSwitch={false} />
                                        </div>

                                        {/* Add Ad. Here  */}
                                        <div></div>

                                        {/* Previous / Next Video Buttons */}

                                        <div className={"hidden lg:flex flex-row justify-center space-x-20"}>

                                            {/* Previous Button */}

                                            <Link
                                                href={`/course/${courseDetails.courseUrl}/${ previousVideo() }`}
                                                className={`
                                                            ${  (currentVideo.id === courseVideos[0].id )? "hidden" : "block" }
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

                                                <span className={`
                                                                    absolute 
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
                                                                    ease`}
                                                >
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

                                            {/* Next Button */}

                                            <Link
                                                href={`/course/${courseDetails.courseUrl}/${ nextVideo() }`}
                                                className={`
                                                            ${  (currentVideo.id === courseVideos[ (courseVideos.length)-1 ].id )? "hidden" : "block" }
                                                            relative 
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
                                                <span className={`
                                                                    absolute 
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
                                                                    ease`}
                                                >

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

                                            {/* Previous Button */}

                                            <a href={`/course/${courseDetails.courseUrl}/${ previousVideo() }`} className={` ${  (currentVideo.id === courseVideos[0].id )? "hidden" : "block" } flex flex-row justify-center px-3 py-3 font-bold text-base text-secondary-medium border-2 border-secondary-medium rounded-full`} >
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

                                            <a href={`/course/${courseDetails.courseUrl}/${ nextVideo() }`} className={` ${  (currentVideo.id === courseVideos[ (courseVideos.length)-1 ].id )? "hidden" : "block" } flex flex-row justify-center px-3 py-3 font-bold text-base text-secondary-medium border-2 border-secondary-medium rounded-full`} >

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


                                        <div className={"hidden lg:block"}>
                                            {/* Video Description */}
                                            <div className={"border-x-2 border-primary-medium rounded-3xl py-6"}>

                                                <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                    Description
                                                </h1>

                                                <div className={"mx-6 text-lg mt-8"}>

                                                    <HTMLDataParser htmlData={ String(currentVideo.videoDescription) } />

                                                </div>

                                            </div>

                                            {/* Divider Line */}
                                            {
                                                ( videoCode && videoCode.length!==0 ) &&
                                                <div className={"rounded-full border border-gray-300 my-10 mx-20"}></div>
                                            }


                                            {/* Provided Code */}

                                            {
                                                ( videoCode && videoCode.length!==0 ) &&
                                                <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>
                                                    <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                        &lt; Code /&gt;
                                                    </h1>


                                                    <div className={"mx-6 text-lg mt-4 space-y-20"}>

                                                        {
                                                            videoCode.map(
                                                                (singleCode)=>
                                                                {
                                                                    return(
                                                                        <div key={singleCode.id}>
                                                                            <h4 className={"text-2xl font-bold"}>{singleCode.codeTitle}</h4>
                                                                            <pre>
                                                                    <code className={`language-${singleCode.codeLanguage}`}>
                                                                        {singleCode.codeSource}
                                                                    </code>
                                                                </pre>
                                                                        </div>
                                                                    )
                                                                }
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                            }

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

                                                                <div className={"mx-6 text-lg mt-8 text-justify  break-all"}>
                                                                    <HTMLDataParser htmlData={currentVideo.videoDescription} />
                                                                </div>

                                                            </div>

                                                            {/* Divider Line */}
                                                            {
                                                                ( videoCode && videoCode.length!==0 ) &&
                                                                <div className={"rounded-full border border-gray-400 mx-10 lg:mx-28"}></div>
                                                            }


                                                            {/* Provided Code */}
                                                            {
                                                                ( videoCode && videoCode.length!==0 ) &&
                                                                <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-[22rem] sm:w-[34rem] md:w-[45rem] mx-auto lg:w-[70rem]"}>
                                                                    <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                                        &lt; Code /&gt;
                                                                    </h1>

                                                                    <div className={"text-lg mt-4 "}>

                                                                        <div className={"px-2 py-10"}>

                                                                            {
                                                                                videoCode.map(
                                                                                    (singleCode)=>
                                                                                    {
                                                                                        return(
                                                                                            <div key={singleCode.id}>
                                                                                                <h4 className={"text-2xl font-semibold"}>{singleCode.codeTitle}</h4>
                                                                                                <pre>
                                                                                        <code className={`language-${singleCode.codeLanguage}`}>
                                                                                            {singleCode.codeSource}
                                                                                        </code>
                                                                                    </pre>
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                )
                                                                            }

                                                                        </div>



                                                                    </div>

                                                                </div>
                                                            }


                                                        </div>
                                                    </Tab.Panel>

                                                    {/* Course Content View */}
                                                    <Tab.Panel>
                                                        <div className={"space-y-5 px-2 lg:px-28"}>
                                                            {
                                                                courseVideos.map(
                                                                    (singleVideo)=>{
                                                                        return(
                                                                            <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} courseOverview={courseOverview} selected={ singleVideo.id === videoID } />
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

                                <div className={"hidden lg:block space-y-5 overflow-y-scroll px-4 py-6 lg:w-[30%] xl:w-[20%] h-[180vh] bg-stone-100 rounded-3xl drop-shadow-xl"}>

                                    {
                                        courseVideos.map(
                                            (singleVideo)=>{
                                                return(
                                                    <PlayerCourseCard key={singleVideo.id} singleVideo={singleVideo} courseOverview={courseOverview} selected={ singleVideo.id === videoID } />
                                                )
                                            }
                                        )
                                    }
                                    

                                </div>

                            </div>
                        </>
                        :
                        <CustomLoader/>
                }

            </div>
        </>


    );
}


export async function getServerSideProps(context)
{
    const {courseOverview} = context.params;
    const videoID = Number(context.query.courseHome);

    return { props: {courseOverview , videoID} }

}