
import Icon from '../../../components/Icon'
import { Link } from 'react-router-dom'
const itemMadeFiverr = ({ image, content, actor, order }) => {
    return (
        <div className={`w-[25%] order-${order} py-[12px] px-[8px] items-start `}>
            <div>
                <div
                    className="relative item group"
                    style={{
                        boxShadow:
                            "0 .14px 2.29266px rgba(0, 0, 0, .032), 0 .37px 4.42626px rgba(0, 0, 0, .048), 0 3px 7px rgba(0, 0, 0, .09) ",
                    }}
                >
                    <Link className="flex items-center rounded-lg">
                        <img
                            src={image}
                            alt=""
                            className="w-full min-h-[112px] rounded-lg "
                        />
                    </Link>
                    <div
                        className="flex absolute bottom-0 right-0  items-end bg-clip-content rounded-lg opacity-0 group-hover:opacity-100"
                        style={{
                            background:
                                "linear-gradient(180deg, transparent, transparent 37%, rgba(0, 0, 0, .7))",
                        }}
                    >
                        <div className="flex items-center w-full my-[16px] mr-[12px] ml-[16px]  justify-between ">
                            <div className="text-[14px] leading-5 text-white">
                                Featured in:{" "}
                                <span className="font-semibold text-[14px] leading-5 text-white">
                                    {content}
                                </span>
                                <br />
                                by: <Link href="">{actor}</Link>
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
                        </div>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 duration-500 ">
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
    )
}

export default itemMadeFiverr