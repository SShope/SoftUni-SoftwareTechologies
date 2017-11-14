function multiplyNumber(nums){
    let number1 = Number(nums[0]);
    let number2 = Number(nums[1]);
    let result = 0;

    if (number1 > number2){
        result = number1 / number2;
    }
    else{
        result = number1 * number2;
    }

    return result;
}

console.log(multiplyNumber([4, 2]));