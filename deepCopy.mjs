//要多学习递归，递归是函数自己调用自己，切记> <
let obj = { x : { y : 2 } };
export function deepCopy (obj) {
    let obj1 = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj1[key] = deepCopy(obj[key]);
        } else {
            obj1[key] = obj[key];
        }        
    }
    return obj1;
}

let a = deepCopy( obj );
a.x.y = 3;
console.log(obj.x.y);
 //将多个类的接口“混入”（mix in）另一个类。
function mix(...mixins) {
    class Mix {}
  
    for (let mixin of mixins) {
      copyProperties(Mix.prototype, mixin); // 拷贝实例属性
      copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin)); // 拷贝原型属性
    }
  
    return Mix;
  }
  
  function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
      if ( key !== "constructor"
        && key !== "prototype"
        && key !== "name"
      ) {
        let desc = Object.getOwnPropertyDescriptor(source, key);
        Object.defineProperty(target, key, desc);
      }
    }
  }