import {useState, useEffect, useRef} from 'react';

const words = 'Hello, my name is Chung Au';

const Typer = props => {
    const [msg, setMsg] = useState(0);
    const [blink, setBlink] = useState('|');
    
    //Typing effect
    const countRef = useRef(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsg(words.substring(0, countRef.current));
            countRef.current++;
        }, 75);
        return () => clearTimeout(timeout);
    }, [msg]);

    //Blinker
    useEffect(() => {
        const timeoutTwo = setTimeout(() => {
            if (blink === '|') {
                setBlink('');
            } else {
                setBlink('|');
            }
        }, 750);
        return () => clearTimeout(timeoutTwo);
    }, [blink]);

    return (
        <h1>{msg}{blink}</h1>
    )
}

export default Typer;