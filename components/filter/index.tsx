export function Filter() {
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

      <div className="default-exp-wrapper default-exp-expand " style={{display: "block"}}>
        <div className="inner">
          <div className="filter-select-option">
            <label className="filter-leble">LIKES</label>
            <select>
              <option data-display="Most liked">Most liked</option>
              <option value="1">Least liked</option>
            </select>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Category</label>
            <select>
              <option data-display="Category">Category</option>
              <option value="1">Art</option>
              <option value="1">Photograph</option>
              <option value="2">Metaverses</option>
              <option value="4">Potato</option>
              <option value="4">Photos</option>
            </select>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Collections</label>
            <select>
              <option data-display="Collections">Collections</option>
              <option value="1">BoredApeYachtClub</option>
              <option value="2">MutantApeYachtClub</option>
              <option value="4">Art Blocks Factory</option>
            </select>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Sale type</label>
            <select>
              <option data-display="Sale type">Sale type</option>
              <option value="1">Fixed price</option>
              <option value="2">Timed auction</option>
              <option value="4">Not for sale</option>
              <option value="4">Open for offers</option>
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
