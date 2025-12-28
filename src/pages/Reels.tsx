import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Reels.css";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  discount?: string;
  isNew?: boolean;
}

const Reels: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(async () => {
    setLoading(true);
    // Simulated API call - Replace with your actual endpoint
    await new Promise(res => setTimeout(res, 800));
    const mockData: Product[] = [
      { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Premium Watch Series 5", price: "$349.99", oldPrice: "$449.99", rating: 4.6, reviews: 189, discount: "-22%", isNew: true },
      { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", title: "Leather Sneakers", price: "$89.99", oldPrice: "$129.99", rating: 4.7, reviews: 312, discount: "-31%" },
      { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", title: "Vintage Camera", price: "$599.99", oldPrice: "$799.99", rating: 4.9, reviews: 89, isNew: true, discount: "-25%" },
      { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500", title: "Wool Blend Coat", price: "$249.99", oldPrice: "$349.99", rating: 4.8, reviews: 267, discount: "-29%" },
    ];
    setProducts(prev => [...prev, ...mockData]);
    setLoading(false);
  }, []);

  useEffect(() => { loadMore(); }, [loadMore]);

  const lastElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore();
    });
    if (node) observer.current.observe(node);
  }, [loading, loadMore]);

  return (
    <div className="reels-dark-page">
      <div className="reels-masonry">
        {products.map((p, i) => (
          <div key={p.id} ref={i === products.length - 1 ? lastElementRef : null} className="masonry-item">
            <ReelCard product={p} />
          </div>
        ))}
      </div>
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

const ReelCard = ({ product }: { product: Product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="reel-item">
      <div className="reel-media">
        <div className="badge-container">
            {product.isNew && <span className="badge-new">New</span>}
            {product.discount && <span className="badge-promo">{product.discount}</span>}
        </div>
        
        <button className={`like-btn ${liked ? 'is-liked' : ''}`} onClick={() => setLiked(!liked)}>
          <svg viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke={liked ? "red" : "black"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <img src={product.thumbnail} alt={product.title} />
        
        <div className="play-btn-overlay">
          <div className="play-icon-circle">
             <div className="play-triangle"></div>
          </div>
        </div>
      </div>

      <div className="reel-content">
        <h4 className="reel-title">{product.title}</h4>
        <div className="reel-rating">
          <span className="star-icon">★</span> {product.rating} <span className="review-count">({product.reviews})</span>
        </div>
        <div className="reel-price-row">
          <span className="price-now">{product.price}</span>
          {product.oldPrice && <span className="price-old">{product.oldPrice}</span>}
        </div>
        <button className="add-cart-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Reels;