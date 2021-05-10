import React from 'react'
import styled from 'styled-components'
import { FaStar } from 'react-icons/fa'
import mainPht from '../images/home.jpg'

export default function Banner() {
    return (
        <Wrapper>
            <img src={mainPht} alt='chef' />
            <div className="center">
                <h2>best place in Cracow!</h2>
                <div className="stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-bottom: 3rem;
    img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        box-shadow: 0 0 30px var(--backBox);
        position: relative;
    }
    .center{
        background: var(--back);
        box-shadow: 0 0 100px 35px var(--back);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translate(-50%, 0);
        text-align: center;
        h2{
            text-transform: uppercase;
            padding-top: 7.5rem;
            color: var(--backBox);
        }
        .stars{
            color: var(--btns);
            font-size: 1.5rem;
        }
    }
`
