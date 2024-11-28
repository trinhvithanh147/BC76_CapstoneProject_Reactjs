import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { congViecService } from "../../../services/congViec.service";
import "./recentlyViewed.scss";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import CustomPrevArrow from "../../../components/arrow/CustomPrevArrow";
import CustomeNextArrow from "../../../components/arrow/CustomeNextArrow";

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const ids = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16]; 
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          ids.map((item) => congViecService.layMaCongViec(item)) 
        );
        const allData = results.map((res) => res.data.content).flat();
        setRecentlyViewed(allData);
        console.log(allData)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false, // Hiển thị dấu chấm điều hướng
    infinite: true, // Lặp lại các slides
    speed: 500, // Tốc độ chuyển slide (ms)
    slidesToShow: 5, // Số slides hiển thị cùng lúc
    slidesToScroll: 1, // Số slides cuộn mỗi lần
    autoplay: false, // Tự động chuyển slide
    autoplaySpeed: 2000, // Thời gian giữa các lần chuyển slide (ms)
    arrows: true,
    prevArrow: <CustomPrevArrow/>,
    nextArrow: <CustomeNextArrow/>
  };

  return (
    <section className="container py-[40px]">
      <div className="titles pb-6">
        <div className="title">
          <h4 className="inline-block text-[48px] leading-[105%] max-w-[720px] tracking-[-1.44px] font-normal text-[#404145]">
            Recently Viewed & More
          </h4>
        </div>
      </div>
      <div className="viewed_slider">
        <Slider {...settings}>
          {recentlyViewed.map((item, index) => {
            return (
              <div key={index} className="relative">
                <Link className="hinhAnh">
                  <img
                    src={item.congViec.hinhAnh}
                    alt=""
                    className="w-full block rounded-lg "
                  />
                </Link>
                <div className="icon_heart absolute top-[16px] right-[16px]">
                  <Icon.traiTim />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="avatar hover:drop-shadow-custom hover:brightness-110">
                        <img
                          src={item.avatar}
                          alt=""
                          className="w-[24px] h-[24px] rounded-[50px]"
                        />
                      </div>
                      <div className="userName">
                        <Link>
                          <h3 className="text-[16px] text-[#404145] font-semibold hover:underline">
                            {item.tenNguoiTao}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-block mt-[5px] pt-[8px] tenCongViec hover:underline"
                >
                  {item.congViec.tenCongViec}
                </Link>
                <div className="flex mt-2">
                  <div className="flex items-center text-[16px] leading-[24px]">
                    <div>
                      <Icon.ngoiSao />
                    </div>
                    <strong className="pl-1 saoCongViec">
                      {item.congViec.saoCongViec}
                    </strong>
                    <span className="inline-block pl-1">
                      (<span>{item.congViec.danhGia}</span>)
                    </span>
                  </div>
                </div>
                <Link className="mt-2 giaTien">
                  <span className="font-bold text-[#222325]">
                    From US${item.congViec.giaTien}
                  </span>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default RecentlyViewed;
