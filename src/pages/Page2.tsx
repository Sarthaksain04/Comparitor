import React from "react";
import "./Page2.css";
import { useNavigate } from "react-router-dom";


const Page2 = () => {
    const navigate = useNavigate();

  return (
    <div className="page2">
      {/* LEFT CONTENT */}
      <div className="left">
        <div className="badge">
          <span className="users-icon">👥</span>
          <div>
            <strong>20M+ Users</strong>
            <p>Read our <span>Success Stories</span></p>
          </div>
        </div>

        <h1 className="title">Reels</h1>

        <p className="subtitle">
          Engage viewers, boost sales, and leverage user-generated content —
          all <strong>30× faster</strong> than traditional video platforms.
        </p>

        <div className="stats">
          <div className="stat">
            ⚡ Earn up to <strong>200%</strong> more viewership
          </div>
          <div className="rating">
            ⭐ 4.9
          </div>
        </div>

        <div className="buttons">
          <button className="primary-btn" onClick={() => navigate("/reels")}>Explore — new Reel's</button>
          <button className="secondary-btn">Our Pricing ↗</button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="right">
        <div className="product-card">
          <img src="src\assets\ponds.png" alt="product" />
          <h4>Pond’s Serum Boost</h4>
          <p className="price">$59.99</p>
          <button>Shop Now</button>
        </div>

        <div className="reel-card">
          <div className="live">LIVE <span>23.5K</span></div>
          <img src="src\assets\ponds.png" alt="reel" />
          <button className="play">▶</button>
          <input className="chat" placeholder="Chat" />
        </div>

        <div className="uplift">
          <p>UP TO</p>
          <h2>32%</h2>
          <span>Uplift Conversions</span>
        </div>
      </div>
    </div>
  );
};

export default Page2;
