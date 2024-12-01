import { Dropdown } from 'antd';
import "./searchService.scss";
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import {  useNavigate } from 'react-router-dom';
import { congViecService } from '../../../services/congViec.service';
import Icon from '../../../components/Icon';
import InputSearchSection from '../../../components/input/inputSearchSection/InputSearchSection';
import MenuJob from './MenuJob';
const SearchService = () => {
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (keyword) => {
    setOpenDropdown(false);
    navigate(`/search-job/${keyword}`);
  };
  const handleItemClick = (itemId) => {
    setOpenDropdown(false);
    navigate(`/search-job/${value}/${itemId}`);
  };

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleClickInputSearch = () => {
    setOpenDropdown(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search-job/${keyword}`);
    }
  };
  useEffect(() => {
    if (value) {
      congViecService
        .getCongViecTheoTen(value)
        .then((res) => {
          console.log(res);
          setListSearch(res.data.content);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);
  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item) => {
      return {
        key: item.id,
        label: (
          <div
            className="flex items-center"
            onClick={() => handleItemClick(item.id)}
          >
            <img
              src={item.congViec.hinhAnh}
              className="w-10 h-10 mr-3"
              alt=""
            />
            <div>
              <h4 className="text-lg font-semibold">
                {item.congViec.tenCongViec}
              </h4>
              <p className="mt-2">{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
      };
    });
  }, [listSearch]);
  return (
    <>
      <section className="overflow-hidden ">
        <div className="container mb-4">
          <div className="searchService_item lg:flex justify-center items-center flex-col w-full h-full relative lg:p-0 py-10 px-5 bg-custom-gradient">
            <div className="searchSerice_search flex justify-center items-center flex-col gap-10">
              <h1 className="text-white text-center lg:font-normal lg:text-[60px] lg:tracking-[-.02em] text-[32px] lg:max-w-[800px] lg:leading-[69px] leading-[35.2px] max-w-[328px]   tracking-[-.04em]">
                Scale your professional workforce with freelancers
              </h1>
              <div className="searchService_info ">
                <Dropdown
                  trigger={["click"]}
                  overlayClassName="dropdown-suggest_2 "
                  open={openDropdown}
                  menu={{
                    items: itemListSearch,
                    onMouseLeave: () => {
                      setOpenDropdown(false);
                    },
                  }}
                >
                  <div className="flex justify-center items-center ">
                    <InputSearchSection
                      className="input_search_service "
                      handleSearch={handleSearch}
                      handleChange={handleChangeKeyword}
                      value={keyword}
                      placeholder={"Search for any service..."}
                      handleClick={handleClickInputSearch}
                      handleKeyDown={handleKeyDown}
                    />
                  </div>
                </Dropdown>
              </div>
            </div>
            <div className="lg:flex items-center justify-center hidden gap-10 absolute bottom-[30px] opacity-50">
              <span className="text-[12px] text-white">Trusted by:</span>
              <ul className="flex items-center justify-center gap-10">
                <li>
                  <Icon.meta />
                </li>
                <li>
                  <Icon.google />
                </li>
                <li>
                  <Icon.netflix />
                </li>
                <li>
                  <Icon.pg />
                </li>
                <li>
                  <Icon.paypay />
                </li>
                <li>
                  <Icon.payoneer />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container overflow-hidden lg:px-0 px-6">
        <div className="grid lg:grid-cols-9 grid-cols-3 lg:p-3 lg:gap-3 gap-2 ">
          <MenuJob icon={<Icon.programming />} content={"Programming & Tech"} />
          <MenuJob icon={<Icon.graphic />} content={"Graphics & Design"} />
          <MenuJob icon={<Icon.digital />} content={"Digital Marketing"} />
          <MenuJob
            icon={<Icon.translate />}
            content={"Writing & Translation"}
          />
          <MenuJob icon={<Icon.video />} content={"Video & Animation"} />
          <MenuJob icon={<Icon.ai_services />} content={"AI Services"} />
          <MenuJob icon={<Icon.music_audio />} content={"Music & Audio"} />
          <MenuJob icon={<Icon.business />} content={"Business"} />
          <MenuJob icon={<Icon.consulting />} content={"Consulting"} />
        </div>
      </section>
    </>
  );
};

export default SearchService;
