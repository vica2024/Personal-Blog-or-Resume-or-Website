import {MySocialMedia, MyProjects} from '@/components/personal';
import {Profiles} from '@/components/common';

export default function Home() {
    return (
        <div className={'lg:flex'}>
            <Profiles/>
            <div className={'bg-white w-full p-10 mt-14 overflow-hidden'}>
                <MySocialMedia/>
                <MyProjects/>
            </div>
        </div>
    );
}

