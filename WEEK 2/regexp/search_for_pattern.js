var str = "MYCARerqvnn";
// var n = str.search("Das");
// console.log(n);
// console.log(str.search("A"));
// console.log(str.search("x"));
// console.log(str.search(/ban/i));
// console.log(str.search(/[a]{1}/));
if(/MYCAR[a-z1-9]{5}/g.test(str) && str.length == 10){
    console.log("HELLO I AM EXACT MATCH");
}

console.log(str.search(/MYCAR[a-z1-9]{5}/g))