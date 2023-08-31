// 1. How to compare two JSON have the same properties without order?
// a. var obj1 = { name: "Person 1", age:5 };
// b. var obj2 = { age:5, name: "Person 1" };

// declared a object named obj1 with attributes of a particular order.
var obj1 = { 
    name: "Person 1", 
    age:5
};
// declared a object named obj2 with same attributes of obj1 but with a mixed up order.
var obj2 = {
    age:5, 
    name: "Person 1"
};
// JSON.stringify will convert a js object to a JSON string, by using === we compare the two objs
/*if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log(true);
} else {
    console.log(false);
}*/
// Output = false // expected result is true
// the above code returns result as fail because it solely depends on the order of the object attributes
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){ //condition for checking attribute property names of both objects
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(flag);
// Output = true 
// this will work bcoz we are making use of for in loop and extracting the index keys from object and length as well