import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";
import {Tab} from "@headlessui/react";
import {getBlogCategories, getCodeOfVideo, getCourseDetail, getCourseVideos} from "@/Api_Services/apiServices";
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


export default function CourseHome({courseOverview , videoID })
{
    const [loadPage , setLoadPage] = useState(false)

    const router = useRouter()
    const {courseHome} = router.query
    console.log(courseHome)

    const { courseDetails, setCourseDetails , courseVideos, setCourseVideos , videoCode, setVideoCode } = useContext(courseHomeContext)
    const [currentVideo , setCurrentVideo] = useState(null)


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
        getCodeOfVideo(videoID) .then( (data3) => {  setVideoCode(data3) } )
    }


    useEffect(() =>
    {
        loadCurrentVideo()
    }, [currentVideo]);

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
            console.log("running")
            console.log(courseVideos)
            if(courseVideos!==null)
            {
                setCurrentVideo( courseVideos.filter( (obj)=>{ return obj.id === videoID } )[0] )
                if(videoCode===null)
                    setVideoCode([])
                setLoadPage(true)
            }
            else
            {
                load()
            }
        }
        ,[courseVideos , courseHome])



    return(

        <div>
            {
                loadPage ?
                    <div className={"flex flex-row "}>
                        <div className={"px-0 py-6 lg:p-7"}>
                            <div className={"bg-stone-100 rounded-3xl drop-shadow-xl px-2 py-6 lg:p-6 flex flex-col justify-center space-y-9"}>


                                {/* Embedded Youtube Video */}
                                <div className={"mx-auto"}>
                                    <YoutubePlayer videoId={`${currentVideo.get_video_id}`} autoPlayFeatureSwitch={true} />
                                </div>

                                <div className={"hidden lg:block"}>
                                    {/* Video Description */}
                                    <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>

                                        <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                            Description
                                        </h1>

                                        <div className={"mx-6 text-lg mt-8"}>

                                            <HTMLDataParser htmlData={currentVideo.videoDescription} />

                                        </div>

                                    </div>

                                    {/* Divider Line */}
                                    <div className={"rounded-full border border-gray-300 my-10 mx-20"}></div>

                                    {/* Provided Code */}
                                    <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-full lg:w-[52vw] mx-auto 2xl:w-[70rem]"}>
                                        <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                            &lt; Code /&gt;
                                        </h1>


                                        <div className={"mx-6 text-lg mt-4 space-y-20"}>

                                            {/*<CustomLoader loading={codes.loading}/>*/}

                                            {
                                                videoCode.map(
                                                    (singleCode)=>
                                                    {
                                                        return(
                                                            <p>
                                                                <h4 className={"text-2xl font-bold"}>{singleCode.codeTitle}</h4>
                                                                <pre>
                                                                    <code className={`language-${singleCode.codeLanguage}`}>
                                                                        {singleCode.codeSource}
                                                                    </code>
                                                                </pre>
                                                            </p>
                                                        )
                                                    }
                                                )
                                            }

                                        </div>
                                    </div>

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
                                                    <div className={"rounded-full border border-gray-400 mx-10 lg:mx-28"}></div>

                                                    {/* Provided Code */}
                                                    <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-[22rem] sm:w-[34rem] md:w-[45rem] mx-auto lg:w-[70rem]"}>
                                                        <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                                                            &lt; Code /&gt;
                                                        </h1>

                                                        <div className={"text-lg mt-4 "}>

                                                            {/*<CustomLoader loading={codes.loading}/>*/}

                                                            <div className={"px-2 py-10"}>

                                                                {
                                                                    videoCode.map(
                                                                        (singleCode)=>
                                                                        {
                                                                            return(
                                                                                <p>
                                                                                    <h4 className={"text-2xl font-semibold"}>{singleCode.codeTitle}</h4>
                                                                                    <pre>
                                                                                        <code className={`language-${singleCode.codeLanguage}`}>
                                                                                            {singleCode.codeSource}
                                                                                        </code>
                                                                                    </pre>
                                                                                </p>
                                                                            )
                                                                        }
                                                                    )
                                                                }

                                                            </div>



                                                        </div>

                                                    </div>

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

                        <div className={"hidden lg:block space-y-5 p-5 overflow-y-scroll my-7 h-[160vh] bg-stone-100 rounded-3xl drop-shadow-xl mr-6"}>

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
                    :
                    <CustomLoader/>
            }

        </div>
    );
}


export async function getServerSideProps(context)
{
    const {courseOverview} = context.params;
    const videoID = Number(context.query.courseHome);

    return {
        props: {courseOverview , videoID},
    }

}