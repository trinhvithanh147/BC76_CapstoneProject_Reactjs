import Icon from "../../../components/Icon";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import { BarsOutlined, DownOutlined, DragOutlined, GlobalOutlined, UserOutlined } from "@ant-design/icons";
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
const items = [
  {
    label: (
      <a href="# " className="text-[16px] font-normal">
        <UserOutlined className="pr-2" />
        {user ? user.name : "USER"}
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href="#"
        className="text-[16px] font-normal"
        onClick={() => {
          localStorage.removeItem("userInfo");
          window.location.reload();
          navigate(pathDefault.homePage);
        }}
      >
        Sign out{" "}
      </a>
    ),
    key: "1",
  },
];
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
    <header className="sticky top-0 left-0 w-full z-50 xl:px-0 lg:px-8 p-0 md:px-0">
      <div className="bg-white py-4 border border-b-[e4e5e7] relative">
        <div className="header_content container flex items-center justify-between px-[24px] lg:px-0">
          <span
            className="inline-block lg:hidden pt-2"
            onClick={() => {
              setIsOpenNavbar(!isOpenNavbar);
            }}
          >
            <BarsOutlined
              style={{
                fontSize: "30px",
              }}
            />
          </span>
          <div className="flex lg:flex-1 space-x-2   ">
            {/* Logo */}
            <Link
              to={pathDefault.homePage}
              className="lg:min-w-[121px] h-atuo mt-1"
            >
              <Icon.logo />
            </Link>
            {width > 576 && (
              <Dropdown
                className={`${
                  showInput ? "opacity-100 " : "opacity-0"
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
            <ButtonGhost
              className="hidden lg:block"
              content={"English"}
              icon={<GlobalOutlined />}
            />
            <ButtonGhost
              className="hidden lg:block"
              content={"Become a Seller"}
            />
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
              <div className="inline-block">
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="cursor-pointer text-[16px] text-[#62646a] font-semibold py-2 px-4"
                  >
                    Account
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
        <div
          className={`h-screen bg-white lg:hidden xl:hidden block z-auto transition-all duration-500  md:w-1/3 w-2/3 absolute -translate-x-full shadow-2xl ${
            isOpenNavbar ? "translate-x-[-1px]" : ""
          }`}
        >
          <div className=" py-[26px] px-[16px]">
            <div className="flex flex-col items-start w-full">
              {!user ? (
                <>
                  <ButtonOutline
                    onClick={() => {
                      navigate(pathDefault.signIn);
                    }}
                    className="bg-black text-white border-transparent px-6 py-2 mb-4 "
                    content={"JoIn Fiverr"}
                  />
                  <ButtonGhost
                    className="!px-0 font-semibold capitalize text-black block"
                    content={"SIgn In"}
                  />
                </>
              ) : (
                <div className="inline-block">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="cursor-pointer text-[16px] text-black font-semibold py-2 "
                    >
                      Account
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              )}
              <DropdownHeader
                className={"!px-0"}
                width={"220px"}
                buttonContent="Browse categories"
                item={[
                  {
                    key: 1,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Graphics & Design
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Programming & Tech
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 3,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Digital Marketing
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 4,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Video & Animation
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 5,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Writing & Translation
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 6,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Music & Audio
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 7,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Business
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 8,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Fianance
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 7,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Business
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 8,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          AI Services
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 9,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Personal Growth
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 10,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Consulting
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 10,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Photogarphy
                        </span>
                      </Link>
                    ),
                  },
                ]}
              />
              <DropdownHeader
                className={"!px-0"}
                width={"220px"}
                buttonContent="Explore"
                item={[
                  {
                    key: 1,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Answers
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Guides
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 3,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Learn
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 4,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Logo Maker
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 5,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Community
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 6,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Podcast
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 7,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Blog
                        </span>
                      </Link>
                    ),
                  },
                ]}
              />
              <DropdownHeader
                className={"!px-0"}
                width={"220px"}
                buttonContent="Fiverr Pro"
                item={[
                  {
                    key: 1,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          I'm looking to hire
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          I want to offer Pro services
                        </span>
                      </Link>
                    ),
                  },
                ]}
              />
              <div className="menu_header pt-7 pb-2">
                <h6 className="font-semibold text-lg">General</h6>
              </div>
              <Link className="py-2 font-semibold capitalizex duration-200 rounded-md">
                Home
              </Link>
              <DropdownHeader
                className={"!px-0"}
                width={"220px"}
                buttonContent={"English"}
                item={[
                  {
                    key: 1,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Deutsch
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Italiano
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 3,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Nederlands
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 4,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Espanol
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 5,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Português
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 6,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          Français
                        </span>
                      </Link>
                    ),
                  },
                ]}
              />
              <DropdownHeader
                className={"!px-0"}
                width={"220px"}
                buttonContent={"US$ USD"}
                item={[
                  {
                    key: 1,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          USD - US$
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          EUR - €
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 3,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          GBP - £
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 4,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          ILS - ₪
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 5,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          THB - THB
                        </span>
                      </Link>
                    ),
                  },
                  {
                    key: 6,
                    label: (
                      <Link>
                        <span className="font-semibold text-[#404145] block">
                          AED - AED
                        </span>
                      </Link>
                    ),
                  },
                ]}
              />
              <Link className="py-2 font-semibold capitalizex duration-200 rounded-md">
                Open in the App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplete;
