import Mock from 'mockjs'

const List = []
const count = 100



// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     "product":['product',1,2,3,4],
//
//   }))
// }
List.push(['product', '2016', '2017', '2018', '2019']);
  List.push(['手机卡',Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'),Mock.mock('@float(0, 100, 3, 1)')]),
  List.push(['宽带',Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'),Mock.mock('@float(0, 100, 3, 1)')]),
  List.push(['手机',Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'), Mock.mock('@float(0, 100, 3, 1)'),Mock.mock('@float(0, 100, 3, 1)')])

console.log(List)

export default [
  {
    url: '/shop/list',
    type: 'get',
    response: config => {

      return {
        code: 20000,
        data: {
          total: List.length,
          items: List
        }
      }
    }
  }

]

