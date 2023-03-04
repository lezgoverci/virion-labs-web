import { useEffect, useState } from "react";
import { NftProject } from "../../types/nftProject";
import useFilteredList from "../../hooks/useFilteredList";

export function Filter({
  list,
  updateList,
}: {
  list: NftProject[];
  updateList: { (newList: NftProject[]): void };
}) {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {}, [list]);

  const handleFilter = () => {
    const testList = list.slice(0, Math.floor(Math.random() * list.length));
    setFilteredList(testList);
    updateList(testList);
  };

  return (
    <>
      <div className="row mb--50 mt--50 align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <h3
            className="title mb--0"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            Explore Projects
          </h3>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div
            className="view-more-btn text-start text-sm-end"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <button className="discover-filter-button discover-filter-activation btn btn-primary">
              Filter<i className="feather-filter"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className="default-exp-wrapper default-exp-expand "
        style={{ display: "block" }}
      >
        <div className="inner">
          <div className="setting-option d-none d-lg-block filter-select-option">
          <label className="filter-label">Search</label>
            <form className="search-form-wrapper" action="#">
              <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
              />
              <div className="search-icon">
                <button>
                  <i className="feather-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Date of Drop</label>
            <select
              onChange={() => {
                handleFilter();
              }}
            >
              <option value="1">this week</option>
              <option value="2">next week</option>
              <option value="3">this month</option>
              <option value="4">in 3 months</option>
              <option value="5">in 6 months</option>
              <option value="6">in 12 months</option>
              <option value="7">last week</option>
              <option value="7">last month</option>
              <option value="7">last 3 months</option>
              <option value="7">last 6 months</option>
              <option value="7">last 12 months</option>
            </select>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Price Range</label>
            <div className="price_filter s-filter clear">
              <form action="#" method="GET">
                <div id="slider-range"></div>
                <div className="slider__range--output">
                  <div className="price__output--wrap">
                    <div className="price--output">
                      <span>Price :</span>
                      <input type="text" id="amount" readOnly />
                    </div>
                    <div className="price--filter">
                      <a className="btn btn-primary btn-small" href="#">
                        Filter
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
