import {useState, useEffect} from 'react';

const Blinker = () => {
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