import {useState, useEffect} from 'react';

const Blinker = props => {
    const [blink, setBlink] = useState('');

    // Blinker
    useEffect(() => {
        setTimeout(() => {
            if (blink === '|') {
                setBlink('');
            } else {
                setBlink('|');
            }
        }, 250);
    }, [blink]);

    return {blink};
}

export default Blinker;