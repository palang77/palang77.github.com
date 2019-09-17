
/**
 * marker 심볼
 */
Highcharts.symbols = [
		'url(' + CONTEXT_ROOT + '/images/highcharts/graph_total.png)'
		,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_a.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_b.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_c.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_d.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_e.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_f.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_g.png)'
        ,'url(' + CONTEXT_ROOT + '/images/highcharts/graph_gray.png)'
];

/**
 * pieChart 패턴
 */
Highcharts.patternColors = [
     {width: 96, height: 96, pattern: '/images/highcharts/pattern_A.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_B.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_C.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_D.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_E.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_F.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_G.png'}
     , {width: 96, height: 96, pattern: '/images/highcharts/pattern_BM.png'}
];

/**
 * pieChart 패턴
 */
Highcharts.patterns = [
        '/images/highcharts/pattern_A.png'
        , '/images/highcharts/pattern_B.png'
        , '/images/highcharts/pattern_C.png'
        , '/images/highcharts/pattern_D.png'
        , '/images/highcharts/pattern_E.png'
        , '/images/highcharts/pattern_F.png'
        , '/images/highcharts/pattern_G.png'
        , '/images/highcharts/pattern_BM.png'
];


// 차트에 대한 폰트 및 색상 설정
Highcharts.setOptions({
   chart: {
	   style: {
	       fontFamily: 'NanumGothic'
	   }
   }, colors: ['#7982ec', '#b97ff9', '#f97fbd', '#f9b37f', '#75e172', '#67cbff', '#b4b4b4']
});

// 차트 테마 설정
Highcharts.theme = {

  chart: {
          spacingTop: 5,
          spacingRight:3,
          spacingLeft:20,
          borderWidth: 0,
          plotShadow: false,
          plotBorderWidth: 0
  },
  title: {
     style: {
        fontFamily: 'NanumGothic'
     }
  },
  subtitle: {
     style: {
        color: '#666666',
        fontFamily: 'NanumGothic'
     }
  },
  xAxis: {
     gridLineWidth: 1,
  //   lineColor: '#ff0000',
     tickColor: '#aaaaaa',
     labels: {
        style: {
           color: '#666666',
           fontFamily: 'NanumGothic'
        }
     },
     title: {
        style: {
         //  color: '#333',
           fontSize: '12px',
           fontFamily: 'NanumGothic'
        }
     }
  },
  yAxis: {
  //   lineColor: '#ff0000',
     lineWidth: 1,
     tickWidth: 1,
     tickColor: '#aaaaaa',
     labels: {
        style: {
           color: '#222222',
           fontFamily: 'NanumGothic'
        }
     },
     title: {
        style: {
         //  color: '#333',
           fontSize: '12px',
           fontFamily: 'NanumGothic'
        }
     }
  },
  legend: {
     itemStyle: {
         fontFamily: 'NanumGothic'
       // color: 'black'

     },
     itemHoverStyle: {
    //    color: '#039'
     },
     itemHiddenStyle: {
   //     color: 'gray'
     }
  },
  labels: {
     style: {
     //   color: '#99b'
     }
  },
  lang: {
      noData: "조회된 데이터가 없습니다."
  },
  noData: {
      style: {
          fontSize: '15px',
          color: '#303030'
      }
  },
  navigation: {
     buttonOptions: {
        theme: {
    //       stroke: '#CCCCCC'
        }
     }
  }, 
  exporting: {
      enabled: false
  },
  credits:{
      enabled:false
  }
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);