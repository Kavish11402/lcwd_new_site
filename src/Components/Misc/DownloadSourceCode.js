import {useContext} from "react";
import courseHomeContext from "@/Context/CourseHomeContext";


export default function DownloadSourceCode({codes})
{

    const { setIsOpen , setCode , downloadData } = useContext(courseHomeContext)









    function downloadSourceCode (code)
    {

        if (code.paid)
        {
            setCode(code)
            setIsOpen(true)
        }
        else
        {
            downloadData(code)
        }
    }
    return (
        <div className={"space-y-10"}  >
            {
                codes && codes.map((c, i) =>
                    (
                        <div key={i} className={"rounded-3xl bg-card-color drop-shadow-xl px-6 py-10 space-y-4"} >


                            <h3 className={"text-3xl font-semibold underline underline-offset-4 "}> {c.resourceTitle} </h3>

                            <h4 className={"text-xl"}> {c.resourceDescription} </h4>

                            <div className={"flex flex-row justify-center py-5"} >
                                <button
                                    className={`${c.paid? 'bg-rose-500 hover:bg-rose-600' : 'bg-indigo-400 hover:bg-indigo-500'} text-white text-xl md:text-2xl px-16 py-4 rounded-3xl font-semibold underline underline-offset-4 transition-all ease-linear`}
                                    onClick={ () => downloadSourceCode(c) }
                                >
                                    Download {c.paid ? `@ ₹ ${c.price}` : 'For Free'}
                                </button>
                            </div>

                            <div className={""}> </div>

                            {c.paid ? <p className={"text-xl font-semibold animate-TextWarningColor"} > Money is not refundable.</p> : ''}

                            <div className={"text-lg md:text-xl"}>

                                <div className={"flex flex-row justify-center mb-4"}>
                                    <div className={"rounded-full border-2 border-gray-300 w-full my-auto h-0"}></div>
                                    <p className={"px-4 text-2xl font-semibold"}>NOTE</p>
                                    <div className={"rounded-full border-2 border-gray-300 w-full my-auto h-0"}></div>
                                </div>

                                <div className={"space-y-2"}>
                                    <p>Dont run the code directly , First understand then use this resource in your code.</p>
                                    <p>For any query  send message to telegram username: <b>@help889</b></p>
                                    <p>you can also send email : <b>support@learncodewithdurgesh.com</b></p>
                                </div>
                            </div>


                        </div>
                    )
                )

            }
        </div>
    )
}