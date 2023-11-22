import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Papa from 'papaparse'
import { createBarChartData } from './csv-processing.js';
import DataViz, {VizType} from 'react-fast-charts';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Landing from './pages/Landing/Landing.jsx';
import BarChartPage from './pages/BarChartPage/BarChartPage.jsx';
import ScatterPlotPage from './pages/ScatterPlotPage/ScatterPlotPage.jsx'
import { data } from './data.js';

function App() {
  

  return (
    <> 
      <NavBar />
      <Routes>
        <Route 
          path='/'
          element={<Landing />}
        />
        <Route 
          path='/barChart'
          element={<BarChartPage />}
        />
        <Route 
          path='/scatterPlot'
          element={<ScatterPlotPage />}
        />
      </Routes>
      
    </>
  )
}

export default App
