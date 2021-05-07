import React from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import TitlePages from '../components/TitlePages'

export default function Checkout() {
    const { closeSubmenu } = useCartProducts()
    
    return (<>
        <TitlePages title='checkout' text='make a payment' />
        <Wrapper onMouseOver={closeSubmenu}>

        </Wrapper>
        </>
    )
}

const Wrapper = styled.section``
