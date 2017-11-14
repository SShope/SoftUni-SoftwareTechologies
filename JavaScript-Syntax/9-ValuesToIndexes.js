function solution(nums){
    let arrLength = Number(nums[0]);
    let arr = new Array(arrLength);

    for (let a = 0; a < arrLength; a++){
        arr[a] = 0;
    }

    for (let i = 1; i < nums.length; i++){

        let values = nums[i].split(" - ");
        arr[values[0]] = values [1];

    }

    for (let j = 0; j < arrLength; j++){
        console.log(arr[j])
    }
}

//console.log(solution([5, "0 - 3", "3 - -1", "4 - 2"]));