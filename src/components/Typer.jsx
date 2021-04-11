import {useState, useEffect, useRef} from 'react';

const words = [
    'Hello, my name is Chung Au', 
    `I'm a front-end developer`, 
    'I made this typewriter component in React', 
    `Although.. I'm still trying to figure out how to slot in a cleanup function`,
    `Seriously, if I don't keep adding more phrases in the array, my portfolio will crash`];

const Typer = props => {
    const [msg, setMsg] = useState(0);
    const [blink, setBlink] = useState('|');
    
    //Typing effect
    const countRef = useRef(0);
    const seqeuence = useRef(false);
    const arrPos = useRef(0);

    useEffect(() => {
        if (seqeuence.current === false) {
            const timeout = setTimeout(() => {
                setMsg(words[arrPos.current].substring(0, countRef.current));
                countRef.current++;

                if (countRef.current === words[arrPos.current].length) {
                    clearInterval(timeout);
                    seqeuence.current = true;
                }
            }, 75);
        } else if (seqeuence.current === true) {
            const timeout2 = setTimeout(() => {
                setMsg(words[arrPos.current].substring(0, countRef.current));
                countRef.current--;

                if (countRef.current === 0) {
                    clearTimeout(timeout2);
                    seqeuence.current = false;
                    arrPos.current++;
                }
            }, 75);
        }
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