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
    flex-flow: column wrap;

    background-color: #374045;

    article {
        height: 30vh;
        width: clamp(20rem, 40vw, 80rem);
        
        text-align: center;
        line-height: 1.75rem;

        p {
            margin-top: clamp(1rem, 2.5vh, 3rem);

            line-height: 2rem;
            filter: opacity(0);
            transform: translateX(-400px);

            animation: slideIn 1 ease-in-out normal 2s;
            animation-fill-mode: forwards;

            @keyframes slideIn {
                100% {
                    filter: opacity(1);
                    transform: translateX(0px);
                }
            }
        }
    }

    figure {
        font-size: 2rem;
        letter-spacing: 3rem;
        z-index: 1;
    
        width: 200px;
        display: flex;
        justify-content: space-between;

        a {
            color: white;
            text-decoration: none;
            
            :hover {
                animation: bounce 500ms infinite normal ease-in-out;
            }

            @keyframes bounce {
                25% {
                    transform: scale(1.4,0.6);
                }
                50% {
                    transform: scale(0.9,1.2) translateY(-10px);
                    color: #ffd369;
                }
                75% {
                    transform: scale(1.2,0.8);
                }
            }
        }
    }
`

export { Box, Intro};