import React from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'

export default function TitlePages({title, text}) {
    const { closeSubmenu } = useCartProducts()
    return (
        <Wrapper onMouseOver={closeSubmenu}>
            <div className="box">
                <h2>{title}</h2>
                <h5>{text}</h5>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 0 auto;
    width: 95vw;
    min-height: 25vh;
    background: var(--backBox);
    margin-bottom: 2rem;
    box-shadow: inset 0px 10px 20px 0px var(--btns);
    border-radius: var(--radius);
    h2{
        text-transform: uppercase;
        padding: 0 1rem;
        padding-top: 3.25rem;
        color: var(--box);
    }
    h5{
        padding: 0 1rem;
        font-style: italic;
        color: gray;
    }
`