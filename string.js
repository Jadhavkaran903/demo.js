// String methods

// 1.charAt()--- Returns the character at an index.

let a1 = "JavaScript";
let a2 = a1.charAt(3);

console.log(a2);

// 2.charCodeAt()--->Return the ASCII at an index
//Note-ASCII is a numeric value that is given to different characters and symbols for computers to store and manipulate.

let b1 = "python";
let b2 = b1.charCodeAt(3);

console.log(b2);

// 3.codePointAt()--->Returns a non-negative integer that is the ASCII value at the given position.

let c1 = "javascript";
let c2 = c1.codePointAt("s");

console.log(c2);

// 4.concat()--->Combination of two or more strings.

let d1 = "Java";
let d2 = "Script";
let d3 = d1.concat(d2);

console.log(d3);

// 5.endsWith()--->returns true if a string ends with a specified string.

let e1 = "JavaScript is a case-sensitive language";
let e2 = e1.endsWith("JavaScript", 10);

console.log(e2);

// 6.includes()--->returns true if string contains substring.

let f1 = "JavaScript is the scripting language";
let f2 = f1.includes("scripting");

console.log(f2);

// 7.indexOf--->Find the index of a substring

let g1 = "JavaScript is commonly used for creating web pages";
let g2 = g1.indexOf("web");

console.log(g2);

// Note-If substring is not found then retuns -1

let h1 = "JavaScript is commonly used for creating web pages";
let h2 = h1.indexOf("html");

console.log(h2);

// 8.lastIndexOf()--->returns the index (position) of the last occurrence of a specified value in a string.

let i1 = "JavaScript is always synchronous and JavaScript is single-threaded";
let i2 = i1.lastIndexOf("JavaScript");

console.log(i2,"ans");

// 9.localeCompare()---> returns one of 3 numbers indicating the sort order.

// Case 1-->Return -1 if sorted before
let j1 = "ab";
let j2 = "cd";
let j3 = j1.localeCompare(j2);

console.log(j3);

// Case 2-->Return 1 if sorted after
let k1 = "cd";
let k2 = "ab";
let k3 = k1.localeCompare(k2);

console.log(k3);

// Case 3-->Return 0 if strings are equal
let l1 = "ab";
let l2 = "ab";
let l3 = l1.localeCompare(l2);

console.log(l3);

// 10.match()--->Returns array of matching strings.
//matchAll()--->Used with the loops

// Case 1-->passing parameter as a string
let m1 = "JavaScript is always synchronous and JavaScript is single-threaded";
let m2 = m1.match("JavaScript"); //Return array of only first occurence

console.log(m2);

// Case 2-->passing parameter as a regular expression
let n1 = "JavaScript is always synchronous and JavaScript is single-threaded";
let n2 = n1.match(/JavaScript/g); //Return array of all occurence

console.log(n2);

//11.padStart()--->Pad the string from start to another string until it reaches to the given length.

let o1 = "7709192441";
let o2 = o1.padStart(14, "+91-");

console.log(o2);

//12.padEnd()--->Pad the string at end to another string until it reaches to the given length.

let p1 = "7709192441";
let p2 = p1.padEnd(21, "-[Minskole]");

console.log(p2);

// 13.repeat()--->returns a string with a number of copies of a string.

let q1 = "NodeJS ";
let q2 = q1.repeat(3);

console.log(q2);

// 14.replace()--->returns a new string with the replaced value.

let r1 = "JavaScript";
let r2 = r1.replace("JavaScript", "TypeScript");

console.log(r2);

// 15.search()--->returns the index of the first match.

let s1 =
  "JavaScript can execute not only in the browser, but also on the server";
let s2 = s1.search("the");

console.log(s2);

// 16.slice()---> Return a section of a string. It allows us to assign positive as well negative index.

let t1 = "JavaScript is always synchronous and JavaScript is single-threaded";
let t2 = t1.slice(0, 32);
let t3 = t1.slice(-29);

console.log(t2);
console.log(t3);

// 17.split()--->It splits a string into substring array, then returns that newly created array.

let u1 = "JavaScript is commonly used for creating web pages";
let u2 = u1.split(" ");

console.log(u2);

// 18.startWith()--->Check if a string starts with passed parameter

let v1 = "JavaScript is the scripting language";
let v2 = v1.startsWith("JavaScript");

console.log(v2); //Return boolean value

// 19.subString()--->fetch the part of the given string on the basis of the specified index.

let w1 = "JavaScript is commonly used for creating web pages";
let w2 = w1.substring(14, 22);

console.log(w2);

// 20.toLowerCase()--->It converts the given string into lowercase letter.

let x1 = "MINSKOLE";
let x2 = x1.toLowerCase();

console.log(x2);

// 21.toUpperCase()--->It converts the given string into Uppercase letter.

let y1 = "python";
let y2 = y1.toUpperCase();

console.log(y2);

// 22.trim()--->It trims the white space from the both sides of the string.
//    trimStart() and trimEnd() used to trims the white space from the left and right side of the string.
let z1 = "   MySql    ";
let z2 = z1.trim();

console.log(z2);

// 23.valueOf()--->It provides the primitive value of string object.

let searchEngine = "Google";
let result = searchEngine.valueOf();

console.log(result);
