<template>

       
    <div id="">
      <div id="charts">

      </div>
    </div>

</template>


<script>
import echarts from 'echarts';

    export default {
        name: 'charts',
        data() {

            return {msg: '图标'}

        },
        mounted() {
         this.init();
        },
      methods: {
        init(){
          this.chart = echarts.init(document.getElementById("charts"));
          this.chart.setOption({
            legend: {},
            tooltip: {},
            dataset: {
              source: [
                ['product', '2016', '2017', '2018', '2019'],
                ['手机卡', 41.1, 30.4, 65.1, 53.3],
                ['宽带', 86.5, 92.1, 85.7, 83.1],
                ['手机', 24.1, 67.2, 79.5, 86.4]
              ]
            },
            xAxis: [
              {type: 'category', gridIndex: 0},
              {type: 'category', gridIndex: 1}
            ],
            yAxis: [
              {gridIndex: 0},
              {gridIndex: 1}
            ],
            grid: [
              {bottom: '55%'},
              {top: '55%'}
            ],
            series: [
              // These series are in the first grid.
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              // These series are in the second grid.
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
              {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
            ]
          })
        }
    }

    }

</script>


<style>
  #charts{
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }

</style>
