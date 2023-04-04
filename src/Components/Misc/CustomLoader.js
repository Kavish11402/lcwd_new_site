import {TailSpin} from "react-loader-spinner";

export default function CustomLoader()
{
    return(
        <div className={"relative h-[92vh] flex flex-col justify-center"}>


            <div className={"mx-auto flex flex-col space-y-6"}>


                <TailSpin
                    height="120"
                    width="120"
                    color={"#F59E0B"}
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="mx-auto"
                />

                <p className={"mx-auto text-md md:text-xl lg:text-2xl font-semibold"}> Loading Please Wait .... </p>
            </div>

            <div className={"absolute top-0 bottom-0 left-0 right-0 -z-30 flex flex-col justify-center "}>

                <p className={"mx-auto text-[6rem] md:text-[12rem] xl:text-[18rem] 2xl:text-[20rem] text-gray-100 font-bold"}>
                    L.C.W.D
                </p>

            </div>

        </div>
    )
}