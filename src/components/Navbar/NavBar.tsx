import React from 'react'
import { Cart } from '../Cart'

const NavBar = () => {
    return (
        <>
            <div className='flex justify-between m-4'>
                <p className='text-4xl'>Carrito de compra</p>
                <Cart />
            </div>
        </>
    )
}

export default NavBar