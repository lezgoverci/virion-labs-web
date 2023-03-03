export function SideFilters(){
    return(

        <div className="nu-course-sidebar">


          <div className="nuron-expo-filter-widget widget-category">
            <div className="inner">
              <h5 className="widget-title">Categories</h5>
              <div className="content">
                <div className="nuron-form-check">
                  <input type="checkbox" id="cat-check1" />
                  <label htmlFor="cat-check1">
                    Art <span>(24)</span>
                  </label>
                </div>
                <div className="nuron-form-check">
                  <input type="checkbox" id="cat-check2" />
                  <label htmlFor="cat-check2">
                    Gaming <span>(12)</span>
                  </label>
                </div>
                <div className="nuron-form-check">
                  <input type="checkbox" id="cat-check3" />
                  <label htmlFor="cat-check3">
                    Membership <span>(8)</span>
                  </label>
                </div>
                <div className="nuron-form-check">
                  <input type="checkbox" id="cat-check4" />
                  <label htmlFor="cat-check4">
                    PFPs <span>(3)</span>
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






        </div>

    )
}