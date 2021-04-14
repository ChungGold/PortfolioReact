import {useState, useEffect, useRef} from 'react';

const Drop = props => {
    const bio = 'I’m a frontend developer with a knack for CSS. I enjoy building the front-end of websites and applications from the ground up. I have a lot of fun with UI/UX, but nothing feels better than writing the code yourself. I documented all of my growth as a developer on LinkedIn since day 1, check it out!';

    const [letter, setLetter] = useState('');

    const counter = useRef(0);

    const newLetter = <span className = 'letter'>
        {bio.substring(counter.current, counter.current + 1)}
    </span>;

    useEffect(() => {
        setTimeout(() => {
            setLetter(prev => 
                prev += newLetter.props.children)
                console.log(newLetter.props);
            counter.current++;
        }, 1000);
    }, [letter]);





    return (
        <p>{letter}</p>
    )

}

export default Drop;