import React from "react";
import "./styles/ShowNews.css";

const ShowNews = () => {
  return (
    <div>
      <section id="showNews" className="mt-5 mb-5">
        <div className="container">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" style={{ width: "10%" }}>
                  Id
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Title
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Image
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  This cell inherits vertical-align: middle; from the table
                </td>
                <td>
                  This cell inherits vertical-align: middle; from the table
                </td>
                <td>@mdo</td>
                <td>
                  <i className="fa-solid fa-pen-to-square fa-2x me-4  "></i>
                  <i className="fa-solid fa-trash fa-2x "></i>
                </td>
              </tr>
              <tr className="align-bottom">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <i className="fa-solid fa-pen-to-square fa-2x me-4"></i>
                  <i className="fa-solid fa-trash fa-2x "></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ShowNews;
