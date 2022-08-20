//Question No 1

function reverse_a_number(int) {
  int = int + "";
  return int.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12345)));

//Question No 2
function checkParalimdrome(str) {
  var cutr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  var ccount = 0;

  if (cutr === "") {
    console.log("Nothing Found!");
    return false;

  }
  if ((cutr.lenght) % 2 === 0) {
    ccount = (cutr.length) / 2;
  }
  else {
    if (cutr.length === 1) {
      console.log("paralindrome");
      return true;

    } else {

      ccount = (cutr.length - 1) / 2;
    }
  }
  for (var x = 0; x < ccount; x++) {

    if (cutr[x] != cutr.slice(-x - 1)[0]) {
      console.log("Not a Paralindrome");
      return false;
    }
  }
  console.log("this is a Paralindrome");
  return true;

}
checkParalimdrome("Ammar");
checkParalimdrome("deed");
checkParalimdrome("wow");
//Question No 3

function comboWord(word) {
  array = [];
  for (var x = 0, y = 1; x < word.length; x++, y++) {
    array[x] = word.substring(x, y);
  }
  var combi = [];
  var temp = "";
  var val = Math.pow(2, array.length);
  for (var i = 0; i < val; i++) {
    temp = "";
    for (var j = 0; j < array.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp += array[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);

    }
  }
  console.log(combi.join("\n"));
}
comboWord("dog");
//Question No 4


function alphabetSort(str1) {
  var val = str1.split('').sort().join('');
  console.log(val);
}
alphabetSort("development");

//Question No 5

function firstLetterCap(str2) {
  let arr = str2.split(' ');
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));

  }
  return newArr.join(' ');
}
console.log(firstLetterCap("it is use to capitalize the first letter of the word"));
//Question No 6
function longWord(str3) {
  var array1 = str3.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
console.log(longWord('JavaScript Functions Problems'));
//Question No 7
function primeNo(num) {
  if (num === 1) {
    return false;

  }
  else if (num === 2) {
    return true;

  } else {
    for (var x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }


}

console.log(primeNo(23));


//Question No 8

function vowelCounter(str3) {

  let str1 = str3.toLowerCase();
  let vowelList = "aeiou";
  let counter = 0;

  for (let i = 0; i <= str1.length; i++) {
    if (vowelList.indexOf(str1[i]) !== -1) {
      counter += 1;
    }
  }
  return counter;
}
console.log(vowelCounter("Ammar Ali Aqeel Hussain"));

//Question No 9

function typeofdata(val) {
  datatype = [Function, RegExp, Number, String, Boolean, Object];

  if (typeof val === "function" || typeof val === "Object") {
    for (var i = 0; i < val.length; i++) {
      if (val instanceof datatype[i]);
      return datatype[i]
    }
  }
  return typeof val;

}

console.log(typeofdata(155));
console.log(typeofdata("ammar"));
console.log(typeofdata(true));

//Question No 10

function matrix(int) {


  for (var i = 0; i < int; i++) {
    for (var j = 0; j < int; j++) {
      if (i === j) {
        console.log(1);

      } else {
        console.log(0);


      }
    }
    console.log("<br>  ");
  }
}

matrix(5);