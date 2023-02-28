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

      <div className="banner-area banner-12 bg_image--hero bg_image ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-xii-wrapper">
                <div className="banner-content-wrapper">
                  <p className="pre-title">Virion Labs</p>
                  <h1 className="title">
                  Reimagine. Connect. Execute.

                  </h1>
                  <p className="post-title">Together in building the future of Web3</p>
                  <a className="btn btn-primary btn-large" href="#">
                    Explore
                  </a>

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
                We dream of a new tomorrow <br />
                geared towards mass adoption and decentralization
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid about-fluidimg ">
          <div className="row">
            <div className="img-wrapper">
              <div className="bg_image--hero bg_image"></div>
            </div>
          </div>
        </div> */}
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
                      Work with us
                    </h2>
                    <p
                      className="about-disc"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Let Virion Labs' core team handle your headache! From
                      ideation to implementation, we got you covered! With over
                      4 years of experience and numerous case studies, there is
                      no problem we wont be able to create a solution for.
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
                    Tap into our resources! <br />
                  </h3>
                  <p
                    className="about-disc mb--0"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    With Virion Connect, you will be able to hand pick highly
                    qualified talents and specially curate a team that will take
                    your project to the next level! Get access to our database
                    of over 15,000 skilled web 3 talents now!
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
                Our Flagship Offerings
                <br /> That Will Make Your Visions a Reality
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
                  <div className="icon ">
                    <Image
                      width="100px"
                      height="100px"
                      src="/assets/images/icons/shape-7.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Work with us</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Virion Solutions</a>
                    </h4>
                    <p className="description">
                      Let Virion Labs' core team handle your headache! From
                      ideation to implementation, we got you covered! With over
                      4 years of experience and numerous case studies, there is
                      no problem we wont be able to create a solution for.
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
                  <div className="icon ">
                    <Image
                      width="100px"
                      height="100px"
                      src="/assets/images/icons/shape-1.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Tap into our resources!</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Virion Connect</a>
                    </h4>
                    <p className="description">
                      With Virion Connect, you will be able to hand pick highly
                      qualified talents and specially curate a team that will
                      take your project to the next level! Get access to our
                      database of over 15,000 skilled web 3 talents now!
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
                  <div className="icon ">
                    <Image
                      width="100px"
                      height="100px"
                      src="/assets/images/icons/shape-5.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="subtitle">Need a quick broadcast?</div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#">Virion Node System</a>
                    </h4>
                    <p className="description">
                      Virion node system is a powerful broadcasting tool that
                      allows project founders like you to gain instant exposure
                      to thousands of users across the globe.
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
