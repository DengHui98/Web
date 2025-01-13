// any类型
let a;
a = "aaa";
a = 123;

// 字面量常量
// 赋予指定的值，使用const 申明
const hello = "hello";
const number: 1 = 1;

// 联合类型
// 使用 ｜ 链接数据类型，表示可以同时给变量赋值多个类型
let link1: "UP" | "DOWN" | "RIGHT" | "LEFT";
link1 = "DOWN";
// link1 = "SHADOWN";  // 错误，不能赋值为其他类型的值


// 数组
// 写法1 --- 类型[]
let arr1:number[] = [1, 2, 3, 4, 5];
// 写法2 --- Array<类型>
let arr2: Array<number> = [1, 2, 3, 4, 5]
// 数组使用联合类型
let arr3: (string | number)[] = [1, 2, 3, "4", "5"];
let arr4: Array<string | number> = [1, 2, 3, "4", "5"];
// 注意和下面的写法区分
// string 类型的数组 或者 数字类型的数组
let arr5: string[] | number[] = [1, 2, 3, 4];
let arr6: Array<string> | Array<number> = [1, 2, 3, 4];
// 元组 - 特殊的数组类型
// 定义多少类型，必须书写多少个类型
let tuple1: [string, number] = ["a", 1];


// 定义一个空元组
let tuple2: [] = [];

// 定义一个空数组
// 空数组在 strict 严格是模式下，默认是 any类型
// 但是和配置检查器noImplicitAny有关，noImplicitAny为false 改为 never 类型
let arr7 = [];
arr7 = [2, "3"];

// 函数
// 没有返回值，默认类型是 void
function fn1(a: number, b: number) {

}
// 定义返回类型
function fn2(a: number, b: number):number {
  return a + b;
}

// 可选参数，和默认参数
function fn3(a: number, b: number, c?: number): number {
  if(c) {
    return a + b + c;
  }
  return a + b;
}
// console.log(fn3(1, 2));   // 3
// console.log(fn3(1, 2, 3));  // 6

// 默认参数
// 设置默认参数，该参数默认可选
function fn4(a: number, b: number, c = 10): number {
  return a + b + c;
}
// console.log(fn4(1, 2));   // 13
// console.log(fn4(1, 2, 3));  // 6

// 剩余参数
function fn5(a: number, b: number, ...reset: number[]) {
  console.log(a, b, reset);
}
// fn5(1, 2, 3, 4, 5)

// 写一个过滤数组的函数
function myNumberFilter(arr: number[], callback: (item: number, index?: number) => boolean) {
  let result: number[] = [];
  arr.forEach((item: number, index: number) => {
    if(callback(item, index)) {
      result.push(item)
    }
  })
  return result;
}

const res1 = myNumberFilter([1, 2, 3, 4], (item: number) => {
  return item % 2 === 0
})

// console.log(res1);

// 泛型
// 用一个特殊字符代替固定类型
function fn6<T>(a: T, b: T): [T, T] {
  return [a, b]
}

const res61 = fn6<number>(1, 2);
// console.log(res61);
// 类型推断
const res62 = fn6(1, 2);
// console.log(res62);
// 多个泛型
function fn7<T, K>(a: T, b: K): [T, K] {
  return [a, b]
}
const res7 = fn7(1, "2");
// console.log(res7);

// 使用泛型修改上面的过滤函数
function myFilter<T>(arr: Array<T>, callback: (item: T, index?: number) => boolean) {
  let result: Array<T> = [];
  arr.forEach((item: T, index: number) => {
    if(callback(item, index)) {
      result.push(item)
    }
  })
  return result;
}

const filter1 = myFilter<string>(["a", "aa", "b", "bb", "aaa"], (item: string) => {
  return item.includes("a")
});
// console.log(filter1);


// 类型推断
const filter2 = myFilter([1, 2, 3, 4, 5], (item) => {
  return item % 2 === 0
});
// console.log(filter2);


// 对象
const obj1: {
  id: number,
  name: string,
  sex?: "man" | "woman" // 可选
} = {
  id: 1,
  name: 'jack',
  sex: "man"
}

// 数组对象
const arr8: {
  id: number,
  name: string
}[] = [
  {
    id: 1,
    name: "jack"
  }
]

// 自定义类型

// 方式1: 类型别名：创建一个类型的的新名字，类型别名可以是任何有效的类型
// 格式 type 类型别名 = /* 类型 */
type Pointer = {
  x: number,
  y: number
}

let p1: Pointer = {
  x: 10,
  y: 20
}

// 方式2: 接口， 一半用于对象类型
// 格式： interface 类型别名 /* 类型 */
interface PointerI {
  x: number,
  y: number
}
let pi1: PointerI = {
  x: 1,
  y: 2
}

// 函数别名
type GetPointerFn = (x: number, y: number) => Pointer

// 使用 GetPointerFn 定义一个函数
const createPointer: GetPointerFn = (x, y) => {
  return { x, y };
};


