import React from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import TitlePages from '../components/TitlePages'
import { Link } from 'react-router-dom'

export default function Cart() {
    const { closeSubmenu, order } = useCartProducts()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() =>{
        setTimeout(() =>{
            setLoading(false)
        }, 550)
    }, [])
    if(loading){
        return(
            <div className="loading">
                <div className="loading"></div>
            </div>
        )
    }
    
    return (<>
        <TitlePages title='cart' text='your order' />
        <Wrapper onMouseOver={closeSubmenu}>
            {order.map((item) =>{
                const { title, price, img, id } = item
                return(<div key={id}>
                    <img src={img} alt={title} />
                    <div className='info'>
                        <h2>{title}</h2><hr />
                        <h4>$ {price}</h4>
                        <h5>Chicken, Cheese, Potato, Onion, Fries</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quibusdam modi, incidunt, doloribus placeat quae sed rerum amet similique possimus saepe ipsa autem consectetur dolorem? Ullam consequatur pariatur et soluta!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quibusdam modi, incidunt, doloribus placeat quae sed rerum amet similique possimus saepe ipsa autem consectetur dolorem? Ullam consequatur pariatur et soluta!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quibusdam modi, incidunt, doloribus placeat quae sed rerum amet similique possimus saepe ipsa autem consectetur dolorem? Ullam consequatur pariatur et soluta!</p>
                        <Link to='/products' className='btn'>menu</Link>
                    </div>
                    </div>
                )
            })}
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    text-align: center;
    margin: 4rem 0;
    img{
        width: 600px;
        height: 325px;
        object-fit: cover;
        border-radius: var(--radius);
        box-shadow: 0 0 20px var(--socials);
    }
    .info{
        margin-top: 2rem;
        h4{
            margin-top: 1rem;
        }
        h5{
            color: grey;
            font-style: italic;
        }
        p{
            margin: 1rem 4rem;
        }
        .btn{
            margin-top: 2rem;
            border: 2px solid var(--backBox);
            background: var(--box);
            color: black;
            &:hover{
                box-shadow: 0 0 10px var(--socials);
            }
        }
    }
    @media (max-width: 650px){
        img{
            width: 300px;
            height: 185px;
        }
        .info p{
            margin: 1rem 1rem;
        }
    }
`