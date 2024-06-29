import React from 'react';

// Navigation Links Component
const NavLinks: React.FC = () => (
    <div className="hidden lg:flex lg:gap-10">
        <a className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#features">
            <span className="relative z-10">功能</span>
        </a>
        <a className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0" href="/#reviews">
            <span className="relative z-10">文档</span>
        </a>
    </div>
);

// Action Buttons Component
const ActionButtons: React.FC = () => (
    <div className="flex items-center gap-6">
        <div className="lg:hidden" data-headlessui-state="">
            <button
                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                aria-label="Toggle site navigation"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:R1epfja:"
            >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                    <path d="M5 6h14M5 18h14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
        </div>
        <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block"
            color="gray"
            href="https://daoke.vicazhuo.tech/login"
        >
            立即体验
        </a>
    </div>
);

const Daoke: React.FC = () => (
    <div>
        <header>
            <nav>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
                    <div className="relative z-10 flex items-center gap-16">
                        <a href="https://daoke.vicazhuo.tech" className="font-bold text-lg">
                            稻客云租
                        </a>
                        <NavLinks />
                    </div>
                    <ActionButtons />
                </div>
            </nav>
        </header>
        <main className="flex-auto">
            <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                        <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                            <h1 className="text-4xl font-medium tracking-tight text-gray-900">稻客云租管理系统</h1>
                            <p className="mt-6 text-lg text-gray-600">
                                稻客云租管理系统是一款集民宿、物业、长租、短租和时租管理于一体的综合性平台，旨在为业主和租客提供高效、便捷的管理和服务解决方案。
                            </p>
                            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                                <a aria-label="Get Start on the Github"
                                   className="flex items-center p-3 rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                                   href="https://github.com/vica2024/Daoke-Web-Admin">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-7 mr-1.5">
                                        <path
                                            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <span>获取代码</span>
                                </a>
                                <a className="rounded-lg flex items-center p-3 border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                                   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 flex-none">
                                        <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
                                        <path
                                            d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                                            fill="#A3A3A3" stroke="#A3A3A3"></path>
                                    </svg>
                                    <span className="ml-2.5">视频介绍</span></a>
                            </div>
                        </div>
                        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                            {/* Add your image or any other content here */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
);

export default Daoke;
