import Image from "next/image";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import img from "../images/estimate/estimate-mobile.png";

type Props = {};

const SectionEstimate = (props: Props) => {
	return (
		<section className=" mb-[60px] md:mb-20 lg:mb-[120px] xl:mb-40">
			<div className=" container mx-auto my-0">
				<h2 className=" text-[30px] font-medium leading-[1.33] text-main text-center md:text-5xl mb-4 md:mb-11">
					Estimate Calculation
				</h2>
				<div className="flex flex-col gap-6 justify-around items-center md:flex-row">
					<div className=" flex flex-col gap-6 md:gap-10 lg:gap-12">
						<ul className="flex flex-col gap-6 md:gap-12">
							<li className="flex flex-row justify-around">
								<p className=" font-normal text-base text-main flex justify-center items-center md:text-4xl md:leading-normal md:font-light">
									bedrooms:
								</p>
								<div className="flex gap-3 items-center justify-center leading-normal">
									<button>
										<AddCircleOutlineOutlinedIcon sx={{ color: "#006778" }} className=" text-2xl md:text-[42px]" />
									</button>
									<span className=" font-medium text-base text-main md:text-4xl">1</span>
									<button>
										<RemoveCircleOutlineOutlinedIcon sx={{ color: "#006778" }} className=" text-2xl md:text-[42px]" />
									</button>
								</div>
							</li>
							<li className="flex flex-row justify-around">
								<p className=" font-normal text-base text-main flex justify-center items-center md:text-4xl md:leading-normal md:font-light">
									bathrooms:
								</p>
								<div className="flex gap-3 items-center justify-center leading-normal">
									<button>
										<AddCircleOutlineOutlinedIcon sx={{ color: "#006778" }} className=" text-2xl md:text-[42px]" />
									</button>
									<span className=" font-medium text-base text-main md:text-4xl">1</span>
									<button>
										<RemoveCircleOutlineOutlinedIcon sx={{ color: "#006778" }} className=" text-2xl md:text-[42px]" />
									</button>
								</div>
							</li>
						</ul>
						<div className="flex flex-row justify-center items-center gap-2">
							<p className=" text-sand font-bold text-2xl md:font-normal md:text-[32px] lg:font-normal lg:text-5xl">
								Previous estimate:
							</p>
							<span className="font-bold text-2xl text-main md:font-normal md:text-[40px] lg:font-normal lg:text-5xl">
								135$
							</span>
						</div>
					</div>
					<button className=" max-w-[333px] h-[216px] rounded-xl bg-sand/25 flex justify-center items-center relative md:w-[226px] md:h-[243px] lg:w-[484px] lg:h-[338px]">
						<span className="font-bold text-[44px] pr-20 pl-5 text-center text-accent md:text-[32px]">
							Full estimate
						</span>
						<Image
							src={img}
							alt="Estimate"
							className=" absolute right-0 md:w-[122px] md:h-[243px] lg:w-[259px] lg:h-[480px]"
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default SectionEstimate;
