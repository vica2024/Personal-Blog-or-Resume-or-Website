'use client';
import React, {useState, useEffect} from 'react';
import Markdown from "markdown-to-jsx";
interface ContentProps {
    title:string;
    path: string;
}
const Content: React.FC<ContentProps> = ({ path,title }) => {
    console.log(path)
    const [markdown, setMarkdown] = useState<string | null>(null);
    useEffect(() => {
        if(path) {
            fetch(path)
                .then((res) => res.text())
                .then(setMarkdown)
                .catch((error) => {
                    console.error('Error loading markdown file:', error);
                });
        }
    }, []);
    let count : number = 0;

    if (!markdown) {

        return <div className={'h-4 mt-8 place-content-center'}>Loading...</div>;

    }else{

        count = markdown.split(/\s+/)
            .map((s) => s.replace(/\W/g, ''))
            .filter((s) => s.length).length;
    }

    return (
        <div>
            <div className="bg-white float-right lg:w-[70%] p-5 mt-8 border border-b-slate-400 border-opacity-30">
                <header className={'border-b border-b-slate-400 border-opacity-30 p-4'}>
                    <div className={'text-center m-5 font-thin'}>
                        <h2 className={'text-3xl font-bold text-slate-700 border-opacity-65'}>{title}</h2>
                        <p className={'font-thin text-sm mt-5 text-gray-600 text-f-vis'}>(in about {count} words)</p>
                    </div>
                </header>
                <div className="prose markdown-container">
                    <Markdown>{markdown}</Markdown>
                </div>
            </div>
        </div>
    )
}
export default Content;
