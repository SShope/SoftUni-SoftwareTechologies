function parseJSON(students){

    let studentObj;
    for (let stud of students){

        studentObj = JSON.parse(stud);

        console.log("Name: " + studentObj.name);
        console.log("Age: " + studentObj.age);
        console.log("Date: " + studentObj.date);
    }
}

parseJSON(['{"name":"Gosho","age":10,"date":"19/06/2005"}', '{"name":"Tosho","age":11,"date":"04/04/2005"}']);