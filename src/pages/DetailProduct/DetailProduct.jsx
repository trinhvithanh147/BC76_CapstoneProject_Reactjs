import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { congViecService } from "../../services/congViec.service"
import { HomeOutlined, StarOutlined } from "@ant-design/icons"
import CustomPrevArrow from "../../components/arrow/CustomPrevArrow"
import CustomeNextArrow from "../../components/arrow/CustomeNextArrow"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon from "../../components/Icon";
import './detailProduct.scss'
import { Rate } from "antd"
const DetailProduct = () => {
    const StarRating = ({ numOfStars }) => {
        return <Rate disabled defaultValue={numOfStars} />;

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
    return (
        <section className="container">
            <div className=" flex items-start flex-row pt-[32px] px-[24px] pb-10">
                <div className="w-[33.6%] order-2 ">

                </div>
                <div className="main w-[57.42%] mr-[9.15%] order-1">
                    <div className="mb-[28px] pt-[6px]">
                        <Link to={"/"} className="inline-block pr-2 text-[14px] text-[#222325] "><HomeOutlined /></Link> / <Link className="inline-block pl-2 text-[14px] hover:underline">{detailJobId[0]?.tenNhomChiTietLoai}</Link>
                    </div>
                    <div className="overview">
                        <h1 className="text-[28px] text-[#222325] leading-[36px] pb-4 font-bold">{detailJobId[0]?.congViec.tenCongViec}</h1>
                    </div>
                    <div className="seller_overview ">
                        <div className="flex gap-4 mb-7">
                            <div className="cursor-pointer">
                                <img src={detailJobId[0]?.avatar} alt="" className="w-[64px] h-[64px border-[#e4e5e7] bg-[#1d3369] rounded-[50%]" />
                            </div>
                            <div className="flex flex-col">
                                <div>{detailJobId[0]?.tenNguoiTao}</div>
                                <div>
                                    <StarOutlined />{detailJobId[0]?.congViec.saoCongViec} ({detailJobId[0]?.congViec.danhGia} review)
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="mb-[64px]">
                        <img src={detailJobId[0]?.congViec.hinhAnh} alt="" className="w-full h-full min-h-[140px] min-w-[140px] object-contain max-h-[full] max-w-[full] hover:scale-[1.04] rounded-2xl" />
                    </div>
                    <div>
                        <h1 className="pb-[25px]">About this gig</h1>
                        <p className="mb-5">{detailJobId[0]?.congViec.moTa} </p>
                    </div>
                    <div className="p-[32px] bg-[#fafafa] border-[#e4e5e7]">
                        <div className="pb-6">
                            <h1 className="text-[24px] leading-[130%] font-bold">Recommended for you </h1>
                        </div>
                        <Slider {...slideProduct} className="recommened" >
                            {jobRelated && jobRelated.map((item, index) => {
                                return (<div key={index} >
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
                                        className="inline-block mt-[5px] pt-[8px] tenCongViec hover:underline w-[full]"
                                    >
                                        {item.congViec.tenCongViec}
                                    </Link>
                                    <div className="flex mt-2">
                                        <div className="flex items-center text-[16px] leading-[24px]">
                                            <strong className="pl-1 ">
                                                <StarRating numOfStars={item.congViec.saoCongViec} />
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
                                </div>)

                            })}
                        </Slider>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DetailProduct