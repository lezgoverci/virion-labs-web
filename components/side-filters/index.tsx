export function SideFilters(){
    return(

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
              <h5 className="widget-title">Blockchain</h5>
              <div className="content">
                <div className="nuron-form-check">
                  <input type="checkbox" id="level-check1" />
                  <label htmlFor="level-check1">Ethereum</label>
                </div>
                <div className="nuron-form-check">
                  <input type="checkbox" id="level-check2" />
                  <label htmlFor="level-check2">Polygon</label>
                </div>
                <div className="nuron-form-check">
                  <input type="checkbox" id="level-check3" />
                  <label htmlFor="level-check3">Solana</label>
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

    )
}