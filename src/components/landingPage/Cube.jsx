import styled from 'styled-components';

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
`

const Face = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border: 1px white solid;
`

const Cube = () => {
    return (<Box>
        <Face class ='zero'/>
        <Face class ='one'/>
        <Face class ='two'/>
        <Face class ='three'/>
        <Face class ='four'/>
        <Face class ='five'/>
    </Box>)
}

export default Cube;