//크기가 작은 부분문자열

function solution(t,p){
    var answer = 0;
    let len = p.length;
    for(let i = 0; i <= t.length - len; i++){
        if(Number(t.substr(i,len)) <= Number(p)) answer++
    }
    return answer;
}