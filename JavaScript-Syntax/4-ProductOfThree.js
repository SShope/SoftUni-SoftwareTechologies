function multiplyNumber(nums){

    let number1 = Number(nums[0]);
    let number2 = Number(nums[1]);
    let number3 = Number(nums[2]);
    let negativeCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 0){
            negativeCount++;
        }
        if(nums[i] === 0){
            return "Positive";
        }
    }

    if (negativeCount % 2 === 0)
    {
        return "Positive";
    }
    else{
        return "Negative";
    }
}

console.log(multiplyNumber([-1, 0, 0]));
