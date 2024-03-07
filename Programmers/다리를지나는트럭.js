

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
    
    let time = 0;

    let bridge = Array.from({length: bridge_length}, () => 0);
    let bridge_sum = 0;

    time += 1
    bridge.shift()
    bridge_sum += truck_weights[0]
    bridge.push(truck_weights.shift())

    while (bridge_sum > 0){

        time += 1;
        bridge_sum -= bridge.shift()

        if(truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight){
            bridge_sum += truck_weights[0]
            bridge.push(truck_weights.shift())
        }else{
            bridge.push(0)
        }
    }

    return time;
}

console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))