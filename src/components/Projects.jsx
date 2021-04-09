import letterRain from '../assets/letterRain.PNG';
import xoBeautyBrows from '../assets/xoBeautyBrows.PNG';
import glitchCube from '../assets/glitchCube.PNG';
import shootingPractice from '../assets/shootingPractice.PNG';

const Projects = [
    {
        image: letterRain,
        title: "Letter Rain",
        desc: "A vanilla JavaScript project that uses event listeners to call a function that constructs letter-objects that drop from the top like rain. The letters animate off the bottom of the window and bounce randomly due to JavaScript randomizing the keyframe values.",
        github: "https://github.com/ChungGold/LetterRain",
        link: "https://letter-rain.vercel.app/",
    },
    {
        image: xoBeautyBrows,
        title: "XO Beauty Brows",
        desc: "A static website designed in vanilla for a local beauty business.",
        github: "https://github.com/ChungGold/Client1/",
        link: "https://www.xobeautybrows.com/",
    },
    {
        image: glitchCube,
        title: "Glitch Cube",
        desc: "A CSS animation making use of the clip property to make an eye-bending effect. The cube lettering is moved by a vanilla JavaScript carousel.",
        github: "https://github.com/ChungGold/GlitchCube",
        link: "https://text-cube.vercel.app/",
    },
    {
        image: shootingPractice,
        title: "Shooting Practice",
        desc: "A JavaScript game I developed after making the 'target' cursor.",
        github: "https://github.com/ChungGold/Aim",
        link: "https://shooting-practice.vercel.app/",
    }
]

export default Projects;