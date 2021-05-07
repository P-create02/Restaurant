import React from 'react'
import styled from 'styled-components'

export default function Filters({ category, filterItems }) {
    return (
        <Wrapper>
            <div className="options">
                {category.map((newC, index) =>{
                    return(
                        <h5 key={index} onClick={() => filterItems(newC)}>{newC}</h5>
                    )
            })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: auto;
    padding: 0.5rem;
    background: var(--backBox);
    border-radius: var(--radius);
    box-shadow: 0 0 20px var(--backBox);
    .options{
        margin: 1rem 0;
    }
    h5{
        text-transform: uppercase;
        transition: var(--transition);
        cursor: pointer;
        padding: 1rem;
        letter-spacing: 0.25rem;
        &:hover{
            color: var(--box);
        }
    }
    @media (min-width: 768px) {
        height: 500px;
        text-align: center;
    }
`