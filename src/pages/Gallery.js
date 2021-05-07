import React from 'react'
import styled from 'styled-components'
import TitlePages from '../components/TitlePages'
import {useCartProducts} from '../context/cartProducts'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pht1 from '../images/galery1.jpg'
import pht2 from '../images/galery2.jpg'
import pht3 from '../images/galery3.jpg'
import pht4 from '../images/galery4.jpg'
import pht5 from '../images/galery5.jpg'
import pht6 from '../images/sub01.jpg'

export default function Gallery() {
    const { closeSubmenu } = useCartProducts()
    return (<>
        <TitlePages title='galery' text='some photos from special events' />
        <Wrapper onMouseOver={closeSubmenu}>
            <AwesomeSlider className='slider' media={[ {source: `${pht1}`,}, {source: `${pht2}`,}, {source: `${pht3}`,}, {source: `${pht6}`,}, {source: `${pht4}`,}, {source: `${pht5}`,},]} />
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    padding-top: 2rem;
    padding-bottom: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    .slider{
        width: 100vw;
        height: 90vh;
    }
`