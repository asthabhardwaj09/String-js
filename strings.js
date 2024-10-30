const firstname ="astha"
const lastname="bhardwaj"


// console.log(firstname+lastname+" age:21");

// console.log(`hello my firstname is ${firstname} and lastname is ${lastname}`);

const gamename=new String("Rahul")

console.log(gamename[1]);
console.log(gamename.__proto__);

console.log(gamename.length)
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('u'));

let myname= "Rahul Kumar Singh"
const newstring=myname.substring(1,6)  //here we can not give negative value if we give it will ignore and start from 0
const anotherstring=myname.slice(-12, -6)
console.log(myname.length);
console.log(newstring);
console.log(anotherstring);

const newstringone="             hitesh                                  "
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(myname.split('-'));









