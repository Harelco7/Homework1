 class Counter {

    
    constructor  () {
        this.counter = 0;
        
    }

     Initialize(counter) {
        this.counter = parseInt(counter);
        
    }

    Increment () {
        this.counter++;
    }
    
    Go(){
    for (let i = 0; i < this.counter; i++) {
        console.log(i);
        
        }
    }

 }


