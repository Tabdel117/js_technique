var handler = {
    set (target, property, value){
        if (value > 2)
         console.log('big');
        else
        target[property]=value;
    }
}
let a = {'name' :1} ;
var proxy = new Proxy( a , handler);
proxy.name = -1;
console.log(proxy.name);

