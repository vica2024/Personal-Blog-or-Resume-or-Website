import {MySocialMedia, MyProjects} from '@/components/personal';
import {Profiles} from '@/components/common';

export default function Home() {
    return (
        <div>
            <Profiles/>
            <div className={'bg-gray-100 lg:bg-white float-right lg:w-[70%] p-5 mt-8 pb-28'}>
                <MySocialMedia/>
                <MyProjects/>
            </div>
        </div>
    );
}

