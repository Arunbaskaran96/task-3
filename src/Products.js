import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User Details</h1>
        <Link
          to="/portal/createuser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create user
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Johnson</td>
                  <td>tiger@gmail.com</td>
                  <td>25</td>
                  <td>Chennai</td>
                  <td>Tamil nadu</td>
                  <td>India</td>
                  <td>
                    <button className="btn-success mr-2">View</button>
                    <button className="btn-primary mr-2">Edit</button>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>John Abrahm</td>
                  <td>john@gmail.com</td>
                  <td>27</td>
                  <td>Chennai</td>
                  <td>Tamil nadu</td>
                  <td>India</td>
                  <td>
                    <button className="btn-success mr-2">View</button>
                    <button className="btn-primary mr-2">Edit</button>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Ana de arms</td>
                  <td>ana@gmail.com</td>
                  <td>28</td>
                  <td>Bangalore</td>
                  <td>Karnataka</td>
                  <td>India</td>
                  <td>
                    <button className="btn-success mr-2">View</button>
                    <button className="btn-primary mr-2">Edit</button>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Emilia Clarke</td>
                  <td>ec@gmail.com</td>
                  <td>24</td>
                  <td>Hydrebad</td>
                  <td>Andra</td>
                  <td>India</td>
                  <td>
                    <button className="btn-success mr-2">View</button>
                    <button className="btn-primary mr-2">Edit</button>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
