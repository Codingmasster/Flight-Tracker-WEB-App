document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const currentLocation = document.getElementById('currentLocation').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    fetchFlights(currentLocation, destination, date);
  });
  
  async function fetchFlights(currentLocation, destination, date) {
    // Replace 'YOUR_API_KEY' and 'YOUR_API_ENDPOINT' with your actual API key and endpoint
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `YOUR_API_ENDPOINT?currentLocation=${currentLocation}&destination=${destination}&date=${date}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayFlights(data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  }
  
  function displayFlights(flights) {
    const flightsContainer = document.getElementById('flights');
    flightsContainer.innerHTML = ''; // Clear previous results
  
    if (flights.length === 0) {
      flightsContainer.textContent = 'No flights found.';
      return;
    }
  
    const ul = document.createElement('ul');
    flights.forEach(flight => {
      const li = document.createElement('li');
      li.textContent = `${flight.airline} - ${flight.flightNumber} - ${flight.departureTime}`;
      ul.appendChild(li);
    });
  
    flightsContainer.appendChild(ul);
  }
  