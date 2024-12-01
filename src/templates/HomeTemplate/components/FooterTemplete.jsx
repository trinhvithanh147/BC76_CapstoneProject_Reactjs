import "./footerTemplate.scss";
import React from "react";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { GlobalOutlined, GoldOutlined } from "@ant-design/icons";

const FooterTemplete = () => {
  return (
    <footer className="bg-white overflow-hidden lg:px-0 px-6">
      <div className="container ">
        <div className="pt-[64px] pb-[24px] ">
          <div className="grid lg:grid-cols-5 grid-cols-1 footer_main mb-2">
            <div className="col-span-1">
              <article className="pb-[40px]">
                <div className="flex py-[20px]">
                  <div>
                    <h6 className="text-[16px] leading-[140%] text-[#404145] font-bold">
                      Categories
                    </h6>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e] ">
                        Graphics & Design
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Writing & Translation
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Video & Animation
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Music & Audio
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Programming & Tech
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        AI Services
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Consulting
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Data
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Business
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Personal Growth & Hobbies
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Photography
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Finance
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        End-to-End Projects
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Service Catalog
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-span-1">
              <article>
                <div className="flex py-[20px]">
                  <div>
                    <h6 className="text-[16px] leading-[140%] text-[#404145] font-bold">
                      For Clients
                    </h6>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        How Fiverr Works
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Customer Success Stories
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Trust & Safety
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Quality Guide
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Fiverr Learn
                        <p className="text-[#b5b6ba] text-[14px]">
                          Online Courses
                        </p>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Fiverr Guides
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Fiverr Answers
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-span-1">
              <article>
                <div className="flex py-[20px]">
                  <div>
                    <h6 className="text-[16px] leading-[140%] text-[#404145] font-bold">
                      For Freelancers
                    </h6>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Become a Fiverr Freelancer
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Become an Agency
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Kickstart
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Community Hub
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Forum
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-span-1">
              <article>
                <div className="flex py-[20px]">
                  <div>
                    <h6 className="text-[16px] leading-[140%] text-[#404145] font-bold">
                      Business Solutions
                    </h6>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Fiverr Pro
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Project Management Service
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        ClearVoice
                        <p className="text-[14px] text-[#b5b6ba]">
                          Content Marketing
                        </p>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Working Not Working
                        <p>Creative Talent</p>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        AutoDS
                        <p className="text-[14px] text-[#b5b6ba]">
                          Dropshipping Tool
                        </p>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Fiverr Logo Maker
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Contact Sales
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-span-1">
              <article>
                <div className="flex py-[20px]">
                  <div>
                    <h6 className="text-[16px] leading-[140%] text-[#404145] font-bold">
                      Company
                    </h6>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        About Fiverr
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Help & Support
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Social Impact
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Careers
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Partnerships
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Creator Network
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Affiliates
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Invite a Friend
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Press & News
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="hover:underline text-[#74767e]">
                        Investor Relations
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <div className="bottom flex justify-center  lg:justify-between flex-wrap items-center">
            <div className="left flex  lg:flex-row flex-col items-center pt-4 ">
              <span>
                <Icon.fiverFooter />
              </span>
              <p>
                <span className="ml-6 text-sm text-[#b5b6ba]">
                  © Fiverr International Ltd. 2024
                </span>
              </p>
            </div>
            <div className="right flex items-center lg:justify-between flex-col lg:flex-row justify-center pt-[16px]  w-auto">
              <ul className="social flex items-center justify-center  w-auto lg:pr-8 list-none pr-0">
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.tiktok />
                  </Link>
                </li>
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.instagram />
                  </Link>
                </li>
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.in />
                  </Link>
                </li>
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.facebook />
                  </Link>
                </li>
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.pinterest />
                  </Link>
                </li>
                <li className="mr-6 p-0">
                  <Link className="flex hover:bg-[#efeff0] rounded-[50%] p-2 m-[-8px] hover:transition-color duration-200">
                    <Icon.twitter />
                  </Link>
                </li>
              </ul>
              <div className="flex items-center">
                <div className="mr-1 block">
                  <button className="text-[#74767e] font-semibold py-2 px-3 hover:bg-[#f5f5f5] hover:rounded-[54px] hover:text-[#404145]">
                    <span className="w-4 h-4 pr-2 fill-[#74767e]">
                      <GlobalOutlined />
                    </span>
                    <span>English</span>
                  </button>
                </div>
                <div className="mr-1 block">
                  <button className="py-2 px-3 text-[14px] leading-[21px] font-semibold hover:bg-[#f5f5f5] hover:rounded-[54px] hover:text-[#404145]">
                    US$ USD
                  </button>
                </div>
                <button className="bg-none border-none pl-2 troNang">
                  <span className="w-8 h-8 fill-[#74767e] hover:fill-[#404145]  ">
                    <Icon.troNang />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTemplete;
