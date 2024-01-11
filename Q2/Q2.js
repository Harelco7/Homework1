
class Duck {

    constructor (name, color, age, weight,img)
    {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.img = img;
       
    }

    Show() {

        return `name: ${this.name} , color: ${this.color} , age: ${this.age} , weight: ${this.weight} , img: ${this.img} ,`;

    }

    Quack () {

        let Length = this.age*this.weight/2;

        for (let i = 0; i < Length; i++) {
            if (i<3) {
                console.log("sound")
            }
            console.log("Quack")
        }

      
    }

}





