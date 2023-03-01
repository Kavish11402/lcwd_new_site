
function OutlineStar()
{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
        </svg>
    )
}
function SolidStar()
{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-500">
            <path fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
            />
        </svg>
    );
}

function StarGenerator(rating)
{
    return (
        <div className={"flex flex-row justify-center"}>
            {
                [1,2,3,4,5].map(
                    (num) =>
                    {
                        if(num<=rating) return <SolidStar key={num}/>
                        return <OutlineStar key={num}/>
                    })
            }
        </div>
    )
}

export default function ReviewCard( { ReviewMsg  , ReviewerName , ReviewerDesignation , RatingInInteger , marginFor } )
{

    return(
        <div className={`w-[20rem] sm:w-[35rem] lg:w-[45rem] min-h-[35rem] lg:min-h-[20rem]
                        drop-shadow-xl lg:drop-shadow-2xl 
                        flex flex-col justify-between py-12 px-5 rounded-3xl bg-rose-50
                        ${ marginFor==="homePageReview" ? "mx-auto my-6 lg:mx-20 lg:my-16" : "" }
                        ${ marginFor==="reviewPage" ? "mx-auto my-10" : "" }
                        `}
        >

            {/* Review Message Here */}
            <h1 className={"text-lg lg:text-xl text-gray-600 text-justify mb-8"}>{ReviewMsg}</h1>

            <div className={"flex flex-row justify-center lg:justify-between"}>

                {/* Student Details */}
                <div className={"flex flex-row justify-center"}>

                    {/* Student's Image */}
                    {/*<Image className={"rounded-full w-20 lg:w-24"} src={ReviewerImg} alt={"Reviewer Image"}/>*/}
                    <div className={"rounded-full w-20 h-20 bg-gradient-to-br from-white via-violet-400 to-purple-500 flex flex-col justify-center"}>
                        <h1 className={"w-fit mx-auto text-4xl font-semibold text-white"}>{ReviewerName.substring(0,1)}</h1>
                    </div>


                    {/* Student Name & Designation */}
                    <div className={"hidden lg:inline-flex flex flex-col justify-center ml-5"}>
                        <h1 className={"font-bold text-xl"}>{ReviewerName}</h1>
                        <h2 className={"text-lg"}>{ReviewerDesignation}</h2>
                    </div>
                </div>

                {/* Rating in Stars */}
                <div className={"hidden lg:inline-flex flex flex-col justify-center  "}>
                    <p className={"w-fit mx-auto mb-2 underline underline-offset-4 font-medium"}>Rating out of 5</p>
                    {StarGenerator(RatingInInteger)}
                </div>

            </div>


            <div className={"lg:hidden"}>

                {/* Student Name & Designation */}
                <div className={"mt-2"}>
                    <h1 className={"font-bold text-xl text-center"}>{ReviewerName}</h1>
                    <h2 className={"text-lg text-center"}>{ReviewerDesignation}</h2>
                </div>

                {/* Rating in Stars */}
                <div className={"mt-3"}>
                    {StarGenerator(RatingInInteger)}
                </div>

            </div>

        </div>
    );
}