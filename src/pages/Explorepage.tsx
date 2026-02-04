// // // import React from 'react'
// // // import './Explore.css'

// // // function Explorepage() {
// // //   return (
// // //     <div className="explore-container">
// // //         <p className="explore-subtext">Discover the best deals curated by our AI.</p>
        
// // //     </div>
// // //   )
// // // }

// // // export default Explorepage


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";


// // function Explorepage() {
// //   const [query, setQuery] = useState("");
// //   const [fadeOut, setFadeOut] = useState(false);
// //   const navigate = useNavigate();

// //   //  Backend Search Integration (same as Home)
// //   async function onKeyDown(e: { key: string; }) {
// //     if (e.key === "Enter" && query.trim()) {
// //       setFadeOut(true);

// //       try {
// //         const response = await fetch("http://127.0.0.1:8000/search", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             query: query.trim(),
// //             language: "en",
// //             country: "in",
// //           }),
// //         });

// //         if (!response.ok) throw new Error("Backend request failed");

// //         const data = await response.json();
// //         console.log("Products fetched:", data.cleaned_products);

// //         localStorage.setItem(
// //           "searchResults",
// //           JSON.stringify(data.cleaned_products || [])
// //         );

// //         setTimeout(() => {
// //           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
// //         }, 800);
// //       } catch (error) {
// //         console.error("Error fetching search:", error);
// //       }
// //     }
// //   }

// //   return (
// //     <div className={`explore-container ${fadeOut ? "fade-out" : "fade-in"}`}>


// //       {/* 🔍 SEARCH BLOCK (taken from Home page) */}
// //       <div className="floating-search-bar">
// //         <input
// //           type="text"
// //           placeholder="Search for a product..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           onKeyDown={onKeyDown}
// //         />
// //         <span className="search-icons"></span>
// //       </div>


// //     </div>
// //   );
// // }

// // export default Explorepage;

// // import { Badge } from "@/Components/ui/badge";
// // import { Button } from "@/Components/ui/button";
// // import { ShoppingCart } from "lucide-react";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Explore.css";

// // /* 🔹 CART BUTTON (EXTRACTED & CLEAN) */
// // function CartButtonOnly({ totalItems = 3, navigate }: { totalItems?: number; navigate: any }) {
// //   return (
// //     <div className="cart-btn-wrapper">
// //      <Button
// //   variant="outline"
// //   size="lg"
// //   className="cart-btn-white relative gap-2"
// //    onClick={() => navigate("/cart")}
// // >
// //   <ShoppingCart className="h-5 w-5" />
// //   <span className="font-semibold">View Cart</span>

// //   {totalItems > 0 && (
// //     <Badge className="cart-badge-neutral">{totalItems}</Badge>
// //   )}
// // </Button>
// //     </div>
// //   );
// // }

// // /* 🔹 MAIN PAGE */
// // function Explorepage() {
// //   const [query, setQuery] = useState("");
// //   const [fadeOut, setFadeOut] = useState(false);
// //   const navigate = useNavigate();

// //   interface SearchResponse {
// //     cleaned_products: any[]; // Replace 'any' with the appropriate type if known
// //   }

// //   async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
// //     if (e.key === "Enter" && query.trim()) {
// //       setFadeOut(true);

// //       try {
// //         const response = await fetch("http://127.0.0.1:8000/search", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             query: query.trim(),
// //             language: "en",
// //             country: "in",
// //           }),
// //         });

// //         if (!response.ok) throw new Error("Backend request failed");

// //         const data: SearchResponse = await response.json();

// //         localStorage.setItem(
// //           "searchResults",
// //           JSON.stringify(data.cleaned_products || [])
// //         );

// //         setTimeout(() => {
// //           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
// //         }, 800);
// //       } catch (error) {
// //         console.error("Search error:", error);
// //       }
// //     }
// //   }

// //   return (
// //     <div className={`explore-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      
// //       {/* 🛒 CART BUTTON */}
// //       <CartButtonOnly totalItems={3} navigate={navigate} />

// //       {/*  SEARCH BAR */}
// //       <div className="floating-search-bar">
// //         <input
// //           type="text"
// //           placeholder="Search for a product..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           onKeyDown={onKeyDown}
// //         />
// //         <span className="search-icons"></span>
// //       </div>
      

// //     </div>
// //   );
// // }

// // export default Explorepage;


// import { Badge } from "@/Components/ui/badge";
// import { Button } from "@/Components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Explore.css";

// interface Products {
//   id: string;
//   title: string;
//   brand: string;
//   price: string;
//   rating: number;
//   reviews: number;
//   thumbnail: string;
//   link: string;
//   source: string;
//   oldPrice?: string;
//   discount?: string;
//   isNew?: boolean;
// }

// /* 🔹 CART BUTTON (EXTRACTED & CLEAN) */
// function CartButtonOnly({ totalItems = 3, navigate }: { totalItems?: number; navigate: any }) {
//   return (
//     <div className="cart-btn-wrapper">
//      <Button
//   variant="outline"
//   size="lg"
//   className="cart-btn-white relative gap-2"
//    onClick={() => navigate("/cart")}
// >
//   <ShoppingCart className="h-5 w-5" />
//   <span className="font-semibold">View Cart</span>

//   {totalItems > 0 && (
//     <Badge className="cart-badge-neutral">{totalItems}</Badge>
//   )}
// </Button>
//     </div>
//   );
// }

// /* 🔹 MAIN PAGE */
// function Explorepage() {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   interface SearchResponse {
//     cleaned_products: any[]; // Replace 'any' with the appropriate type if known
//   }

//   async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true);

//       try {
//         const response = await fetch("http://127.0.0.1:8000/search", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             query: query.trim(),
//             language: "en",
//             country: "in",
//           }),
//         });

//         if (!response.ok) throw new Error("Backend request failed");

//         const data: SearchResponse = await response.json();

//         localStorage.setItem(
//           "searchResults",
//           JSON.stringify(data.cleaned_products || [])
//         );

//         setTimeout(() => {
//           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//         }, 800);
//       } catch (error) {
//         console.error("Search error:", error);
//       }
//     }
//   }

//   return (
//     <div className={`explore-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      
//       {/* 🛒 CART BUTTON */}
//       <CartButtonOnly totalItems={3} navigate={navigate} />

//       {/*  SEARCH BAR */}
//       <div className="floating-search-bar">
//         <input
//           type="text"
//           placeholder="Search for a product..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={onKeyDown}
//         />
//         <span className="search-icons"></span>
//       </div>
      

//     </div>
//   );
// }

// export default Explorepage;

// import { Badge } from "@/Components/ui/badge";
// import { Button } from "@/Components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Explore.css";

// /* 🔹 INTERFACE */
// interface ExploreProduct {
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

// /* 🔹 CARD COMPONENT */
// const ExploreProductCard = ({ product }: { product: ExploreProduct }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="exp-card-item">
//       <div className="exp-card-media">
//         <div className="exp-badge-container">
//           {product.isNew && <span className="exp-badge-new">New</span>}
//           {product.discount && <span className="exp-badge-promo">{product.discount}</span>}
//         </div>

//         <button 
//           className={`exp-like-btn ${liked ? 'is-liked' : ''}`} 
//           onClick={() => setLiked(!liked)}
//         >
//           <svg viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke={liked ? "red" : "black"} strokeWidth="2">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//           </svg>
//         </button>

//         <img src={product.thumbnail} alt={product.title} className="exp-card-img" />
//       </div>

//       <div className="exp-card-content">
//         <h4 className="exp-card-title">{product.title}</h4>
//         <div className="exp-card-rating">
//           <span className="exp-star-icon">★</span> {product.rating} <span className="exp-review-count">({product.reviews})</span>
//         </div>
//         <div className="exp-price-row">
//           <span className="exp-price-now">{product.price}</span>
//           {product.oldPrice && <span className="exp-price-old">{product.oldPrice}</span>}
//         </div>
//         <button className="exp-add-cart-pill">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// /* 🔹 MAIN PAGE */
// function Explorepage() {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();
//   const [products, setProducts] = useState<ExploreProduct[]>([]);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef<IntersectionObserver | null>(null);

//   /* Infinite Scroll Logic */
//   const loadMore = useCallback(async () => {
//     setLoading(true);
//     await new Promise(res => setTimeout(res, 800));
//     const mockData: ExploreProduct[] = [
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

//   /* Search Logic */
//   interface SearchResponse { cleaned_products: any[]; }
//   async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true);
//       try {
//         const response = await fetch("http://127.0.0.1:8000/search", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: query.trim(), language: "en", country: "in" }),
//         });
//         if (!response.ok) throw new Error("Backend request failed");
//         const data: SearchResponse = await response.json();
//         localStorage.setItem("searchResults", JSON.stringify(data.cleaned_products || []));
//         setTimeout(() => {
//           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//         }, 800);
//       } catch (error) { console.error("Search error:", error); }
//     }
//   }

//   return (
//     <div className={`explore-container min-h-screen bg-black ${fadeOut ? "fade-out" : "fade-in"}`}>
      
//       {/* 🔹 FIXED TOP SECTION (SEARCH + CART) */}
//       <div className="fixed-top-search-area">
//         <div className="search-center-wrapper">
//             <div className="floating-search-bar">
//                 <input
//                 type="text"
//                 placeholder="Search for a product..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={onKeyDown}
//                 />
//                 <span className="search-icons"></span>
//             </div>
//         </div>
        
//         <div className="cart-fixed-pos">
//             <Button
//                 variant="outline"
//                 size="lg"
//                 className="cart-btn-white relative gap-2"
//                 onClick={() => navigate("/cart")}
//             >
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="font-semibold">Cart</span>
//                 <Badge className="cart-badge-neutral">3</Badge>
//             </Button>
//         </div>
//       </div>
      
//       {/* 📦 GRID LAYOUT - Added 'grid-pushed-down' class */}
//       <div className="exp-grid-layout grid-pushed-down">
//         {products.map((p, i) => (
//           <div key={p.id} ref={i === products.length - 1 ? lastElementRef : null} className="exp-grid-item">
//             <ExploreProductCard product={p} />
//           </div>
//         ))}
//       </div>

//       {loading && <div className="text-white text-center py-8">Loading...</div>}

//     </div>
//   );
// }

// export default Explorepage;
// import { Badge } from "@/Components/ui/badge";
// import { Button } from "@/Components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Explore.css";

// /* 🔹 INTERFACE */
// interface ExploreProduct {
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

// /* 🔹 CARD COMPONENT */
// const ExploreProductCard = ({ product }: { product: ExploreProduct }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="exp-card-item">
//       <div className="exp-card-media">
//         <div className="exp-badge-container">
//           {product.isNew && <span className="exp-badge-new">New</span>}
//           {product.discount && <span className="exp-badge-promo">{product.discount}</span>}
//         </div>

//         <button 
//           className={`exp-like-btn ${liked ? 'is-liked' : ''}`} 
//           onClick={() => setLiked(!liked)}
//         >
//           <svg viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke={liked ? "red" : "black"} strokeWidth="2">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//           </svg>
//         </button>

//         <img src={product.thumbnail} alt={product.title} className="exp-card-img" />
//       </div>

//       <div className="exp-card-content">
//         <h4 className="exp-card-title">{product.title}</h4>
//         <div className="exp-card-rating">
//           <span className="exp-star-icon">★</span> {product.rating} <span className="exp-review-count">({product.reviews})</span>
//         </div>
//         <div className="exp-price-row">
//           <span className="exp-price-now">{product.price}</span>
//           {product.oldPrice && <span className="exp-price-old">{product.oldPrice}</span>}
//         </div>
//         <button className="exp-add-cart-pill">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// /* 🔹 MAIN PAGE */
// function Explorepage() {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   /* 1️⃣ STATE FOR INFINITE SCROLL */
//   const [products, setProducts] = useState<ExploreProduct[]>([]);
//   const [loading, setLoading] = useState(false);
  
//   /* 2️⃣ REF FOR OBSERVER */
//   const observer = useRef<IntersectionObserver | null>(null);

//   /* 3️⃣ LOAD MORE FUNCTION (Simulating API) */
//   const loadMore = useCallback(async () => {
//     setLoading(true);
//     // Simulate network delay
//     await new Promise(res => setTimeout(res, 800));
    
//     // Create new batch of products
//     const mockData: ExploreProduct[] = [
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Premium Watch Series 5", price: "$349.99", oldPrice: "$449.99", rating: 4.6, reviews: 189, discount: "-22%", isNew: true },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", title: "Leather Sneakers", price: "$89.99", oldPrice: "$129.99", rating: 4.7, reviews: 312, discount: "-31%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", title: "Vintage Camera", price: "$599.99", oldPrice: "$799.99", rating: 4.9, reviews: 89, isNew: true, discount: "-25%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500", title: "Wool Blend Coat", price: "$249.99", oldPrice: "$349.99", rating: 4.8, reviews: 267, discount: "-29%" },
//       // Added extra items to fill rows faster
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", title: "Wireless Headphones", price: "$199.99", oldPrice: "$250.00", rating: 4.5, reviews: 150, discount: "-20%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", title: "Stylish Sunglasses", price: "$120.00", oldPrice: "$150.00", rating: 4.2, reviews: 90, isNew: true },
//     ];
    
//     setProducts(prev => [...prev, ...mockData]);
//     setLoading(false);
//   }, []);

//   // Initial Load
//   useEffect(() => { loadMore(); }, [loadMore]);

//   /* 4️⃣ LAST ELEMENT REF (Triggers loadMore when visible) */
//   const lastElementRef = useCallback((node: HTMLDivElement) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
    
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         loadMore();
//       }
//     });
    
//     if (node) observer.current.observe(node);
//   }, [loading, loadMore]);

//   /* --- Search Logic --- */
//   interface SearchResponse { cleaned_products: any[]; }
//   async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true);
//       try {
//         const response = await fetch("http://127.0.0.1:8000/search", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: query.trim(), language: "en", country: "in" }),
//         });
//         if (!response.ok) throw new Error("Backend request failed");
//         const data: SearchResponse = await response.json();
//         localStorage.setItem("searchResults", JSON.stringify(data.cleaned_products || []));
//         setTimeout(() => {
//           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//         }, 800);
//       } catch (error) { console.error("Search error:", error); }
//     }
//   }

//   return (
//     <div className={`explore-container min-h-screen bg-black ${fadeOut ? "fade-out" : "fade-in"}`}>
      
//       {/* 🔹 FIXED TOP SECTION (SEARCH + CART) */}
//       <div className="fixed-top-search-area">
//         <div className="search-center-wrapper">
//             <div className="floating-search-bar">
//                 <input
//                 type="text"
//                 placeholder="Search for a product..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={onKeyDown}
//                 />
//                 <span className="search-icons"></span>
//             </div>
//         </div>
        
//         <div className="cart-fixed-pos">
//             <Button
//                 variant="outline"
//                 size="lg"
//                 className="cart-btn-white relative gap-2"
//                 onClick={() => navigate("/cart")}
//             >
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="font-semibold">Cart</span>
//                 <Badge className="cart-badge-neutral">3</Badge>
//             </Button>
//         </div>
//       </div>
      
//       {/* 📦 GRID LAYOUT - Added 'grid-pushed-down' class */}
//      <div className="exp-grid-layout grid-pushed-down">
//         {products.map((p, index) => {
//             if (products.length === index + 1) {
//                 return (
//                     <div ref={lastElementRef} key={p.id} className="exp-grid-item">
//                         <ExploreProductCard product={p} />
//                     </div>
//                 );
//             } else {
//                 return (
//                     <div key={p.id} className="exp-grid-item">
//                         <ExploreProductCard product={p} />
//                     </div>
//                 );
//             }
//         })}
//       </div>

//       {/* 🔹 UPDATED: Circle Loading Effect */}
//       {loading && (
//         <div className="loader-container">
//           <div className="circle-loader"></div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Explorepage;

// import { Badge } from "@/Components/ui/badge";
// import { Button } from "@/Components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Explore.css";
// import { Button1 } from "@/Components/rainbow-borders-button";


// /* 🔹 INTERFACE */
// interface ExploreProduct {
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








// /* 🔹 CARD COMPONENT */
// const ExploreProductCard = ({ product }: { product: ExploreProduct }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="exp-card-item">
//       <div className="exp-card-media">
//         <div className="exp-badge-container">
//           {product.isNew && <span className="exp-badge-new">New</span>}
//           {product.discount && <span className="exp-badge-promo">{product.discount}</span>}
//         </div>

//         <button 
//           className={`exp-like-btn ${liked ? 'is-liked' : ''}`} 
//           onClick={() => setLiked(!liked)}
//         >
//           <svg viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke={liked ? "red" : "black"} strokeWidth="2">
//             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//           </svg>
//         </button>

//         <img src={product.thumbnail} alt={product.title} className="exp-card-img" />
//       </div>

//       <div className="exp-card-content">
//         <h4 className="exp-card-title">{product.title}</h4>
//         <div className="exp-card-rating">
//           <span className="exp-star-icon">★</span> {product.rating} <span className="exp-review-count">({product.reviews})</span>
//         </div>
//         <div className="exp-price-row">
//           <span className="exp-price-now">{product.price}</span>
//           {product.oldPrice && <span className="exp-price-old">{product.oldPrice}</span>}
//         </div>
//         <button className="exp-add-cart-pill">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// /* 🔹 MAIN PAGE */
// function Explorepage() {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   /* 1️⃣ STATE FOR INFINITE SCROLL */
//   const [products, setProducts] = useState<ExploreProduct[]>([]);
//   const [loading, setLoading] = useState(false);
  
//   /* 2️⃣ REF FOR OBSERVER */
//   const observer = useRef<IntersectionObserver | null>(null);

//   /* 3️⃣ LOAD MORE FUNCTION */
//   const loadMore = useCallback(async () => {
//     setLoading(true);
//     await new Promise(res => setTimeout(res, 800));
    
//     const mockData: ExploreProduct[] = [
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", title: "Premium Watch Series 5", price: "$349.99", oldPrice: "$449.99", rating: 4.6, reviews: 189, discount: "-22%", isNew: true },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", title: "Leather Sneakers", price: "$89.99", oldPrice: "$129.99", rating: 4.7, reviews: 312, discount: "-31%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500", title: "Vintage Camera", price: "$599.99", oldPrice: "$799.99", rating: 4.9, reviews: 89, isNew: true, discount: "-25%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500", title: "Wool Blend Coat", price: "$249.99", oldPrice: "$349.99", rating: 4.8, reviews: 267, discount: "-29%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", title: "Wireless Headphones", price: "$199.99", oldPrice: "$250.00", rating: 4.5, reviews: 150, discount: "-20%" },
//       { id: Math.random().toString(), thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", title: "Stylish Sunglasses", price: "$120.00", oldPrice: "$150.00", rating: 4.2, reviews: 90, isNew: true },
//     ];
    
//     setProducts(prev => [...prev, ...mockData]);
//     setLoading(false);
//   }, []);

//   useEffect(() => { loadMore(); }, [loadMore]);

//   /* 4️⃣ LAST ELEMENT REF */
//   const lastElementRef = useCallback((node: HTMLDivElement) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) loadMore();
//     });
//     if (node) observer.current.observe(node);
//   }, [loading, loadMore]);

//   /* --- Search Logic --- */
//   interface SearchResponse { cleaned_products: any[]; }
//   async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true);
//       try {
//         const response = await fetch("http://127.0.0.1:8000/search", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: query.trim(), language: "en", country: "in" }),
//         });
//         if (!response.ok) throw new Error("Backend request failed");
//         const data: SearchResponse = await response.json();
//         localStorage.setItem("searchResults", JSON.stringify(data.cleaned_products || []));
//         setTimeout(() => {
//           navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//         }, 800);
//       } catch (error) { console.error("Search error:", error); }
//     }
//   }

//   return (
//     <div className={`explore-container min-h-screen bg-black ${fadeOut ? "fade-out" : "fade-in"}`}>
      
//       {/* 🔹 FIXED TOP SECTION */}
//       <div className="fixed-top-search-area">
//         <div className="search-center-wrapper">
//             <div className="floating-search-bar">
              
//                 <input
//                 type="text"
//                 placeholder="Search for a product..."
                
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyDown={onKeyDown}
//                 />
//                 <div className="search-embedded-btn">
//                 <Button1 />
//                  </div>
//                 <span className="search-icons"></span>

//             </div>
//         </div>
        
//         <div className="cart-fixed-pos">
//             <Button
//                 variant="outline"
//                 size="lg"
//                 className="cart-btn-white relative gap-2"
//                 onClick={() => navigate("/cart")}
//             >
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="font-semibold">Cart</span>
//                 <Badge className="cart-badge-neutral">3</Badge>
//             </Button>
//         </div>
//       </div>
      
//       {/* 🔹 WRAPPER DIV for Shifting */}
//       <div className="grid-container-wrapper">
//           <div className="exp-grid-layout grid-pushed-down">
//             {products.map((p, index) => {
//                 if (products.length === index + 1) {
//                     return (
//                         <div ref={lastElementRef} key={p.id} className="exp-grid-item">
//                             <ExploreProductCard product={p} />
//                         </div>
//                     );
//                 } else {
//                     return (
//                         <div key={p.id} className="exp-grid-item">
//                             <ExploreProductCard product={p} />
//                         </div>
//                     );
//                 }
//             })}
//           </div>

//           {/* Circle Loading Effect */}
//           {loading && (
//             <div className="loader-container">
//               <div className="circle-loader"></div>
//             </div>
//           )}
//       </div>

//     </div>
//   );
// }

// export default Explorepage;


import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { ShoppingCart } from "lucide-react";
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { Button1 } from "@/Components/rainbow-borders-button";
import "./Explore.css";

/* ================= TYPES ================= */

// interface ExploreProduct {
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

interface ProductCardData {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  availability: string;
  comparisonTags: string[];
}
type SearchMode = "normal" | "ai";

/* ================= CARD ================= */

// const ExploreProductCard = ({ product }: { product: ExploreProduct }) => {
//   return (
//     <div className="exp-card-item">
//       <div className="exp-card-media">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="exp-card-img"
//         />
//       </div>

//       <div className="exp-card-content">
//         <h4>{product.title}</h4>

//         <div className="exp-card-rating">
//           ⭐ {product.rating} ({product.reviews})
//         </div>

//         <div className="exp-price-row">
//           <span className="exp-price-now">{product.price}</span>
//           {product.oldPrice && (
//             <span className="exp-price-old">{product.oldPrice}</span>
//           )}
//         </div>

//         <button className="exp-add-cart-pill">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

const STORE_LOGOS: Record<string, string> = {
  Amazon: "/logos/amazon.png",
  Flipkart: "/logos/flipkart.png",
  Meesho: "/logos/meesho.png",
  Croma: "/logos/croma.jpg",
  Myntra: "/logos/myntra.png",
  JioMart: "/logos/jiomart.png",
};




// const ExploreProductCard = ({ product }: { product: ProductCardData }) => {
const ExploreProductCard = ({
  product,
  isInCart,
  onAddToCart,
}: {
  product: ProductCardData;
  isInCart: (id: string) => boolean;
  onAddToCart: (product: ProductCardData) => void;
}) => {
  return (
    <div className="exp-card-item">
      {/* IMAGE */}
      <div className="exp-card-media">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="exp-card-img"
        />

        {/* BADGE */}
        {product.badge && (
          <div className="exp-badge-container">
            <span className="exp-badge-promo">{product.badge}</span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="exp-card-content">
        {/* NAME */}
        <h4 className="exp-card-title">{product.name}</h4>

        {/* DESCRIPTION */}
        <p style={{ fontSize: "12px", color: "#555" }}>
          {product.description}
        </p>

        {/* RATING */}
        <div className="exp-card-rating">
          <span className="exp-star-icon">⭐</span>
          {product.rating} ({product.reviewsCount})
        </div>

        {/* PRICE + AVAILABILITY */}
        <div className="exp-price-row">
          <span className="exp-price-now">{product.price}</span>
          <span
            style={{
              fontSize: "11px",
              color: product.availability === "in stock" ? "green" : "red",
            }}
          >
            {product.availability}
          </span>
        </div>

        {/* FEATURES */}
        <ul style={{ fontSize: "11px", paddingLeft: "14px", color: "#444" }}>
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* TAGS */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {product.comparisonTags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                padding: "4px 6px",
                borderRadius: "6px",
                background: "#e5e7eb",
                color: "#111",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {/* <button className="exp-add-cart-pill">Add to Cart</button> */}
       <button
          className="exp-add-cart-pill"
          style={{
            background: isInCart(product.id) ? "#16a34a" : "#000",
          }}
          onClick={() => onAddToCart(product)}
          disabled={isInCart(product.id)}
        >
          {isInCart(product.id) ? "Added to Cart ✓" : "Add to Cart"}
        </button>


      </div>
    </div>
  );
};

/* ================= PAGE ================= */

export default function Explorepage() {
 

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductCardData[]>([]);
  const [loading, setLoading] = useState(false);

const [cartItems, setCartItems] = useState<ProductCardData[]>([]);

const cartCount = cartItems.length;

function isInCart(productId: string) {
  return cartItems.some((item) => item.id === productId);
}

async function handleAddToCart(product: ProductCardData) {
  try {
    const res = await fetch("http://127.0.0.1:8000/wishlist/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    if (data.status === "added") {
      setCartItems((prev) => [...prev, product]);
    }
  } catch (error) {
    console.error("❌ Failed to add to wishlist:", error);
  }
}


 
  // 🔥 THIS IS THE KEY
  const searchModeRef = useRef<SearchMode>("normal");

  /* ================= BACKEND SEARCH ================= */

  async function fetchProducts() {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query.trim(),
          language: "en",
          country: "in",
        }),
      });

      const data = await res.json();
      // const results = data.cleaned_products || [];
      const results = data.results || [];


      localStorage.setItem("searchResults", JSON.stringify(results));

      if (searchModeRef.current === "ai") {
        // 🤖 AI SEARCH → REDIRECT
        navigate(`/loading?query=${encodeURIComponent(query)}`);
      } else {
        // 🔍 NORMAL SEARCH → SHOW HERE
        // setProducts(
        //   results.map((item : any , i: number ) => ({
        //     // id: item._id || i.toString(),
        //     id: i.toString(),
        //     title: item.title,
        //     price: item.price,
        //     oldPrice: item.old_price,
        //     rating: Number(item.rating) || 0,
        //     reviews: Number(item.reviews) || 0,
        //     thumbnail: item.thumbnail ,
          
        //   }))
        // );
        setProducts(
        results.map((item: any, index: number) => ({
          id: index.toString(),
          name: item.title,
          description: item.brand || "—",
          price: item.price || "—",
          features: [item.source || "Source Unknown"],
          imageUrl: item.thumbnail,
          badge: item.source,
          rating: parseFloat(item.rating) || 4.5,
          reviewsCount: parseInt(item.reviews) || 0,
          availability: "in stock",
          comparisonTags: ["AI", "Smart", "Verified"],
          productUrl: item.link || item.product_link,
        }))
      );

      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  /* ================= EVENTS ================= */

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      searchModeRef.current = "normal";
      fetchProducts();
    }
  }

  function onAiSearchClick() {
    searchModeRef.current = "ai";
    fetchProducts();
  }

  /* ================= UI ================= */

  return (
    <div className="explore-container bg-black min-h-screen">

      {/* ===== SEARCH BAR ===== */}
      <div className="fixed-top-search-area">
        <div className="search-center-wrapper">
          <div className="floating-search-bar">

            <input
              type="text"
              placeholder="Search for a product..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
            />

            {/* ✅ Button1 WRAPPED — NO TS ERROR */}
            <div className="search-embedded-btn" onClick={onAiSearchClick}>
              <Button1 />
            </div>

          </div>
        </div>

              <div className="cart-fixed-pos">
                <Button
                variant="outline"
                size="lg"
                className="cart-btn-white relative gap-2"
                onClick={() => navigate("/cart")}
              >
            <ShoppingCart className="h-5 w-5" />
            <span className="font-semibold">Cart</span>
            {/* <Badge className="cart-badge-neutral">3</Badge> */}
            {cartCount > 0 && (
                <Badge className="cart-badge-neutral">{cartCount}</Badge>
              )}

          </Button>
        </div>
      </div>

      {/* ===== RESULTS GRID ===== */}
      <div className="grid-container-wrapper">
        {loading && <p className="text-white">Loading...</p>}

        <div className="exp-grid-layout">
         {products.map((item) => (
  <ExploreProductCard
    key={item.id}
    product={item}
    isInCart={isInCart}
    onAddToCart={handleAddToCart}
  />
))}

        </div>
      </div>

    </div>
  );
}
