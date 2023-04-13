import {Dialog} from "@headlessui/react";
import courseHomeContext from "@/Context/CourseHomeContext";
import {useContext, useRef} from "react";

export default function PaymentDialogBox()
{
    const { isOpen , setIsOpen , downloadPaidMaterial , code } = useContext(courseHomeContext)

    const userName = useRef(null)
    const userContactNo = useRef(null)
    const userEmail = useRef(null)

    function formHandler()
    {
        setIsOpen(false)
        downloadPaidMaterial( code , userName.current.value , userContactNo.current.value , userEmail.current.value )
    }


  return(
      <Dialog open={ isOpen } onClose={ () => setIsOpen(false) } className="relative z-40">

          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          <div className="fixed inset-0 flex items-center justify-center p-2 lg:p-8">
              <div className={"w-[80%] md:w-1/2 lg:w-[50rem] rounded-xl bg-white"}>


                  <form onSubmit={ (event)=>{ event.preventDefault(); formHandler() } } >

                      {/*Header*/}
                      <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-6"} >Payment Details</header>


                      {/*Body*/}
                      <div className={"py-5 px-8"}>




                          {/* Product Name */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Name</p>
                              <input type={"text"} ref={userName} required className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Your Name" />
                          </div>



                          {/* Product Email */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Email ID</p>
                              <input type={"email"} ref={userEmail} required className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Your Email Id" />
                          </div>




                          {/* Product Contact */}
                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Contact Number</p>
                              <input type={"number"} ref={userContactNo} required className=" w-full rounded-xl px-2 border-2 border-black focus:border-indigo-500 focus:shadow-md" placeholder="Your Contact Number" />
                          </div>
                      </div>


                      {/*Footer*/}
                      <footer className={"bg-gray-400/50 rounded-b-xl py-4 flex justify-between"} >

                          <button className={"bg-secondary-medium hover:bg-secondary-dark transition-all ease-linear text-black shadow-sm  font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setIsOpen(false)}}>
                              Cancel
                          </button>

                          <button type={"submit"} className={"bg-primary-medium hover:bg-primary-dark transition-all ease-linear text-black shadow-sm font-bol mx-6 rounded-lg py-2 px-4"} >
                              Submit
                          </button>

                      </footer>

                  </form>


              </div>
          </div>

      </Dialog>
  );
}