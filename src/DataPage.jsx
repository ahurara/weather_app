import React from "react";

const DataPage=(props)=>{

    const tableContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      };
    
      const tableStyle = {
        borderCollapse: 'collapse', // Collapse table borders
        border: 'none', // Add a border around the table
        width:'700px'
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
            <div style={tableContainer}>
            <table style={tableStyle}>
              
                <tr>
                  <td style={cellStyle}>
                    <p style={pd}>{`${props.country},${props.city}`}</p>
                  </td>
                  <td style={cellStyle}>
                    <p style={p}>WIND</p>
                  </td>
                  <td style={cellStyle}>
                    <p style={pd}>{`${props.wind} Km/h`}</p>
                  </td>
                </tr>


                <tr>
                  <td style={cellStyle} rowSpan={2}>
                    <p style={temp}>{props.temp}</p>
                  </td>
                  <td style={cellStyle}>
                    <p style={p}>PRESSURE</p>
                  </td>
                  <td style={cellStyle}>
                    <p style={pd}>{`${props.pressure} hPa`}</p>
                  </td>
                </tr>


                <tr>
                 
                  <td style={cellStyle}>
                    <p style={p}>HUMIDITY</p>
                  </td>
                  <td style={cellStyle}>
                    <p style={pd}>{`${props.humidity}%`}</p>
                  </td>
                </tr>
                
            
            </table>
          </div>
        </>
    )
}

export default DataPage;