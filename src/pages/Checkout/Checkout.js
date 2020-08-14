import React from 'react';
import {useStateValue} from '../../StateProvider';
import './Checkout.sass';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';

export default function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <h2 className='checkout__title'>Shopping Cart</h2>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping cart is empty</h2>
                    </div>
                ) : (
                    <div>
                        {basket?.map(item => {
                            return <CheckoutProduct key={item.id} {...item} />;
                        })}
                    </div>
                )}
            </div>
            {basket?.length > 0 && (
                <div className='checkout__right'>
                    <img
                        className='checkout__ad'
                        src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'
                        alt=''
                    />
                    <Subtotal />
                </div>
            )}
        </div>
    );
}
