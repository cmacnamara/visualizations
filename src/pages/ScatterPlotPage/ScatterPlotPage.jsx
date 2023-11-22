import { useState } from 'react'
import Papa from 'papaparse'
import { createScatterPlotData } from '../../csv-processing.js';
import DataViz, {VizType} from 'react-fast-charts';

// css & assets
import styles from './ScatterPlotPage.module.css'

const options = ['age', 'bmi', 'children', 'charges']

const ScatterPlotPage = () => {
  const [scatterPlotData, setScatterPlotData] = useState([[]])
  const [rawData, setRawData] = useState(null)
  const [xAxis, setXAxis] = useState(options[3])
  const [yAxis, setYAxis] = useState(options[1]) 
  
  const handleOnChange = e => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        setRawData(results)
        const formattedData = createScatterPlotData(results.data, xAxis, yAxis)
        setScatterPlotData(formattedData)
      }
    })
  }

  const handleXAxisChange = e => {
    const formattedData = createScatterPlotData(rawData.data, e.target.value, yAxis)
    setScatterPlotData(formattedData)
    setXAxis(e.target.value)
  }
  
  const handleYAxisChange = e => {
    const formattedData = createScatterPlotData(rawData.data, xAxis, e.target.value)
    setScatterPlotData(formattedData)
    setYAxis(e.target.value)
  }

  return (  
    <div className={styles.mainContainer}>
        <h1>Scatterplot Example</h1>
        <form className={styles.form}>
          <input 
            type={"file"} 
            accept={".csv"} 
            onChange={handleOnChange}
          />
          <div>
            <span>x-axis: </span>
            <select value={xAxis} onChange={handleXAxisChange}>
              {options.map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>y-axis: </span>
            <select value={yAxis} onChange={handleYAxisChange}>
              {options.map(value => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </form>

          {scatterPlotData.length ?
          <div className={styles.plotDiv}>
            <DataViz 
              id={'example-scatter-plot'}
              vizType={VizType.ScatterPlot}
              data={scatterPlotData}
              axisLabels={{x: xAxis, y: yAxis}}
              showAverageLines={false}
            />
          </div>
            :
            <h2>Select a file to generate scatterplot</h2>
          }
      </div>
  );
}

export default ScatterPlotPage;