import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../images/dataProducts'
import socialLinks from "../images/data.socials"
import {useCartProducts} from '../context/cartProducts'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useCartProducts()

    return (<Wrapper>
        <div className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
            <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
            <div className='sidebar-links'>
                {sublinks.map((item, index) =>{

                return <article key={index}>
                    <div className='sidebar-sublinks'>
                    {item.links.map((link, index) =>{
                        const {url, label} = link
                        return <Link to={url} key={index} onClick={closeSidebar}>
                            {label}
                          </Link>
                    })}
                    </div>
                </article>
                })}
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
        </div>
    </Wrapper>)
}

const Wrapper = styled.aside`
.sidebar-wrapper{
  background: var(--box);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
  @media (min-width: 900px) {
  display: none;
}
&.show {
  opacity: 1;
  transform: translateX(0);
}
}
.sidebar-sublinks a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--backBox);
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  transition: var(--transition);
  border-radius: var(--radius);
}
.sidebar-sublinks a:hover {
  padding-left: 1rem;
  box-shadow: 10px 0px  var(--backBox);
}
.close-btn {
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--backBox);
  cursor: pointer;
}
.social {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 3rem;
  & a{
    color: var(--backBox);
    font-size: 3rem;
    margin: 0 1rem;
    transition: var(--transition);
    &:hover{
      color: var(--btns);
    }
  }
}
`