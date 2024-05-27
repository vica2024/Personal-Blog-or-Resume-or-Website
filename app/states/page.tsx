import { NextPage } from 'next';
import React from 'react';
import { Profiles } from '@/components/common';
import  Content  from '@/components/content';
const States: NextPage = () => {
    return (
        <div>
            <Content />
            <Profiles />
        </div>
    );
};
export default States;
