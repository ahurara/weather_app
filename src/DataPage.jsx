import React from "react";
import './index.css';

const DataPage=(props)=>{

    
    return(
        <>
            <div  className="table-responsive overflow-auto tableContainer">
            <table  className="table tableStyle">
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
        </>
    )
}

export default DataPage;