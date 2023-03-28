import {createOrder, downloadFile, successPayment} from "@/Api_Services/apiServices"
import {toast} from 'react-toastify'
import fileDownload from "js-file-download";


export default function DownloadSourceCode({codes})
{


    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };


    function downloadData(code) {
        downloadFile(code.id).then(res => {
            fileDownload(res, code.resourceTitle + '.zip')
            toast.success("File Downloaded", {
                position: 'bottom-center'
            })
        }).catch(error => {
            console.log(error)
            toast.error("Error in downloading file")
        })


    }

    const downloadSourceCode = async (code) => {

        if (code.paid) {
            const res = await initializeRazorpay();
            if (!res) {
                toast.error('Razorpay SDK Failed to load');
            } else {

                toast.success("Creating Order ", {
                    position: 'bottom-center'
                })

                createOrder(code.price).then((ob) => {
                    if (ob.msg === 'created')
                    {
                        let options = {
                            // key: 'rzp_test_ur8jU7Ib5K6wfT',
                            key: "rzp_test_qxy2mqh7szMHP4", // Enter the Key ID generated from the Dashboard
                            amount: ob.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                            currency: "INR",
                            description: "Payment for Resources",
                            image: "https://yt3.ggpht.com/HptM-9X9Z7whZFiR5DPREm15PqbQ5k843FxN_Wil5GSD4O-lMK854JV4YOUJY-EArf0XQ1MF6reOVQ=s800-c-fcrop64=1,00000000ffffffff-nd-v1-rwa",
                            order_id: ob.orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                            prefill: {
                                name: "", email: "", contact: "",
                            },
                            notes: {
                                address: "",
                            },
                            theme: {
                                color: "#F59E0B",
                            },

                        }


                        options.handler = (response) => {
                            // create success call
                            console.log(response.razorpay_payment_id);
                            console.log(response.razorpay_order_id);
                            console.log(response.razorpay_signature);
                            let res = {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                                rid: code.id,
                            }

                            successPayment(res).then((data) => {
                                console.log(data)
                                if (data.payment_captured) {
                                    toast.success("All done.. downloading the file..", {
                                        position: 'bottom-center'
                                    })
                                    downloadData(code)
                                }
                            })


                        }


                        const rzp = new window.Razorpay(options)
                        rzp.open()
                    }

                })

            }
        }
        else
        {
            downloadData(code)
        }
    }
    return (
        <div className={"space-y-10"} >
            {
                codes && codes.map((c, i) =>
                    (
                        <div key={i} className={"rounded-3xl bg-card-color drop-shadow-xl px-6 py-10 space-y-4"} >


                            <h3 className={"text-3xl font-semibold underline underline-offset-4 "}> {c.resourceTitle} </h3>

                            <h4 className={"text-xl"}> {c.resourceDescription} </h4>

                            <div className={"flex flex-row justify-center py-5"} >
                                <button
                                    className={`${c.paid? 'bg-rose-500 hover:bg-rose-600' : 'bg-indigo-400 hover:bg-indigo-500'} text-white text-xl md:text-2xl px-16 py-4 rounded-3xl font-semibold underline underline-offset-4 transition-all ease-linear`}
                                    onClick={() => downloadSourceCode(c)}
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