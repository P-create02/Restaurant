import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import subImg01 from '../images/sub01.jpg'
import subImg02 from '../images/sub02.jpg'
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
      <img src={subImg01} alt="background" className='img01'/>
      <img src={subImg02} alt="background" className='img02'/>
      {links.map((link, index) =>{
        return <Link to={link.url} key={index}>
            {link.label}
          </Link>
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.aside`
    background: var(--backBox);
    box-shadow: 0 0 5px var(--backBox);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 22;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
    .img01{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 80%;
      width: 80%;
      z-index: -2;
      opacity: 0.5;
      object-fit: cover;
    }
    .img02{
      position: absolute;
      top: 90%;
      left: 95%;
      transform: translate(-95%, -90%);
      height: 50%;
      width: 45%;
      box-shadow: 0 0 25px var(--socials);
      z-index: -1;
      object-fit: cover;
    }
    &.show {
    display: block;
    }
    .submenu-center{
      width: 300px;
    }
    .submenu-center a {
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
`
