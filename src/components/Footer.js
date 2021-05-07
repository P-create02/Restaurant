import React from 'react'
import styled from 'styled-components'
import socialLinks from "../images/data.socials"
import Mapa from './Mapa'

export default function Footer() {
    return (
        <Wrapper>
            <div className="other">
                <div className="map">
                    <Mapa />
                </div>

                <div className="newsletter">
                    <h4>Follow ous promotions!</h4>
                    {/* <form method="post"> */}
                        <input type="email" className='email' placeholder='Write your mail'/>
                        <button type="submit">subscribe</button>
                    {/* </form> */}
                    <h4 className='social-title'>social media</h4>
                    <ul className='social'>
                        {socialLinks.map(link => {
                            return (
                            <li key={link.id}>
                                <a href={link.url} className="social-link" target='_blank' rel="noreferrer">
                                {link.icon}
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div><hr /><hr /><hr />

            <div className="copy">
                Copyright Hamburger &copy; {new Date().getFullYear()} &copy;
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background: var(--backBox);
    text-align: center;
    color: var(--box);
    margin: 0 2rem;
    margin-top: 2rem;
    bottom: 0;
    border-radius: var(--radius);
    padding: 1rem;
    .map{
        margin: 1rem auto;
    }
    h4{
        margin-top: 2rem;
        font-style: italic;
        font-weight: 400;
    }
    input, button{
        background: transparent;
        border-color: var(--socials);
        padding: 0.5rem;
        font-size: 1.25rem;
        border-radius: var(--radius);
        color: var(--box);
    }
    button{
        background: var(--btns);
        border-color: var(--btns);
        text-transform: uppercase;
        cursor: pointer;
        transition: var(--transition);
        &:hover{
                opacity: 0.75;
        }
    }
    .social{
        display: flex;
        justify-content: space-evenly;
        margin: 0 12rem;
        a{
            font-size: 2rem;
            color: var(--btns);
            transition: var(--transition);
            &:hover{
                opacity: 0.75;
            }
        }
    }
    .other{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    hr{
        border-color: var(--btns);
    }
    @media (max-width: 1100px){
        .other{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px 0;
        }
    }
    @media (max-width: 600px){
        .social{ 
            margin: 0;
        }
        input, button{
        padding: 0.25rem;
        font-size: 1rem;
        }
    }
    @media (max-width: 310px){
        input, button{
        padding: 0.15rem;
        font-size: 0.75rem;
        }
    }
`