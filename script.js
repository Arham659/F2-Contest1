/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let arrStud = arr.map(function(element)
    {
        if(element.marks >= 50)
        {
          console.log(element)
        }
    })
  }
  
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    let arrStud1 = arr.forEach(function(array)
    {
        if(array.marks >= 50)
        {
          console.log(array)
        }
    })
  }
  
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45})
    console.log(arr)
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let failedstudent = arr.filter(function(array)
    {
      if(array.marks >= 50 )
      {
        return array
      }
    })
  
    console.log(failedstudent);
  }
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let userarr = [
        {id: 4, name: "Arham", age: "23", marks: 61},
        {id: 5, name: "Raju", age: "26", marks: 93},
        {id: 6, name: "Amaan", age: "29", marks: 29}
  ];

  let mergedarr = arr.concat(userarr)
  console.log(mergedarr)

  }
