

class Queue{
    constructor(){
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
    }
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue(){
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item;
    }
    peek(){
        return this.items[this.headIndex]
    }
    getLength(){
        return this.tailIndex - this.headIndex
    }

}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let moveTrucks = [];
    let moveTrucksWeight = 0;
    let completeTrucks = [];
    let count = 0;

    // do {
    //     i = i + 1;
    //     result = result + i;
    // } while (bridge_length > moveTrucks.length && weight < moveTrucksWeight );
    
    return answer;
}

function goTruck(){

}

console.log(solution(2, 10, [7,4,5,6]))