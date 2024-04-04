// 1

// let a=prompt("Son kiriting: ")
// if(a > 0){
//     console.log(++a);
// }
// else if(a < 0){
//     console.log(a);
// }
// else{
//     console.log("Kiritilgan son 0 ga teng");
// }

// 2

// let a=prompt("Son kiriting: ")
// if(a > 0){
//     console.log(++a);
// }
// else if(a < 0){
//     console.log(a-2);
// }
// else{
//     console.log("Kiritilgan son 0 ga teng");
// }

// 3

// let a=prompt("Son kiriting: ")
// if(a > 0){
//     console.log(++a);
// }
// else if(a < 0){
//     console.log(a-2);
// }
// else{
//     console.log("10");
// }

// 4

// let a=prompt("Son kiriting_1: ")
// let b=prompt("Son kiriting_2: ")
// let c=prompt("Son kiriting_3: ")
// let A=0   //bu yerda A musbat sonlarning nechtaligi
// let B=0   //bu yerda B manfiy sonlarning nechtaligi
// let C=0   //bu yerda C 0 ning nechtaligi   

// if(a > 0){
//     A++
// }
// else if(a < 0){
//     B++
// }
// else{
//     C++
// }
// if(b > 0){
//     A++
// }
// else if(b < 0){
//     B++
// }
// else{
//     C++
// }
// if(c > 0){
//     A++
// }
// else if(c < 0){
//     B++
// }
// else{
//     C++
// }
// console.log("Musbat sonlar", A, "ta");
// console.log("Manfiy sonlar", B, "ta");
// console.log("0 soni", C, "ta");

// 5

// let a=prompt("Son kiriitng_1: ")
// let b=prompt("Son kiriitng_2: ")
// if(a > b){
//     console.log("a=", a, "soni katta")
// }
// else if(a < b){
//     console.log("b=", b, "soni katta")
// }
// else{
//     console.log("Sonlar o'zaro teng");
// }

// 6

// let a=prompt("Son kiriting_1: ")
// let b=prompt("Son kiriting_2: ")
// if(a > b){
//     console.log("a=",a,"soni katta");
// }
// else{
//     console.log("b=",b,"soni katta");
// }
// if(a < b){
//     console.log("a=",a,"soni kichik");
// }
// else if(b < a){
//     console.log("b=",b,"soni kichik");
// }
// else{
//     console.log("Sonlar o'zaro teng");
// }

// 7

// let a=prompt("Son kiriitng_1:")-0
// let b=prompt("Son kiriitng_2:")-0
// if(a != b){
//     console.log(a+b);
// }
// else{
//     console.log(0);
// }

// 8

// let a=prompt("Son kiriting_1: ")
// let b=prompt("Son kiriting_2: ")
// let c=prompt("Son kiriting_3: ")
// if(a < b && a < c){
//     console.log("a=",a,"son eng kichik");
// }
// else if(b < a && b < c){
//     console.log("b=",b,"son eng kichik");   
// }
// else if(c < a && c < b){
//     console.log("c=",c,"son eng kichik");      
// }
// else if(a == b && b < c){
//     console.log("a=",a, "va","b=",b, "sonlar o'zaro teng va eng kichik");
// }
// else if(a == c && c < b){
//     console.log("a=",a, "va","c=",c,"sonlar o'zaro teng va eng kichik");
// }
// else if(c == b && b < a){
//     console.log("b=",b,"va","c=",c,"sonlar o'zaro teng va eng kichik");
// }
// else{
//     console.log("Sonlar o'zaro teng !!!");
// }

// 9

// let a=prompt("Son kiriting_1: ")
// let b=prompt("Son kiriting_2: ")
// let c=prompt("Son kiriting_3: ")
// if(a < b < c){
//     console.log("a=",2*a);
//     console.log("b=",2*b);
//     console.log("c=",2*c);
// }
// else{
//     console.log("a=",-1*a);
//     console.log("b=",-1*b);
//     console.log("c=",-1*c);
// }

// 10

// let x=prompt("Son kiriting: ")
// let F
// if(x > 0){
//     F=2*Math.sin(x)
// }
// else{
//     F=x-6
// }
// console.log("Natija F=", F);

// 11

// let a=prompt("Son kiriitng: ")
// if(a % 2 == 0 && a > 0){
//     console.log("Musbat juft son");
// }
// else if(a % 2 == 1 && a > 0){
//     console.log("Musbat toq son");  
// }
// else if(a % 2 == 0 && a < 0){
//     console.log("Manfiy juft son"); 
// }
// else if(a % 2 == 1 && a < 0){
//     console.log("Manfiy toq son");
// }
// else{
//     console.log("Son 0 ga teng");
// }

// ---------------------------------------------------------------------

// 1

// let a=prompt("Son kiriting: ")
// if(a % 2 == 0){
//     console.log(Math.pow(a , 2));
// }
// else{
//     console.log(Math.pow(a , 1/2));
// }

// 2

// let a=prompt("Matn kiriting: ")
// if(a.length > 10){
//     console.log(a.toLowerCase());  //toLowerCase -- hamma harflarni kichik qiladi
// }
// else{
//     console.log(a.toUpperCase());  //toUpperCase- hamma harflarni katta qiladi
// }

// 3

// let a=prompt("Matn kiriting_1: ")
// let b=prompt("matn kiriting_2: ")
// if(a.length > 10){
//     console.log(a.concat(' ', b)); // concat- matnlarni qoshadi
// }
// else{
//     console.log("Shart bajarilmadi!!");
// }

// 4

// let a=prompt("Matn kiriting: ")
// if(a.length > 5){
//     console.log(a.repeat(3));  //repeat- takrorlash
// }
// else{
//     log("Shart yetarli emas")
// }

// 5

// let a=prompt("Matn kiriting")
// if(a.length > 5){
//     console.log(a.replace("a","@")); //replace - almashtiradi
// }
// else{
//     console.log("Shart yetarli emas");
// }

// 6

// let a=prompt("Matn kiriting")
// if(a.length > 10){
//     console.log(a.slice(5));  //slice- qirqib tashlaydi
// }
// else{
//     console.log("Shart yetarli emas");
// }

// 7

// let a=prompt("Son kiriting: ")
// console.log(a.toString());  //string-- matnga aylantiradi

// 8

// 

// 9

// let a=prompt("Son kiriting: ")
// if(a < 0){
//     console.log(Math.abs(a));
// }
// else{
//     console.log(a);
// }

// 10

// let a=prompt("Matn kiriting: ")
// if(a.length > 20){
//     console.log(a.slice(2));
// }
// else{
//     console.log("shart yetarli emas !!");
// }

// 11

// let a=prompt("Matn kiriting: ")
//     console.log(a.replace("a","A"),a.replace("b",'B'));

// 12

// let a=prompt("Matn kiriting: ")
//     console.log(a.replace("java",'javascript'));

// 13

// let a=prompt("matn kiriting: ")
// if(a.length > 15){
//     console.log(a.slice(10));
// }
// else{
//     console.log(a.concat(' ',"hello TATU"));
// }

// 14

// let a=prompt("Son kiriting: ")
// if(a < 0){
//     console.log(a.repeat(3));
// }
// else{
//     console.log(a+10);
// }

// 15

// let a=prompt("Son kiriting_1: ")-0
// let b=prompt("Son kiriting_2: ")-0
// let A=prompt("Ishora kiriting: ")
// if(A === "+"){
//     console.log(a+b);
// }
// else if(A === "-"){
//     console.log(a-b);
// }
// else if(A === "*"){
//     console.log(a*b);
// }
// else if(A === "/"){
//     console.log(a/b);
// }
// else{
//     console.log("Ishora notogri !!");
// }