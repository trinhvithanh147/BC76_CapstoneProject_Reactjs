import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';

const MadeFiverr = () => {
    return (
      <section className="container">
        <div className="py-10 flex flex-col gap-10">
          <h2 className="text-[48px] leading-[105%] tracking-[-1,44px] max-w-[720px]">
            Made on Fiverr
          </h2>
          <div>
            <div>
              <div className="flex h-[1240px] w-full items-start  content-start flex-col  flex-wrap overflow-hidden">
                <div className="w-[25%] order-1 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center`">
                        <img
                          src="./../../../../public/LIVING_3.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-2 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg "
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/1.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-3 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg "
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/01.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-4 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative  w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Chateau_du_Nuage_Logo.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-1 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Mockup_Daughters caffee and books_logo_1.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-2 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Mockup.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-3 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Couple hugging.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-4 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/pool house - 3 rev 03.webp"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg "
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-1 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Great room 1.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-2 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/550 LIVINGROOM V2 (1).jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-3 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/1 (1).jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-4 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Scene 3.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-1 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/RLD_5528.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-2 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/Render-01.jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-3 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/The Eagle Nest-Unit A view 1 (3).jpg"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-4 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/HCM12218_TR.webp"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] order-1 py-[12px] px-[8px]">
                  <div>
                    <div
                      className="relative rounded-lg w-full"
                      style={{
                        boxShadow:
                          "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09)",
                      }}
                    >
                      <Link className="flex items-center w-full">
                        <img
                          src="./../../../../public/IMG_4849.webp"
                          alt=""
                          className="w-full min-h-[112px] rounded-lg"
                        />
                      </Link>
                      <div
                        className="flex absolute bottom-0 right-0 items-end bg-clip-content opacity-1"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                      >
                        {/* <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between">
                          <div className="text-[14px] leading-5 text-white">
                            Featured in:{" "}
                            <span className="font-semibold text-[14px] leading-5 text-white">
                              Architecture & Interior Design
                            </span>
                            <br />
                            by: <Link href="">ninojed</Link>
                          </div>
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] items-center bg-transparent border-transparent">
                                <span className="w-4 h-4 fill-white inline-block">
                                  <Icon.baCham />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="absolute top-3 right-3 opacity-1">
                        <div className="flex gap-2">
                          <div className="inline-flex">
                            <span className="inline-flex">
                              <button className="flex w-10 h-10 rounded-[50%] border-[#efeff0] bg-[#fafafa] items-center justify-center">
                                <span>
                                  <Icon.traiTimMongManh />
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default MadeFiverr
