import React, { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "./Header";

class MenuMinuman extends Component{
  render(){
    return(
      <div>
        <Header />
        <h3>Daftar Minuman Favorite</h3>
        <table style={{width:"100%"}}>
        <tbody>
            <tr>
              {DaftarMinuman.map((data,index) => {
                return(
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        placeholder="menu minuman"
                        width="150"
                        height="100"
                      />
                      <p>{data.nama}</p>
                      <p>Harga : {data.Harga}</p>
                    </center>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default MenuMinuman;
