<template>

     
  <div id="">
    <div id="charts">

    </div>
  </div>

</template>


<script>
  import echarts from 'echarts';
  import axios from 'axios';
  import {fetchList} from '@/api/shop'

  export default {
    name: 'charts',
    data() {

      return {
        msg: '图标',
        list: []
      }

    },
    mounted() {


      fetchList().then(res => {
        console.log(res.data);
        this.list = res.data.items;
        this.init();
//            this.total=res.data.items.length;
      })
    },
    methods: {
      init() {
        let that = this
        this.chart = echarts.init(document.getElementById("charts"));
        this.chart.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ...this.list
            ]
          },
          xAxis: [
            {type: 'category', gridIndex: 0},
            {type: 'category', gridIndex: 1}
          ],
          yAxis: [{
            gridIndex: 0,
            axisLabel: {
              formatter: '{value} %'
            }
          },
            {gridIndex: 1,}
          ],


          grid: [
            {bottom: '55%'},
            {top: '55%'}
          ],
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},

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
  #charts {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }

</style>
