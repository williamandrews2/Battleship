export class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits += 1;
        if(this.length - this.hits === 0){
            this.sunk = true;
        }
    }

    isSunk(){
        return (this.length - this.hits) === 0 ? true : false;
    }
}