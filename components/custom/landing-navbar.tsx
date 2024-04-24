"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
    //   const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-10 w-10 mr-4">
                    {/* <Image fill alt="Logo" src="/logo.png" /> */}
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_35_26113)">
                            <g clip-path="url(#clip0_35_26113)">
                                <rect x="3" y="2" width="32" height="32" rx="8" fill="white" />
                                <rect x="3" y="2" width="32" height="32" rx="8" fill="url(#paint0_linear_35_26113)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 4.03882C11.2895 4.03882 5.03885 10.2894 5.03885 18C5.03885 25.7105 11.2895 31.9612 19 31.9612C26.7106 31.9612 32.9612 25.7105 32.9612 18C32.9612 10.2894 26.7106 4.03882 19 4.03882ZM4.96118 18C4.96118 10.2466 11.2466 3.96115 19 3.96115C26.7535 3.96115 33.0389 10.2466 33.0389 18C33.0389 25.7534 26.7535 32.0388 19 32.0388C11.2466 32.0388 4.96118 25.7534 4.96118 18Z" fill="#D0D5DD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 14.0779C16.8338 14.0779 15.0777 15.834 15.0777 18.0002C15.0777 20.1665 16.8338 21.9225 19 21.9225C21.1662 21.9225 22.9223 20.1665 22.9223 18.0002C22.9223 15.834 21.1662 14.0779 19 14.0779ZM15 18.0002C15 15.7911 16.7909 14.0002 19 14.0002C21.2091 14.0002 23 15.7911 23 18.0002C23 20.2094 21.2091 22.0002 19 22.0002C16.7909 22.0002 15 20.2094 15 18.0002Z" fill="#D0D5DD" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.3201C17.5201 15.3201 16.3204 16.5198 16.3204 17.9997C16.3204 19.4796 17.5201 20.6793 19 20.6793C20.4799 20.6793 21.6796 19.4796 21.6796 17.9997C21.6796 16.5198 20.4799 15.3201 19 15.3201ZM16.2427 17.9997C16.2427 16.4769 17.4772 15.2424 19 15.2424C20.5228 15.2424 21.7573 16.4769 21.7573 17.9997C21.7573 19.5225 20.5228 20.757 19 20.757C17.4772 20.757 16.2427 19.5225 16.2427 17.9997Z" fill="#D0D5DD" />
                                <path d="M18.9612 2H19.0389V34H18.9612V2Z" fill="#D0D5DD" />
                                <path d="M35 17.9609L35 18.0386L3 18.0386L3 17.9609L35 17.9609Z" fill="#D0D5DD" />
                                <path d="M29.602 2H29.6796V34H29.602V2Z" fill="#D0D5DD" />
                                <path d="M13.6407 2H13.7184V34H13.6407V2Z" fill="#D0D5DD" />
                                <path d="M24.2816 2H24.3592V34H24.2816V2Z" fill="#D0D5DD" />
                                <path d="M8.32037 2H8.39804V34H8.32037V2Z" fill="#D0D5DD" />
                                <path d="M35 28.6016L35 28.6792L3 28.6792L3 28.6016L35 28.6016Z" fill="#D0D5DD" />
                                <path d="M35 12.6406L35 12.7183L3 12.7183L3 12.6406L35 12.6406Z" fill="#D0D5DD" />
                                <path d="M35 23.2812L35 23.3589L3 23.3589L3 23.2812L35 23.2812Z" fill="#D0D5DD" />
                                <path d="M35 7.32031L35 7.39798L3 7.39798L3 7.32031L35 7.32031Z" fill="#D0D5DD" />
                                <circle cx="18.5" cy="17.5" r="10.5" fill="#B3EDA1" />
                                <g filter="url(#filter1_b_35_26113)">
                                    <path d="M3 18H35V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z" fill="white" fill-opacity="0.2" />
                                </g>
                                <g clip-path="url(#clip1_35_26113)">
                                    <path d="M13.8287 24.125C14.0608 24.125 14.2834 24.0328 14.4475 23.8687C14.6115 23.7046 14.7037 23.4821 14.7037 23.25V18C14.7037 17.7679 14.6115 17.5454 14.4475 17.3813C14.2834 17.2172 14.0608 17.125 13.8287 17.125C13.5967 17.125 13.3741 17.2172 13.21 17.3813C13.0459 17.5454 12.9537 17.7679 12.9537 18V23.25C12.9537 23.4821 13.0459 23.7046 13.21 23.8687C13.3741 24.0328 13.5967 24.125 13.8287 24.125ZM17.0444 22.375H15.5787V18C16.1589 18 16.6445 17.5922 16.9402 17.0926C17.2324 16.6003 17.6403 16.1867 18.1285 15.8877C18.5467 15.6322 18.9221 15.27 18.9939 14.7852V14.78C19.1072 14.0136 19.1072 13.2347 18.9939 12.4682C18.9694 12.2985 19.0359 12.1235 19.1899 12.0491C19.4568 11.9196 19.7522 11.8601 20.0484 11.8762C20.3446 11.8922 20.6319 11.9833 20.8832 12.1408C21.1346 12.2984 21.3417 12.5173 21.4853 12.7769C21.6288 13.0365 21.704 13.3283 21.7037 13.625C21.7037 14.3355 21.6337 15.0294 21.4981 15.6996C21.4841 15.7655 21.4849 15.8336 21.5004 15.8991C21.5159 15.9646 21.5458 16.0259 21.5878 16.0785C21.6298 16.1312 21.6829 16.1738 21.7433 16.2035C21.8038 16.2331 21.87 16.249 21.9374 16.25H23.4537C24.4197 16.25 25.2125 17.0357 25.1171 17.9974C24.9765 19.4276 24.6588 20.8349 24.1712 22.1869C23.935 22.8405 23.298 23.25 22.6024 23.25H20.2372C20.0491 23.25 19.8627 23.2194 19.6842 23.1599L17.5982 22.4651C17.4197 22.4055 17.2326 22.3751 17.0444 22.375Z" fill="white" />
                                </g>
                            </g>
                            <rect x="3.15" y="2.15" width="31.7" height="31.7" rx="7.85" stroke="#D0D5DD" stroke-width="0.3" />
                        </g>
                        <defs>
                            <filter id="filter0_dd_35_26113" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_26113" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_35_26113" result="effect2_dropShadow_35_26113" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_26113" result="shape" />
                            </filter>
                            <filter id="filter1_b_35_26113" x="-2" y="13" width="42" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_35_26113" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_35_26113" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_35_26113" x1="19" y1="2" x2="19" y2="34" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="#D0D5DD" />
                            </linearGradient>
                            <clipPath id="clip0_35_26113">
                                <rect x="3" y="2" width="32" height="32" rx="8" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_35_26113">
                                <rect width="14" height="14" fill="white" transform="translate(12 11)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    Jempol AI
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href="/dashboard">
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    );
};
