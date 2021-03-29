import React from "react";

import "./scss/header.scss";
import "./scss/header-top.scss";

function HeaderTop() {
  return (
    <header>
      <div class="header-top">
        {/* <!-- modules: src\partials\Header\components\HeaderTop.jsx--> */}
      </div>
      <div class="header" id="sticky-section">
        <div class="header-control">
          <div class="container">
            <div class="inner">
              <div class="hamburger-search-wrap">
                <div class="hamburger-btn sp">
                  <button>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                  </button>
                </div>
                <div class="search">
                  <input
                    class="pc search-input"
                    type="text"
                    placeholder="Search for items"
                  />
                  <button class="pc search-btn" data-search-btn>
                    <img
                      src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/common/search.png"
                      alt="search"
                    />
                  </button>
                  <button class="sp search-btn" data-sp-search-btn>
                    <img
                      src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/common/search.png"
                      alt="search"
                    />
                  </button>
                </div>
              </div>
              <div class="header-logo">
                <a class="link" href="/" title="TANGS">
                  <img
                    src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/common/tangs-logo.png"
                    alt="TANGS"
                  />
                </a>
              </div>
              <div class="header-actions">
                <ul class="nav-items">
                  <li class="nav-item">
                    <div class="acc-block">
                      <input type="checkbox" id="acc" />
                      <label class="custom-checkbox" for="acc">
                        <span class="pc">HELLO JEFFERSON</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0135 0C13.4268 0 16.2037 2.6446 16.2037 5.8954C16.2037 8.0994 14.9306 10.0274 13.0799 11.0196C16.8402 12.1766 19.617 15.3172 19.9639 19.229C20.0796 20.2204 18.1125 20.2759 18.0551 19.3392C17.6498 15.4274 14.1209 12.4524 10.0135 12.4524C5.84799 12.4524 2.37732 15.4274 1.97202 19.3392C1.85635 20.2759 -0.110763 20.2204 0.00490547 19.229C0.410142 15.372 3.18683 12.1766 6.88892 11.0196C5.03747 10.0282 3.76517 8.0992 3.76517 5.8954C3.76517 2.6446 6.60017 0 10.0135 0ZM10.0135 1.87344C7.64198 1.87344 5.73224 3.6914 5.73224 5.89524C5.73224 8.15384 7.64109 9.97264 10.0135 9.97264C12.3277 9.97264 14.2364 8.15468 14.2364 5.89524C14.2364 3.69124 12.3275 1.87344 10.0135 1.87344Z"
                            fill="#43464E"
                          ></path>
                        </svg>
                      </label>
                      <div class="acc-content-block">
                        <ul>
                          <li>
                            <a href="profile.html">My Account</a>
                          </li>
                          <li>
                            <a href="myorder.html">My Orders</a>
                          </li>
                          <li>
                            <a href="logout.html" title="Sign Out">
                              Sign Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item heart-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99956 19C9.81618 19 9.6328 18.9421 9.48018 18.8262L9.03771 18.4902C4.97368 15.4106 2.52097 13.5512 1.0932 11.0705C-0.275664 8.69999 -0.111231 6.82761 0.266186 5.67502C0.726411 4.27427 1.76165 3.14698 3.18376 2.50051C3.91494 2.16915 4.70999 2 5.54409 2C7.30812 2 8.93845 2.73572 9.99974 3.94875C11.061 2.73572 12.6902 2 14.4554 2C15.2895 2 16.0834 2.168 16.8145 2.49936C18.2367 3.14585 19.2731 4.27202 19.7333 5.67387C20.1119 6.8255 20.2752 8.6977 18.9063 11.0693C17.4771 13.5499 15.021 15.4118 10.9521 18.4959L10.5202 18.8261C10.3664 18.9419 10.183 19 9.99956 19ZM5.54391 3.6637C4.95708 3.6637 4.40339 3.77956 3.89701 4.00897C2.91029 4.45734 2.19449 5.22898 1.88217 6.18364C1.48818 7.3828 1.72718 8.79049 2.57073 10.2527C3.82247 12.4274 6.02082 14.1017 9.99823 17.1175C13.9759 14.1029 16.1742 12.4265 17.4257 10.2539C18.2705 8.79058 18.5083 7.38289 18.1155 6.18364C17.8019 5.23013 17.0862 4.45734 16.0994 4.00897C15.5942 3.77957 15.0406 3.6637 14.4537 3.6637C12.8601 3.6637 11.3789 4.53034 10.7683 5.81983C10.6299 6.11412 10.3282 6.30181 9.99807 6.30181C9.66679 6.30181 9.36748 6.11412 9.22785 5.81983C8.61855 4.53031 7.13757 3.6637 5.54391 3.6637Z"
                        fill="#43464E"
                      ></path>
                    </svg>
                  </li>
                  <li class="nav-item cart has-item">
                    <a href="cart" data-item-cart="1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33693 19.5613 4.87365L19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7192 6.0213 18.6567 6.22266L18.6566 6.22252Z"
                          fill="#43464E"
                        ></path>
                        <path
                          d="M8.44437 14.9815C7.2443 14.9815 6.25488 15.9277 6.25488 17.0752C6.25488 18.2227 7.24439 19.1689 8.44437 19.1689C9.64445 19.1697 10.6339 18.2235 10.6339 17.0758C10.6339 15.9282 9.64436 14.9813 8.44437 14.9813V14.9815ZM8.44437 17.9012C7.9599 17.9012 7.58071 17.5386 7.58071 17.0753C7.58071 16.612 7.9599 16.2494 8.44437 16.2494C8.92885 16.2494 9.30804 16.612 9.30804 17.0753C9.30722 17.5189 8.90748 17.9012 8.44437 17.9012Z"
                          fill="#43464E"
                        ></path>
                        <path
                          d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z"
                          fill="#43464E"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="search sp" data-sp-search-block>
              <div class="wrap">
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search for items"
                />
                <button class="sp search-btn" data-search-btn>
                  <img
                    src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/common/search.png"
                    alt="search"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav class="header-nav">
          <div class="overlay sp"></div>
          <div class="container">
            <div class="nav-items">
              <ul class="categories-list">
                <li class="nav-item">
                  <a class="active nav-link" href="/" title="WHAT’S NEW">
                    WHAT’S NEW
                  </a>
                </li>
                <li class="nav-item">
                  <input id="1" type="checkbox" />
                  <label class="sp custom-checkbox" for="1"></label>
                  <a class="nav-link" href="/" title="SALE">
                    SALE
                  </a>
                  <div class="mega-menu-block">
                    <div class="container">
                      <div class="inner">
                        <ul>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              women
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Bags
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Jewellery
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Footwear
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Maternity
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Sunglasses & Optical
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Watches
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              men
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Bags
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Jewellery
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Footwear
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Maternity
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Watches
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              KIDS & Babies
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Boys
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Girls
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Babies
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div class="photo-block pc">
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/home/mega-menu/mega-menu-1.png"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/home/mega-menu/mega-menu-2.png"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="260x464">
                            <a href="#">
                              <img
                                src="/images//Users/mrbu/work2/jobs/tangs-ecom-web-html/src/assets/images/home/mega-menu/mega-menu-3.png"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Beauty
                  </a>
                </li>
                <li class="nav-item">
                  <input id="3" type="checkbox" />
                  <label class="sp custom-checkbox" for="3"></label>
                  <a class="nav-link" href="/">
                    Home
                  </a>
                  <div class="mega-menu-block">
                    <div class="container">
                      <div class="inner">
                        <ul>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              women
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              men
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              KIDS &amp; Babies
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              women
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              men
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              KIDS &amp; Babies
                            </a>
                          </li>
                        </ul>
                        <div class="photo-block pc">
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/235x205/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/235x205/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="260x464">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/260x464/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Tech
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Leisure
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Food
                  </a>
                </li>
                <li class="nav-item">
                  <input id="7" type="checkbox" />
                  <label class="sp custom-checkbox" for="7"></label>
                  <a class="nav-link" href="/">
                    Gift shop
                  </a>
                  <div class="mega-menu-block">
                    <div class="container">
                      <div class="inner">
                        <ul>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              women
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Bags
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Jewellery
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Footwear
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Maternity
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Sunglasses & Optical
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Watches
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              men
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Accessories
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Bags
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Jewellery
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Footwear
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Apparel
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Maternity
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Watches
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">
                              KIDS & Babies
                            </a>
                            <ul>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Boys
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Girls
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/">
                                  Babies
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div class="photo-block pc">
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/235x205/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="235x205">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/235x205/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                          <div class="photo-block__item" data-size="260x464">
                            <a href="#">
                              <img
                                src="https://dummyimage.com/260x464/000/fff"
                                alt="Tangs"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Tangs edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderTop;
