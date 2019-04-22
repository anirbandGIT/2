var obj = /e/.exec("The best things is Love");
console.log(/e/.test("The best things is Love"));
console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);
