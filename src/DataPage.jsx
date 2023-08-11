import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const DataPage=(props)=>{

    
    return(
        <>
        <div className="row justify-content-center g-0 p-0 m-0 no-gutters" >
        <div className="col-sm-6 g-0 m-0 p-0 no-gutters" >
            <div  className="  tableContainer g-0  p-0 no-gutters" >
            <table  className="table tableStyle g-0 p-0 m-0 no-gutters" >
              <tbody>
                <tr>
                  <td  className="bg-transparent cellStyle">
                    <p className="pd">{`${props.country},${props.city}`}</p>
                  </td>
                  <td  className="bg-transparent cellStyle">
                    <p className="p">WIND</p>
                  </td>
                  <td className="bg-transparent cellStyle">
                    <p className="pd">{`${props.wind} Km/h`}</p>
                  </td>
                </tr>


                <tr>
                  <td rowSpan={2} className="bg-transparent cellStyle">
                    <p className="temp">{`${props.temp}`}<sup><sup>.</sup>c</sup></p>
                  </td>
                  <td  className="bg-transparent cellStyle">
                    <p className="p">PRESSURE</p>
                  </td>
                  <td className="bg-transparent cellStyle">
                    <p className="pd">{`${props.pressure} hPa`}</p>
                  </td>
                </tr>


                <tr>
                 
                  <td  className="bg-transparent cellStyle">
                    <p className="p">HUMIDITY</p>
                  </td>
                  <td  className="bg-transparent cellStyle">
                    <p className="pd">{`${props.humidity}%`}</p>
                  </td>
                </tr>
                
                </tbody>
            </table>
          </div>
          </div>
          </div>
        </>
    )
}

export default DataPage;