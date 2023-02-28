import DefaultTemplate from "../../templates/default";
import { useEffect, useState } from "react";
import { NftProject as NftProjectType } from "../../types/nftProject";
import { GetServerSideProps } from "next";
import useTransformNftProjectType from "../../hooks/useTransformNftProject";
import { Table } from "../../components/table";
import { Carousel } from "../../components/carousel";

type Props = {
  data: NftProjectType;
};

export default function NftCalendar(props: Props) {
  const INITIAL_DATA: NftProjectType[] = [];

  const [data, setData] = useState(INITIAL_DATA);
  const [filteredData, setFilteredData] = useState([]);


  const featuredListMarkup = <Carousel data={data} />;

  return (
    <>
      <DefaultTemplate>
        <div className="featured">
          <div className="featured-list">{featuredListMarkup}</div>
        </div>
        <div className="filters-top"></div>
        <div className="filters-side"></div>
        <div className="list"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="nu-course-sidebar">
                <div className="nuron-expo-filter-widget widget-shortby">
                  <div className="inner">
                    <h5 className="widget-title">Sort By</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="short-check1" />
                        <label htmlFor="short-check1">Newest</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="short-check2" />
                        <label htmlFor="short-check2">Oldest</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="short-check3" />
                        <label htmlFor="short-check3">Popular Courses</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="short-check4" />
                        <label htmlFor="short-check4">
                          Featured On This Month
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-category mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Categories</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check1" />
                        <label htmlFor="cat-check1">
                          Art &amp; Design <span>(24)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check2" />
                        <label htmlFor="cat-check2">
                          Web Development <span>(12)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check3" />
                        <label htmlFor="cat-check3">
                          Business Management <span>(8)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check4" />
                        <label htmlFor="cat-check4">
                          Digital Marketing <span>(3)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check5" />
                        <label htmlFor="cat-check5">
                          Music &amp; Fashion <span>(13)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check6" />
                        <label htmlFor="cat-check6">
                          Financial Management <span>(25)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="cat-check7" />
                        <label htmlFor="cat-check7">
                          Sports <span>(19)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Level</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="level-check1" />
                        <label htmlFor="level-check1">All Skill</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="level-check2" />
                        <label htmlFor="level-check2">Beginner</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="level-check3" />
                        <label htmlFor="level-check3">Intermediate</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="level-check4" />
                        <label htmlFor="level-check4">High</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Price</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="price-check1" />
                        <label htmlFor="price-check1">All Prices</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="price-check2" />
                        <label htmlFor="price-check2">Price: Low to High</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="price-check3" />
                        <label htmlFor="price-check3">Price: High to Low</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="price-check4" />
                        <label htmlFor="price-check4">Free Paid</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Language</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="lang-check1" />
                        <label htmlFor="lang-check1">All Language</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="lang-check2" />
                        <label htmlFor="lang-check2">Arabic</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="lang-check3" />
                        <label htmlFor="lang-check3">English</label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="lang-check4" />
                        <label htmlFor="lang-check4">Russian</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Short By Rating</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input type="checkbox" id="rating-check1" />
                        <label htmlFor="rating-check1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="rating-check2" />
                        <label htmlFor="rating-check2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="rating-check3" />
                        <label htmlFor="rating-check3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input type="checkbox" id="rating-check4" />
                        <label htmlFor="rating-check4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </label>
                      </div>

                      <div className="nuron-form-check">
                        <input type="checkbox" id="rating-check5" />
                        <label htmlFor="rating-check5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Filter By Price</h5>
                    <div className="content">
                      <div className="price_filter s-filter clear">
                        <form action="#" method="GET">
                          <div
                            id="slider-range"
                            className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          >
                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                            <span
                              className="ui-slider-handle ui-state-default ui-corner-all"
                              tabIndex={0}
                            ></span>
                            <span
                              className="ui-slider-handle ui-state-default ui-corner-all"
                              tabIndex={0}
                            ></span>
                          </div>
                          <div className="slider__range--output">
                            <div className="price__output--wrap">
                              <div className="price--output">
                                <span>Price :</span>
                                <input
                                  type="text"
                                  id="amount"
                                  readOnly={true}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <Table rows={data} headers={["name", "website", "supply"]} />
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/nft-projects");
  const data = await response.json();

  return { props: { data } };
};
