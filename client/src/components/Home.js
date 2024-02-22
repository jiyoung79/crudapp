import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primart">Add data</button>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">E-mail</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>meet</td>
              <td>meet@email.com</td>
              <td>Webdeveloper</td>
              <td>01011112222</td>
              <td className="d-flex justify-content-between">
                {/* READ */}
                <button className="btn btn-success">
                    <span class="material-symbols-outlined">preview</span>
                </button>
                {/* UPDATE */}
                <button className="btn btn-primary">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                {/* DELETE */}
                <button className="btn btn-danger">
                    <span class="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
