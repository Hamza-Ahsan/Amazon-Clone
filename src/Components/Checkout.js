import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from'./Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png' />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Shooping Bag is Empty</h2>
                        <p>
                            You have no items in your basket. To buy one or
                    </p>
                    </div>
                ) : (
                        <div>
                            <h2 className='checkout__title'>Your Shopping bag</h2>
                            {/* List out all the checkout Products */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;