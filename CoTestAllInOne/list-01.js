let nums = [4,1,9,7,3,5,2]
let target = 14

//완전탐색: O(n^2)로 시간초과 - 포기
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
//Two Pointer 접근방법 - 정렬된 상태에서 사용
function list02(nums, target){
    nums.sort();

    let left = 0;
    let right = nums.length - 1

    while(left < right){
        if(nums[left] + nums[right] > target){
            right--;
        }else if(nums[left] + nums[right] < target){
            left++;
        }else{
            return true;
        }
    }

    return false;
}



console.log(list02(nums, target))
