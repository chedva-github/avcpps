import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import {
  Chart,
  DataLabel,
  BarSeries,
  Category,
  Legend,
  Tooltip,
  ILoadedEventArgs,
  ChartTheme,
  RangeColumnSeries,
} from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
Chart.Inject(
  BarSeries,
  DataLabel,
  Category,
  Legend,
  Tooltip,
  RangeColumnSeries
);

/**
 * Sample for bar series
 */

let chart: Chart = new Chart({
  //Initializing Primary X and Y Axis
  primaryXAxis: {
    valueType: 'Category',
    //title: 'Food',
    interval: 1,
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
  },
  primaryYAxis: {
    labelFormat: '{value}',
    // edgeLabelPlacement: 'Shift',
    // majorGridLines: { width: 0 },

    interval: 100,
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    // labelStyle: {
    //   color: 'red',
    // },
  },
  chartArea: {
    border: {
      width: 0,
    },
  },
  //Initializing Chart Series

  series: [
    {
      type: 'Bar',

      //   type: 'Radar',
      //   width: 0.1,
      columnSpacing: 0.2,
      fill: 'black',
      //   theme:'',

      dataSource: [
        { x: 'Egg', y: 100 },
        { x: 'Fish', y: 250 },
        { x: 'Misc', y: 50 },
        { x: 'Tea', y: 310 },
        { x: 'Bee', y: 210 },
        { x: 'Hee', y: 100 },
        { x: 'Fiser', y: 299 },
        { x: 'Miscer', y: 120 },
        { x: 'Tear', y: 250 },
        { x: 'Beerr', y: 30 },
        { x: 'Reel', y: 200 },
        { x: 'Egger', y: 30 },
        { x: 'Fisher', y: 299 },
        { x: 'Miscer', y: 120 },
        { x: 'Teew', y: 250 },
        { x: 'Beetj', y: 30 },
        { x: 'Heejs', y: 200 },
        { x: 'Eggqw', y: 30 },
        { x: 'Fishdc', y: 299 },
      ],
      xName: 'x',
      yName: 'y',
      name: 'Indicatcar',

      cornerRadius: {
        bottomLeft: 5,
        bottomRight: 5,
        topLeft: 5,
        topRight: 5,
      },
    },
    {
      type: 'Bar',
      dataSource: [
        { x: 'Egg', y: 30 },
        { x: 'Fish', y: 299 },
        { x: 'Misc', y: 120 },
        { x: 'Tea', y: 250 },
        { x: 'Bee', y: 30 },
        { x: 'Hee', y: 200 },
        { x: 'Egg', y: 30 },
        { x: 'Fiser', y: 299 },
        { x: 'Miscer', y: 120 },
        { x: 'Tear', y: 250 },
        { x: 'Beerr', y: 30 },
        { x: 'Reel', y: 75 },
        { x: 'Egger', y: 100 },
        { x: 'Fisher', y: 200 },
        { x: 'Miscer', y: 300 },
        { x: 'Teew', y: 90 },
        { x: 'Beetj', y: 150 },
        { x: 'Heejs', y: 150 },
        { x: 'Eggqw', y: 30 },
        { x: 'Fishdc', y: 210 },
      ],
      xName: 'x',
      //   width: 35,
      fill: 'red',
      columnSpacing: 0.3,
      yName: 'y',
      name: 'Indicatcar',
      cornerRadius: {
        bottomLeft: 5,
        bottomRight: 5,
        topLeft: 5,
        topRight: 5,
      },
    },
  ],
  // Initializing the tooltip
  tooltip: {
    enable: true,
  },
  width: Browser.isDevice ? '100%' : '60%',
  //Initializing Chart title
  isTransposed: true,

  title: 'identified churners',
  //   markerShape
  load: (args: ILoadedEventArgs) => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
  },
});
chart.appendTo('#container');
