import React from 'react'
import { ReactPainter } from 'react-painter';
import styled from "styled-components";
import Dots from "../images/dots.svg";
import Lines from "../images/lines.svg";
import Rectangle from "../images/rectangle.svg";
import { motion } from "framer-motion";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Forms = styled.div`
    position: absolute;
    display: flex;
    gap: 2rem;
`;

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: flex-end;
    padding: 2rem 0;
    align-items; center;
`;

const Drawing = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 2rem 0;
`;

const Icon = styled(motion.img)`
    cursor: grab;
`;

const DrawCanvas = styled.div`
cursor: url('data:image/x-icon;base64,AAACAAEAICAQAAUABQDoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAAAIAAAAAAAAAAAAAEAAAAAAAAAAAAAAA6sD6AHV1dQAAzP8Avb29AJzr/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAREQAAAAAAAAAAAAAAAAAEAREQAAAAAAAAAAAAAAAAMEAREQAAAAAAAAAAAAAAAzMEAREQAAAAAAAAAAAAADMyMEAREQAAAAAAAAAAAAMzIzMEAREAAAAAAAAAAAAzMjMzMEAQAAAAAAAAAAADMyMzMyMEAAAAAAAAAAAAMzIzMzIzMAAAAAAAAAAAAAADMzMjMwAAAAAAAAAAAFVVAzMyMzAAAAAAAAAAAABVVQMzIzMAAAAAAAAAAAAAVVUAADMwAAAAAAAAAAAAAFVVVVAzAAAAAAAAAAAAAABVVVVQMAAAAAAAAAAAAAAAAFVVUAAAAAAAAAAAAAAAAABVVVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////+f////D////gf///wD///4Af//8AD//+AAf//AAH//gAD//wAB//4AA//8AAf/+AAP//gAH//4AD//+AB///gA///4Af//+AP///gH/////////////////////////////w=='), auto; }
`;

const ColorPicker = styled.span`
    width: 24px;
    height: 24px;
    border: 1px solid #373737;
    cursor: pointer;
`;


export default function Play() {
    return (
        <Container>
            <Forms>
                <Icon src={Rectangle}
                drag
                dragElastic={0.2}
                dragMomentum={false}
                dragConstraints={{ left: -200, right: 300, top: -200, bottom: 200 }}
                />
                <Icon src={Lines} 
                drag
                dragElastic={0.2}
                dragMomentum={false}
                dragConstraints={{ left: -250, right: 250, top: -200, bottom: 200 }}
                />
                <Icon src={Dots} 
                drag
                dragElastic={0.2}
                dragMomentum={false}
                dragConstraints={{ left: -300, right: 200, top: -200, bottom: 200 }}
                />
            </Forms>
            


            <ReactPainter
                width={500}
                height={500}
                initialColor={'#E7BB7A'}
                initialLineWidth={3}
                image={"https://res.cloudinary.com/iriselva/image/upload/v1619561896/Blank_dy6llw.png"}
                render={({ canvas, setColor }) => (
                <Drawing>
                    <Title>Draw on our virtual notebook!</Title>
                    
                    <DrawCanvas>{canvas}</DrawCanvas>
                    <Controls>
                        <p>Click to change color</p>
                        <ColorPicker
                        style={{background: '#373737'}}
                        onClick={e => setColor('#373737')}
                        ></ColorPicker>
                        <ColorPicker
                        style={{background: '#C2D1CE'}}
                        onClick={e => setColor('#C2D1CE')}
                        ></ColorPicker>
                        <ColorPicker
                        style={{background: '#E7BB7A'}}
                        onClick={e => setColor('#E7BB7A')}
                        ></ColorPicker>
                        <ColorPicker
                        style={{background: '#BFAEA9'}}
                        onClick={e => setColor('#BFAEA9')}
                        ></ColorPicker>
                    </Controls>
                    
                </Drawing>
                )}
            />
        </Container>
    )
}

