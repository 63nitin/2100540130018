// Function to fetch data from an API and calculate the average
async function fetchAndCalculateAverage(apiUrl) {
    try {
        // Step 1: Fetch the data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Step 2: Convert the response to JSON
        const data = await response.json();
        console.log(data)

        // Assuming the relevant numbers are in an array called 'numbers'
        // Modify this according to the structure of your API response
        const numbers = data.numbers; 

        // Step 3: Calculate the average
        if (numbers.length === 0) {
            console.log("No numbers to calculate average.");
            return;
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;

        console.log(`Average: ${average}`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
const apiUrl = 'http://localhost:9876/numbers/e'; 
fetchAndCalculateAverage(apiUrl);
