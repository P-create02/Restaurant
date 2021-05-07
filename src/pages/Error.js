import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {useCartProducts} from '../context/cartProducts'

export default function Error() {
    const { closeSubmenu } = useCartProducts()
    return (
        <Wrapper onMouseOver={closeSubmenu}>
            <div>
                <h1>Ups, Houston we have problem here!</h1>
                <Link className='btn' to='/'>Back Home</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    text-align: center;
    background: var(--box);
    width: 100vw;
    min-height: 75vh;
    text-transform: uppercase;
    div{
        padding-top: 30vh;
        h1{
            margin-bottom: 2rem;
            text-transform: none;
            font-style: italic;
        }
    }
`