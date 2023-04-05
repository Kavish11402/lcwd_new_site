import { getLatestBlogs } from "@/Api_Services/apiServices";
import blogContext from "@/Context/BlogContext";
import { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestBlogCard from "@/Components/BlogsComponent/LatestBlogCard";

export default function LatestBlog()
{
    const { latestBlogs, setLatestBlogs } = useContext(blogContext);

    useEffect(() => {
        if (!latestBlogs) { loadLatestBlogs(); }
    }, []);


    async function loadLatestBlogs()
    {
        try {
            const blogs = await getLatestBlogs();
            setLatestBlogs(blogs);
        } catch (error) { console.log(error); }
    }

    return (
        <div>
            <div className="py-3">
                <h1 className="p-5 underline underline-offset-8 lg:text-5xl text-primary-dark text-center text-2xl font-bold">
                    Trending Blogs
                </h1>
                <Slider
                    className={"my-10 overflow-clip mx-auto"}
                    slidesToShow={3} autoplay={true}
                    speed={1500} autoplaySpeed={5000}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: { slidesToShow: 2, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 1023,
                            settings: { slidesToShow: 1, slidesToScroll: 1 },
                        },
                    ]}
                >
                    { latestBlogs && latestBlogs.map( (blog, index) => { return(<LatestBlogCard key={index} blog={blog} />) } ) }
                </Slider>
            </div>
        </div>
    );
}
