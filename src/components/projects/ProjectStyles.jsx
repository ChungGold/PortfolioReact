import styled from 'styled-components';

const ProjectsSection = styled.section`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 25vw 25vw 25vw 25vw;
    grid-template-rows: 33.33vh 33.33vh 33.33vh;

    background-color: #374045;
`

const ProjectCard = styled.figure`
    img {
        position: absolute;
        width: 25vw;
        height: 33.33vh;
        object-fit: cover;
    }

    figcaption {
        position: absolute;
        width: 25vw;
        height: 33.33vh;

        background-color: black;

        opacity: 0;
        z-index: 1;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: wrap column;

        p {
            width: 80%;
        }

        span {
            width: 30%;
            font-size: 2rem;
            display: flex;
            justify-content: space-between;
        }

        :hover {
            opacity: 0.9;
        }
    }
`

export { ProjectsSection, ProjectCard };