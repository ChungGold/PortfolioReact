import styled from 'styled-components';

//CUBE
const Box = styled.figure`
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

const Intro = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    background-color: #374045;

    section {
        width: 100vw;
        height: 40vh;

        display: grid;
        justify-items: center;
        align-items: center;
        align-content: space-between;

        h1 {
            height: 3rem;
        }

        h1, p {
            width: clamp(20rem, 40vw, 80rem);
            
            text-align: center;
            line-height: 1.75rem;
        }

        p {
            height: 30vh;
            margin-top: clamp(1rem, 2.5vh, 3rem);
            font-size: clamp(12px, 3vw , 16px);
        
            line-height: clamp(24px, 3vw , 32px);
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
        

        nav {
            font-size: clamp(24px, 3vw , 32px);
            letter-spacing: 3rem;
            z-index: 1;
        
            width: 200px;
            height: 3rem;
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
    }
`

export { Box, Intro};