function solution(input){

    let newArr = new Array();

    for(let i = 0; i < input.length; i++){

        let values = input[i].split(' ');
        let command = values[0];
        let element = Number(values[1]);

        if (command == "add"){
            newArr.push(element);
        }
        else if(command == "remove"){
            newArr.splice(element, 1);
        }

    }
    for(let j = 0; j < newArr.length; j++){
        if (newArr[j] == "undefined"){
            continue;
        }
        console.log(newArr[j]);
    }

}

console.log(solution(["add 3", "add 5", "remove 2", "remove 0", "add 7"]));