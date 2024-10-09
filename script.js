/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((currEle) => {
        if(currEle.profession === "developer"){
            console.log(currEle);
        }

    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((data, index) => {
        if(data.profession === "developer"){
            console.log(data);
        }

    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newData =  {id:4, name:"susan", age:"20", profession:"intern"}
    arr.push(newData);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let data = arr.filter( (item) => {
        
            if(item.profession!="admin"){
                return true;
            }
        

    })
    console.log(data);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEntry = [
        { id: 4, name: "peter", age: "28", profession: "analyst" },
        { id: 5, name: "maria", age: "29", profession: "AI engineer" },
        { id: 6, name: "jack", age: "12", profession: "admin" },
    ]

    arr = arr.concat(newEntry);
    console.log(arr);

  }
