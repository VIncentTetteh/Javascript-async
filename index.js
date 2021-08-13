/*
 This is the modern way of fetching data from an api
 We are going to make use of the old way of fetching  data using XMLHttpRequest
 and  promises and the new way by using fetch with async and await

*/

//Old way of fetching data from and api using a promise with XMLHttpRequest
/* const getTodo = (resource) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else if (request.readyState === 4) {
                reject("could not find data");
            }
        });
        request.open("GET", resource);
        request.send();
    });
}
*/
/* getTodo('https://jsonplaceholder.typicode.com/todos/').then((data) => {
    console.log("first resolved promise: ", data);
    return getTodo('https://jsonplaceholder.typicode.com/todos/1');
}).then(data => {
    console.log("second resolved promise: ",data)
    return getTodo('https://jsonplaceholder.typicode.com/todos/2');
}).then(data => {
    console.log("third resolved promise: ",data)
}).catch((err) => {
    console.log("could not fetch resource",err)
});

*/


/*
New way of fetching data with a promise;
A promise is a method that start execution and ends at a
certain time and returns either a resolve of reject 

*/

// fetch('https://jsonplaceholder.typicode.com/todos/').then(response => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// });

/* 
    using async and await to fetch data
    this is more simple and modern
*/

const getTodo = async (resource) => {
    const response = await fetch(resource);
    if (response.status !== 200) throw new Error("connot fetch data");
    const data = await response.json();
    return data;
}
getTodo('https://jsonplaceholder.typicode.com/todos/').then(data => {
    console.log(data)
}).catch(err => {
    console.log("could not fetch resource", err)
});






