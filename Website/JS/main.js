var myConfig =
        {
            "type": "line",
            "utc": true,
            "title": {
                "text": "World's total CO2 emission since 1960",
                "font-size": "24px",
                "adjust-layout":true
            },
            "plotarea": {
                "margin": "dynamic 45 60 dynamic",
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "align":"center",
                "adjust-layout":true,
                "item":{
                  "padding": 7,
                  "marginRight": 17,
                  "cursor":"hand"
                }
            },
            "scale-x": {
                "values":"1960:2013",
                "minor-ticks": 0
            },
            "scale-y": {
                "values": "-1:5:1",
                "line-color": "#f6f7f8",
                "shadow": 0,
                "guide": {
                    "line-style": "dashed"
                },
                "label": {
                    "text": "Emission (mil tons per capita)",
                },
                "minor-ticks": 0,
                "thousands-separator": ","
            },
            "crosshair-x": {
                "line-color": "#efefef",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#000",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
            "tooltip": {
                "visible": false
            },
            "plot": {
                "highlight":true,
                "tooltip-text": "%t views: %v<br>%k",
                "shadow": 0,
                "line-width": "2px",
                "marker": {
                    "type": "circle",
                    "size": 3
                },
                "highlight-state": {
                    "line-width":3
                },
                "animation":{
                  "effect":1,
                  "sequence":2,
                  "speed":100,
                }
            },
            "series": [
                {
                    "values": [
                        3.09,
                        3.06,
                        3.14,
                        3.24,
3.36,
3.44,
3.53,
3.57,
3.68,
3.82,
4.01,
4.08,
4.16,
4.3,
4.25,
4.14,
4.31,
4.37,
4.34,
4.5,
4.38,
4.17,
4.06,
3.98,
4.05,
4.1,
4.15,
4.18,
4.26,
4.28,
4.23,
4.21,
4.11,
4.04,
4.05,
4.07,
4.11,
4.11,
4.04,
3.98,
4.03,
4.07,
4.06,
4.25,
4.41,
4.52,
4.62,
4.66,
4.74,
4.63,
4.83,
4.97,
5,
4.99,
                    ],
                    "text": "Carbon Dixoide Emission Per capita",
                    "line-color": "#007790",
                    "legend-item":{
                      "background-color": "#007790",
                      "borderRadius":5,
                       "font-color":"white"
                    },
                    "legend-marker": {
                        "visible":false
                    },
                    "marker": {
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "highlight-marker":{
                      "size":6,
                      "background-color": "#007790",
                    }
                },
                {
                    "values": [-0.02,
0.05,
0.03,
0.06,
-0.2,
-0.1,
-0.05,
-0.02,
-0.07,
0.07,
0.02,
-0.09,
0.01,
0.15,
-0.07,
-0.02,
-0.11,
0.18,
0.07,
0.17,
0.27,
0.33,
0.13,
0.3,
0.15,
0.12,
0.19,
0.3,
0.41,
0.28,
0.44,
0.43,
0.23,
0.24,
0.32,
0.46,
0.35,
0.48,
0.64,
0.42,
0.42,
0.55,
0.63,
0.62,
0.55,
0.69,
0.63,
0.66,
0.54,
0.64,
0.71,
0.6,
0.63,
0.65,
0.74,
0.87,
0.99,

                    ],
                    "text": "World Temp (Celsius)",
                    "line-color": "#009872",
                    "legend-item":{
                      "background-color": "#009872",
                      "borderRadius":5,
                       "font-color":"white"
                    },
                    "legend-marker": {
                        "visible":false
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "highlight-marker":{
                      "size":6,
                      "background-color": "#009872",
                    }
                },

            ]
        };

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: '100%',
	width: '100%'
});

var myConfig2 = {
 	type: "pie",
 	plot: {
 	  borderColor: "#2B313B",
 	  borderWidth: 5,
 	  // slice: 90,
 	  valueBox: {
 	    placement: 'out',
 	    text: '%t\n%npv%',
 	    fontFamily: "Open Sans"
 	  },
 	  tooltip:{
 	    fontSize: '18',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
 	},
 	source: {
 	  text: 'gs.statcounter.com',
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans"
 	},
 	title: {
 	  fontColor: "#8e99a9",
 	  text: 'Total Co2 Emission 2015 by Country',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},
 	subtitle: {
 	  offsetX: 10,
 	  offsetY: 10,
 	  fontColor: "#8e99a9",
 	  fontFamily: "Open Sans",
 	  fontSize: "16",
 	  text: 'Total: 36,363 MtCO2',
 	  align: "left"
 	},
 	plotarea: {
 	  margin: "20 0 0 0"
 	},
	series : [
		{
			values : [28.56],
			text: "China",
		  backgroundColor: '#50ADF5',
		},
		{
		  values: [14.93],
		  text: "United States",
		  backgroundColor: '#FF7965',
		  detached:true
		},
		{
		  values: [4.46],
		  text: 'Russian Federation',
		  backgroundColor: '#FFCB45',
		  detached:true
		},
		{
		  text: 'India',
		  values: [4.46],
		  backgroundColor: '#6877e5'
		},
		{
		  text: 'Japan',
		  values: [3.41],
		  backgroundColor: '#6FB07F'
		},
    {
		  text: 'Other',
		  values: [44.18],
		  backgroundColor: '#cc00ff'
		},
	]
};

zingchart.render({
	id : 'pieChart',
	data : myConfig2,
	height: '100%',
	width: '100%'
});

var myConfig3 = {
  type: "bar",
  title: {
 	  fontColor: "#8e99a9",
 	  text: 'Top 10 CO2 Emissioners per capita at 2015 (Metric Tons Per Capita)',
 	  align: "left",
 	  offsetX: 10,
 	  fontFamily: "Open Sans",
 	  fontSize: 25
 	},
  "scale-x": {
    "labels": ["Qatar","T & T","Curcaco","Kuwait","Bahrain","Sint Maarten","Brunei","Lux","UAE","Saudi Arabia","US"]
  },
  "scale-y":{
    "label":{
      "txet": "CO2 Emission",
    },
  },
  series: [
    {
      values:[40.5,34.5,34.2,27.3,23.7,20.8,18.9,18.7,18.7,17.9]
    },

  ]
};

zingchart.render({
	id : 'barChart',
	data : myConfig3,
	height: "100%",
	width: "100%"
});
