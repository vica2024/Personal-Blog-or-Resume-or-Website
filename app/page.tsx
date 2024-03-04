import { MyProfile, MySocialMedia,MyProjects, OtherUsefulLinks } from '@/components/personal';

export default function Home() {
    return (<main>
        <div className={'flex flex-col items-start justify-start min-h-screen px-5 py-10 gap-14 max-w-2xl'}>
            <MyProfile />
            <MySocialMedia/>
            <MyProjects/>
            <OtherUsefulLinks/>
        </div>
    </main>);
}
