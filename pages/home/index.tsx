import type { NextPage } from "next";
import Image from "next/image";

import DefaultTemplate from "../../templates/default";

import TabMenu from "../../components/tab-menu";
import Head from "next/head";
import Header from "../../components/header";
import Foot from "../../components/foot";

const Home = () => {
  return (
    <>
      <Header />

      <div className="banner-area banner-12 bg_image--23 bg_image with-down-shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-xii-wrapper">
                <div className="banner-content-wrapper">
                  <p className="pre-title">Nuron marketplace</p>
                  <h1 className="title">
                    Dive into NFTs marketplace with a relevant Product
                  </h1>
                  <p className="post-title">
                    Unit of data stored on a digital ledger, called a
                    blockchain, that certifies a digital asset to be unique and
                    therefore not interchangeable
                  </p>
                  <a className="btn btn-primary btn-large" href="#">
                    Explore
                  </a>
                  <div className="wallet-image-wrapper">
                    <a href="#" className="avatar" data-tooltip="BITLY">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/4.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="D-Coin">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/7.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="Trans Card">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/8.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="Meta Mask">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/1.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="E-Currency">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/3.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="BitCoin">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/2.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="Attar Process">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/6.png"
                        alt="wallet_image"
                      />
                    </a>
                    <a href="#" className="avatar" data-tooltip="Mark JOrdan">
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/icons/wallet/5.png"
                        alt="wallet_image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About banner area --> */}
      <div className="rn-about-banner-area rn-section-gapTop">
        <div className="container mb--30">
          <div className="row">
            <div className="col-12">
              <h2
                className="title about-title-m"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                Direct Teams. <br />
                For Your Dadicated Dreams
              </h2>
            </div>
          </div>
        </div>
        <div className="container-fluid about-fluidimg ">
          <div className="row">
            <div className="img-wrapper">
              <div className="bg_image--22 bg_image"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h--100">
                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                  <div className="inner">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Why We Do This
                    </h2>
                    <p
                      className="about-disc"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      NFTs are virtual tokens that represent ownership of
                      something inherently distinct and scarce, whether it be a
                      physical or digital item, such as artwork, a soundtrack, a
                      collectible, an in-game item or real estate. Unlike
                      regular cryptocurrencies like bitcoin or fiat money like
                      the U.S.
                    </p>
                    <a
                      href="blog.html"
                      className="btn btn-primary-alta btn-large sal-animate mt--20"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      See Our Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rn-about-card transparent-bg">
                <div className="inner">
                  <h3
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Helping You <br />
                    Grow In Every Stage.
                  </h3>
                  <p
                    className="about-disc mb--0"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    NFTs are virtual tokens that represent ownership of
                    something inherently distinct and scarce, whether it be a
                    physical or digital item, such as artwork, a soundtrack, a
                    collectible, an in-game item or real estate. Unlike regular
                    cryptocurrencies like bitcoin or fiat money like the U.S.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About banner area End --> */}

      <div className="rn-about-Quote-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-lg-6">
              <div className="rn-about-title-wrapper">
                <h3
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  Create, Sell well & Collect your Wonderful NFTs at Nuron Very
                  Fast
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="rn-about-wrapper"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                <p>
                  The NFTs is a one-trick pony that climbed the ladders of
                  success in recent years. The growth of NFTs is tremendous, and
                  according to Pymnts.com, the total sales volume of NFTs has
                  nearly crossed $2.5 billion in the last six months of .
                  Surprisingly, the total sales volume of NFTs was $13.7 million
                  in 2020. On comparing both the values,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- start service area --> */}
      <div className="rn-service-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Create and sell your NFTs
              </h3>
            </div>
          </div>
          <div className="row g-5">
            {/* <!-- start single service --> */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-duration="800"
                className="rn-service-one color-shape-7"
              >
                <div className="inner">
                  <div className="icon w-10">
                    <Image
                      layout="fill"
                      src="assets/images/icons/shape-7.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-01</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Set up your wallet</a>
                    </h4>
                    <p className="description">
                      Powerful features and inclusions, which makes Nuron
                      standout, easily customizable and scalable.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>
            {/* <!-- End single service --> */}
            {/* <!-- start single service --> */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="800"
                className="rn-service-one color-shape-1"
              >
                <div className="inner">
                  <div className="icon w-10">
                    <Image
                      layout="fill"
                      src="assets/images/icons/shape-1.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-02</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Create your collection</a>
                    </h4>
                    <p className="description">
                      A great collection of beautiful website templates for your
                      need. Choose the best suitable template.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>
            {/* <!-- End single service --> */}
            {/* <!-- start single service --> */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="250"
                data-sal-duration="800"
                className="rn-service-one color-shape-5"
              >
                <div className="inner">
                  <div className="icon w-10">
                    <Image
                      layout="fill"
                      src="assets/images/icons/shape-5.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-03</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Add your NFT's</a>
                    </h4>
                    <p className="description">
                      We've made the template fully responsive, so it looks
                      great on all devices: desktop, tablets and.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>
            {/* <!-- End single service --> */}
            {/* <!-- start single service --> */}
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="800"
                className="rn-service-one color-shape-6"
              >
                <div className="inner">
                  <div className="icon w-10">
                    <Image
                      layout="fill"
                      src="assets/images/icons/shape-6.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Step-04</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Sell Your NFT's</a>
                    </h4>
                    <p className="description">
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth NFT's.
                    </p>
                    <a className="read-more-button" href="#">
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <a className="over-link" href="#"></a>
              </div>
            </div>
            {/* <!-- End single service --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
