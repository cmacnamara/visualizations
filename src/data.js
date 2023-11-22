import {
  LabelPosition,
  LabelAnchor,
} from 'react-fast-charts';

export const data = [
  {
    coords: [
      {x: 2005, y: 5},
      {x: 2006, y: 6},
      {x: 2007, y: 8},
      {x: 2008, y: 6},
      {x: 2009, y: 5},
      {x: 2010, y: 9},
      {x: 2011, y: 8},
      {x: 2012, y: 7},
      {x: 2013, y: 6},
      {x: 2014, y: 5},
      {x: 2015, y: 5},
      {x: 2016, y: 8},
    ],
    animationDuration: 2000,
    label: 'Green',
    color: 'forestgreen',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Top,
    labelAnchor: LabelAnchor.Middle,
  }, {
    coords: [
      {x: 2005, y: 2},
      {x: 2006, y: 4},
      {x: 2007, y: 5},
      {x: 2008, y: 3},
      {x: 2009, y: 6},
      {x: 2010, y: 5},
      {x: 2011, y: 4},
      {x: 2012, y: 3},
      {x: 2013, y: 3},
      {x: 2014, y: 4},
      {x: 2015, y: 6},
      {x: 2016, y: 7},
    ],
    animationDuration: 1000,
    label: 'Random Data',
    color: 'darksalmon',
    labelColor: 'purple',
    width: 3,
    labelPosition: LabelPosition.Center,
    labelAnchor: LabelAnchor.Left,
  }
];