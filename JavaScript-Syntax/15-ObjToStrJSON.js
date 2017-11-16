function toJSON(studentProperties){

    let objStudent = {};
    for (prop of studentProperties){

        let currProp = prop.split(' -> ');
        if (currProp[0] === "age" || currProp[0] === "grade"){
            objStudent[currProp[0]]=Number(currProp[1]);
        }
        else {
            objStudent[currProp[0]]=currProp[1];
        }

    }
    let strJSON = JSON.stringify(objStudent);
    console.log(strJSON);
}

toJSON(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia]']);