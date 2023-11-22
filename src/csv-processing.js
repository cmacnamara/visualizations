export const createBarChartData = rawData => {
  const citiesPerCountry = {}
  
  rawData.forEach(entry => {
    if(citiesPerCountry[entry.country]) citiesPerCountry[entry.country] = citiesPerCountry[entry.country] + 1
    else citiesPerCountry[entry.country] = 1
  }) 

  let formattedData = []

  for(const [key, value] of Object.entries(citiesPerCountry)) {
    formattedData = [...formattedData, {
      x: key,
      y: parseInt(value),
      stroke: 'lightblue',
      fill: 'transparent',
      tooltipContent: `${key}: ${value} cities`
    }]
  }
  

  return formattedData
}

export const createScatterPlotData = (rawData, xaxis, yaxis) => {
  //console.log("Raw data", rawData);
  let formattedData = []
  rawData.forEach(person => {
    formattedData = [...formattedData, {
      label: `${xaxis}: ${person[xaxis]} | ${yaxis}: ${person[yaxis]}`,
      x: parseFloat(person[xaxis]),
      y: parseFloat(person[yaxis]),
      fill: 'white' 
    }]
  })

  return formattedData
}