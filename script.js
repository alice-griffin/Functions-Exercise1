function getAreaOfCircle(radius) {
    let area = radius * radius * 3.14;
    return area;
}

console.log(getAreaOfCircle(5))

function getCircumferenceOfCircle(radius) {
    let circumference = 2 * (3.14) * radius;
    return circumference;
}

console.log(getCircumferenceOfCircle(2))

function getAreaOfSquare(side) {
    let area = side * side
    return area; 
}

console.log(getAreaOfSquare(10))

function getAreaOfTriangle(base, height) {
    let area = (base * height)/2;
    return area;
}

console.log(getAreaOfTriangle(12, 4))