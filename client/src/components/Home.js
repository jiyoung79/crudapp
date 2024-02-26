import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
                    <RemoveRedEyeIcon />
                </button>
                {/* UPDATE */}
                <button className="btn btn-primary">
                    <CreateIcon />
                </button>
                {/* DELETE */}
                <button className="btn btn-danger">
                <DeleteOutlineIcon />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>hello</td>
              <td>hello@email.com</td>
              <td>Webdeveloper</td>
              <td>01033334444</td>
              <td className="d-flex justify-content-between">
                {/* READ */}
                <button className="btn btn-success">
                    <RemoveRedEyeIcon />
                </button>
                {/* UPDATE */}
                <button className="btn btn-primary">
                    <CreateIcon />
                </button>
                {/* DELETE */}
                <button className="btn btn-danger">
                <DeleteOutlineIcon />
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
