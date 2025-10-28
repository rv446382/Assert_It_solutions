import React from 'react';
import coverimage from "../assets/coverimage.png";
import arrowRight from "../assets/arrowright.png";
import man from "../assets/man.png";
import hand from "../assets/hand.png";
import Factory from "../assets/Factory.png";
import badge from "../assets/badge.png";

const Home = () => {
    return (
        <div className="absolute top-[125px] w-full h-[598px] opacity-100 ">
            <img
                src={coverimage}
                alt="Cover"
                className="w-full h-full object-cover"
            />
            <div className="absolute opacity-100 top-[100px] left-[100px] w-[594px] h-[366px] ">
                <div className="absolute top-[20px] left-[0px] w-full h-full flex flex-col justify-start gap-2">
                    <h1 className="font-[Monda] font-bold text-[70px] leading-[133%] text-[#FFFFFF]">
                        Welcome To <br /> Red Sea Cables
                    </h1>

                    <div className="font-[Monda] font-normal text-[20px] leading-[100%] text-[#FFFFFF]">
                        <div>Red Sea Cable Company was established as a closed joint stock</div>
                        <div className="mt-2">company in 2008 in the Kingdom of Saudi Arabia and has a capital</div>
                        <div className="mt-2">of 148 million SAR.</div>

                        <button className="absolute top-[295px] w-[172.43px] h-[50.04px] bg-[#ffffff] text-[#000000] font-[Monda] font-bold text-[16px] flex items-center justify-center opacity-100 transition-colors duration-200">
                            MORE DETAILS
                            <span className="ml-2 w-[20.03px] h-[20px] border-2 border-[#000000] rounded-full flex items-center justify-center">
                                <img
                                    src={arrowRight}
                                    alt="Arrow Right"
                                    className="w-[7px] h-[7px] object-contain"
                                />
                            </span>
                        </button>
                    </div>
                    <div className="absolute top-[478px] left-[-100px] w-[720px] h-[568px] opacity-100 backdrop-blur-[40px] bg-[#F3F1F1] flex items-center justify-center">
                        <img
                            src={man}
                            alt="Example"
                            className="w-[324px] h-[402px] object-contain"
                        />

                        <img
                            src={hand}
                            alt="Hand"
                            className="absolute bottom-[82px] right-[100px] w-[200px] h-[199px] object-contain opacity-100"
                        />

                        <div className="absolute bottom-[202px] right-[100px] w-[78px] h-[78px] bg-[#D5C5AB] backdrop-blur-[40px] opacity-100 flex items-center justify-center">
                            <img
                                src={Factory}
                                alt="Factory"
                                className="w-[48px] h-[48px] object-contain"
                            />
                        </div>

                        <div className="absolute top-[170px] left-[520px] w-[169px] h-[29px] bg-black flex items-center justify-center rotate-[-90deg]">
                            <span className="font-monda font-bold text-[18px] leading-[100%] tracking-[0%] text-white">
                                Years of Experience
                            </span>
                        </div>

                        <div className="absolute top-[213px] left-[471px] w-[103px] h-[75px] bg-[#F3F1F1] flex items-center justify-center">
                            <span className="font-monda font-bold text-[55.15px] leading-[74.06px] tracking-[0%] text-[#000000]">
                                15+
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-[502px] left-[700px] w-[400px] h-auto flex flex-col items-start gap-[20px] opacity-100">
                        <div className="flex flex-col items-start gap-[7px]">
                            <span className="font-[monda] font-bold text-[18px] text-[#8F8A8B] whitespace-nowrap">
                                ABOUT US
                            </span>
                            <span className="font-monda font-bold text-[35px] leading-[47px] tracking-[0%] text-black">
                                A Company of <br />Excellence Services
                            </span>
                        </div>

                        <div className="w-[395px] h-[72px]">
                            <span className="font-monda font-normal text-[15px] leading-[100%] tracking-[0%] text-[#8F8A8B]">
                                Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, trouble that are bound to ensue.
                            </span>
                        </div>

                        <div className="w-[248px] h-[29px] flex items-center justify-center">
                            <span className="font-monda font-bold text-[18px] leading-[100%] tracking-[0%] text-[#000000] whitespace-nowrap">
                                Organization & Certifications
                            </span>
                        </div>

                        <div className="w-[395px] h-[72px]">
                            <span className="font-monda font-normal text-[15px] leading-[100%] tracking-[0%] text-[#8F8A8B]">
                                Meet at one of those defining moments moment when our nation is at war our economy.
                            </span>
                        </div>

                        <div className="flex items-start gap-[20px]">
                            <img
                                src={badge}
                                alt="Badge"
                                className="w-[67px] h-[67px] opacity-100 object-contain"
                            />

                            <div className="flex flex-col">
                                <span className="font-monda font-bold text-[18px] leading-[100%] tracking-[0%] text-black mt-4">
                                    Your Certificate
                                </span>
                                <span className="font-monda font-normal text-[15px] leading-[100%] tracking-[0%] text-[#8F8A8B] mt-2">
                                    Successfully Achieved
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
