let nums = [4,1,9,7,3,2]
let target = 14

//완전탐색: 시간초과 - 포기
function list01(nums, target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= target){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return true
                }
            }
        }
    }
    return false
}

//내장 sort : O(nlogn)
//Two Pointer 접근방법 - 정렬된 상태에서 쓰임
function list02(nums, target){
    let p1 = 0;
    let p2 = nums.length - 1

    while(0){
        if(nums[p1] + nums[p2] === target){
            return true;
            break;
        }
    }
}



console.log(list01(nums, target))
