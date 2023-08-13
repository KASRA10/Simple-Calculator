//create main heading
const heading = document.createElement("h1");
heading.textContent = "This Is Simple Calculator In JavaScript (DOM) Created By Kasra Hosseini-K10";
heading.style.fontFamily = "monospace";
heading.style.fontSize = "26px";
heading.style.textAlign = "center";
heading.style.padding = "15px";
heading.style.margin = "10px auto 30px";
heading.style.textTransform = "capitalize";
heading.style.cursor = "pointer";
heading.style.borderBottom = "3px solid #000";
//End Of Heading
//Add To dom-appending
const root = document.getElementById("root");
root.appendChild(heading);
//End Of Appending
// create calculator-body
const divBody = document.createElement("div");
divBody.setAttribute("id", "CBody");
divBody.style.width = "fit-content";
divBody.style.height = "fit-content";
divBody.style.margin = "30px auto";
divBody.style.padding = "15px";
divBody.style.border = "3px solid #0F4C75";
divBody.style.borderRadius = "10px";
divBody.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
divBody.style.backgroundColor = "#FFFFD2";
// Add To Dom
root.appendChild(divBody);
// End Of Calculator-body
// Add Calculator Screen
var screen = document.createElement("div");
screen.setAttribute("id", "screen-Output");
screen.style.width = "90%";
screen.style.margin = "10px auto";
screen.style.height = "50px";
screen.style.border = "5px solid #3F72AF";
screen.style.borderRadius = "10px";
screen.style.display = "flex";
screen.style.justifyContent = "center";
screen.style.alignItems = "center";
screen.style.padding = "10px";
screen.style.textAlign = "center";
screen.style.fontFamily = "monospace";
// Add To Calculator Area-Dom
divBody.appendChild(screen);
// End Of Calculator Screen
// button 1
const one = document.createElement("button");
one.textContent = 1;
one.style.fontFamily = "monospace";
one.style.fontSize = "20px";
one.style.border = "1px solid #F94C10";
one.style.borderRadius = "5px";
one.style.marginRight = "15px";
one.style.marginLeft = "45px";
one.style.padding = "15px 30px";
one.style.textAlign = "center";
one.style.backgroundColor = "#000";
one.style.color = "#EADBC8";
one.style.cursor = "pointer";
one.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 1
// button 2
const two = document.createElement("button");
two.textContent = 2;
two.style.fontFamily = "monospace";
two.style.fontSize = "20px";
two.style.border = "1px solid #F94C10";
two.style.borderRadius = "5px";
two.style.margin = "15px";
two.style.padding = "15px 30px";
two.style.textAlign = "center";
two.style.backgroundColor = "#000";
two.style.color = "#EADBC8";
two.style.cursor = "pointer";
two.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 2
// button 3
const three = document.createElement("button");
three.textContent = 3;
three.style.fontFamily = "monospace";
three.style.fontSize = "20px";
three.style.border = "1px solid #F94C10";
three.style.borderRadius = "5px";
three.style.margin = "15px";
three.style.padding = "15px 30px";
three.style.textAlign = "center";
three.style.backgroundColor = "#000";
three.style.color = "#EADBC8";
three.style.cursor = "pointer";
three.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 3
// button 4
const four = document.createElement("button");
four.textContent = 4;
four.style.fontFamily = "monospace";
four.style.fontSize = "20px";
four.style.border = "1px solid #F94C10";
four.style.borderRadius = "5px";
four.style.marginRight = "15px";
four.style.marginLeft = "45px";
four.style.padding = "15px 30px";
four.style.textAlign = "center";
four.style.backgroundColor = "#000";
four.style.color = "#EADBC8";
four.style.cursor = "pointer";
four.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 4
// button 5
const five = document.createElement("button");
five.textContent = 5;
five.style.fontFamily = "monospace";
five.style.fontSize = "20px";
five.style.border = "1px solid #F94C10";
five.style.borderRadius = "5px";
five.style.margin = "15px";
five.style.padding = "15px 30px";
five.style.textAlign = "center";
five.style.backgroundColor = "#000";
five.style.color = "#EADBC8";
five.style.cursor = "pointer";
five.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 5
// button 6
const six = document.createElement("button");
six.textContent = 6;
six.style.fontFamily = "monospace";
six.style.fontSize = "20px";
six.style.border = "1px solid #F94C10";
six.style.borderRadius = "5px";
six.style.margin = "15px";
six.style.padding = "15px 30px";
six.style.textAlign = "center";
six.style.backgroundColor = "#000";
six.style.color = "#EADBC8";
six.style.cursor = "pointer";
six.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 6
// button 7
const seven = document.createElement("button");
seven.textContent = 7;
seven.style.fontFamily = "monospace";
seven.style.fontSize = "20px";
seven.style.border = "1px solid #F94C10";
seven.style.borderRadius = "5px";
seven.style.marginRight = "15px";
seven.style.marginLeft = "45px";
seven.style.padding = "15px 30px";
seven.style.textAlign = "center";
seven.style.backgroundColor = "#000";
seven.style.color = "#EADBC8";
seven.style.cursor = "pointer";
seven.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 7
// button 8
const eight = document.createElement("button");
eight.textContent = 8;
eight.style.fontFamily = "monospace";
eight.style.fontSize = "20px";
eight.style.border = "1px solid #F94C10";
eight.style.borderRadius = "5px";
eight.style.margin = "15px";
eight.style.padding = "15px 30px";
eight.style.textAlign = "center";
eight.style.backgroundColor = "#000";
eight.style.color = "#EADBC8";
eight.style.cursor = "pointer";
eight.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 8
// button 9
const nine = document.createElement("button");
nine.textContent = 9;
nine.style.fontFamily = "monospace";
nine.style.fontSize = "20px";
nine.style.border = "1px solid #F94C10";
nine.style.borderRadius = "5px";
nine.style.margin = "15px";
nine.style.padding = "15px 30px";
nine.style.textAlign = "center";
nine.style.backgroundColor = "#000";
nine.style.color = "#EADBC8";
nine.style.cursor = "pointer";
nine.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 9
// button 0
const zero = document.createElement("button");
zero.textContent = 0;
zero.style.fontFamily = "monospace";
zero.style.fontSize = "20px";
zero.style.border = "1px solid #F94C10";
zero.style.borderRadius = "5px";
zero.style.marginLeft = "103px";
zero.style.marginTop = "15px";
zero.style.marginBottom = "15px";
zero.style.padding = "15px 30px";
zero.style.textAlign = "center";
zero.style.backgroundColor = "#000";
zero.style.color = "#EADBC8";
zero.style.cursor = "pointer";
zero.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button 0
// Add Operator Buttons
// button .
const dot = document.createElement("button");
dot.textContent = ".";
dot.style.fontFamily = "monospace";
dot.style.fontSize = "20px";
dot.style.border = "1px solid #F94C10";
dot.style.borderRadius = "5px";
dot.style.marginLeft = "15px";
dot.style.marginTop = "15px";
dot.style.marginBottom = "15px";
dot.style.padding = "15px 30px";
dot.style.textAlign = "center";
dot.style.backgroundColor = "#000";
dot.style.color = "#EADBC8";
dot.style.cursor = "pointer";
dot.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of Button .
// sum Button
const sum = document.createElement("button");
sum.textContent = "+";
sum.style.fontFamily = "monospace";
sum.style.fontSize = "20px";
sum.style.border = "1px solid #000";
sum.style.borderRadius = "5px";
sum.style.margin = "15px";
sum.style.padding = "15px";
sum.style.textAlign = "center";
sum.style.backgroundColor = "#FF9A00";
sum.style.color = "#FFF";
sum.style.cursor = "pointer";
sum.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of sum Button
// sub Button
const sub = document.createElement("button");
sub.textContent = "-";
sub.style.fontFamily = "monospace";
sub.style.fontSize = "20px";
sub.style.border = "1px solid #000";
sub.style.borderRadius = "5px";
sub.style.margin = "15px";
sub.style.padding = "15px";
sub.style.textAlign = "center";
sub.style.backgroundColor = "#FF9A00";
sub.style.color = "#FFF";
sub.style.cursor = "pointer";
sub.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of sub Button
// mul Button
const mul = document.createElement("button");
mul.textContent = "*";
mul.style.fontFamily = "monospace";
mul.style.fontSize = "20px";
mul.style.border = "1px solid #000";
mul.style.borderRadius = "5px";
mul.style.margin = "15px";
mul.style.padding = "15px";
mul.style.textAlign = "center";
mul.style.backgroundColor = "#FF9A00";
mul.style.color = "#FFF";
mul.style.cursor = "pointer";
mul.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of mul Button
// dis Button
const dis = document.createElement("button");
dis.textContent = "/";
dis.style.fontFamily = "monospace";
dis.style.fontSize = "20px";
dis.style.border = "1px solid #000";
dis.style.borderRadius = "5px";
dis.style.margin = "15px";
dis.style.padding = "15px";
dis.style.textAlign = "center";
dis.style.backgroundColor = "#FF9A00";
dis.style.color = "#FFF";
dis.style.cursor = "pointer";
dis.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of dis Button
// per Button
const per = document.createElement("button");
per.textContent = "%";
per.style.fontFamily = "monospace";
per.style.fontSize = "20px";
per.style.border = "1px solid #000";
per.style.borderRadius = "5px";
per.style.margin = "15px";
per.style.padding = "15px";
per.style.textAlign = "center";
per.style.backgroundColor = "#FF9A00";
per.style.color = "#FFF";
per.style.cursor = "pointer";
per.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of per Button
// AC Button
const ACb = document.createElement("button");
ACb.textContent = "AC";
ACb.style.fontFamily = "monospace";
ACb.style.fontSize = "20px";
ACb.style.border = "1px solid #F94C10";
ACb.style.borderRadius = "5px";
ACb.style.marginRight = "15px";
ACb.style.marginLeft = "35px";
ACb.style.padding = "15px 30px";
ACb.style.textAlign = "center";
ACb.style.backgroundColor = "#8062D6";
ACb.style.color = "#EADBC8";
ACb.style.cursor = "pointer";
ACb.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of AC Button
// delete Button
const del = document.createElement("button");
del.textContent = "DL";
del.style.fontFamily = "monospace";
del.style.fontSize = "20px";
del.style.border = "1px solid #F94C10";
del.style.borderRadius = "5px";
del.style.margin = "15px";
del.style.padding = "15px 30px";
del.style.textAlign = "center";
del.style.backgroundColor = "#F94C10";
del.style.color = "#EADBC8";
del.style.cursor = "pointer";
del.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of delete Button
// equal Button
const equal = document.createElement("button");
equal.textContent = "=";
equal.style.fontFamily = "monospace";
equal.style.fontSize = "20px";
equal.style.border = "1px solid #F94C10";
equal.style.borderRadius = "5px";
equal.style.margin = "15px";
equal.style.padding = "15px 30px";
equal.style.textAlign = "center";
equal.style.backgroundColor = "#7A9D54";
equal.style.color = "#EADBC8";
equal.style.cursor = "pointer";
equal.style.boxShadow = "2px 10px 30px rgba(0,0,0,0.5)";
// End Of equal Button
// End Of Operator Buttons
// create br element using style in HTML
var br = document.createElement("br");
var br2 = document.createElement("br");
var br3 = document.createElement("br");
var br4 = document.createElement("br");
var br5 = document.createElement("br");
// add buttons into Area
divBody.appendChild(one);
divBody.appendChild(two);
divBody.appendChild(three);
divBody.appendChild(br);
divBody.appendChild(four);
divBody.appendChild(five);
divBody.appendChild(six);
divBody.appendChild(br2);
divBody.appendChild(seven);
divBody.appendChild(eight);
divBody.appendChild(nine);
divBody.appendChild(br3);
divBody.appendChild(zero);
divBody.appendChild(dot);
divBody.appendChild(br4);
divBody.appendChild(sum);
divBody.appendChild(sub);
divBody.appendChild(mul);
divBody.appendChild(dis);
divBody.appendChild(per);
divBody.appendChild(br5);
divBody.appendChild(ACb);
divBody.appendChild(del);
divBody.appendChild(equal);
// End Of Buttons