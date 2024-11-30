import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemPopularService from "./ItemPopularService";
import CustomPrevArrow from "../../../components/arrow/CustomPrevArrow";
import CustomeNextArrow from "../../../components/arrow/CustomeNextArrow";



const PopularService = () => { 
    const popularServices = {
      infinite: true, // Lặp lại các slides
      speed: 500, // Tốc độ chuyển slide (ms)
      slidesToShow: 6, // Số slides hiển thị cùng lúc
      slidesToScroll: 4, // Số slides cuộn mỗi lần
      autoplay: false, // Tự động chuyển slide
      autoplaySpeed: 2000, // Thời gian giữa các lần chuyển slide (ms)
      prevArrow: <CustomPrevArrow/>,
      nextArrow: <CustomeNextArrow/>,
    };
    return (
      <section className="container py-[40px]">
        <div className="flex flex-col gap-8">
          <div className="title">
            <h2 className="text-[48px] leading-[105%] max-w-[720px] text-[#404145] font-normal">
              Popular services
            </h2>
          </div>
          <div className="popularServices_slide">
            <Slider {...popularServices}>
              <ItemPopularService
                content={"Website Development"}
                image={"./../../../../public/website-development.png"}
                bgcolor={"#00732e"}
              />
              <ItemPopularService
                content={"Logo Design"}
                image={"./../../../../public/logo-design.png"}
                bgcolor={"#ff7640"}
              />
              <ItemPopularService
                content={"SEO"}
                image={"./../../../../public/seo.png"}
                bgcolor={"#003912"}
              />
              <ItemPopularService
                content={"Architecture & Interior Design"}
                image={"./../../../../public/architecture-design.png"}
                bgcolor={"#4D1727"}
              />
              <ItemPopularService
                content={"Social Media Marketing"}
                image={"./../../../../public/social-media-marketing.png"}
                bgcolor={"#687200"}
              />
              <ItemPopularService
                content={"Voice Over"}
                image={"./../../../../public/voice-over.png"}
                bgcolor={"#421300"}
              />
              <ItemPopularService
                content={"UGC Videos"}
                image={"./../../../../public/UGC Video img.png"}
                bgcolor={"#BE5272"}
              />
              <ItemPopularService
                content={"Software Development"}
                image={"./../../../../public/software-development.png"}
                bgcolor={"#254200"}
              />
              <ItemPopularService
                content={"Data Science & ML"}
                image={"./../../../../public/data-science.png"}
                bgcolor={"#8F2900"}
              />
              <ItemPopularService
                content={"Product Photography"}
                image={"./../../../../public/product-photography.png"}
                bgcolor={"#687200"}
              />
              <ItemPopularService
                content={"E-Commerce Marketing"}
                image={"./../../../../public/e-commerce.png"}
                bgcolor={"#00732E"}
              />
              <ItemPopularService
                content={"Video Editing"}
                image={"./../../../../public/video-editing.png"}
                bgcolor={"#BE5272"}
              />
            </Slider>
          </div>
        </div>
      </section>
    );
};

export default PopularService;