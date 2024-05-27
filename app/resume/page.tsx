import {NextPage} from 'next';
import React from 'react';
import {Profiles} from '@/components/common';
import  Content  from '@/components/content';
const Resume: NextPage = () => {

    return (
        <div>
            <Content />
            <Profiles />
        </div>
    );
};

export default Resume;
