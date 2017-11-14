function solution(words){

    for (let i = 0; i < words.length; i++){
        if (words[i] == "Stop"){
            break;
        }
        console.log(words[i]);
    }
}

console.log(solution(["Pesho", "Gosho", "Stop", "ivan"]));