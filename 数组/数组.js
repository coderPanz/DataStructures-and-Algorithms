////一、创建方式 

//// 1. 通过new关键字构造的方式从创建
// const arr1 = new Array(11, 22, 33)
// console.log(arr1)

//// 2. 字面量方式创建
// const arr2 = [ 11, 22, 33 ]
// console.log(arr2)


//// 三. 数组的增删改查: 
//// push(在数组最后一个元素后面增加一个或多个元素并返回数组的长度)
//// pop(删除数组最后一个并返回被删除的元素)
//// shift(移除数组的第一个元素，并返回被移除的元素。同时，后续元素会自动前移) 
//// unshift(将一个或多个元素添加到数组的开头，并返回新数组的长度。已存在的元素将自动后移。)
//// splic(在指定位置对数组进行增、删、改操作，它接受多个参数，包括起始索引、删除数量和可选的替换元素。)
// const arr3 = [ 11, 22, 33 ]
// console.log(arr2.push(1, 2, 3))
// console.log(arr2.pop(3))
// console.log(arr2.shift(11))
// console.log(arr2.unshift(33, 22, 11))
// console.log(arr2.splice(0, 1, 22))
// console.log(arr2)

//// 四. 数组排序方法: sort
//// 一般数据
// const arr4 = [ 2, 3, 1, 4, 5 ]
// console.log(arr.sort((x, y) => x-y )) // 升序
// console.log(arr.sort((x, y) => y-x)) // 降序

//// 复杂数据
// const studentObj = [
//   { name: 'kobe', age: 41 },
//   { name: 'james', age: 38 },
//   { name: '小潘', age: 33 },
//   { name: '小李', age: 66 },
// ]
// console.log(studentObj.sort((x, y) => x.age - y.age))
// console.log(studentObj.sort((x, y) => y.age - x.age))


//// 五, 数组常用的迭代方法
//// forEach(item, index): 遍历作用: 对数组进行遍历(可操作遍历元素操作)并且可以打印对应索引
// const arr5 = [ 1, 2, 3, 4, 5 ]
// arr5.forEach((item, index) => {
//   const count = item + 1
//   console.log(item, index, count)
// })

//// map(): 基于原来的数组创建一个全新的数组: 每个元素均为原始数组经过指定函数处理后的返回值
// console.log(arr5.map(item => item * 2))

//// filter(): 过滤作用: 创建一个新数组，其中只包含满足指定条件的原始数组元素。
// console.log(arr5.filter(item => item > 4))

//// find(): 查找: 返回满足指定条件的第一个元素，如果找不到则返回 undefined
// console.log(arr5.find(item => item > 3))

//// reduce(): 求数组元素之和: 根据指定函数将数组元素进行累积计算，并返回最终结果。
// console.log(arr5.reduce((item1, item2) => item1 + item2))

// 六. 迭代器对象: 数组内置迭代器对象
