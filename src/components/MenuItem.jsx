import React, {useState} from 'react'

export const MenuItem = ({item}) => {

  const [selected, setSelected] = useState(false)
  const [cartItems, setCartItems] = useState([])


  const handleClick = (item) => {
    setSelected(!selected)
    setCartItems((cartItems) => [...cartItems, item])
  }

  

    return (
        <li>
            <div className="plate">
            <img
                src={`/images/${item.image}`}
                alt={item.alt}
                className="plate"
            />
            </div>
            <div className="content">
            <p className="menu-item">{item.name}</p>
            <p className="price">£{item.price}</p>
            <button className={selected ? "in-cart" : "add"} onClick={() => handleClick(item)}>
                {selected ? <img src="/images/check.svg" alt="Check" /> : null}
                Add to Cart
            </button>
            </div>
        </li>
    )
}

