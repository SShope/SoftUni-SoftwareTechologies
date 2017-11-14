function solution(pairs){

    let arr = [];
    for (let i = 0; i < pairs.length; i++){

        if(pairs[i].includes(" ") === false){
            if (arr[pairs[i]]) {
                return printArr(arr[pairs[i]]);
            }
            else{
                return "None";
            }
        }

        let key = pairs[i].split(' ')[0];
        let value = pairs[i].split(' ')[1];
        if (!arr[key]){
            arr[key] = [];
        }
        arr[key].push(value);
    }

    function printArr(arr){
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

solution(['3 bla', '3 alb', '4']);
