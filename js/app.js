//Creating my first blockchain using javascript

class Block{
    constructor(timestamp = "", data =[]){
        this.timestamp = timestamp;
        //this.data should contain information like transactions.
        this.data = data;
    }
}