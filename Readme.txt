# Weather WebApp

This is a simple Weather WebApp that allows users to search for the current weather of a city. It fetches data from the OpenWeatherMap API and displays the temperature, humidity, weather condition, and an icon representing the weather condition. 

## Features:
- **City Search:** Users can enter a city name and get current weather data.
- **Weather Information Display:** Shows the temperature, humidity, weather conditions, and an associated icon.
- **Error Handling:** Handles errors such as invalid city names or failed API requests and displays appropriate error messages.
- **Responsive Design:** The app is responsive and works well on both desktop and mobile devices.

## Prerequisites:
- A web browser to run the app locally.
- An API key from OpenWeatherMap to fetch weather data.

## Getting Started:

### 1. Clone the Repository:
bash
git clone https://github.com/your-username/weather-webapp.git
cd weather-webapp


### 2. Obtain an API Key:
- Sign up for a free account on [OpenWeatherMap](https://openweathermap.org/).
- Get your API key from the dashboard after signing up.

### 3. place the API Key:

const apiKey = 'cdb36aac01e50efe78f5825fba2ccf3d';  


### 4. Running the App:
- Open `index.html` in a web browser:

open index.html


### 5. How to Use:
- Enter a city name in the input field.
- Click the "Get Weather" button to fetch and display the weather information.
- If the city name is valid, it will show the temperature, humidity, and weather conditions. If the city is not found or there's an error, an appropriate error message will be displayed.

## Code Explanation:

### HTML (`index.html`):
- The structure of the Weather WebApp, including a form for entering the city name, a button to submit, and sections to display the weather information and errors.

### CSS (`style.css`):
- Styles the layout of the app. The design is clean and simple, with a focus on user experience. The app is responsive, ensuring it looks good on both mobile and desktop devices.

### JavaScript (`script.js`):
- Handles the logic of fetching data from the OpenWeatherMap API using `XMLHttpRequest`. 
- Processes the fetched data and updates the UI accordingly, showing weather details like temperature, humidity, condition, and an icon.
- Error handling is implemented to display appropriate messages when the city is not found or if there’s an issue fetching data.

## Error Handling:
- **City not found:** Displays an error message when an invalid city name is entered.
- **Error fetching data:** If the API request fails or there's a network issue, an error message is shown.

## Technologies Used:
- **HTML:** Used for the basic structure of the app.
- **CSS:** Provides styling and ensures the app is responsive.
- **JavaScript:** Handles API calls, DOM manipulation, and error handling.
- **OpenWeatherMap API:** Provides the weather data that powers the app.

## Optional Features (Bonus):
- **Geolocation:** You can enhance the app with geolocation features to automatically show weather data based on the user's current location.
- **Temperature Unit Toggle:** You can implement a toggle feature for switching between Celsius and Fahrenheit.

## Contact:
For any inquiries or contributions, feel free to open an issue.
