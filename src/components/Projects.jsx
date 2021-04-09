import letterRain from '../assets/letterRain.PNG';
import xoBeautyBrows from '../assets/xoBeautyBrows.PNG';
import glitchCube from '../assets/glitchCube.PNG';
import shootingPractice from '../assets/shootingPractice.PNG';
import ripple from '../assets/ripple.PNG';
import shapes from '../assets/shapes.PNG';
import typeDrop from '../assets/typeDrop.PNG';
import portfolio from '../assets/portfolio.PNG';
import typeCube from '../assets/typeCube.PNG'
import clock from '../assets/clock.PNG';
import terminal from '../assets/terminal.PNG';
import champloo from '../assets/champloo.PNG';

const Projects = [
    {
        image: terminal,
        title: "Terminal Portfolio",
        desc: "A terminal portfolio built in React using Samuel Sandoval's portfolio as a wireframe. Despite the wire-framed design, the code is original and written by myself.",
        github: "https://github.com/ChungGold/terminalPortfolio",
        link: "https://terminal-portfolio-nine.vercel.app/",
    },
    {
        image: clock,
        title: "React Clock",
        desc: "An analog clock app that I built out using React. The time and hand-positions are accurate to the second!",
        github: "https://github.com/ChungGold/clock",
        link: "https://chungs-clock.vercel.app/",
    },
    {
        image: xoBeautyBrows,
        title: "XO Beauty Brows",
        desc: "A static website designed in vanilla for a local beauty business.",
        github: "https://github.com/ChungGold/Client1/",
        link: "https://www.xobeautybrows.com/",
    },
    {
        image: letterRain,
        title: "Letter Rain",
        desc: "A vanilla JavaScript project that uses event listeners to call a function that constructs letter-objects that drop from the top like rain. The letters animate off the bottom of the window and bounce randomly due to JavaScript randomizing the keyframe values.",
        github: "https://github.com/ChungGold/LetterRain",
        link: "https://letter-rain.vercel.app/",
    },
    {
        image: shootingPractice,
        title: "Shooting Practice",
        desc: "A JavaScript game I developed after making the 'target' cursor.",
        github: "https://github.com/ChungGold/Aim",
        link: "https://shooting-practice.vercel.app/",
    },
    {
        image: portfolio,
        title: "Portfolio Draft",
        desc: "A portfolio draft I developed in vanilla. This draft was re-imagined and rebuilt into the portfolio you're exploring right now!",
        github: "https://github.com/ChungGold/officialPortfolio",
        link: "https://chung-au.vercel.app/",
    },
    {
        image: typeDrop,
        title: "Digital Typer",
        desc: "A JavaScript typing app I made with animations set for every keystroke.",
        github: "https://github.com/ChungGold/keyboard",
        link: "https://keyboard-vert.vercel.app/",
    },
    {
        image: shapes,
        title: "3D Shapes",
        desc: "A CSS animation I made showing off three 3D shapes visually-contained inside of each other. JavaScript was used to save time on writing HTML and CSS.",
        github: "https://github.com/ChungGold/Shapes",
        link: "https://3d-shapes.vercel.app/",
    },
    {
        image: glitchCube,
        title: "Glitch Cube",
        desc: "A CSS animation making use of the clip property to make an eye-bending effect. The cube lettering is moved by a vanilla JavaScript carousel.",
        github: "https://github.com/ChungGold/GlitchCube",
        link: "https://text-cube.vercel.app/",
    },
    {
        image: typeCube,
        title: "Type Cube",
        desc: "An animation app that shows off different shapes that can be formed with six box panels. Type first to form the cube!",
        github: "https://github.com/ChungGold/TypeCube",
        link: "https://typecube.vercel.app/",
    },
    {
        image: ripple,
        title: "Ripple",
        desc: "A fun project I made with JavaScript to create a water ripple effect. Click anywhere!",
        github: "https://github.com/ChungGold/ripple-dripple",
        link: "https://ripple-mu.vercel.app/",
    },
    {
        image: champloo,
        title: "Champloo",
        desc: "An animation I made using JavaScript to create the HTML with varying animation-delays applied. The image was 'broken down' using the object-position property.",
        github: "https://github.com/ChungGold/Champloo",
        link: "https://champloo.vercel.app/",
    }
]

export default Projects;