/* Write a program to find the area of a cylinder using
JavaScript objects(radius, height and the area function should be in the object).*/

const pi = 3.1415

let obj1 = {
    radius: 5,
    height: 10,

showArea: function () {
        return pi * obj1.radius ** 2 * obj1.height
    }
}

console.log(obj1.showArea())