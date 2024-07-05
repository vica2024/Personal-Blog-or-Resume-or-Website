import { NextPage } from 'next';
import React from 'react';
import  Content  from '@/components/content';
import { Profiles } from '@/components/common';
const About: NextPage = () => {

    return (
        <div>
            <Content path={"./about.md"} title={'ABOUT ME'} />
            <Profiles />
        </div>
    );
};

export default About;
