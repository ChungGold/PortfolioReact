import {useState, useEffect, useRef} from 'react';

const words = 'Hello, my name is Chung Au';

const Typer = props => {
    const [msg, setMsg] = useState(0);

    const countRef = useRef(1);

    useEffect(() => {
        setTimeout(() => {
            setMsg(words.substring(0, countRef.current));
            console.log(countRef.current)
            countRef.current++;
        }, 50);
    }, [msg]);

    return (
        <h1>{msg}</h1>
    )
}

export default Typer;