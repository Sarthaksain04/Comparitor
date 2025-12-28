import React, { useState } from 'react';
import { Trash2, ExternalLink } from 'lucide-react'; // Importing icons
import './CartPage.css';

function CartPage() {
  // Mock Data: Added 'company' and changed price to Rupees
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      company: "Sony",
      name: "Wireless Noise Cancelling Headphones",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/headphones" 
    },
    {
      id: 2,
      company: "Keychron",
      name: "Mechanical Gaming Keyboard",
      price: "₹12,499",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/keyboard"
    },
   {
      id: 3,
      company: "Apple",
      name: "Apple Watch Series 9",
      price: "₹41,900",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/watch"
    },
    {
      id: 4,
      company: "Dell",
      name: "UltraSharp 27 4K Monitor",
      price: "₹52,999",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/monitor"
    },
    {
      id: 5,
      company: "Marshall",
      name: "Stanmore III Bluetooth Speaker",
      price: "₹31,999",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/speaker"
    },
    {
      id: 6,
      company: "Logitech",
      name: "MX Master 3S Mouse",
      price: "₹8,995",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60",
      productUrl: "https://example.com/product/mouse"
    }
  ]);

  const handleDelete = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleRedirect = (url: string) => {
    window.location.href = url; 
  };

  return (
    <div className="cart-page-container">
      <div className="cart-content">
        <header className="cart-header">
          <h1>Your Selection</h1>
          <span className="item-count">{cartItems.length} Products</span>
        </header>

        <div className="cart-list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="product-tile">
                
                {/* Left Side: Image */}
                <div className="product-image-wrapper">
                  <img src={item.image} alt={item.name} className="product-image" />
                </div>

                {/* Middle: Details */}
                <div className="product-info">
                  <p className="product-company">{item.company}</p>
                  <h2 className="product-name">{item.name}</h2>
                  <p className="product-price">{item.price}</p>
                </div>

                {/* Right Side: Actions */}
                <div className="product-actions">
                  <button 
                    className="btn-redirect"
                    onClick={() => handleRedirect(item.productUrl)}
                    title="View on Main Site"
                  >
                    <span>View Site</span>
                    <ExternalLink size={16} />
                  </button>
                  
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(item.id)}
                    title="Remove from list"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-message">No items in your list.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;