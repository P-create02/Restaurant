import React from 'react'
import styled from 'styled-components'
import {useCartProducts} from '../context/cartProducts'
import TitlePages from '../components/TitlePages'
import Filters from '../components/Filters'
import ProductList from '../components/ProductList'
import menuData from '../components/AirtableData'

const newCat = [...new Set(menuData.map((item) => item.category))].sort()

export default function Menu() {
    const { closeSubmenu, selectOrder } = useCartProducts()
    const [category] = React.useState(newCat)
    const [menu, setMenu] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const filterItems = (cat) =>{
        setMenu(menuData.filter((item) => cat === item.category))
    }
    React.useEffect(() =>{
        setTimeout(() =>{
            setLoading(false)
        }, 550)
        setMenu(menuData)
    }, [])

    if(loading){
        return(
            <div className="loading">
                <div className="loading"></div>
            </div>
        )
    }

    return (<>
        <TitlePages title='menu' text='enjoy the taste of our dishes' />
        <Wrapper onMouseOver={closeSubmenu} className='page'>
            <div className="menu">
                <Filters category={category} filterItems={filterItems}/>
                <div>
                    <ProductList items={menu} selectOrder={selectOrder} />
                </div>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    box-shadow: 0 0 20px var(--backBox);
    background: rgb(243,244,244);
    background: linear-gradient(90deg, rgba(243,244,244,1) 90%, rgba(33,34,36,1) 100%);
    .menu {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
        padding: 1rem 0;
        @media (min-width: 768px) {
            grid-template-columns: 250px 1fr;
        }
    }
`
