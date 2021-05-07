import React from 'react'
import styled from 'styled-components'
import TitlePages from '../components/TitlePages'
import {useCartProducts} from '../context/cartProducts'
import chefPhoto from '../images/chef.jpg'
import { FaStar } from 'react-icons/fa'

export default function About() {
    const { closeSubmenu } = useCartProducts()
    return (<>
        <TitlePages title='about' text='Some information about restauration' />
        <Wrapper onMouseOver={closeSubmenu}>
            <div className="photo">
                <img src={chefPhoto} alt="chef"/>
            </div>

            <div className="text">
                <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <h1>The best street food in Kraków!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi laboriosam nesciunt asperiores dolore veritatis porro totam dignissimos iste laborum enim, magni, cumque eligendi omnis eius voluptas aliquid nulla minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur alias voluptate beatae ab nesciunt modi fuga et excepturi suscipit minima autem, blanditiis laboriosam placeat porro quisquam enim ut corporis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam enim exercitationem optio deserunt necessitatibus eum similique asperiores minus repudiandae amet labore, doloribus non quidem commodi voluptatibus voluptate impedit ea. Alias?</p>
                <h3>Mark Lee, chef</h3>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    width: 97.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 10px;
    .stars{
        padding: 1rem 0;
        font-size: 1.75rem;
        color: var(--btns);
    }
    .photo{
        margin: 0 auto;
        img{
            width: 400px;
            height: 600px;
            &:hover{
                animation: pht 1s linear;
            }
            @keyframes pht {
                from{
                    opacity: 0.25;
                }
                to {
                    opacity: 1;
                }
            }
            @media (max-width: 450px){ 
                width: 250px;
                height: 400px;
            }
        }
    }
    .text{
        text-align: left;
        p{ color: gray; margin-top: 2rem; }
        h3{ font-style: italic }
    }
    @media (max-width: 800px){
        grid-template-columns: 1fr;
        gap: 0;
        .text{
            width: 100vw;
            text-align: center;
            padding: 0 2rem;
        }
    }
`