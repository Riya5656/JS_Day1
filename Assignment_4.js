let rect={
    length:10,
    breadth:4,
    area1:area
}
let square={
    length:5,
    breadth:2,
    area2:area
}
function area(){
    let ar=this.length*this.breadth;
    return ar;
}

console.log(rect.area1())
console.log(square.area2())