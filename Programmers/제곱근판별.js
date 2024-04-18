function solution(n) {
    const sqrt = Math.sqrt(n)
    return (Number.isInteger(sqrt) === false) ? -1 : (sqrt+1)**2
}

console.log(solution(121))