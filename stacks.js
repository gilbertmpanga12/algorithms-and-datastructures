/*
- A stack is a list of elements that are accessible only from one end of the list, which is
called the top .
- it follows last-in,first-out
ADT
pop
push
peek
top: keeps track of the stack, indicating position of array at top of stack
*/

function Stack(){
this.dataStore = [];
this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top-1];
}

function length(){
    return this.top;
}

function clear(){
    this.top = 0;
}

// convert numbers into other bases 
function mulBase(num, base){
var stack = new Stack();

do{
    stack.push(num % base);
    num = Math.floor(num /= base);
}while(num > 0);

var converted = "";

while(stack.length() > 0){
    converted += stack.pop();
}

return converted;
}

// console.log(mulBase(125, 8));

function checkIfPalindrome(word){
    var stack = new Stack();
    var start = 0;
    while(start < word.length){
    stack.push(word[start]);
    start++;
    }
  
    var palindrome = "";
    
    while(stack.length() > 0){
        palindrome += stack.pop();
    }
    
    if(palindrome == word){
       console.log(palindrome);
       return true;
    }
  
    return "Not a palindrome";
}

// calculating factorial
function fact(n){
    var s = new Stack();
    while(n > 1){
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    
    return product;
}




// Excercises

function arithmeticBalancer(mathExpression){
// 2.3 + 23 / 12 + 3.14159* .24)
// found the ( with a number just throw an error 
// & indicate potential positions
    if(typeof(mathExpression) != "string"){
        throw("Enter expression as strings");
    }
    var openingParenth = mathExpression.indexOf("(");
    var closingParenth = mathExpression.indexOf(")");
    var stack = new Stack();
    var start = 0;
    var result = "";
    if(openingParenth != -1){
        var chopWithStart = mathExpression.substring(openingParenth,);
        while(start < chopWithStart.length){
            stack.push(chopWithStart[start]);
            start++;
        }
        console.log(`Missing opening parenthesis near ${stack.peek()} in ${mathExpression}`);
        
    }else{
        var chopWithEnd = mathExpression.substring(0,closingParenth);
        while(start < chopWithEnd.length){
            stack.push(chopWithEnd[start]);
            start++;
        }
        
        do{
            result += stack.pop();
        }while(stack.length() > 0);
        
        console.log(result);
        console.log(`Missing closing parenthisis near ${result[0]} in ${mathExpression}`);
    }
    
}


console.log(arithmeticBalancer("2.3 + 23 / 12 + 3.14159* .24)"));












