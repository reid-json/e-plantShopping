import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Calculate total quantity of items in the cart for the navbar badge
    const calculateTotalQuantity = () => {
        return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
                    description: "Removes mold spores and purifies air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds moisture to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to grow and cleans indoor air.",
                    cost: "$22"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothes skin and improves air quality.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729845724-ccb269ff4c21?q=80&w=1000&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating aroma, used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, great for tea.",
                    cost: "$10"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2015/06/08/15/02/eucalyptus-801831_1280.jpg",
                    description: "Relieves congestion and smells great.",
                    cost: "$25"
                },
                {
                    name: "Gardenia",
                    image: "https://cdn.pixabay.com/photo/2018/06/10/17/39/gardenia-3466912_1280.jpg",
                    description: "Fragrant white blooms, elegant decor.",
                    cost: "$24"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1000&auto=format&fit=crop",
                    description: "Thrives in low light and drought tolerant.",
                    cost: "$25"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that withstands neglect.",
                    cost: "$20"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816940_1280.jpg",
                    description: "Fast growing vine, easy to care for.",
                    cost: "$12"
                },
                {
                    name: "Succulent Trio",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Requires minimal watering and care.",
                    cost: "$18"
                },
                {
                    name: "Jade Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/14/06/00/jade-plant-5915978_1280.jpg",
                    description: "Symbol of good luck, low maintenance.",
                    cost: "$15"
                },
                {
                    name: "Chinese Evergreen",
                    image: "https://cdn.pixabay.com/photo/2020/07/21/16/10/aglaonema-5426752_1280.jpg",
                    description: "Tolerates low light and dry conditions.",
                    cost: "$22"
                }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '50px', width: '50px' }} />
                        <a href="/" onClick={(e) => { e.preventDefault(); onHomeClick(); }} style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: 'white', fontSize: '14px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                    <div>
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <h1 className="cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="40" width="40">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184ZM88,168a16,16,0,1,0,16,16A16,16,0,0,0,88,168Zm152-104V160a16,16,0,0,1-16,16H76.29l-3.89,15.55A16,16,0,0,1,56.84,204H32a8,8,0,0,1,0-16H56.84L82.1,87.05A16,16,0,0,1,97.66,74.67L232,64A8,8,0,0,1,240,64Z" fill="white"></path>
                                </svg>
                            </h1>
                            <span className="cart_quantity_count" style={{ marginLeft: '5px', fontWeight: 'bold' }}>
                                {calculateTotalQuantity()}
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} style={{ width: '100%' }}>
                            <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>{category.category}</h2>
                            <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '280px', textAlign: 'center' }}>
                                        <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                                        <div className="product-title" style={{ fontWeight: 'bold', fontSize: '18px', margin: '10px 0' }}>{plant.name}</div>
                                        <p style={{ fontSize: '14px', color: '#666' }}>{plant.description}</p>
                                        <div className="product-price" style={{ fontWeight: 'bold', margin: '10px 0' }}>{plant.cost}</div>
                                        <button
                                            className="product-button"
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                            style={{
                                                backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50',
                                                color: 'white',
                                                border: 'none',
                                                padding: '10px 15px',
                                                borderRadius: '5px',
                                                cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;