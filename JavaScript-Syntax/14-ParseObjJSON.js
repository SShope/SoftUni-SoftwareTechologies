function parseJSON(students){

    let studentObj;
    for (let stud of students){

        let starr = stud.split(" -> ");
        let name = starr[0];
        let age = starr[1];
        let grade = starr[2];

        studentObj = {"Name" : name,"Age" : age,"Grade" : grade};

        console.log("Name: " + studentObj.Name);
        console.log("Age: " + studentObj.Age);
        console.log("Grade: " + studentObj.Grade);
    }
}

parseJSON()