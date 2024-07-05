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
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 lg:block"
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
        <div className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
                    <div>
                        <div className="flex items-center text-gray-900">
                            <div className="ml-4"><p className="text-base font-semibold">稻客云租</p>
                                <p className="mt-1 text-sm">灵活租赁，高效管理，稻客云租助您事业腾飞。</p></div>
                        </div>
                        <nav className="mt-11 flex gap-8"><a
                            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                            href="/#features"><span className="relative z-10">后端</span></a><a
                            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                            href="/#reviews"><span className="relative z-10">前端</span></a><a
                            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                            href="/#pricing"><span className="relative z-10">模块</span></a>
                            <a
                                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                                href="https://vicazhuo.tech"><span className="relative z-10">关于作者</span></a>
                        </nav>
                    </div>
                    <div
                        className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                        <div className="relative flex h-24 w-24 flex-none items-center justify-center overflow-hidden rounded-lg">
                            <svg viewBox="0 0 96 96" fill="none" aria-hidden="true"
                                 className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500">
                                <path
                                    d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                                    ></path>
                            </svg>
                            <img alt="" width="80" height="80" src="https://i.postimg.cc/MvkqZPqQ/rrrrimage.png" />
                            <div className="absolute inset-0 bg-green-500 opacity-15 scan-line"></div>
                        </div>
                        <div className="ml-8 lg:w-64"><p className="text-base font-bold text-gray-900"><a href="#"><span
                            className="absolute inset-0 sm:rounded-2xl"></span>扫描加微信</a></p>
                            <p className="mt-1 text-sm text-gray-700">商业合作</p></div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
                    <form className="flex w-full justify-center md:w-auto">
                        <div className="w-60 min-w-0 shrink"><input id=":S4:" type="email" aria-label="Email address"
                                                                placeholder="Email address" autoComplete="email"
                                                                className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" />
                        </div>
                        <button
                            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none"
                            type="submit"><span
                            className="hidden lg:inline">Join our newsletter</span><span className="lg:hidden">Join newsletter</span>
                        </button>
                    </form>
                    <p className="mt-6 text-sm text-gray-500 md:mt-0">© Copyright 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Daoke;
