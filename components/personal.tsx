import React from 'react';
import Image from 'next/image'


// 定义一个名为 ComponentA 的组件
const MyProfile: React.FC = () => {
    return (
        <div className={'flex flex-row gap-5'}>
            <Image
                src="/vicazhuo.png"
                data-nimg={1}
                decoding={'async'}
                className={'rounded-full w-20 sm:w-24 md:w-32 lg:w-44 aspect-square shadow'}
                alt="vica zhuo"
                width={50}
                height={50}
            />
            <div className={'flex flex-col items-start justify-center gap-0 md:gap-1'}>
                <h1 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white'}>
                    Hey, I'm Vica Zhuo.
                </h1>
                <p className={'max-w-3xl text-xs sm:text-md md:text-lg font-thin text-gray-300'}>
                    Digital practitioner and Content Creator.
                </p>
            </div>
        </div>
    );
};

// My Social Links.
const MySocialMedia: React.FC = () => {
    const svgCode1 = `
    <svg t="1709518752857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path d="M832 128 192 128c-105.6 0-192 86.4-192 192l0 384c0 105.6 86.4 192 192 192l640 0c105.6 0 192-86.4 192-192L1024 320C1024 214.4 937.6 128 832 128zM384 768 384 256l320 256L384 768z" fill="#000000"></path>
    </svg>
  `;
    const svgCode2 = `
    <svg t={"1709518920489"} className={"icon"} viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="14338" width="64" height="64">
                        <path
                            d="M512.000107 0.000213c62.847987 0 123.029308 11.306664 178.645296 32.04266l15.06133 5.866666C892.437361 114.282856 1024 297.770818 1024 512.000107c0 282.773274-229.226619 511.999893-511.999893 511.999893-214.229289 0-397.71725-131.562639-474.090568-318.293267l-5.866666-15.06133A510.933227 510.933227 0 0 1 0.000213 512.000107c0-62.847987 11.306664-123.029308 32.04266-178.645296l5.866666-15.061331A513.727893 513.727893 0 0 1 318.29348 37.909539l15.061331-5.866666A510.933227 510.933227 0 0 1 512.000107 0.000213z m39.743991 204.842624h-79.27465c-30.485327 0.085333-46.506657 0.298667-60.842654 0.746667l-5.034665 0.170666c-6.677332 0.213333-13.311997 0.533333-21.247996 0.896a225.493286 225.493286 0 0 0-74.581318 14.271997 157.055967 157.055967 0 0 0-89.834648 89.834648 225.493286 225.493286 0 0 0-14.29333 74.581318c-0.341333 7.935998-0.64 14.570664-0.874667 21.247996l-0.170666 5.034665c-0.490667 15.274663-0.704 32.511993-0.768 67.135986l0.021333 72.981318c0.128 48.38399 0.597333 60.266654 1.813333 86.911982a225.493286 225.493286 0 0 0 14.293331 74.581318 157.055967 157.055967 0 0 0 89.813314 89.834648c23.893328 8.938665 49.08799 13.759997 74.581318 14.29333 6.954665 0.298667 12.885331 0.576 18.751996 0.789334l7.530665 0.255999c16.127997 0.512 34.431993 0.725333 73.087985 0.768h55.423988c58.261321-0.085333 69.866652-0.512 98.517313-1.834666a225.493286 225.493286 0 0 0 74.581318-14.29333 157.055967 157.055967 0 0 0 89.834648-89.813315c8.938665-23.893328 13.759997-49.08799 14.29333-74.581318l0.853334-19.946662 0.170666-5.375999c0.512-16.255997 0.725333-34.34666 0.789333-73.194652v-55.743988a2452.479489 2452.479489 0 0 0-0.768-72.746651l-0.255999-7.551999c-0.213333-5.866665-0.490667-11.797331-0.810667-18.773329a225.493286 225.493286 0 0 0-14.29333-74.559985 157.055967 157.055967 0 0 0-89.813315-89.834648 225.493286 225.493286 0 0 0-74.581318-14.29333c-6.954665-0.298667-12.885331-0.576-18.751996-0.789333l-5.845332-0.213334c-15.722663-0.512-32.917326-0.725333-68.821319-0.810666z m-11.242664 53.482656c38.165325 0.042667 56.106655 0.234667 71.978652 0.725333l4.991999 0.170667c6.613332 0.234667 13.226664 0.533333 21.162662 0.895999 19.711996 0.213333 39.210658 3.839999 57.706655 10.709332a102.911979 102.911979 0 0 1 58.965321 58.965321c6.847999 18.474663 10.453331 37.994659 10.709331 57.706654 0.362667 7.935998 0.64 14.527997 0.874666 21.141329l0.170667 4.991999c0.469333 15.018664 0.661333 31.85066 0.725333 65.81332v67.583986a2244.351532 2244.351532 0 0 1-0.725333 65.450653l-0.170667 4.991999c-0.213333 6.613332-0.512 13.226664-0.874666 21.162662a171.882631 171.882631 0 0 1-10.709331 57.706655 102.911979 102.911979 0 0 1-58.965321 58.965321 171.903964 171.903964 0 0 1-57.706655 10.709331c-6.954665 0.32-12.863997 0.576-18.666663 0.789333l-4.970665 0.170667c-15.70133 0.533333-32.469327 0.746667-68.351986 0.810666h-67.178653a2132.116889 2132.116889 0 0 1-68.330652-0.810666l-4.970666-0.170667c-5.802665-0.213333-11.733331-0.469333-18.666663-0.789333a171.903964 171.903964 0 0 1-57.706654-10.709331 102.911979 102.911979 0 0 1-58.965321-58.965321 171.882631 171.882631 0 0 1-10.709332-57.706655 2121.812891 2121.812891 0 0 1-0.895999-21.162662l-0.170667-4.991999c-0.512-16.767997-0.704-35.839993-0.746666-78.527984v-48.31999c0.064-38.165325 0.256-56.106655 0.746666-71.999985l0.362667-9.962664 0.703999-16.170664c0.213333-19.711996 3.839999-39.231992 10.709332-57.706654a102.911979 102.911979 0 0 1 58.965321-58.965321 171.903964 171.903964 0 0 1 57.706654-10.709332c7.935998-0.362667 14.527997-0.64 21.141329-0.895999l4.991999-0.170667c16.78933-0.512 35.839993-0.704 78.549317-0.746666z m-27.434661 95.146647a159.5733 159.5733 0 1 0 0 319.1466 159.5733 159.5733 0 0 0 0-319.1466z m0 55.999988a103.594645 103.594645 0 1 1 0 207.167957 103.594645 103.594645 0 0 1 0-207.146624z m165.866632-99.583979a37.290659 37.290659 0 1 0 0 74.581318 37.290659 37.290659 0 0 0 0-74.581318z"
                            fill="#101827" p-id="14339"></path>
                    </svg>
  `;
    const svgCode3 = `<svg t="1709518851601" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="13192" width="64" height="64">
                        <path
                            d="M366.884571 734.134857V391.68H253.001143v342.491429h113.883428zM309.942857 344.868571c39.68 0 64.438857-26.331429 64.438857-59.209142-0.731429-33.572571-24.758857-59.136-63.634285-59.136-39.021714 0-64.438857 25.6-64.438858 59.136 0 32.914286 24.722286 59.245714 62.939429 59.245714h0.731429z m467.456 389.266286v-196.352c0-105.216-56.173714-154.185143-131.035428-154.185143-60.489143 0-87.552 33.28-102.619429 56.576v-48.566857h-113.846857c1.499429 32.182857 0 342.528 0 342.528h113.846857v-191.268571c0-10.24 0.731429-20.48 3.730286-27.721143 8.192-20.48 26.953143-41.654857 58.368-41.654857 41.216 0 57.782857 31.378286 57.782857 77.421714v183.259429h113.810286zM512 0c282.770286 0 512 229.193143 512 512 0 282.770286-229.229714 512-512 512-282.806857 0-512-229.229714-512-512C0 229.193143 229.193143 0 512 0z"
                            fill="#101827" p-id="13193"></path>
                    </svg>
  `;
    return (
        <div className={'flex flex-col justify-start gap-2 w-full'}>
            <h2 className={'text-xs font-bold text-white'}>Social Links</h2>
            <div className={'flex flex-row w-full justify-start items-center gap-4'}>
                <a href={'https://www.youtube.com/@vicazhuo'} target={'_blank'}
                   className={'bg-white hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 w-full aspect-square rounded-xl flex items-center justify-center shadow'}>
                    <div dangerouslySetInnerHTML={{__html: svgCode1}}/>
                </a>
                <a href={'https://www.instagram.com/vica.zhuo/'} target={'_blank'}
                   className={'bg-white hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 w-full aspect-square rounded-xl flex items-center justify-center shadow'}>

                    <div dangerouslySetInnerHTML={{__html: svgCode2}}/>

                </a>
                <a href={'https://www.linkedin.com/in/vicazhuo'} target={'_blank'}
                   className={'bg-white hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 w-full aspect-square rounded-xl flex items-center justify-center shadow'}>
                    <div dangerouslySetInnerHTML={{__html: svgCode3}}/>
                </a>
            </div>
        </div>
    );
};

// My Newsletter.
const MyNewsletter: React.FC = () => {
    return (
        <div className={'flex flex-col justify-start gap-2 w-full'}>
            <h2 className={'text-xs font-bold text-white'}>Social Links</h2>
            <div className={'flex flex-row w-full justify-start items-center gap-4'}>
                <a href={'https://www.linkedin.com/in/vicazhuo/'}
                   className={'bg-white hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 w-full aspect-square rounded-xl flex items-center justify-center shadow'}>
                    {/*<svg t="1709517968053" className="icon" viewBox="0 0 1024 1024" version="1.1"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg" p-id="8698" width="200" height="200">*/}
                    {/*    <path*/}
                    {/*        d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512C1024 229.184 794.752 0 512 0zM384 760 256 760l0-448 128 0L384 760zM323.968 284.544c-33.152 0-59.968-26.88-59.968-60.032 0-33.152 26.88-60.032 59.968-60.032C357.12 164.544 384 191.424 384 224.512 384 257.664 357.12 284.544 323.968 284.544zM832 760l-128 0L704 483.008c0-32.448-9.28-55.168-49.152-55.168C588.736 427.84 576 483.008 576 483.008l0 276.992L448 760l0-448 128 0 0 42.816c18.304-14.016 64-42.752 128-42.752 41.536 0 128 24.832 128 174.848L832 760z"*/}
                    {/*        fill="#101827" p-id="8699"></path>*/}
                    {/*</svg>*/}
                </a>
            </div>
        </div>
    );
};

// My Projects.
const MyProjects: React.FC = () => {
    return (
        <div className={'flex flex-col justify-start gap-2 w-full'}>
            <h2 className={'text-xs font-bold text-white'}>My Projects</h2>
            <div className={'flex flex-col w-full gap-4'}>
                <div className={'bg-indigo-600 w-full px-4 py-4 flex flex-col gap-3 rounded-xl shadow'}>
                    <div className={'flex flex-row justify-between items-center gap-3'}>
                        <Image
                            src="/icon-2.png"
                            data-nimg={1}
                            decoding={'async'}
                            alt="Code Planner Logo"
                            width={70}
                            height={70}
                        />
                        <div className={'flex flex-col items-start justify-center w-full'}>
                            <h3 className={'text-3xl font-medium text-white'}>New Retail Solution</h3>
                            <p className={'text-xs font-thin text-white'}>
                                Build better software by planning ahead with the world's best code planning tool!
                            </p>
                        </div>
                    </div>
                    <a href={''}
                       className={'w-ful flex items-center justify-center bg-white rounded-xl whitespace-nowrap py-3 hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 font-semibold'}>
                        Sign Up For Free
                    </a>
                </div>
                <div className={'bg-red-500 w-full px-4 py-4 flex flex-col gap-3 rounded-xl shadow'}>
                    <div className={'flex flex-row justify-between items-center gap-3'}>
                        <Image
                            src="/icon-1.png"
                            data-nimg={1}
                            decoding={'async'}
                            alt="Code Planner Logo"
                            width={70}
                            height={70}
                        />
                        <div className={'flex flex-col items-start justify-center w-full'}>
                            <h3 className={'text-3xl font-medium text-white'}>WECAU</h3>
                            <p className={'text-xs font-thin text-white'}>
                                This a dDesign amazing layouts create and print PDFs in minutes.
                            </p>
                        </div>
                    </div>
                    <a href={'https://wecau.vicazhuo.tech'}
                       className={'w-ful flex items-center justify-center bg-white rounded-xl whitespace-nowrap py-3 hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 font-semibold'}>
                        Experience For Free
                    </a>
                </div>
            </div>
        </div>
    );
};

//Other Useful Links
const OtherUsefulLinks: React.FC = () => {
    const items = ["AD 1", "AD 2", "AD 3", "AD 4"];
    return (
        <div className={'flex flex-col justify-start gap-2 w-full'}>
            <h2 className={'text-xs font-bold text-white'}>Other Useful Links</h2>
            <div className={'flex flex-row w-full justify-start items-center gap-4'}>
                {items.map((item, index) => (
                    <a href={'https://www.instagram.com/tom.developer/'} key={index}
                       className={'bg-white hover:cursor-pointer hover:bg-gray-200 active:bg-gray-100 w-full aspect-square rounded-xl flex items-center justify-center shadow'}>
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

// 在同一个文件中导出 ComponentA 和 ComponentB
export {
    MyProfile,
    MySocialMedia,
    MyProjects,
    OtherUsefulLinks
};
