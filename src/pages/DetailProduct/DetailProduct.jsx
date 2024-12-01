import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { congViecService } from "../../services/congViec.service"
import { HomeOutlined, ShareAltOutlined, StarOutlined } from "@ant-design/icons"
import CustomPrevArrow from "../../components/arrow/CustomPrevArrow"
import CustomeNextArrow from "../../components/arrow/CustomeNextArrow"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon from "../../components/Icon";
import './detailProduct.scss'
import { Rate } from "antd"
import { binhLuan } from "../../services/binhLuan.service"
const DetailProduct = () => {
    const StarRating = ({ numOfStars, className = "" }) => {
        return <Rate disabled defaultValue={numOfStars} className={className} />;

    };

    const slideProduct = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomeNextArrow />,
    };
    const [detailJobId, setDetailJobId] = useState([])
    const [jobRelated, setJobRelated] = useState([])
    const [binhLuanJob, setBinhLuanJob] = useState([])
    const param = useParams()
    console.log(param)
    useEffect(() => {
        congViecService.layMaCongViec(param.id)
            .then((res) => {
                console.log(res.data.content)
                setDetailJobId(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [param.id])
    useEffect(() => {
        congViecService.getCongViecTheoTen(param.slug)
            .then((res) => {
                console.log(res.data.content)
                setJobRelated(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [param.slug])
    useEffect(() => {
        binhLuan.binhLuanNguoiDung(param.id)
            .then((res) => {
                console.log(res.data.content);
                setBinhLuanJob(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [param.id]);
    return (
      <section className="container">
        <div className=" flex items-start flex-row pt-[32px] px-[24px] pb-10">
          <div className="w-[33.6%] order-2 sticky top-0 left-0">
            <div className="sidebar_content mb-4 ">
              <div className="mb-4 pb-3">
                <div className="flex justify-end items-center gap-3">
                  <div className="flex items-center">
                    <div className="inline-flex icon">
                      <Icon.traiTimCoBan />
                    </div>
                    <span className="collect_count relative py-[2px] px-[10px] ml-[13px] text-[14px] text-[#222325] danhGia border-[#dadbdd] border-[1px] rounded-[3px] ">
                      {detailJobId[0]?.congViec.danhGia}
                    </span>
                  </div>
                  <div className="share w-fit max-w-[100%] h-fit">
                    <Link className=" text-[16px] border-solid border-[#dadbdd] border-[1px]  justify-center items-center text-[#222325] bg-transparent leading-[24px] py-[8px] px-[16px] flex gap-2">
                      <ShareAltOutlined />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="basic border-[#dadbdd] border">
                <div className="text-center py-4 border-b-[#222325] border-b-[3px] border-b-solid">
                  <h1 className="   font-bold bg-white border-x-0 border-t-0 text-[16px] cursor-pointer">
                    Basic
                  </h1>
                </div>
                <div className="pt-[32px] ">
                  <div className="px-[32px]">
                    <div className="leading-[21px] pb-[10px]">
                      <div className="flex justify-between flex-row text-[24px] leading-[130%] text-[#404145] font-bold">
                        <div className="flex items-start flex-col">
                          <span className="price">
                            US${detailJobId[0]?.congViec.giaTien}
                          </span>
                          <div className="flex gap-2 mt-[2px] font-normal text-[16px] leading-[24px] items-center">
                            <span className="font-semibold leading-[24px] text-[16px]">
                              Save up to 20% with{" "}
                              <span className="text-[#026a5d] font-semibold">
                                Subscribe to Save
                              </span>
                            </span>
                            <div className="flex">
                              <Icon.chamHoi />
                            </div>
                          </div>
                          <div className="mb-[10px] mt-7">
                            <p className="text-[16px] leading-[21px] font-normal text-[#62646a]">
                              {detailJobId[0]?.congViec.moTaNgan}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col px-[24px] pb-[20px] text-[#404145] justify-between w-full leading-[100%]">
                    <Link className="py-[12px] hover:bg-[#404145] transition-all duration-75 relative px-[24px] font-semibold text-[16px] inline-block rounded-[4px] border border-solid border-transparent text-center bg-black text-white ">
                      Continue
                      <span className="inline-block float-right fill-white w-[16px] h-[16px]">
                        <Icon.arrowRight />
                      </span>
                    </Link>
                    <Link className="flex justify-center font-normal items-center text-[#222325] pt-[12px] text-[14px] leading-[21px]">
                      Compare packages
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-[16px] pt-[24px] px-[24px]">
                <Link className=" bg-inherit w-full transition-all duration-75 hover:bg-[#404145] hover:text-white border-transparent py-[12px] relative px-[24px] font-semibold text-[16px] inline-block rounded-[4px] border border-solid border-[#222325] text-center   ">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          <div className="main w-[57.42%] mr-[9.15%] order-1">
            <div className="mb-[28px] pt-[6px]">
              <Link
                to={"/"}
                className="inline-block pr-2 text-[14px] text-[#222325] "
              >
                <HomeOutlined />
              </Link>{" "}
              /{" "}
              <Link className="inline-block pl-2 text-[14px] hover:underline">
                {detailJobId[0]?.tenNhomChiTietLoai}
              </Link>
            </div>
            <div className="overview">
              <h1 className="text-[28px] text-[#222325] leading-[36px] pb-4 font-bold">
                {detailJobId[0]?.congViec.tenCongViec}
              </h1>
            </div>
            <div className="seller_overview ">
              <div className="flex gap-4 mb-7">
                <div className="cursor-pointer">
                  <img
                    src={detailJobId[0]?.avatar}
                    alt=""
                    className="w-[64px] h-[64px border-[#e4e5e7] bg-[#1d3369] rounded-[50%]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="capitalize">
                    {detailJobId[0]?.tenNguoiTao}
                  </div>
                  <div>
                    <StarRating
                      numOfStars={detailJobId[0]?.congViec.saoCongViec}
                    />{" "}
                    <span className="underline text-[20px]">
                      ({detailJobId[0]?.congViec.danhGia} review)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[64px]">
              <img
                src={detailJobId[0]?.congViec.hinhAnh}
                alt=""
                className="w-full h-full min-h-[140px] min-w-[140px] object-contain max-h-[full] max-w-[full] hover:scale-[1.04] rounded-2xl"
              />
            </div>
            <div>
              <h1 className="pb-[25px] text-[20px] leading-[28px] font-bold">
                About this gig
              </h1>
              <p className="mb-5">{detailJobId[0]?.congViec.moTa} </p>
            </div>
            <div className="p-[32px] bg-[#fafafa] border-[#e4e5e7] shadow-md">
              <div className="pb-6">
                <h1 className="text-[24px] leading-[130%] font-bold">
                  Recommended for you{" "}
                </h1>
              </div>
              <Slider {...slideProduct} className="recommened">
                {jobRelated &&
                  jobRelated.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link className="hinhAnh">
                          <img
                            src={item.congViec.hinhAnh}
                            alt=""
                            className="w-full rounded-lg "
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
                                  <h3 className="text-[16px] text-[#404145] font-semibold hover:underline capitalize">
                                    {item.tenNguoiTao}
                                  </h3>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          href=""
                          className="inline-block mt-[5px] pt-[8px] tenCongViec hover:underline w-[full]"
                        >
                          {item.congViec.tenCongViec}
                        </Link>
                        <div className="flex mt-2">
                          <div className="flex items-center text-[16px] leading-[24px]">
                            <strong className="pl-1 ">
                              <StarRating
                                numOfStars={item.congViec.saoCongViec}
                              />
                            </strong>
                            <span className="inline-block pl-1">
                              (<span>{item.congViec.danhGia}</span>)
                            </span>
                          </div>
                        </div>
                        <Link className="mt-2">
                          <span className="font-bold text-[#222325]">
                            From US${item.congViec.giaTien}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
              </Slider>
            </div>
            {binhLuanJob.length > 0 && (
              <div className="mt-[64px]">
                <div className="font-bold text-[20px] leading-[28px] mb-[16px] color-[#404145]">
                  Reviews
                </div>
                <div className="reviews-package ">
                  {binhLuanJob.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="border-[#e4e5e7] border rounded-2xl border-solid mt-[32px]">
                          <div className="flex flex-col gap-4 py-[16px] px-[24px]  ">
                            <div className="flex flex-row gap-4 justify-between">
                              <div className="flex gap-4">
                                <div className="">
                                  <img
                                    src={item.avatar}
                                    alt=""
                                    className=" h-[48px]"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <div>
                                    <span>{item.tenNguoiBinhLuan}</span>
                                  </div>
                                  <div>
                                    <span>{item.ngayBinhLuan}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-3">
                              <div>
                                <StarRating
                                  numOfStars={item.saoBinhLuan}
                                  className="text-[#FFD700]"
                                />
                              </div>
                              <div>{item.noiDung}</div>
                            </div>
                          </div>
                        </div>
                        <div className="px-[12px] py-[8px]">
                          <div className="flex items-center text-[#b5b6ba]">
                            <div className="text-[#404145] font-semibold leading-[25px] text-[14px] mr-3">
                              Helpful?
                            </div>
                            <span className="flex ">
                              <span className="mr-3">
                                <div className="flex py-[2px] items-center text-[#404145] font-semibold text-[14px] leading-[21px] cursor-pointer">
                                  <span className="w-[full] h-[full] fill-[#40414] pr-1 inline-block">
                                    <Icon.like />
                                  </span>
                                  <span>Yes</span>
                                </div>
                              </span>
                            </span>
                            <span className="flex ">
                              <span className="mr-3">
                                <div className="flex py-[2px] items-center text-[#404145] font-semibold text-[14px] leading-[21px] cursor-pointer">
                                  <span className="w-[full] h-[full] fill-[#40414] pr-1 inline-block">
                                    <Icon.no />
                                  </span>
                                  <span>No</span>
                                </div>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="mt-[32px]">
              <Link className="border-[#222325] hover:bg-[#f5f5f5] font-bold text-[#222325] inline-flex items-center text-[16px] py-[8px] px-[15px] leading-[24px] border  rounded-lg  justify-center ">
                Show More Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default DetailProduct