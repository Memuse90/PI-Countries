import React from 'react';
import { useDispatch } from 'react-redux';

export default function CreateActivity () {
    const [input, setInput] = React.useState({
        name:'',
        dificulty: 0,
        duration: 0,
        season: ''
    });
}