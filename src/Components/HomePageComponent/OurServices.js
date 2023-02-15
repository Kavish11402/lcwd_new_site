import developmentIcon from "@/Assets/Icons/development.png"
import corporate_training from "@/Assets/Icons/corporate_training.png"
import collage_training from "@/Assets/Icons/collage_Training.png"
import seminar from "@/Assets/Icons/seminar.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleService from "@/Components/HomePageComponent/SingleReuseableComponents/SingleService";


export default function OurServices()
{
  return(
      <div className={"flex flex-col py-10"}>

          <h1 className={"mb-10 lg:mb-16 text-center text-2xl font-bold underline underline-offset-8 text-primary-dark lg:text-5xl"}> Services We Provide </h1>




          <div>

              <Slider className={"my-6 w-[97%] mx-auto"}
                      slidesToShow={ 2 }
                      autoplay={true}
                      speed={1500}
                      autoplaySpeed={5000}
                      responsive=
                          {
                              [
                                  { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                                  { breakpoint: 1023, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                              ]
                          }
              >



                  <SingleService bannerImg={corporate_training} Heading={"Corporate Training"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus aliquet, facilisis mi et, molestie ligula. Phasellus a risus et ipsum lobortis lobortis. Nullam a varius augue. Aenean mi mi, ultricies sed tincidunt vitae, egestas ac quam."}/>

                  <SingleService bannerImg={seminar} Heading={"Seminar"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus aliquet, facilisis mi et, molestie ligula. Phasellus a risus et ipsum lobortis lobortis. Nullam a varius augue. Aenean mi mi, ultricies sed tincidunt vitae, egestas ac quam."}/>

                  <SingleService bannerImg={developmentIcon} Heading={"Development"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus aliquet, facilisis mi et, molestie ligula. Phasellus a risus et ipsum lobortis lobortis. Nullam a varius augue. Aenean mi mi, ultricies sed tincidunt vitae, egestas ac quam."}/>

                  <SingleService bannerImg={collage_training} Heading={"Collage Training"} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lacus aliquet, facilisis mi et, molestie ligula. Phasellus a risus et ipsum lobortis lobortis. Nullam a varius augue. Aenean mi mi, ultricies sed tincidunt vitae, egestas ac quam."}/>






              </Slider>


          </div>





    </div>
  );
}