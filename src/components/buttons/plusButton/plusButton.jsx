
import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import theme from '../../../shared-styles/theme';

export default function PlusButton({handleButtonClick}) {
    return (
        <BsPlusCircleFill size={41} color={theme.colors.green} onClick={handleButtonClick} style={{cursor:'pointer'}}/>
    );
}