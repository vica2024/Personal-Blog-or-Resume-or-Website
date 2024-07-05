import {NextPage} from 'next';
import React from 'react';
import {Profiles} from '@/components/common';
import  Content  from '@/components/content';
const Resume: NextPage = () => {

    return (
        <div>
            <Content path={"./resume.md"} title={"Vica's Resume"} />
            <Profiles />
        </div>
    );
};

export default Resume;
