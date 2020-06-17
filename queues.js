/*
- A queue is an organiesed list
- It's a first in , fast-out
- It stores data in order
- A queue is a type of list where data are inserted at the end and are removed from the
front.

Abstract Data Type
- enqueue
- dequeue
*/

function Queue(){
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.toString = toString;
this.empty = empty;
this.dataStore = [];
this.back = back;
this.count = count;
}


function enqueue(element){
    this.dataStore.push(element);
}

// for non priority queues;
/*
function dequeue(element){
     return this.dataStore.shift();
}
*/

function dequeue(){
    var priority = this.dataStore[0].code;
    for(let i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i].code < priority){
            priority = 1;
        }
    }
    
    return this.dataStore.splice(priority, 1);
}

function front(){
    return this.dataStore[0];
}

function back(){
    this.dataStore[this.dataStore.length - 1];
}


/*
function toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
*/

function toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    
    return retStr;
}

function empty(){
    if(this.dataStore.length == 0){
        return true;
    } else {
        return false;
    }
}

function count(){
    return this.dataStore.length;
}

// Square Dance

var listOfNames = [
    "F Allison McMillan",
    "M Frank Optiz",
    "M Mason McMillan",
    "M Clayton Ruff",
    "F Cheryl Ruff",
    "F Chery; Ferenback",
    "M Raymond Williams",
    "F Jennifar Ingram",
    "M Bryan Frazer",
    "M David Durr",
    "F  Aurora Adney"
    ];
    
var maleDancers = new Queue();
var femaleDancers = new Queue();
    
function Dancer(name, sex){
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females){
    var names = listOfNames;
    for(var i = 0; i < names.length; ++i){
        names[i] = names[i].trim();
    }
    
    for(var i = 0; i < names.length; ++i){
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name= dancer[1];
        if(sex == "F"){
            femaleDancers.enqueue(new Dancer(name, sex));
        }else{
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}


function dance(males, females){
     console.log("The dance partners are: \n");
     var maleDance;
     var femaleDance;
     while(!females.empty() && !males.empty()){ // use an expression itSelf
         maleDance = males.dequeue();
         femaleDance = females.dequeue();
         console.log(`Female dancer is ${femaleDance.name} and male Dancer is ${maleDance.name}`);
     }
     console.log(">>>>>>>>>");
}


/*
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if(maleDancers.count() > 0){
    console.log(`There are ${maleDancers.count()} male waiting to dance`);
}

if(femaleDancers.count() > 0){
    console.log(`There are ${femaleDancers.count()} female waiting to dance`);
}
*/


// Sorting with queues;- Radix-sort algorithm
// 91, 46, 85, 15, 92, 35, 31, 22
// sort based on 1s > 15, 22, 31, 35, 46, 85 ,91, 92
// sort based on 10s > [91,31, 92, 22,  35, 85, 15, 46].sort(), 

// 
function distribute(nums, queues, n, digit){
    for(var i = 0; i < n; ++i){
        if(digit == 1){
            queues[nums[i]%10].enqueue(nums[i]);
        }else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}


function collect(queues, nums){
    var i = 0;
    for(var digit = 0; digit < 10; ++digit){
        while(!queues[digit].empty()){
            nums[i++] = queues[digit].dequeue();
        }
    }
}


function dispArray(arr){
    for(var i = 0; i < arr.length; ++i){
        console.log(arr[i] + " ");
    }
}

// main program
var queues = [];
for(var i = 0; i < 100; ++i){
    queues[i] = new Queue();
}

var nums = [];
for(let i = 0; i < 10; ++i){
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

/*
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('\n \nAfter radix sort: ');
dispArray(nums);
*/

// Priority Ques

function Patient(name,code){
    this.name = name;
    this.code = code;
}


/*
var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);

ed.enqueue(p);

p = new Patient("Brown", 1);
ed.enqueue(p);

p = new Patient("Ingram", 1);
ed.enqueue(p);

console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen");
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

//another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiitng to be seen: ");
console.log(ed.toString());
*/


/*
function Dequeue(){
    this.enqueue = enqueue;
    this.dequeue = Ndequeue;
    this.front = front;
    this.toString = DtoString;
    this.empty = empty;
    this.dataStore = [];
    this.back = back;
    this.count = count;
    this.insertFront = insertFront;
    this.insertBack = insertBack;
}

function insertFront(){
   var element = this.dataStore[0];
   this.dataStore.splice(element,1);
}

function insertBack(){
   var element =  this.dataStore[this.dataStore.length - 1];
   this.dataStore.splice(element,1);
    
}

function Ndequeue(element) {
     return this.dataStore.shift();
}

function DtoString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

var numbers = [100,4,200,22,6];
var myDQue = new Dequeue();
var start = 0;

while(start < numbers.length){
    myDQue.enqueue(numbers[start]);
    start++
}
console.log(myDQue.dataStore);

console.log(myDQue.insertFront());

console.log(myDQue.toString());

*/












