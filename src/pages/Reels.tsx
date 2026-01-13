// import React, { useState, useEffect, useRef, useCallback } from "react";
// import "./Reels.css";

// interface Reels {
//   id: string;
//   thumbnail: string;
//   title: string;
//   price: string;
//   oldPrice?: string;
//   rating: number;
//   reviews: number;
//   discount?: string;
//   isNew?: boolean;
// }

// const Reels: React.FC = () => {
//   const [products, setProducts] = useState<Reels[]>([]);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef<IntersectionObserver | null>(null);

//   const loadMore = useCallback(async () => {
//     setLoading(true);
//     // Simulated API call - Replace with your actual endpoint
//     await new Promise(res => setTimeout(res, 800));
//     const mockData: Reels[] = [
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Premium Watch Series 5", price: "$349.99", oldPrice: "$449.99", rating: 4.6, reviews: 189, discount: "-22%", isNew: true },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", title: "Leather Sneakers", price: "$89.99", oldPrice: "$129.99", rating: 4.7, reviews: 312, discount: "-31%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", title: "Vintage Camera", price: "$599.99", oldPrice: "$799.99", rating: 4.9, reviews: 89, isNew: true, discount: "-25%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500", title: "Wool Blend Coat", price: "$249.99", oldPrice: "$349.99", rating: 4.8, reviews: 267, discount: "-29%" },
//     ];
//     setProducts(prev => [...prev, ...mockData]);
//     setLoading(false);
//   }, []);

//   useEffect(() => { loadMore(); }, [loadMore]);

//   const lastElementRef = useCallback((node: HTMLDivElement) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) loadMore();
//     });
//     if (node) observer.current.observe(node);
//   }, [loading, loadMore]);

//   return (
//     <div className="reels-dark-page">
//       <div className="reels-masonry">
//         {products.map((p, i) => (
//           <div key={p.id} ref={i === products.length - 1 ? lastElementRef : null} className="masonry-item">
//             <ReelCard product={p} />
//           </div>
//         ))}
//       </div>
//       {loading && <div className="loader">Loading...</div>}
//     </div>
//   );
// };

// const ReelCard = ({ product }: { product: Reels }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="reel-item">
//       <div className="reel-media">
//         <div className="badge-container">
//             {product.isNew && <span className="badge-new">New</span>}
//             {product.discount && <span className="badge-promo">{product.discount}</span>}
//         </div>
        
//         <button className={`like-btn ${liked ? 'is-liked' : ''}`} onClick={() => setLiked(!liked)}>
//           <svg viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke={liked ? "red" : "black"} strokeWidth="2">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//           </svg>
//         </button>

//         <img src={product.thumbnail} alt={product.title} />
        
//         <div className="play-btn-overlay">
//           <div className="play-icon-circle">
//              <div className="play-triangle"></div>
//           </div>
//         </div>
//       </div>

//       <div className="reel-content">
//         <h4 className="reel-title">{product.title}</h4>
//         <div className="reel-rating">
//           <span className="star-icon">★</span> {product.rating} <span className="review-count">({product.reviews})</span>
//         </div>
//         <div className="reel-price-row">
//           <span className="price-now">{product.price}</span>
//           {product.oldPrice && <span className="price-old">{product.oldPrice}</span>}
//         </div>
//         <button className="add-cart-pill">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Reels;

// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useCallback,
// } from "react";
// import "./Reels.css";

// /* ================= TYPES ================= */

// interface Reels {
//   id: string;
//   videoUrl: string;
//   thumbnail: string;
//   title: string;
//   price: string;
//   oldPrice?: string;
//   rating: number;
//   reviews: number;
//   discount?: string;
//   isNew?: boolean;
// }

// /* ================= PAGE ================= */

// const Reels: React.FC = () => {
//   const [products, setProducts] = useState<Reels[]>([]);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef<IntersectionObserver | null>(null);

//   const loadMore = useCallback(async () => {
//   setLoading(true);

// const res = await fetch("http://localhost:8000/reels");

//   const data = await res.json();

//   setProducts(prev => [...prev, ...data]);
//   setLoading(false);
// }, []);

//   useEffect(() => {
//     loadMore();
//   }, [loadMore]);

//   const lastElementRef = useCallback(
//     (node: HTMLDivElement) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();

//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) loadMore();
//       });

//       if (node) observer.current.observe(node);
//     },
//     [loading, loadMore]
//   );

//   return (
//     <div className="reels-dark-page">
//       <div className="reels-masonry">
//         {products.map((p, i) => (
//           <div
//             key={p.id}
//             ref={i === products.length - 1 ? lastElementRef : null}
//             className="masonry-item"
//           >
//             <ReelCard product={p} />
//           </div>
//         ))}
//       </div>

//       {loading && <div className="loader">Loading...</div>}
//     </div>
//   );
// };

// /* ================= CARD ================= */

// const ReelCard = ({ product }: { product: Reels }) => {
//   const [liked, setLiked] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   // 🎥 Auto play / pause on visibility
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           video.play().catch(() => {});
//         } else {
//           video.pause();
//         }
//       },
//       { threshold: 0.6 }
//     );

//     observer.observe(video);
//     return () => observer.disconnect();
//   }, []);

//   // 🔊 Tap to mute / unmute
//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = !video.muted;
//     setIsMuted(video.muted);
//   };

//   return (
//     <div className="reel-item">
//       <div className="reel-media">
//         <div className="badge-container">
//           {product.isNew && <span className="badge-new">New</span>}
//           {product.discount && (
//             <span className="badge-promo">{product.discount}</span>
//           )}
//         </div>

//         {/* Like Button */}
//         <button
//           className={`like-btn ${liked ? "is-liked" : ""}`}
//           onClick={() => setLiked(!liked)}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill={liked ? "red" : "none"}
//             stroke={liked ? "red" : "black"}
//             strokeWidth="2"
//           >
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//           </svg>
//         </button>

//         {/* 🎥 VIDEO */}
//         <video
//           ref={videoRef}
//           src={product.videoUrl}
//           poster={product.thumbnail}
//           muted={isMuted}
//           loop
//           playsInline
//           preload="metadata"
//           onClick={toggleMute}   // 👈 TAP HERE
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             cursor: "pointer",
//           }}
//         />

//         {/* 🔊 Mute / Unmute Indicator */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: "12px",
//             right: "12px",
//             background: "rgba(0,0,0,0.6)",
//             color: "#fff",
//             borderRadius: "50%",
//             padding: "6px 8px",
//             fontSize: "12px",
//             pointerEvents: "none",
//           }}
//         >
//           {isMuted ? "🔇" : "🔊"}
//         </div>
//       </div>

//       <div className="reel-content">
//         <h4 className="reel-title">{product.title}</h4>

//         <div className="reel-rating">
//           <span className="star-icon">★</span>{" "}
//           {product.rating}{" "}
//           <span className="review-count">
//             ({product.reviews})
//           </span>
//         </div>

//         <div className="reel-price-row">
//           <span className="price-now">{product.price}</span>
//           {product.oldPrice && (
//             <span className="price-old">
//               {product.oldPrice}
//             </span>
//           )}
//         </div>

//         <button className="add-cart-pill">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Reels;

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import "./Reels.css";

/* ================= TYPES ================= */

interface Reels {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  discount?: string;
  isNew?: boolean;
}

/* ================= UTILS ================= */

function getEmbedUrl(url: string, muted: boolean): string | null {
  if (!url) return null;

  const muteValue = muted ? 1 : 0;

  if (url.includes("youtube.com/shorts/")) {
    const id = url.split("shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${muteValue}&controls=0&loop=1&playlist=${id}`;
  }

  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v");
    if (!id) return null;
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${muteValue}&controls=0&loop=1&playlist=${id}`;
  }

  return null;
}

/* ================= PAGE ================= */

const Reels: React.FC = () => {
  const [products, setProducts] = useState<Reels[]>([]);
  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/reels");
      const data: Reels[] = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setProducts((prev) => [...prev, ...data]);
      }
    } catch (err) {
      console.error("❌ Failed to load reels:", err);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || loadingRef.current) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) loadMore();
      });

      observer.current.observe(node);
    },
    [loadMore]
  );

  return (
    <div className="reels-dark-page">
      <div className="reels-masonry">
        {products.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            ref={i === products.length - 1 ? lastElementRef : null}
            className="masonry-item"
          >
            <ReelCard product={p} />
          </div>
        ))}
      </div>

      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

/* ================= CARD ================= */

const ReelCard = ({ product }: { product: Reels }) => {
  const [liked, setLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // 🔇 start muted (required)

  const embedUrl = getEmbedUrl(product.videoUrl, isMuted);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="reel-item">
      <div className="reel-media">

        {/* BADGES */}
        <div className="badge-container">
          {product.isNew && <span className="badge-new">New</span>}
          {product.discount && (
            <span className="badge-promo">{product.discount}</span>
          )}
        </div>

        {/* ❤️ LIKE */}
        <button
          className={`like-btn ${liked ? "is-liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          ❤️
        </button>

        {/* 🎥 EMBED SHORT */}
        {embedUrl ? (
          <iframe
            key={embedUrl}
            src={embedUrl}
            title={product.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img src={product.thumbnail} alt={product.title} />
        )}

        {/* 🔊 MUTE / UNMUTE */}
        <button
          onClick={toggleMute}
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.65)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

      </div>

      {/* CONTENT */}
      <div className="reel-content">
        <h4 className="reel-title">{product.title}</h4>

        <div className="reel-rating">
          ⭐ {product.rating}{" "}
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="reel-price-row">
          <span className="price-now">{product.price}</span>
        </div>

        <button className="add-cart-pill">Add to Cart</button>
      </div>
    </div>
  );
};

export default Reels;
