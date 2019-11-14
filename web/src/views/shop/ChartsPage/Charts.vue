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
          title: {
            text: '产品销售统计',
            left: 'center'
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: [],},
//          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ...this.list
            ]
          },
          xAxis: {type: 'category'},
//            [
//            {type: 'category', gridIndex: 0},
//            {type: 'category', gridIndex: 1}
//          ],
          yAxis: {},
//            [{
//            gridIndex: 0,
//            axisLabel: {
//              formatter: '{value} %'
//            }
//          },
//            {gridIndex: 1}
//          ],


          grid: [
            {bottom: '55%'},
            {top: '55%'}
          ],
          series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {
              type: 'pie',
              radius : '30%',
              center: ['23%', '70%'],
              selectedMode: 'single',
              data:[

                {value:1548,name:'华为mate30 5G版'},
                {value:535, name: '华为p30'},
                {value:510, name: 'iphone11'},
                {value:634, name: '小米9'},
                {value:735, name: 'oppo reno'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              type: 'pie',
              radius : '30%',
              center: ['51%', '70%'],
              selectedMode: 'single',
              data:[

                {value:1548,name:'50M'},
                {value:535, name: '100M'},
                {value:510, name: '1000M'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              type: 'pie',
              radius : '30%',
              center: ['77%', '70%'],
              selectedMode: 'single',
              data:[

                {value:1548,name:'腾讯大王卡'},
                {value:535, name: '冰激凌卡'},
                {value:510, name: '学霸卡'},
                {value:634, name: '吉祥号'},
                {value:735, name: '爱情号'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }

//            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
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
