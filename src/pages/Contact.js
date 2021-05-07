import React from 'react'
import styled from 'styled-components'
import TitlePages from '../components/TitlePages'
import {useCartProducts} from '../context/cartProducts'

export default function Contact() {
    const { closeSubmenu } = useCartProducts()
    return (<>
        <TitlePages title='contact' text='We make every effort to ensure that you are satisfied' />
        <Wrapper onMouseOver={closeSubmenu}>
            < hr />< hr />< hr />
            <h2>Hamburger Restauration</h2>
            <p>Rynek Główny 122 Cracow, Poland</p>
            <hr />< hr />< hr />
            <h2>Phone</h2>
            <p>+48 200200200</p>
            <hr />< hr />< hr />
            <h2>Open hours</h2>
            <p>Sunday 12:00-23:00</p>
            <p>Saturday 12:00-2:00</p>
            <p>Mon-Fri 10:00-22:00</p>
            <hr />< hr />< hr />
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    width: 90vw;
    text-align: center;
    margin: 0 auto;
    padding: 3rem 0;
    h2{letter-spacing: 0.2rem; padding: 1rem 0;}
    p{color: gray; font-size: 1.25rem;}
`