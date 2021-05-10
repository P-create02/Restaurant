import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ProductList({ items, selectOrder }) {
    return (
        <Wrapper>
            {items.map((item) =>{
                return(
                    <div key={item.id} onClick={() => {selectOrder(item.id)}}>
                        <img src={item.img} alt={item.title}/>
                        <div className='info'>
                            <h4>{item.title}</h4>
                            <p>Chicken, Cheese, Potato, Onion, Fries</p>
                            <Link to={`/cart/${item.id}`} className='btn'>more</Link>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    div{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;
        img{
            width: 250px;
            height: 200px;
            object-fit: cover;
            margin: 1rem 5rem;
            border-radius: var(--radius);
            box-shadow: var(--dark-shadow);
            @media (max-width: 1021px){margin: 2rem auto}
        }
        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0 auto;
            padding: 0 2rem;
            text-align: center;
            h4{
                letter-spacing: 0.15rem;
                text-transform: uppercase;
            }
            p{color: grey; font-style: italic;}
        }
        .btn{
            border: 2px solid var(--backBox);
            background: var(--box);
            color: black;
            @keyframes btnsss {
                from{
                    opacity: 0.25;
                    background: var(--box);
                    color: var(--backBox);
                }
                to {
                    opacity: 1;
                    background: var(--backBox);
                    color: var(--box);
                }
            }
            &:hover{
                animation: btnsss 1.5s linear;
            }
        }
    }
`
