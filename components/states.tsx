'use client';
import React from 'react';
import data from '../data/personal';

const States: React.FC = () => {

    return (
        <div>
            <div className="bg-white float-right w-full lg:w-[70%] p-5 mt-8 border border-b-slate-400 border-opacity-30">
                <header className={'border-b border-b-slate-400 border-opacity-30 p-4'}>
                    <div className={'text-center m-5 font-thin'}>
                        <h2 className={'text-3xl font-bold text-slate-700 border-opacity-65'}>States</h2>
                    </div>
                </header>
                <table className={'w-full'} >
                    <tbody>
                    {data.map((item) => (
                        <tr className={'h-14 border-b'}>
                            <td width="60%">{item.label}</td>
                            <td width="40%">{item.value ? <a href={item.link}>{item.value}</a> :''}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default States;
