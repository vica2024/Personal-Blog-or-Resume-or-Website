import { NextPage } from 'next';
import React from 'react';
import { Profiles } from '@/components/common';
import  State  from '@/components/states';
const States: NextPage = () => {
    return (
        <div>
            <State />
            <Profiles />
        </div>
    );
};
export default States;
