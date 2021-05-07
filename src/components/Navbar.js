import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'
import {useCartProducts} from '../context/cartProducts'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const {openSidebar, openSubmenu, closeSubmenu} = useCartProducts()

    const displaySubmenu = (e) =>{
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()

        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3

        openSubmenu(page, {center, bottom})
    }

    const handleSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }

    return (
        <><Wrapper>
            <div className="nav-center" onMouseOver={handleSubmenu}>
                <div className="nav-header">
                    <button className="btn toggle-btn" onClick={openSidebar}><FaAlignRight /></button>
                </div>

                <Link to='/'>
                    <img src={logo} alt="logo" className='nav-logo'/>
                </Link>

                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            menu
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            restaurant
                        </button>
                    </li>
                </ul>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.nav`
    height: 5rem;
    position: relative;
    z-index: 1;
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    background: var(--backBox);
    box-shadow: 0 0 15px var(--backBox);
    .nav-logo{
        position: absolute;
        top: 0;
        left: 50%;
        width: 220px;
        height: 205px;
        transform: translateX(-50%);
        box-shadow: 0 10px 15px var(--backBox);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        @media (max-width: 550px){
            width: 150px;
            height: 135px;
        }
    }
    .nav-center {
        width: 100vw;
    }
    .btn {
        position: absolute;
        top: 20%;
        right: 5%;
        font-size: 1.75rem;
        padding: 0.25rem 0.75rem;
        color: white;
        cursor: pointer;
        transition: var(--transition);
        background: transparent;
    }
    .btn:hover {
        color: var(--btns);
    }
    .nav-links {
        display: none;
    }
    @media (min-width: 900px) {
        .nav-center{
            display: flex;
            justify-content: space-between;
            justify-self: right;
        }
        .toggle-btn {
            display: none;
        }
        .nav-links {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100vw;
        }
        .nav-links li {
            height: 100%;
        }
        .link-btn {
            height: 100%;
            background: transparent;
            border-color: transparent;
            color: var(--box);
            font-size: 1.1rem;
            text-transform: capitalize;
            letter-spacing: 1px;
            width: 10rem;
            transition: var(--transition);
        }
    }
`
