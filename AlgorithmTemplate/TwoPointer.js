//내장 sort : O(nlogn)
//Two Pointer 접근방법 - 정렬된 상태에서 사용, 값을 비교하면서 포인터를 조절

function TwoPointer(list,target){
    //리스트 정렬
    list.sort();

    //포인터 2개 설정
    let left = 0;
    let right = list.length - 1

    //left와 right가 같지 않은 동안에만 반복
    while(left < right){
        if(list[left] + list[right] > target){
            //목표보다 값이 큰 경우 - 큰 값을 더 작은 값으로 이동
            right--;
        }else if(list[left] + list[right] < target){
            //목표보다 값이 작은 경우 - 작은 값을 더 큰 값으로 이동
            left++;
        }else{
            //목표와 일치하는 경우 - true 반환
            return true;
        }
    }

    //반복이 끝날때까지 true가 반환되지 않은 경우 - false 반환
    return false;
}