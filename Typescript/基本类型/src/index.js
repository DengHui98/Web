// any类型
var a;
a = "aaa";
a = 123;
// 字面量常量
// 赋予指定的值，使用const 申明
var hello = "hello";
var number = 1;
// 联合类型
// 使用 ｜ 链接数据类型，表示可以同时给变量赋值多个类型
var link1;
link1 = "DOWN";
// link1 = "SHADOWN";  // 错误，不能赋值为其他类型的值
// 数组
// 写法1 --- 类型[]
var arr1 = [1, 2, 3, 4, 5];
// 写法2 --- Array<类型>
var arr2 = [1, 2, 3, 4, 5];
// 数组使用联合类型
var arr3 = [1, 2, 3, "4", "5"];
var arr4 = [1, 2, 3, "4", "5"];
// 注意和下面的写法区分
// string 类型的数组 或者 数字类型的数组
var arr5 = [1, 2, 3, 4];
var arr6 = [1, 2, 3, 4];
// 元组 - 特殊的数组类型
// 定义多少类型，必须书写多少个类型
var tuple1 = ["a", 1];
// 定义一个空元组
var tuple2 = [];
// 定义一个空数组
// 空数组在 strict 严格是模式下，默认是 any类型
// 但是和配置检查器noImplicitAny有关，noImplicitAny为false 改为 never 类型
var arr7 = [];
arr7 = [2, "3"];
