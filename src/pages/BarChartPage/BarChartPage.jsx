import { useState } from 'react'
import Papa from 'papaparse'
import { createBarChartData } from '../../csv-processing.js';
import DataViz, {VizType} from 'react-fast-charts';

const BarChartPage = () => {
  const [barChartData, setBarChartData] = useState([[]])
  
  const handleOnChange = e => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const formattedData = []
        formattedData.push(createBarChartData(results.data))
        setBarChartData(formattedData)
      }
    })
  }

  return (  
    <div style={{ textAlign: "center" }}>
        <h1>Bar Chart Example</h1>
          <input 
            type={"file"} 
            accept={".csv"} 
            onChange={handleOnChange}
          />

          {barChartData.length ?
            <DataViz 
              id={'example-bar-chart'}
              vizType={VizType.BarChart}
              data={barChartData}
              axisLabels={{left: 'Num. cities', bottom: 'Country'}}
            />
            :
            <h2>Select a file to generate chart</h2>
          }
      </div>
  );
}

export default BarChartPage;