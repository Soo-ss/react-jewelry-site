import React from "react";
import logo from "../../../images/logo.png";
import user from "../../../images/user.png";

function Header() {
  return (
    <header id="header" className="sticky-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {/* logo of the page */}
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="JEWELRY" />
              </a>
            </div>
            <div className="nav-holder">
              <a href="#" className="nav-opener">
                <span>menu</span>
              </a>
              {/* nav of the page */}
              <nav id="nav">
                <ul className="list-unstyled">
                  <li className="active">
                    <a href="#">home</a>
                    <ul className="list-unstyled drop">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="home.html">Home 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-drop">
                    <a href="#">shop</a>
                    <div className="drop-holder">
                      <div className="coll">
                        <strong className="title">SHOP PAGE</strong>
                        <ul className="list-unstyled">
                          <li>
                            <a href="category-page.html">Shop</a>
                          </li>
                          <li>
                            <a href="shoping-cart.html">Shoping Cart</a>
                          </li>
                          <li>
                            <a href="shoping-cart.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul>
                      </div>
                      <div className="coll">
                        <strong className="title">PRODUCTS</strong>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">Basic Products</a>
                          </li>
                          <li>
                            <a href="#">Simple Products</a>
                          </li>
                          <li>
                            <a href="#">Varieble Products</a>
                          </li>
                          <li>
                            <a href="#">Simple Products</a>
                          </li>
                        </ul>
                      </div>
                      <div className="coll coll-2">
                        <strong className="title">LAST CHANCE</strong>
                        <div className="offer-txt">
                          <span className="txt">sale</span>
                          <span className="offer-sale">40%</span>
                          <span className="txt-about">
                            Pharetra, erat sed <br />
                            fermentum feugiat, velit
                            <br />
                            mauris egestas quam.
                          </span>
                          <a href="#" className="btn-more">
                            Read more <i className="icon-right-arrow" />
                          </a>
                          <div className="img-holder">
                            <img
                              src="http://placehold.it/150x100"
                              alt="image description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">blog</a>
                    <ul className="list-unstyled drop">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Single Post</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">about</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="align-right">
                {/* social-networks of the page */}
                <ul className="list-unstyled icon-list">
                  <li>
                    <a href="#">
                      <img src={user} alt="images description" />
                    </a>
                  </li>
                  <li className="cart-box hidden-xs">
                    <a className="cart-opener opener-icons" href="#">
                      <i className="icon-cart" />
                      <span className="cart-num">2</span>
                    </a>
                    <div className="cart-drop">
                      <div className="cart-holder">
                        <strong className="main-title">
                          You have <i>4 items</i> in your card
                        </strong>
                        <ul className="cart-list list-unstyled">
                          <li>
                            <div className="image">
                              <a href="#">
                                <img
                                  alt="Image Description"
                                  src="images/img02.jpg"
                                />
                              </a>
                            </div>
                            <div className="description">
                              <span className="product-name">
                                <a href="#">Kenneth Jay Lane</a>
                              </span>
                              <span className="price">$230</span>
                            </div>
                            <a className="icon-close" href="#" />
                          </li>
                          <li>
                            <div className="image">
                              <a href="#">
                                <img
                                  alt="Image Description"
                                  src="images/img02.jpg"
                                />
                              </a>
                            </div>
                            <div className="description">
                              <span className="product-name">
                                <a href="#">Lavin lady</a>
                              </span>
                              <span className="price">$173</span>
                            </div>
                            <a className="icon-close" href="#" />
                          </li>
                        </ul>
                        <div className="total-price-area">
                          <span className="title-text">Total</span>
                          <span className="price">$403</span>
                        </div>
                        <span className="cart">View card</span>
                        <a href="#" className="btn">
                          checkout
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="btn-search" href="#">
                      <i className="icon-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
