
/*
let name = "My name is Mojahidul Islam Jaber";

console.log(name.charAt(17));
console.log(name);
console.log(name.toUpperCase())
console.log(name.toLowerCase());

let x = "1234567891011112";
let y = " is a very beautiful country"


let p = x.slice(3, 11);

console.log(p);
*/
/*
let ext = "My name is "
let name = "Mojahidul Islam Jaber";
let slc = name.slice(0, 4);
let chr = name.charAt(2);


console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(ext.concat(name));
console.log(slc);
console.log(chr);
*/
/*
let x = 5+5;
let y = 5-4;
let z = 5*5;
let p = 20/5;
let r = 5%3;
let q = 3**4;

console.log(x);
console.log(y);
console.log(z);
console.log(p);
console.log(r);
console.log(q);

let a = 100;
let b = 200;

console.log(a--);
console.log(a--);
console.log(++b);
console.log(b++);
console.log(b++);
*/

/*
	var num1 = prompt("Enter the first number:")
	var num2 = prompt("Enter the second number:")
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	var sum, jam, tam, pam, dam;

	sum = num1+num2;
	jam = num1-num2;
	tam = num1*num2;
	pam = num1/num2;
	dam = num1%num2;


	document.write(num1 + " + " +num2 + " = " + sum + "<br/>");
	document.write(num1 + " - " +num2 + " = " + jam + "<br/>");
	document.write(num1 + " * " +num2 + " = " + tam + "<br/>");
	document.write(num1 + " / " +num2 + " = " + pam + "<br/>");
	document.write(num1 + " % " +num2 + " = " + dam + "<br/>");
*/

/*
	let base = parseFloat(prompt("Enter the Base ="));
	let height = parseFloat(prompt("Enter the height ="));
	let area = (base*height)/2;
 
	document.write("Area : " + area.toFixed(4));
*/


/*
//Fahrenhait to censiuds converter
let fah = parseFloat(prompt("Enter the °F : "));

let rslt = (far-32)*(5/9);
let final = rslt.toFixed(4);

console.log("The °C : " + final)
*/

/*
//censius to fahrenhait converter:

let cel = parseFloat(prompt(" Enter the celsius: "));

let far = (cel*(9/5))+32;
let fin = far.toFixed(5);

console.log("°F : " + fin);
*/

/*
var num = prompt("Enter you number: ");

if(num%2==0){
	console.log("জোড় সংখা");
}else{
	console.log("বেজোড় সংখা");
}
*/
/*
var prom = prompt("Enter the number: ");

if(prom>0){
	console.log("This is positive number!");
}else if(prom<0){
	console.log("This is negative number!");
}else{
	console.log("This is zero");
}
*/

/*
var a = parseInt(prompt("Enter the Number : "));
  
if(a>100 || a<=0){
	console.log("Invalid number!")
}else if(a>=80 && a<=100){
	console.log("A+");
}else if(a>=70 && a<=79){
	console.log("A");
}else if(a>=60 && a<=69){
	console.log("A-");
}else if(a>=50 && a<=59){
	console.log("B");
}else if(a>=40 && a<= 49){
	console.log("C");
}else if(a>=33 && a<=39){
	console.log("D");
}else{
	console.log("Fail !")
}
*/

/*
var num1 = parseInt(prompt("Enter num 1 : "));
var num2 = parseInt(prompt("Enter num 2 : "));
var num3 = parseInt(prompt("Enter num 3 : "));

if(num1>num2 && num1>num3){
	console.log("Number 1 is larger!");
}else if(num2>num1 && num2>num3){
	console.log("Number 2 is larger!");
}else{
	console.log("Number 3 is larger!");
}
*/

/*
var enter = prompt("Enter any leter: ");
enter = enter.toLowerCase();

if(enter=="a" || enter=="e" || enter=="i" || enter=="o" || enter=="u"){
	console.log(enter + " This is a vowel!");	
}else{
console.log(enter + " This is consonent");
}
*/
/*
let namo = "Mojahidul Islam Jaber";
let age = 20;
let float = 123.44566468486464;

let x = age+float;
console.log(x.toPrecision(6));
*/

/*
var a = parseInt(prompt("Enter first number:"));
var b = parseInt(prompt("Enter second number:"));

var sum = a+b;
var sub = a-b;
var addi = a*b;
var divi = a/b;
var mar = a%b;

document.write(a + "+" + b + " = " + sum + "<br/>");
document.write(a + "-" + b + " = " + sub + "<br/>");
document.write(a + "*" + b + " = " + addi + "<br/>");
document.write(a + "/" + b + " = " + divi + "<br/>");
document.write(a + "%" + b + " = " + mar);
*/
/*
var eve = parseInt(prompt("Enter the number!"));

if(eve%2==0){
	document.write("জোড় সংখা");
}else{
	document.write("বেজোড় সংখা");
}
*/

/*
var one = parseInt(prompt("Enter Number 1"));
var two = parseInt(prompt("Enter Number 2"));
var tre = parseInt(prompt("Enter Number 3"));

if(one>two && one>tre){
	document.write("Number 1 is larger");
}else if(two>one && two>tre){
	document.write("Number 2 is larger");
}else if(tre>one && tre>two){
	document.write("Number 3 is larger");
}else{
	document.write("Invalid!!");
}
*/
/*
var value = prompt("Enter the letter: ");

value = value.toLowerCase();
switch(value){
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
	console.log("Vowel");
	break;
	case "b":
	case "c":
	case "d":
	case "f":
	case "g":
	case "h":
	case "j":
	case "k":
	case "l":
	case "m":
	case "n":
	case "p":
	case "q":
	case "r":
	case "s":
	case "t":
	case "v":
	case "w":
	case "x":
	case "y":
	case "z":
	console.log("Consonent");
	break;

	default:
	console.log("Invalid!!")
}
*/ 

/*

//Creating a function...


function addition(x, y){
	var rslt = x+y;
	document.write("Addition = " + rslt+ "<br/>");
}

function substraction(x, y){
	var rst = x-y;
	document.write(" substraction = " + rst + "<br/>");
}

function astrack(x, y){
	var fin = x*y;
	document.write(" astrack = " + fin + "<br/>");
}

function device(x, y){
	final = x/y;
	document.write(" devided = " + final + "<br/>");
}

function mar(x, y){
	var total = x%y;
	document.write(" marcuses = " + total);
}

var x = parseInt(prompt("Enter value of 'x' "));
var y = parseInt(prompt("Enter value of 'y' "));

addition(x, y);
substraction(x, y);
astrack(x, y);
device(x, y);
mar(x, y);

*/

/*
var names = ["Mojahid", "Jaber", "Fahim", "Rakib", "Sakib"];
var country = ["Bangladesh", "India", "Pakistan"];
var final = names.concat(country);


console.log(final);

*/

/*
var num = new Array();

for(var i=0; i<5; i++){
	num[i] = parseInt(prompt("Enter a number"));
}
sum = 0;

for(var i = 0; i<5; i++){
	console.log(num[i]);
	sum = sum+num[i];
}
console.log(sum);
*/


//....Uses of shift....
var arrays = ['Mojahid', 'Jaber', 'Fahim', 'forad', 'hamim', 'fohad'];
arrays.shift()
console.log(arrays);

//....Uses of unshift....

var arrays = ['Mojahid', 'Jaber', 'Fahim', 'forad', 'hamim', 'fohad'];
arrays.unshift("Sakib");
console.log(arrays);

//...Uses of splice....

//...Adding elements using splice....
var arrays = ['Mojahid', 'Jaber', 'Fahim', 'forada', 'hamim', 'fohad'];
arrays.splice(2, 0, "Farhana", "Rabiya");
console.log(arrays);


//....Removing elements using splice....

arrays.splice(2,2);
console.log(arrays);

//...Using of slice..

var newarray = arrays.slice(1);
console.log(newarray);
//........

console.log(arrays);
