'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Routers from '@/data/routes';
import Image from 'next/image'


const Menus: React.FC = () => {
    const [current, setCurrent] = useState<number | 0>(0);
    const [isShow, setIsShow] = useState<boolean>(false);
    const currentIndex: number = 0;
    const handleToggle = () => {
        setIsShow(!isShow);
    };

    return (
        <header className={'bg-slate-900'}>
            <div className={'sm:block lg:hidden'}>
                <div className={'flex items-center justify-between px-4'}>
                    <h1 className={'text-2xl text-white'}>
                        <a href={'/'}>Vica ZHUO</a>
                    </h1>
                    <div>
                        <button onClick={handleToggle}>
                            <svg className="icon w-7 hover:w-8" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                                <path
                                    d="M384 480H192c-52.8 0-96-43.2-96-96V192c0-52.8 43.2-96 96-96h192c52.8 0 96 43.2 96 96v192c0 52.8-43.2 96-96 96zM192 160c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32H192zM832 480H640c-52.8 0-96-43.2-96-96V192c0-52.8 43.2-96 96-96h192c52.8 0 96 43.2 96 96v192c0 52.8-43.2 96-96 96zM640 160c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V192c0-17.6-14.4-32-32-32H640zM384 928H192c-52.8 0-96-43.2-96-96V640c0-52.8 43.2-96 96-96h192c52.8 0 96 43.2 96 96v192c0 52.8-43.2 96-96 96zM192 608c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V640c0-17.6-14.4-32-32-32H192zM832 928H640c-52.8 0-96-43.2-96-96V640c0-52.8 43.2-96 96-96h192c52.8 0 96 43.2 96 96v192c0 52.8-43.2 96-96 96zM640 608c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V640c0-17.6-14.4-32-32-32H640z"
                                    fill="#ffffff" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isShow?'block':'hidden lg:block'} lg:w-[70%] lg:p-4 m-auto`}>
                <ul className={'lg:flex list-none p-2 gap-6 text-2xl relative rounded-lg'}>
                    {Routers.map((route, index) => (
                        <li
                            key={index}
                            className={'w-full text-gray-300 h-12 whitespace-nowrap relative cursor-pointer hover:text-white'}
                            onMouseOver={() => setCurrent(index)}
                            onMouseOut={() => setCurrent(currentIndex)}>
                            <Link className={'absolute left-2 items-center inset-0 text-sm z-20 grid lg:place-content-center'}
                                  href={route.path} onClick={()=>setIsShow(false)}>
                                {route.label}
                            </Link>
                        </li>
                    ))}
                    <div style={{'width': `${100 / Routers.length}%`, 'transform': `translateX(${current * 100}%)`}}
                         className={'absolute hidden lg:block inset-0 z-10 transition-all duration-1000 rounded-lg bg-green-500'}/>
                </ul>
            </div>
        </header>
    );
};

const Profiles: React.FC = () => {
    return (
        <div className={'float-left bg-white mt-8 lg:mt-0 lg:bg-gray-100 lg:w-[28%]'}>
            <section className={'p-10 mt-8'}>
                <section>
                    <Link href={'/'} className="logo">
                        <Image
                            src="/vicazhuo.png"
                            data-nimg={1}
                            decoding={'async'}
                            className={'rounded-full m-auto w-20 sm:w-24 md:w-32 lg:w-44 aspect-square shadow'}
                            alt="vica zhuo"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <header className={'border-b border-b-slate-400 border-opacity-30 p-4'}>
                        <h2 className={'text-1gl text-center'}>Vica Zhuo (卓尉家)</h2>
                        <p className={'mt-3  text-center'}><a href="mailto:zhuovica@gmail.com">zhuovica@gmail.com</a>
                        </p>
                    </header>
                </section>

                <section className={'pt-6'}>
                    <h2 className={'mb-3 text-1xl'}>About</h2>
                    <p className={'text-sm leading-5'}>Hi, I&apos;m Vica. I am a <a
                        className={'border border-dotted border-b-gray-500 border-opacity-65'}
                        href="https://github.com/vica2024">Full Stack Engineer</a>. Previously,
                        I was the co-founder and CTO of <a
                            className={'border border-dotted border-b-gray-500 border-opacity-65'}
                            href="https://aiqicha.baidu.com/company_detail_67644716405156">ZHIYI</a>, and worked at
                        {' '}<a className={'border border-dotted border-b-gray-500 border-opacity-65'}
                                href="https://csfa.cnadc.com.cn/">CNADC</a> and <a
                            className={'border border-dotted border-b-gray-500 border-opacity-65'}
                            href="https://www.apm.mc/">APM Monaco</a>.
                    </p>
                    <ul className="actions mt-5 border w-2/5 text-center text-sm p-3 text-gray-500">
                        <li>
                            More about me
                        </li>
                    </ul>
                </section>

                <section id="footer">

                </section>
            </section>
        </div>
    )
}

export {
    Menus,
    Profiles
};
