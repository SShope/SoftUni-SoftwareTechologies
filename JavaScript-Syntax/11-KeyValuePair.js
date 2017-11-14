function solution(pairs){
    let arr = [];
    for (let i = 0; i < pairs.length; i++){

        if(pairs[i].includes(" ") === false){
            return arr[pairs[i]] || "None";
        }
        let key = pairs[i].split(' ')[0];
        let value = pairs[i].split(' ')[1];
        arr[key] = value;
    }
}

console.log(solution(['3 bla', '3 alb', '4']));