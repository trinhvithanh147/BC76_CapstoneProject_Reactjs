import React, { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import { Rate } from "antd";
import { congViecService } from "../../services/congViec.service";
import Icon from "../../components/Icon";
 
const DetailJob = () => {
  const navigate = useNavigate();
  const [listDetailJob, setlistDetailJob] = useState([]);
  const param = useParams();
  useEffect(() => {
    congViecService
      .getCongViecTheoTen(param.slug)
      .then((res) => {
        setlistDetailJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.slug]);

  const StarRating = ({ numOfStars }) => {
    return <Rate disabled defaultValue={numOfStars} />;

  };

  const showDanhMucCongViec = () => {
    return (
      
      listDetailJob && (
        <div className="container  py-5">
          <div className="grid grid-cols-4 gap-4">
            {listDetailJob.map((item, index) => (
              <div key={index} className="relative">
              <Link className="hinhAnh" to={`/search-job/${param.slug}/${item.id}`}>
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
                to={`/search-job/${param.slug}/${item.id}`}
                className="inline-block mt-[5px] pt-[8px] tenCongViec hover:underline w-[full]"
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
            ))}
          </div>
        </div>
        // {Array.from({length:5}).map((item,index)=>{
        //   return soSao < index : saocomau ? sao kjong mau
        // })}
      )
    );
  };

  return <div>{showDanhMucCongViec()}</div>;
};

export default DetailJob;
