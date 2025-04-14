const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
        <h1>Power.<br />Precision.<br />iPhone.</h1>
        <p>
            iPhone 15 Plus offers a large 6.7-inch display, Dynamic Island, 48MP main camera,<br /> A16 Bionic chip, USB-C port, sleek design, and great battery life.
        </p>
  
          <div className="hero-btn">
          <a href="https://www.apple.com/in/shop/buy-iphone/iphone-15/6.7%22-display-128gb-yellow" target="_blank">
            <button>Shop Now!</button>
            </a>
          </div>
  
          <div className="shopping">
            <p>Also Available on</p>
  
            <div className="brand-icons">
            <a href="https://www.amazon.in/Apple-iPhone-15-Plus-128/dp/B0CHX3D519/ref=asc_df_B0CHX3D519?mcid=cc1d07aa77be325d87db505ea669a5f0&tag=googleshopdes-21&linkCode=df0&hvadid=709962856229&hvpos=&hvnetw=g&hvrand=6633316997021708481&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9207103&hvtargid=pla-2263468154041&gad_source=1&th=1" target="_blank" rel="noopener noreferrer">
              <img src="/images/amazon.png" alt="amazon" width="40" height="40"/>
              </a>

              <a href="https://www.jiomart.com/p/electronics/apple-iphone-15-plus-128-gb-yellow/604576511" target="_blank" rel="noopener noreferrer">
              <img src="/images/JioMart_logo.svg.png" alt="jiomart" width="40" height="40"/>
              </a>
            </div>
          </div> 
        </div> 
  
        <div className="hero-image">
          <img src="/images/yellow.png" alt="iPhone yellow" width="450" height="auto" id="glow-image"/>
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  