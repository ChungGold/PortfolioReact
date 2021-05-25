import styled from 'styled-components';


//CUBE
const Box = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    transform-style: preserve-3d;

    animation: cubeRotate 20s normal linear infinite;

    @keyframes cubeRotate {
    0% {
        transform: rotate3d(1, 1, 1, -360deg);
    }
    }

    div {
        position: absolute;
        width: 500px;
        height: 500px;
        border: 1px white solid;
    }
`

const Intro = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #374045;

    article {
        height: 30vh;
        width: clamp(20rem, 40vw, 80rem);
        
        text-align: center;
        line-height: 1.75rem;
    }
`

export { Box, Intro};