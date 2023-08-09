import React from "react";

const DataPage=(props)=>{

    const tableContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        overflowX: 'auto', 
        };
    
      const tableStyle = {
        borderCollapse: 'collapse', // Collapse table borders
        border: 'none', // Add a border around the table
        width:'800px',
       
      };
    
      const cellStyle = {
        padding: '0px',
        border: 'none',
      };

      const p={
        color:'white',
        fontSize:'25px'
      }

      const pd={
        color:'white',
        fontSize:'25px',
        fontWeight:'bold'
      }

      const temp={
        color:'white',
        fontSize:'70px',
        fontWeight:'bold'
      }
    return(
        <>
            <div style={tableContainer} className="table-responsive overflow-auto">
            <table style={tableStyle} className="table ">
              <tbody>
                <tr>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={pd}>{`${props.country},${props.city}`}</p>
                  </td>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={p}>WIND</p>
                  </td>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={pd}>{`${props.wind} Km/h`}</p>
                  </td>
                </tr>


                <tr>
                  <td style={cellStyle} rowSpan={2} className="bg-transparent">
                    <p style={temp}>{`${props.temp}`}<sup><sup>.</sup>c</sup></p>
                  </td>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={p}>PRESSURE</p>
                  </td>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={pd}>{`${props.pressure} hPa`}</p>
                  </td>
                </tr>


                <tr>
                 
                  <td style={cellStyle} className="bg-transparent">
                    <p style={p}>HUMIDITY</p>
                  </td>
                  <td style={cellStyle} className="bg-transparent">
                    <p style={pd}>{`${props.humidity}%`}</p>
                  </td>
                </tr>
                
                </tbody>
            </table>
          </div>
        </>
    )
}

export default DataPage;