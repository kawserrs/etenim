fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
})
.then(data => {
    console.log(data); // Handle the JSON data
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});
