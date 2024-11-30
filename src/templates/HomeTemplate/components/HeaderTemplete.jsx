import Icon from "../../../components/Icon";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import { BarsOutlined, GlobalOutlined } from "@ant-design/icons";
import InputSearch from "../../../components/input/inputSearch/InputSearch";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { congViecService } from "../../../services/congViec.service";
import { useDebounce } from "use-debounce";
import { Dropdown } from "antd";
import "./headerTemplate.scss";
import useViewPort from "../../../hooks/useViewPort";



const HeaderTemplete = () => {
  const { width } = useViewPort();
  const [keyword, setKeyword] = useState("");
  const [value] = useDebounce(keyword, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const handleSearch = (keyword) => {
    setOpenDropdown(false);
    navigate(`/search-job/${keyword}`);
  }
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
  useEffect(() => {
    const handleScroll = () => {
      setShowInput(window.scrollY > 100)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <p className="mt-2 mb-2">{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
      };
    });
  }, [listSearch]);

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <div className="bg-white py-4 border border-b-[e4e5e7] relative">
        <div className="header_content container flex items-center justify-between px-4 lg:px-0">
          <div className="block lg:hidden" onClick={() => {
            setIsOpenNavbar(!isOpenNavbar)
          }}>
            <BarsOutlined style={{
              fontSize: "30px"
            }} />
          </div>
          <div className="flex lg:flex-1 space-x-2 items-center  ">
            {/* Logo */}
            <Link
              to={pathDefault.homePage}
              className="lg:min-w-[121px] h-atuo mt-1"
            >
              <Icon.logo />
            </Link>
            {width > 576 && (
              <Dropdown
                className={`${showInput ? "opacity-100 " : "opacity-0"
                  }  transition-all duration-500 hidden lg:block`}
                trigger={["click"]}
                overlayClassName="dropdown-suggest"
                open={openDropdown}
                menu={{
                  items: itemListSearch,
                  onMouseLeave: () => {
                    setOpenDropdown(false);
                  },
                }}
              >
                <div className="w-full">
                  <InputSearch
                    className="input_search"
                    handleSearch={handleSearch}
                    handleChange={handleChangeKeyword}
                    value={keyword}
                    placeholder={"What service are you looking for today?"}
                    handleClick={handleClickInputSearch}
                    handleKeyDown={handleKeyDown}
                  />
                </div>
              </Dropdown>
            )}
          </div>

          <div className=" header_action space-x-1 flex z-50 items-center">
            <DropdownHeader
              width={"408px"}
              buttonContent="Fiverr Pro"
              className="hidden lg:block"
              item={[
                {
                  key: 1,
                  label: (
                    <Link className="grid grid-cols-10 border py-3 px-4  rounded-md hover:text-red-500">
                      <div className="col-span-2  flex justify-center items-center">
                        <Icon.kinhLup width={48} height={48} />
                      </div>
                      <div className="col-span-7 ">
                        <div className="font-semibold text-[#404145]">
                          I'm looking to hire
                        </div>
                        <div className="text-sm">
                          My team needs vetted freelance talent and a premium
                          business solution.
                        </div>
                      </div>
                    </Link>
                  ),
                },
                {
                  key: 2,
                  label: (
                    <Link className="grid grid-cols-10 border py-3 px-4 rounded-md">
                      <div className="col-span-2  flex justify-center items-center">
                        <Icon.tayCamBut width={48} height={48} />
                      </div>
                      <div className="col-span-7">
                        <div className="font-semibold text-[#404145]">
                          I want to offer Pro services
                        </div>
                        <div className="text-sm">
                          I'd like to work on business projects as a Pro
                          freelancer or agency.
                        </div>
                      </div>
                    </Link>
                  ),
                },
              ]}
            />
            <DropdownHeader
              className="hidden lg:block"
              buttonContent="Explore"
              item={[
                {
                  key: 1,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Answers
                      </span>
                      <span className="text-sm">
                        Powered by AI, answered by Fiverr freelancers

                      </span>
                    </Link>
                  ),
                },
                {
                  key: 2,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Community
                      </span>
                      <span className="text-sm">
                        Connect with Fiverr's team and community
                      </span>
                    </Link>
                  ),
                },
                {
                  key: 3,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Guides
                      </span>
                      <span className="text-sm">
                        In-depth guides covering business topics
                      </span>
                    </Link>
                  ),
                },
                {
                  key: 4,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Podcast
                      </span>
                      <span className="text-sm">
                        Inside tips from top business minds
                      </span>
                    </Link>
                  ),
                },
                {
                  key: 5,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Learn
                      </span>
                      <span className="text-sm">
                        Professional online courses, led by experts
                      </span>
                    </Link>
                  ),
                },
                {
                  key: 6,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Blog
                      </span>
                      <span className="text-sm">
                        News, information and community stories
                      </span>
                    </Link>
                  ),
                },
                {
                  key: 7,
                  label: (
                    <Link>
                      <span className="font-semibold text-[#404145] block">
                        Logo Maker
                      </span>
                      <span className="text-sm">
                        Create your logo instantly
                      </span>
                    </Link>
                  ),
                },
              ]}
            />
            <ButtonGhost className="hidden lg:block" content={"English"} icon={<GlobalOutlined />} />
            <ButtonGhost className="hidden lg:block" content={"Become a Seller"} />
            {!user ? (
              <>
                <ButtonGhost className="hidden lg:block" content={"SIgn In"} />
                <ButtonOutline
                  onClick={() => {
                    navigate(pathDefault.signIn);
                  }}
                  content={"Join"}
                />
              </>
            ) : (
              <p className="inline-block">{user.name}</p>
            )}
          </div>

        </div>
        <div className={`h-screen bg-white   w-2/3 absolute -translate-x-full ${isOpenNavbar ? "translate-x-0 " : ""}`}>

        </div>

      </div>

    </header>

  );
};

export default HeaderTemplete;
