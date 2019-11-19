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
    name: 'chartsplace',
    data() {

      return {
        msg: '图表位置',
        list: []
      }

    },
    mounted() {


      this.init();

    },
    methods: {
      dataFormatter(obj) {
        var pList = ['广州', '深圳', '东莞', '佛山', '惠州', '珠海', '中山', '江门', '汕头', '湛江', '揭阳', '肇庆', '清远', '韶关', '潮州', '茂名', '河源', '汕尾', '阳江', '梅州', '云浮'];
        var temp;
        for (var month = 1; month <= 10; month++) {
          var max = 0;
          var sum = 0;
          temp = obj[month];
          for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[month][i] = {
              name: pList[i],
              value: temp[i]
            }
          }
          obj[month + 'max'] = Math.floor(max / 100) * 100;
          obj[month + 'sum'] = sum;
        }
        return obj;
      },
      init() {
        var dataMap = {};
        //电话卡
        dataMap.dataPI = this.dataFormatter({
          //max : 4000,
          10: [503778, 345395, 184766, 106362, 37922, 22065, 40687, 24494, 33634, 22055, 24422, 25462, 9520, 11979, 17074, 17225, 6874, 6956, 6481, 8111, 6162],
          9: [498116, 342119, 220653, 146257, 45272, 28874, 40682, 35619, 41673, 40978, 35387, 28354, 11886, 21811, 20180, 30819, 10006, 8703, 9805, 8365, 10997],
          8: [492170, 416021, 170890, 145264, 40564, 66307, 43996, 26704, 32325, 44205, 26711, 26062, 9580, 19031, 25173, 22424, 7633, 8137, 7897, 7366, 9680],
          7: [493670, 461560, 174157, 145625, 45257, 37868, 48163, 26277, 31451, 29138, 26013, 20521, 11208, 15497, 23032, 15079, 7642, 8300, 7147, 6882, 8226],
          6: [460110, 407617, 186932, 161115, 45605, 55255, 42402, 25045, 30476, 34387, 25750, 20143, 11527, 19138, 21528, 14943, 7767, 8843, 7121, 7756, 9497],
          5: [496494, 456594, 212931, 178511, 54432, 23009, 50664, 32141, 38635, 41188, 29836, 20492, 13154, 19395, 24461, 21889, 10165, 9764, 8595, 11251, 12816],
          4: [478381, 431953, 196944, 146049, 55020, 24310, 52545, 35561, 38760, 40655, 24375, 19207, 14276, 20419, 19626, 22671, 11252, 12977, 9834, 10979, 11030],
          3: [576601, 421503, 277002, 171402, 80463, 34626, 84999, 42167, 49933, 42681, 39617, 35501, 18250, 23920, 22513, 25343, 14033, 15822, 14077, 16615, 11904],
          2: [300377, 259691, 130309, 92845, 41778, 26982, 43725, 28946, 36189, 36641, 30172, 27980, 14955, 20161, 12928, 23202, 12394, 12465, 13834, 14872, 15634],
          1: [416142, 363562, 183773, 110834, 61384, 31773, 64091, 35095, 49877, 40513, 31848, 29560, 18440, 24842, 20814, 26627, 14619, 11142, 13579, 15386, 16851]
        });
        //宽带
        dataMap.dataSI = this.dataFormatter({
          //max : 26600,
          10: [22107, 12958, 8993, 6228, 2701, 1760, 3215, 2160, 2152, 1156, 2489, 1219, 601, 480, 531, 1439, 675, 361, 622, 458, 491],
          9: [30917, 12028, 24278, 6026, 5039, 1780, 4262, 3928, 2071, 1602, 2326, 1265, 716, 1045, 632, 2850, 615, 254, 1842, 497, 565],
          8: [14362, 11117, 7391, 5919, 2984, 2618, 3750, 1962, 1972, 1239, 2217, 1402, 895, 520, 858, 1467, 812, 262, 844, 542, 843],
          7: [14607, 13441, 7069, 6181, 4134, 1694, 3861, 1730, 2000, 1098, 2170, 1504, 709, 504, 756, 2724, 607, 275, 806, 481, 626],
          6: [16191, 11880, 10330, 5298, 3385, 1302, 3976, 1812, 1771, 913, 2121, 1236, 559, 655, 703, 1051, 513, 239, 985, 407, 532],
          5: [17716, 16788, 16295, 5241, 5084, 1338, 4021, 2368, 2235, 1152, 2683, 1354, 661, 817, 955, 1077, 763, 275, 847, 500, 653],
          4: [13901, 17216, 18414, 4674, 4961, 1362, 4102, 3544, 2103, 1068, 2080, 1302, 531, 426, 1045, 1060, 572, 209, 791, 411, 621],
          3: [24138, 30668, 29553, 5873, 4317, 2335, 5812, 1994, 2078, 1100, 2541, 1480, 509, 546, 827, 1363, 638, 286, 843, 398, 515],
          2: [17324, 15791, 11437, 3155, 2395, 1538, 2699, 1718, 1684, 1255, 1503, 983, 358, 233, 492, 1982, 518, 160, 1343, 370, 400],
          1: [21733, 23079, 17769, 3433, 3129, 4585, 2839, 1565, 2842, 2325, 2314, 1667, 623, 633, 1287, 3142, 1136, 490, 1305, 777, 847]
        });
        //手机
        dataMap.dataTI = this.dataFormatter({
          //max : 25000,
          10: [14119, 19204, 3587, 4399, 495, 866, 2607, 445, 794, 184, 496, 247, 221, 243, 82, 191, 245, 84, 298, 53, 159],
          9: [31340, 29607, 14361, 17265, 1102, 1223, 5957, 1120, 1655, 425, 772, 449, 511, 501, 281, 494, 536, 158, 1335, 166, 577],
          8: [37463, 36283, 20021, 23367, 1957, 35588, 6766, 1283, 1873, 714, 1465, 939, 778, 832, 420, 777, 723, 152, 1200, 214, 607],
          7: [32692, 34649, 17473, 21804, 2216, 15572, 6094, 1084, 1678, 565, 908, 935, 465, 421, 299, 348, 577, 132, 756, 80],
          6: [35283, 27847, 19232, 18030, 3152, 37794, 6692, 1424, 1832, 685, 688, 733, 362, 394, 297, 362, 629, 184, 838, 184, 534],
          5: [38720, 35637, 21210, 14867, 2615, 2054, 6810, 1475, 1497, 897, 1102, 972, 705, 344, 501, 534, 706, 354, 743, 312, 637],
          4: [31356, 29728, 14719, 10769, 1778, 1895, 5716, 1083, 1013, 446, 439, 745, 355, 416, 246, 382, 386, 340, 332, 214, 404],
          3: [37595, 32506, 10554, 11438, 1593, 2184, 9158, 1315, 1220, 608, 788, 819, 481, 529, 151, 406, 474, 413, 680, 97, 624],
          2: [19612, 19494, 4535, 6221, 997, 1660, 3324, 973, 669, 504, 653, 445, 323, 304, 259, 306, 407, 318, 510, 93, 690],
          1: [33450, 32629, 7990, 10303, 1854, 4454, 7824, 1343, 1239, 541, 878, 735, 534, 602, 171, 358, 517, 276, 564, 170, 667]
        });
        let that = this
        this.chart = echarts.init(document.getElementById("charts"));
        this.chart.setOption({
          baseOption: {
            timeline: {
              // y: 0,
              axisType: 'category',
              // realtime: false,
              // loop: false,
              autoPlay: true,
              // currentIndex: 2,
              playInterval: 1000,
              // controlStyle: {
              //     position: 'left'
              // },
              data: [
                '1月', '2', '3月', '4',
                '5月', '6', '7月', '8', '9月',
                '10'
              ],
              label: {
                formatter: function (s) {
                  return s;
                }
              }
            },
            title: {
              subtext: '数据来自联通数据统计'
            },
            tooltip: {},
            legend: {
              x: 'right',
              data: ['电话卡', '宽带', '手机']

            },
            calculable: true,
            grid: {
              top: 80,
              bottom: 100,
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                    formatter: function (params) {
                      return params.value.replace('\n', '');
                    }
                  }
                }
              }
            },
            xAxis: [
              {
                'type': 'category',
                'axisLabel': {'interval': 0},
                'data': [
                  '\n广州', '\n深圳', '\n东莞', '\n佛山', '\n惠州', '\n珠海',
                  '\n中山', '\n江门', '\n汕头', '\n湛江', '\n揭阳', '\n肇庆',
                  '\n清远', '\n韶关', '\n潮州', '\n茂名', '\n河源', '\n汕尾',
                  '\n阳江', '\n梅州', '\n云浮'
                ],
                splitLine: {show: false}
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '单位(个)'
              }
            ],
            series: [
              {name: '电话卡', type: 'bar'},
              {name: '宽带', type: 'bar'},
              {name: '手机', type: 'bar'}, ,
              {
                name: '销量',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100
              }
            ]
          },
          options: [{
            title: {text: '1月联通产品售卖情况'},
            series: [
              {data: dataMap.dataPI['1']},
              {data: dataMap.dataSI['1']},
              {data: dataMap.dataTI['1']},
              {
                data: [
                  {name: '电话卡', value: dataMap.dataPI['1sum']},
                  {name: '宽带', value: dataMap.dataSI['1sum']},
                  {name: '手机', value: dataMap.dataTI['1sum']}
                ]
              }
            ]
          },
            {
              title: {text: '2月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['2']},
                {data: dataMap.dataSI['2']},
                {data: dataMap.dataTI['2']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['2sum']},
                    {name: '宽带', value: dataMap.dataSI['2sum']},
                    {name: '手机', value: dataMap.dataTI['2sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '3月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['3']},
                {data: dataMap.dataSI['3']},
                {data: dataMap.dataTI['3']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['3sum']},
                    {name: '宽带', value: dataMap.dataSI['3sum']},
                    {name: '手机', value: dataMap.dataTI['3sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '4月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['4']},
                {data: dataMap.dataSI['4']},
                {data: dataMap.dataTI['4']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['4sum']},
                    {name: '宽带', value: dataMap.dataSI['4sum']},
                    {name: '手机', value: dataMap.dataTI['4sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '5联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['5']},
                {data: dataMap.dataSI['5']},
                {data: dataMap.dataTI['5']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['5sum']},
                    {name: '宽带', value: dataMap.dataSI['5sum']},
                    {name: '手机', value: dataMap.dataTI['5sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '6月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['6']},
                {data: dataMap.dataSI['6']},
                {data: dataMap.dataTI['6']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['6sum']},
                    {name: '宽带', value: dataMap.dataSI['6sum']},
                    {name: '手机', value: dataMap.dataTI['6sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '7月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['7']},
                {data: dataMap.dataSI['7']},
                {data: dataMap.dataTI['7']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['7sum']},
                    {name: '宽带', value: dataMap.dataSI['7sum']},
                    {name: '手机', value: dataMap.dataTI['7sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '8月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['8']},
                {data: dataMap.dataSI['8']},
                {data: dataMap.dataTI['8']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['8sum']},
                    {name: '宽带', value: dataMap.dataSI['8sum']},
                    {name: '手机', value: dataMap.dataTI['8sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '9月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['9']},
                {data: dataMap.dataSI['9']},
                {data: dataMap.dataTI['9']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['9sum']},
                    {name: '宽带', value: dataMap.dataSI['9sum']},
                    {name: '手机', value: dataMap.dataTI['9sum']}
                  ]
                }
              ]
            },
            {
              title: {text: '10月联通产品售卖情况'},
              series: [
                {data: dataMap.dataPI['10']},
                {data: dataMap.dataSI['10']},
                {data: dataMap.dataTI['10']},
                {
                  data: [
                    {name: '电话卡', value: dataMap.dataPI['10sum']},
                    {name: '宽带', value: dataMap.dataSI['10sum']},
                    {name: '手机', value: dataMap.dataTI['10sum']}
                  ]
                }
              ]
            }]
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
