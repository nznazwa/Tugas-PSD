"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    return (
        <div className="bg-[#FAF3E0] mt-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="container mx-auto relative"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="grid md:grid-cols-2 py-12 px-4 lg:px-8 items-center">
                        <div className="flex flex-col items-start space-y-6">
                            <p className="text-lg text-[#9A6E3A] font-medium">
                                Starting at <span className="font-bold">Rp25.000</span>
                            </p>
                            <h1 className="text-5xl font-bold text-[#5A3A1B] leading-tight">
                                The Best Flower Collection{" "}
                                <span className="text-[#9A6E3A]">2025</span>
                            </h1>
                            <h3 className="text-xl text-[#5A3A1B] font-['Oregano',cursive]">
                                Exclusive offer{" "}
                                <span className="text-red-600 font-bold">-5%</span> off this week
                            </h3>
                            <a
                                href="#"
                                className="inline-block bg-[#5A3A1B] text-white rounded-md px-6 py-3 
                                hover:bg-[#9A6E3A] hover:shadow-lg transition"
                            >
                                Shop Now
                            </a>
                        </div>
                        <div className="relative flex justify-end">
                            <Image
                                src="/najwa/mix flowers.png"
                                alt="hero"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="grid md:grid-cols-2 py-12 px-4 lg:px-8 items-center">
                        <div className="flex flex-col items-start space-y-6">
                            <p className="text-lg text-[#9A6E3A] font-medium">
                                Fresh Flowers for Every Occasion
                            </p>
                            <h1 className="text-5xl font-bold text-[#5A3A1B] leading-tight">
                                New Arrivals <span className="text-[#9A6E3A]">2025</span>
                            </h1>
                            <h3 className="text-xl text-[#5A3A1B] font-['Oregano',cursive]">
                                Get your <span className="text-red-600 font-bold">first order</span> free shipping!
                            </h3>
                            <a
                                href="#"
                                className="inline-block bg-[#5A3A1B] text-white rounded-md px-6 py-3 
                                hover:bg-[#9A6E3A] hover:shadow-lg transition"
                            >
                                Discover Now
                            </a>
                        </div>
                        <div className="relative flex justify-end">
                            <Image
                                src="/najwa/bucket_f.png"
                                alt="hero"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
