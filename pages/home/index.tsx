import type { NextPage } from "next";
import Image from "next/image";

import DefaultTemplate from "../../templates/default";

import TabMenu from "../../components/tab-menu";

const Home: NextPage = () => {
  return (<>
    <div className="bg-black text-white">
      <DefaultTemplate>

    <div className="pb_sm--0 banner-area banner-svg bg-image-svg-1 bg_image rn-section-gap with-down-shadow">
        <div className="container">
            <div className="row g-5 d-flex align-items-center">
                <div className="col-lg-7 order-lg-1 order-md-2 order-sm-2 order-2">
                    <div className="banner-left-bg-svg">
                        <h1 className="title">Launch your own NFT Marketplace or NFT Store in Minutes</h1>
                        <p className="disc">
                            Grow your NFT brand with zero technical expertise, creator & enterprise friendly features,
                            complete customisation, and tons of integrations
                        </p>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your username" aria-label="Recipient's username"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary btn-outline-secondary" type="button">Subscribe <i
                                        data-feather="chevrons-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 order-lg-2 order-md-1 order-sm-1 order-1">
                    <div className="tilt-image-banner-16">
                        <img className="tilt" src="assets/images/banner/banner-10.png" alt="Nft-profile"/>
                        <div className="joined-people-wrapper">
                            <div className="product-share-wrapper">
                                <div className="profile-share">
                                    <a href="author.html" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img className="large" src="assets/images/client/client-2.png" alt="Nft_Profile"/></a>
                                    <a href="author.html" className="avatar" data-tooltip="Mark" tabIndex={0}><img className="large" src="assets/images/client/client-3.png" alt="Nft_Profile"/></a>
                                    <a href="author.html" className="avatar" data-tooltip="Jordan" tabIndex={0}><img className="large" src="assets/images/client/client-5.png" alt="Nft_Profile"/></a>
                                    <a href="author.html" className="avatar" data-tooltip="Mark JOrdan" tabIndex={0}><img className="large" src="assets/images/client/client-2.png" alt="Nft_Profile"/></a>
                                    <a className="more-author-text" href="#" tabIndex={0}>More Then 25K</a>
                                </div>
                            </div>
                            <p className="disc">Million of people are sell there NFTs in Virion Labsmarketplaces. Create & Sell
                                Your NFT's.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


     {/* keyfeature area */}
    <div className="key-feature-area rn-section-gapTop">
        <div className="container">
            <div className="row g-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <h2 className="title">Our Key Features</h2>
                    <p className="disc pr--20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam et, eligendi cum
                        vitae.</p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                    <div className="single-key">
                        <i data-feather="cast"></i>
                        <label>Whitelabel Storefront</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                    <div className="single-key">
                        <i data-feather="alert-octagon"></i>
                        <label>APIs (Detailed)
                        </label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="archive"></i>
                        <label>Security & Interoperability</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="box"></i>
                        <label>Easy distribution</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="monitor"></i>
                        <label>Email Service Integration</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="clock"></i>
                        <label>Your own ERC20 as Currency
                        </label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="coffee"></i>
                        <label>Fiat Support (eg. USD)
                        </label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="compass"></i>
                        <label>Team Access</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="command"></i>
                        <label>Drag & Drop Store Builder</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="database"></i>
                        <label>Crosschain Support
                        </label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="moon"></i>
                        <label>Trade NFTs</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="gift"></i>
                        <label>Whitelabel Storefront</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="globe"></i>
                        <label>Whitelabel Storefront
                        </label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="image"></i>
                        <label>Fiat Support (eg. USD)</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="map"></i>
                        <label>Whitelabel Storefront</label>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="single-key">
                        <i data-feather="package"></i>
                        <label>Airdrop (Initial NFT Offerings)</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* keyfeature area End*/}



     {/* Modal */}
    <div className="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabIndex={-1} aria-hidden="true">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content share-wrapper">
                <div className="modal-header share-area">
                    <h5 className="modal-title">Share this NFT</h5>
                </div>
                <div className="modal-body">
                    <ul className="social-share-default">
                        <li><a href="#"><span className="icon"><i data-feather="facebook"></i></span><span className="text">facebook</span></a></li>
                        <li><a href="#"><span className="icon"><i data-feather="twitter"></i></span><span className="text">twitter</span></a></li>
                        <li><a href="#"><span className="icon"><i data-feather="linkedin"></i></span><span className="text">linkedin</span></a></li>
                        <li><a href="#"><span className="icon"><i data-feather="instagram"></i></span><span className="text">instagram</span></a></li>
                        <li><a href="#"><span className="icon"><i data-feather="youtube"></i></span><span className="text">youtube</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
     {/* Modal */}
    <div className="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabIndex={-1} aria-hidden="true">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content report-content-wrapper">
                <div className="modal-header report-modal-header">
                    <h5 className="modal-title">Why are you reporting?
                    </h5>
                </div>
                <div className="modal-body">
                    <p>Describe why you think this item should be removed from marketplace</p>
                    <div className="report-form-box">
                        <h6 className="title">Message</h6>
                        <textarea name="message" placeholder="Write issues"></textarea>
                        <div className="report-button">
                            <button type="button" className="btn btn-primary mr--10 w-auto">Report</button>
                            <button type="button" className="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Modal */}
    <div className="rn-popup-modal placebid-modal-wrapper modal fade" id="placebidModal" tabIndex={-1} aria-hidden="true">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Place a bid</h3>
                </div>
                <div className="modal-body">
                    <p>You are about to purchase This Product Form Virion Labs</p>
                    <div className="placebid-form-box">
                        <h5 className="title">Your bid</h5>
                        <div className="bid-content">
                            <div className="bid-content-top">
                                <div className="bid-content-left">
                                    <input id="value" type="text" name="value"/>
                                    <span>wETH</span>
                                </div>
                            </div>

                            <div className="bid-content-mid">
                                <div className="bid-content-left">
                                    <span>Your Balance</span>
                                    <span>Service fee</span>
                                    <span>Total bid amount</span>
                                </div>
                                <div className="bid-content-right">
                                    <span>9578 wETH</span>
                                    <span>10 wETH</span>
                                    <span>9588 wETH</span>
                                </div>
                            </div>
                        </div>
                        <div className="bit-continue-button">
                            <a href="connect.html" className="btn btn-primary w-100">Place a bid</a>
                            <button type="button" className="btn btn-primary-alta mt--10" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Start Footer Area */}
    <div className="rn-footer-one rn-section-gapBottom bg-color--1 mt--100 mt_md--80 mt_sm--80 pt--80">

        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-content-wrapper">
                        <div className="footer-left">
                            <div className="logo-thumbnail logo-custom-css">
                                <a className="logo-light" href="index.html"><img src="assets/images/logo/logo-horizontal.png" alt="nft-logo"/></a>
                                <a className="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo"/></a>
                            </div>
                            <p className="rn-footer-describe">
                                Created with the collaboration of over 60 of the world's best Virion LabsArtists.
                            </p>
                        </div>
                        <div className="widget-bottom mt--40 pt--40">
                            <h6 className="title">Get The Latest Virion LabsUpdates </h6>
                            <div className="input-group">
                                <input type="text" className="form-control bg-color--2" placeholder="Your username" aria-label="Recipient's username"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary-alta btn-outline-secondary" type="button">Subscribe</button>
                                </div>
                            </div>
                            <div className="newsletter-dsc">
                                <p>Email is safe. We don't spam.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
                    <div className="footer-widget widget-quicklink">
                        <h6 className="widget-title">Virion Labs</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><a href="#">Protocol Explore</a></li>
                            <li className="single-list"><a href="#">System Token</a></li>
                            <li className="single-list"><a href="#">Otimize Time</a></li>
                            <li className="single-list"><a href="#">Visual Checking</a></li>
                            <li className="single-list"><a href="#">Fadeup System</a></li>
                            <li className="single-list"><a href="#">Activity Log</a></li>
                            <li className="single-list"><a href="#">System Auto Since</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget widget-information">
                        <h6 className="widget-title">Information</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><a href="#">Market Explore</a></li>
                            <li className="single-list"><a href="#">Ready Token</a></li>
                            <li className="single-list"><a href="#">Main Option</a></li>
                            <li className="single-list"><a href="#">Product Checking</a></li>
                            <li className="single-list"><a href="blog.html">Blog Grid</a></li>
                            <li className="single-list"><a href="about.html">About Us</a></li>
                            <li className="single-list"><a href="#">Fix Bug </a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget">
                        <h6 className="widget-title">Recent Sold Out</h6>
                        <ul className="footer-recent-post">
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <a href="product-details.html">
                                        <img src="assets/images/portfolio/portfolio-01.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <h6 className="title"><a href="product-details.html">#21 The Wonder</a></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.244wETH</span>
                                </div>
                            </li>
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <a href="product-details.html">
                                        <img src="assets/images/portfolio/portfolio-02.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <h6 className="title"><a href="product-details.html">Diamond Dog</a></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.022wETH</span>
                                </div>
                            </li>
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <a href="product-details.html">
                                        <img src="assets/images/portfolio/portfolio-03.jpg" alt="Product Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <h6 className="title"><a href="product-details.html">Morgan11</a></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.892wETH</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* End Footer Area */}
     {/* Start Footer Area */}
    <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright-left">
                        <span>©2023 Virion Labs. All rights reserved.</span>
                        <ul className="privacy">
                            <li><a href="terms-condition.html">Terms</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="copyright-right">
                        <ul className="social-copyright">
                            <li><a href="#"><i data-feather="facebook"></i></a></li>
                            <li><a href="#"><i data-feather="twitter"></i></a></li>
                            <li><a href="#"><i data-feather="instagram"></i></a></li>
                            <li><a href="#"><i data-feather="linkedin"></i></a></li>
                            <li><a href="#"><i data-feather="mail"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

      </DefaultTemplate>
    </div>
    </>
  );
};

export default Home;
