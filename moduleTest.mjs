import {deepCopy} from './deepCopy'
let tabdel = { 'name' : 'cyz' , 'age' : '23'};
let allot = deepCopy ( tabdel );
allot.name = 'cyq';
console.log (allot.name);
console.log (allot.age);
