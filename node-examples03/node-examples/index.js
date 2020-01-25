const rect = require('./rectangle')
function solveRect(l, b) { //10 10
    console.log("Solving for rectangle with l =" + l + "and b =" + b);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR :", err.message);
        }
        else {
            console.log("the area of the rectangle of dimensions l =" + l + "and b =" + b + "is" + rectangle.area());
            console.log("the perimeter of the rectangle of dimensions l =" + l + "and b =" + b + "is" + rectangle.perimeter());
        }
    });
    console.log("this statement after the call to rect()");
};

solveRect(10, 10)