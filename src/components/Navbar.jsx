import React, { useState } from "react";
import facebook from '../assets/Facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/LinkedIn.png';
import youtube from '../assets/youtube.png';
import vector from '../assets/vector (2).png';
import textOne from '../assets/textone.png';
import textTwo from "../assets/texttwo.png";
import groupOne from "../assets/Group One.png";
import searchIcon from "../assets/searchicon.png";
import dropDown from "../assets/dropdown.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative w-full bg-white">
            <div className="relative px-6 py-3">
                <div className="flex items-center justify-start">
                    <span className="font-[Monda] font-bold text-[12px] text-[#8F8A8B] tracking-wide">
                        Social Connect
                    </span>

                    <div className="flex items-center ml-3 space-x-[6px]">
                        <img
                            src={facebook}
                            alt="Facebook"
                            className="w-[14.8px] h-[14.8px] opacity-100 hover:scale-110 transition-transform duration-200"
                        />
                        <span className="w-[3px] h-[3px] bg-[#848484] rounded-full"></span>
                        <img
                            src={twitter}
                            alt="Twitter"
                            className="w-[13.9px] h-[11.3px] opacity-100 hover:scale-110 transition-transform duration-200"
                        />
                        <span className="w-[3px] h-[3px] bg-[#848484] rounded-full"></span>
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="w-[13.9px] h-[13.9px] opacity-100 hover:scale-110 transition-transform duration-200"
                        />
                        <span className="w-[3px] h-[3px] bg-[#848484] rounded-full"></span>
                        <img
                            src={youtube}
                            alt="YouTube"
                            className="w-[13px] h-[9.5px] opacity-100 hover:scale-110 transition-transform duration-200"
                        />
                    </div>
                </div>

                <div className="absolute top-[43px] left-0 w-full h-[0px] border-[2px] border-[#F1F1F1] opacity-100"></div>
            </div>

            <div className="relative top-[-40px]">
                <div className="absolute w-[178px] h-[60px] top-[60px] left-[102px] opacity-100">
                    <img
                        src={vector}
                        alt="Vector"
                        className="absolute w-[69.46px] h-[41.66px] left-[0.45px] opacity-100 object-contain"
                        style={{ imageRendering: "crisp-edges" }}
                    />
                    <div className="absolute w-[101.39px] h-[15.74px] top-[5.42px] left-[75.47px] opacity-100 flex items-center justify-center">
                        <img
                            src={textOne}
                            alt="TextOne"
                            className="w-full h-full object-contain"
                            style={{ imageRendering: "crisp-edges" }}
                        />
                    </div>
                    <div className="absolute w-[101.43px] h-[8.4px] top-[27.87px] left-[75.44px] opacity-100 flex items-center justify-center">
                        <img
                            src={textTwo}
                            alt="TextTwo"
                            className="w-full h-full object-contain"
                            style={{ imageRendering: "crisp-edges" }}
                        />
                    </div>
                    <div className="absolute w-[178px] h-[10.63px] top-[49.37px] opacity-100 flex items-center justify-center">
                        <img
                            src={groupOne}
                            alt="GroupOne"
                            className="w-full h-full object-contain"
                            style={{ imageRendering: "crisp-edges" }}
                        />
                    </div>
                </div>

                <div className="absolute top-[90px] left-[297px] w-[54px] h-[0px] border-2 border-[#F1F1F1] -rotate-90 opacity-100"></div>

                <div className="absolute top-[80px] left-[340px] w-[16px] h-[16px] flex items-center justify-center">
                    <img
                        src={searchIcon}
                        alt="Search"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="absolute top-[75px] left-[370px] w-[50px] h-[24px] flex items-center justify-center opacity-100 -translate-x-1">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] text-[#46120B]">
                        Search
                    </span>
                </div>

                <div className="absolute top-[75px] left-[653px] w-[43px] h-[24px] flex items-center justify-center opacity-100">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] tracking-[0%]">
                        Home
                    </span>
                </div>
                <div className="absolute top-[75px] left-[745px] w-[67px] h-[24px] flex items-center justify-center opacity-100">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] tracking-[0%] text-[#46120B]">
                        About Us
                    </span>
                </div>
                <div className="absolute top-[75px] left-[861px] w-[64px] h-[24px] flex items-center justify-center opacity-100">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] tracking-[0%] text-[#46120B]">
                        Products
                    </span>
                </div>
                <div className="absolute top-[75px] left-[974px] w-[60px] h-[24px] flex items-center justify-center opacity-100">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] tracking-[0%] text-[#46120B]">
                        Projects
                    </span>
                </div>
                <div className="absolute top-[75px] left-[1083px] w-[152px] h-[24px] flex items-center justify-center opacity-100">
                    <span className="font-[Monda] font-bold text-[15px] leading-[100%] tracking-[0%] text-[#46120B]">
                        Investor Relations
                    </span>
                </div>

                <div className="absolute top-[84px] left-[1226px] w-[10px] h-[10px] opacity-100">
                    <img
                        src={dropDown}
                        alt="Dropdown"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div
                    className="absolute top-[70px] left-[1279px] w-[36px] h-[36px] opacity-100 cursor-pointer z-50"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <img
                        src={hamburger}
                        alt="Hamburger Menu"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div
                className={`fixed top-20 right-0 h-full w-[250px] bg-white shadow-lg z-40 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col p-6 space-y-4">
                    <div className="flex flex-col">
                        <span className="font-[Monda] font-bold text-[15px] text-[#46120B]">
                            GET A QUOTE
                        </span>
                        <div className="w-full border-t-2 border-[#F1F1F1] opacity-100 mt-2"></div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-[Monda] font-bold text-[15px] text-[#46120B]">
                            CONTACT US
                        </span>
                        <div className="w-full border-t-2 border-[#F1F1F1] opacity-100 mt-2"></div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-[Monda] font-bold text-[15px] text-[#46120B]">
                            MEDIA & HONORS
                        </span>
                        <div className="w-full border-t-2 border-[#F1F1F1] opacity-100 mt-2"></div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-[Monda] font-bold text-[15px] text-[#46120B]">
                            COMPLIANCE STANDARD
                        </span>
                        <div className="w-full border-t-2 border-[#F1F1F1] opacity-100 mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
