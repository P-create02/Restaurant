import React from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import TitlePages from '../components/TitlePages'

export default function Cart() {
    const { closeSubmenu, order } = useCartProducts()
    
    return (<>
        <TitlePages title='cart' text='your order' />
        <Wrapper onMouseOver={closeSubmenu}>
            {order.map((item) =>{
                return(
                    <div key={item.id}>{item.title}</div>
                )
            })}
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section``