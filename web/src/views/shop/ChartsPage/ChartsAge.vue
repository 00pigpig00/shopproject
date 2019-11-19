<template>

     
  <div id="chartsWrap">
    <div id="charts"></div>
    <div id="chartstwo"></div>
    <div id="chartsthree"></div>
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
    this.init();
    this.inittwo();
    this.initthree();
    },
    methods: {
      init() {
        let that = this
        this.chart = echarts.init(document.getElementById("charts"));
        this.chart.setOption({
          title : {
            text: '联通电话卡用户年龄分布图',
            subtext: '数据来源联通数据统计（数据已脱敏处理）',
            x:'180',
            y:'30'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: '20',
            top:'60',
            data: ['1960前','1960-1970','1970-1980','1980-1990','1990-2000','2000后']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '35%',
              center: ['40%', '50%'],
              data:[
                {value:332139, name:'1960前'},
                {value:75323, name:'1960-1970'},
                {value:131465, name:'1970-1980'},
                {value:208231, name:'1980-1990'},
                {value:298292, name:'1990-2000'},
                {value:54321, name:'2000后'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        })

      },
      inittwo() {
        let that = this
        this.chart = echarts.init(document.getElementById("chartstwo"));
        this.chart.setOption({
          title : {
            text: '联通宽带用户年龄分布图',
            subtext: '数据来源联通数据统计（数据已脱敏处理）',
            x:'180',
            y:'30'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: '20',
            top:'60',
            data: ['1960前','1960-1970','1970-1980','1980-1990','1990-2000','2000后']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '35%',
              center: ['40%', '50%'],
              data:[
                {value:2737, name:'1960前'},
                {value:7873, name:'1960-1970'},
                {value:15691, name:'1970-1980'},
                {value:22581, name:'1980-1990'},
                {value:34453, name:'1990-2000'},
                {value:1594, name:'2000后'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        })

      },
      initthree() {
        let that = this
        this.chart = echarts.init(document.getElementById("chartsthree"));
        this.chart.setOption({
          title : {
            text: '联通终端客户年龄分布图',
            subtext: '数据来源联通数据统计（数据已脱敏处理）',
            x:'180',
            y:'30'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: '20',
            top:'60',
            data: ['1960前','1960-1970','1970-1980','1980-1990','1990-2000','2000后']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '35%',
              center: ['40%', '50%'],
              data:[
                {value:776, name:'1960前'},
                {value:3462, name:'1960-1970'},
                {value:7561, name:'1970-1980'},
                {value:11299, name:'1980-1990'},
                {value:4938, name:'1990-2000'},
                {value:250, name:'2000后'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]

        })

      },
    }

  }

</script>


<style>
  #chartsWrap{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  #charts,#chartstwo,#chartsthree {
    position: relative;
    width: 50%;
    height: calc(100vh - 84px);
  }

</style>
