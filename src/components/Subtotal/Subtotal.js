import React from 'react';
import './Subtotal.sass';
import {useStateValue} from '../../StateProvider';
import {getBasketTotal} from '../../reducer';

export default function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items) :{' '}
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'UZS'
                    }).format(getBasketTotal(basket))}
                </strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />
                This order contains a gift
            </small>
            <button className='subtotal__button'>Proceed to Buy</button>
        </div>
    );
}
