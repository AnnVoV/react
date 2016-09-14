import HelloWorld from './hello-world.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem.jsx';

require('./main.css');


const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 8,
    price:9,
    perPrice: 3
};

ReactDOM.render(
    <CartItem title={order.title} image={order.image}  initialQty={order.initialQty} price={order.price} perPrice={order.perPrice}/>,
    document.getElementById('root')
);


