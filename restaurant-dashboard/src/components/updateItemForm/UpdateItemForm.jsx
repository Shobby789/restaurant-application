import React from "react";

export default function UpdateItemForm() {
  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5">
        <form action="" className="">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="itemName" className="form-label">
                Update Name
              </label>
              <input type="text" className="form-control py-2 border-0" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="itemName" className="form-label">
                Update Price
              </label>
              <input type="number" className="form-control py-2 border-0" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
