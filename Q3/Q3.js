class Clock {
    
    constructor (hour,min,sec,country) {
        this.hour=hour;
        this.min=min;
        this.sec=sec;
        this.country=country

    }

    Convert2sec(){
        let Hsec=3600;
        let Msec=60;

        let res = this.hour*Hsec+this.min*Msec+this.sec;
        return res
    }

    

 
      
      Show() {
        const HHMMDD = number=> {if (number<10) {
            return `0${number}`;
        }
    else{
        return `${number}`;
    }}

        const HH = HHMMDD(this.hour);
        const MM = HHMMDD(this.min);
        const DD = HHMMDD(this.sec);

    return `${HH}:${MM}:${DD} - ${this.country}`;
  }
      }

      const israelClock = new Clock(9, 3, 3, "Israel");

      console.log(israelClock.Show());        
