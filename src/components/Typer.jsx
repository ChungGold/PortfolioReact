import {useState, useEffect, useRef} from 'react';

const words = [
    'Hello, my name is Chung Au', 
    `I'm a front-end developer`, 
    'I made this typewriter component in React', 
    `Although.. I'm still trying to make a cleanup function`,
    `Seriously, if I don't keep adding more phrases in the array,`, 
    `my portfolio will crash`];

const Typer = props => {
    const [msg, setMsg] = useState(0);
    // const [blink, setBlink] = useState('|');
    
    //Typing effect
    const letterCount = useRef(0);
    const reverse = useRef(false);
    const arrPos = useRef(0);

    useEffect(() => {
        switch (reverse.current){
            case false:
                if (arrPos.current === words.length){
                    arrPos.current = 0;
                }
                const timeout = setTimeout(() => {
                    setMsg(words[arrPos.current].substring(0, letterCount.current));
                    letterCount.current++;
    
                    if (letterCount.current === words[arrPos.current].length) {
                        clearInterval(timeout);
                        reverse.current = true;
                    }
                }, 75);
                break;
            case true:
                const timeout2 = setTimeout(() => {
                    setMsg(words[arrPos.current].substring(0, letterCount.current));
                    letterCount.current--;
    
                    if (letterCount.current === 0) {
                        clearTimeout(timeout2);
                        reverse.current = false;
                        console.log(arrPos.current);
                        arrPos.current++;
                    }
                }, 35);
                break;
            default:
                console.log('test');
        }
    }, [msg]);

    //Blinker
    // useEffect(() => {
    //     const timeoutTwo = setTimeout(() => {
    //         if (blink === '|') {
    //             setBlink('');
    //         } else {
    //             setBlink('|');
    //         }
    //     }, 750);
    //     return () => clearTimeout(timeoutTwo);
    // }, [blink]);

    return (
        <h1>{msg}</h1>
    )
}

export default Typer;