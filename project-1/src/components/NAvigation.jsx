const Navigation = () => {
    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/Apple-Logo.png" alt="apple logo" width="55" height="30" id="apple" />
        </div>

        <ul>
        <li><a href="https://www.apple.com/in/iphone/" target="_blank">iPhone</a></li>
        <li><a href="https://www.apple.com/in/store" target="_blank">Store</a></li>
        <li><a href="https://www.apple.com/in/shop/accessories/all" target="_blank">Accessories</a></li>
        <li><a href="https://support.apple.com/en-in?cid=gn-ols-home-hp-tab" target="_blank">Support</a></li>
      </ul>

      <a href="https://secure7.store.apple.com/in/shop/signIn?ssi=1AAABljWT25wg-Pe6BvKqDJ7UU-xJSMZGk7750lllJeNHmHWJZjltJ30AAAAoaHR0cHM6Ly9zdXBwb3J0LmFwcGxlLmNvbS9lbi1pbi8xMDI2MDl8fAACAXq349UyEUCgUmV1KSyJgT9cGf3ibVx1dHyvjK0lWTVm" target="_blank" >
      <button>Login</button>
      </a>
        </nav>


    );

};

export default Navigation;
