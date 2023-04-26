import React, { useState } from "react";
import courseHomeContext from "./CourseHomeContext";
import {toast} from "react-toastify";
import {createOrder, downloadFile, successPayment} from "@/Api_Services/apiServices";
import fileDownload from "js-file-download";


export default function CourseHomeProvider ({ children })
{
    const [courseDetails, setCourseDetails] = useState(null);
    const [courseVideos, setCourseVideos] = useState(null);
    const [videoCode, setVideoCode] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [code,setCode] = useState(null)

    const [ allGlobalBlogs , setAllGlobalBlogs ] = useState(null)


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
        }).catch(() => {
            toast.error("Error in downloading file")
        })
    }

    async function downloadPaidMaterial( code , uName , uContact , uEmail )
    {
        const res = await initializeRazorpay();
        if (!res)
        { toast.error('Razorpay SDK Failed to load'); }
        else
        {

            toast.success("Creating Order ", { position: 'bottom-center' })

            createOrder(code.price).then((ob) =>
            {
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
                            name: `${uName}`, email: `${uEmail}`, contact: `+91${uContact}`,
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
                        let res = {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            rid: code.id,
                        }

                        successPayment(res).then((data) => {
                            if (data.payment_captured) {
                                toast.success("All done.. downloading the file..", { position: 'bottom-center' })
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


    return (
        <courseHomeContext.Provider
            value={
                {
                    courseDetails,
                    setCourseDetails,
                    courseVideos,
                    setCourseVideos,
                    videoCode,
                    setVideoCode,
                    isOpen,
                    setIsOpen,
                    code,
                    setCode,
                    downloadPaidMaterial,
                    downloadData,
                    allGlobalBlogs,
                    setAllGlobalBlogs

                }
        }
        >
            {children}
        </courseHomeContext.Provider>
    );
};