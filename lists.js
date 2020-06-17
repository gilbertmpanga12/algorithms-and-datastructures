// Abstract Data Type -> ADT
/*
1. listSize
2. pos
3. length
4. clear
5. toString
6. getElement
7. insert
8. append
9. remove
10. front
11. end
12. end
13. next
14. currPos
15. moveTo
*/

function List(){
this.listSize = 0;
this.pos = 0;
this.dataStore = [];
this.clear = clear;
this.find = find;
this.toString = toString;
this.insert = insert;
this.append = append;
this.remove = remove;
this.front = front;
this.end = end;
this.prev = prev;
this.next = next;
this.length = length;
this.currPos = currPos;
this.moveTo = moveTo;
this.getElement = getElement;
this.length = length;
this.contains = contains;
}

function append(element){
this.dataStore[this.listSize++] = element;
}

function find(element){
    for(let i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize; // modifies and modifies exact value
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}

function insert(element, after){
    var insertPos = this.find(element);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1,after,element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0; // new hack
}

function contains(element){
   for(var i = 0; i < this.dataStore.length; i++){
       if(this.dataStore[i] == element){
          return  true;
       }
   }
   return false;
}


// transversing a list
function front(){
    this.pos = 0;
}

function end() {
    this.pos = this.listSize -1;
}

function prev(){
    if(this.pos >= 0){
       --this.pos;
    }

}

function next(){
     if(this.pos <= this.listSize - 1){
       ++this.pos;
    }

}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}


var names = new List();

names.append({name: "Sean Kingston"});
names.append({name: "David Beckam"});
names.append({name: "King Beckinsale"});
names.append({name: "Sir Edward Blanton"});
names.append({name: "Alan Turing"});
names.append({name: "Kevin Costner"});
names.append({name: "Arnold Schwarzennegger"});

/*
Front 
for(names.front(); names.currPos() > 0; names.next()) {
console.log(names.getElement());}

Backwards
for(names.end(); names.currPos() < 0; names.prev()) {
console.log(names.getElement());}
*/


for(names.front(); names.currPos() < names.length(); names.next()) {
console.log(names.getElement());
}












