// Mekanisme Try-Catch
// JSON Object
    // {
    //      "name": "fazrin",
    //      "age": 25
    // }
    const data = '{"name": "fazrin","age": 25}'
    
try {
    const user = JSON.parse(data);
    console.log("name:", user.name);
    console.log("age:", user.age);
    // statement
}catch (err){
    // error handling
}