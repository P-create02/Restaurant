import React from 'react'
import styled from 'styled-components'
import phtsSlider from '../images/dataslider'
import { Link } from 'react-router-dom'
import {useCartProducts} from '../context/cartProducts'
import { FaShopify, FaCreditCard } from 'react-icons/fa'
import { IoFastFood } from 'react-icons/io5'
import Banner from '../components/Banner'

export default function Home() {
    const { closeSubmenu } = useCartProducts()
    const [value, setValue] = React.useState(0)

    React.useEffect(() =>{
        const autoSlider = setInterval(() =>{
        let newOne = value + 1
        if(newOne > phtsSlider.length - 1) setValue(0)
        else setValue(newOne)
        }, 6000)
        return(() => clearInterval(autoSlider))
    }, [value])

    return (<>
        <Wrapper onMouseOver={closeSubmenu}>
            <div className="slider">
                {phtsSlider.map((slider, index) => {
                    return(
                        <Link key={slider.id}><article className={index === value ? 'activeSlide' : 'nextSlide'}>
                            <img src={slider.image} alt={slider.title}/>
                            <h2>{slider.title}</h2>
                            <h4>{slider.text}</h4>
                        </article></Link>
                    )
                })}
            </div>
        </Wrapper>

        <Banner />

        <NextOne>
            <div>
                <FaShopify className='icon' />
                <h4>Select dish</h4>
                <p>Lorem ipsum dolor sit eat ipsum dolor</p>
            </div>
            <div>
                <FaCreditCard className='icon' />
                <h4>Make a payment</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit elit elit</p>
            </div>
            <div>
                <IoFastFood className='icon' />
                <h4>Receive your order</h4>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
            </div>
        </NextOne>
        </>
    )
}

const NextOne = styled.section`
    width: 94.5vw;
    background: var(--backBox);
    color: var(--box);
    margin: 0 auto;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    div{
        width: 33%;
        transition: var(--transition);
        &:hover{
            background: var(--socials);
        }
        @media (max-width: 750px){
            width: 100%;
            margin: 0 auto;
            padding: 1rem 0;
        }
    }
    p{
        color: grey;
    }
    .icon{
        margin: 1rem 0;
        font-size: 3rem;
    }
`

const Wrapper = styled.section`
    .slider{
        width: 100vw;
        height: 85vh;
        overflow: hidden;

        img{
            width: 100vw;
            height: 80vh;
            object-fit: cover;
            position: relative;
        }
        h2, h4{
            color: var(--box);
            position: absolute;
            top: 60%;
            left: 2%;
        }
        h4{
            top: 67.5%;
        }
        @media (max-width: 450px){
            h2{top: 50%}
            h4{top: 62.5%}
        }
    }
    article {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s linear;
        &.activeSlide {
            opacity: 1;
            transform: translateX(0);
        }
        &.nextSlide {
            transform: translateX(100%);
        }
    }
`
