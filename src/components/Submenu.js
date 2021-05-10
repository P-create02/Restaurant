import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import { Link } from 'react-router-dom'

export default function Submenu() {
  const {isSubmenuOpen, location , page: {links}} = useCartProducts()
  const container = useRef(null)

  useEffect(() =>{
    const submenu = container.current
    const {center, bottom} = location

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location, links])

  return <Wrapper className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
    <div className='submenu-center'>
      {links.map((link, index) =>{
        return <Link to={link.url} key={index}>
            {link.label}{link.icon}
          </Link>
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.aside`
    background: var(--backBox);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 22;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
    &.show {
      display: block;
    }
    .submenu-center{
      width: 300px;
      svg{
        color: var(--back);
        font-size: 1.25rem;
        margin-left: 1rem;
      }
      a {
        color: var(--back);
        text-transform: capitalize;
        display: flex;
        padding: 0.5rem 0;
        transition: var(--transition);
        z-index: 10;
        margin-left: 2rem;
        &:hover{
          color: var(--back);
          padding-left: 20px;
        }
      }
    }
`
