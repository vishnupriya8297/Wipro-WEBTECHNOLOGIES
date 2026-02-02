//fetch -API in JavaScript is used to make network requests to retrieve or send data to a server. 
// It is a modern replacement for the older XMLHttpRequest (XHR) method and provides a more powerful and flexible way to work with HTTP requests and responses.
// The fetch API is built into modern web browsers and is based on Promises, which allows for easier handling of asynchronous operations.
//Asyncchronous Programming: The fetch API is designed to work asynchronously, meaning that it does not block the execution of other code while waiting for a response from the server. This allows for a more responsive user experience, as the application can continue to function while waiting for data to be retrieved or sent.
// Basic Syntax: The basic syntax of the fetch API involves calling the fetch() function with a URL as its argument. This function returns a Promise that resolves to the Response object representing the response to the request.
// Example:
//fetch keyword is used to make a GET request to the specified URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))