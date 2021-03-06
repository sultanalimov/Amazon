import React from 'react';
import './Product.sass';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import {useStateValue} from '../../StateProvider';

export default function Product({id, title, image, price, rating}) {
    const [{basket, user}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title,
                image,
                price,
                rating
            }
        });
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <strong>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'UZS'
                        }).format(price)}
                    </strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map(_ => (
                            <p>
                                <StarOutlinedIcon style={{color: 'yellow'}} />
                            </p>
                        ))}
                </div>
            </div>
            <img src={image} alt='' />
            {user && <button onClick={addToBasket}>Add to Cart</button>}
        </div>
    );
}
