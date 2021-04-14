import {useState, useEffect, useRef} from 'react';

const Typer = props => {
    //Object
    const words = [
        'Hello, my name is Chung Au', 
        `I'm a front-end developer`, 
        'Animations and interactive design is my forte'
    ];

    //States
    const [msg, setMsg] = useState(0);
    
    //References
    const letterCount = useRef(0);
    const reverse = useRef(false);
    const arrPos = useRef(0);

    //Typing effect
    useEffect(() => {
        switch (reverse.current){
            case false:
                if (arrPos.current === words.length){
                    arrPos.current = 0;
                }
                setTimeout(() => {
                    setMsg(words[arrPos.current].substring(0, letterCount.current));
                    letterCount.current++;
    
                    if (letterCount.current === words[arrPos.current].length) {
                        reverse.current = true;
                    }
                }, 75);
                break;

    //Reverse effect
            case true:
                setTimeout(() => {
                    setMsg(words[arrPos.current].substring(0, letterCount.current));
                    letterCount.current--;
    
                    if (letterCount.current === 0) {
                        reverse.current = false;
                        arrPos.current++;
                    }
                }, 75);
                break;
            default:
                console.log('fail');
        }
    }, [msg]);

    return {words, msg, letterCount, arrPos}
}

export default Typer;