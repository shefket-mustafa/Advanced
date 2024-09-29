function Rectangle(width, height, color) {
   
    color = color[0].toUpperCase() + color.slice(1);

  
    return {
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea() {
            return this.width * this.height;
        }
    };
}


let rect = Rectangle(4, 5, 'red');


console.log(rect.width);       // 4
console.log(rect.height);      // 5
console.log(rect.color);       // "Red"
console.log(rect.calcArea()); 


    

