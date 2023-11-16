# Weather Forecast Application Documentation

## Introduction

This documentation provides an overview of the Weather Forecast application, including its features, technology stack, setup instructions, and additional details. The application is built using React and TypeScript, fetching weather data from the OpenWeatherMap API.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Setup Instructions](#setup-instructions)
4. [User Stories](#user-stories)
5. [Testing](#testing)
6. [Documentation](#documentation)
7. [Design Principles](#design-principles)
8. [Conclusion](#conclusion)

## 1. Features<a name="features"></a>

- View weather forecast for a submitted city.
  - Display current temperature, weather description, minimum and maximum temperatures, and wind speed.
- View history of searched cities.
- Click on a history item to fetch weather data for that city.
- Remove history search items.
- Optional: Undo a remove action.

## 2. Technology Stack<a name="technology-stack"></a>

- React
- TypeScript
- JavaScript library of your choice
- CSS frameworks as needed

## 3. Setup Instructions<a name="setup-instructions"></a>

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file at the root of the project and add your OpenWeatherMap API key:
   ```env
   REACT_APP_API_KEY=<your-api-key>
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## 4. User Stories<a name="user-stories"></a>

1. **View Weather Forecast:**
   - Enter a city name to see the weather forecast details.

2. **View Search History:**
   - Access a list of previously searched cities.

3. **Fetch Weather Data from History:**
   - Click on a history item to fetch the weather data for that city.

4. **Remove Search History:**
   - Remove previously searched cities from the history list.

5. **Optional: Undo Remove Action:**
   - Undo a remove action for a previously removed city (optional).

## 5. Testing<a name="testing"></a>

- The application follows Test-Driven Development (TDD) practices.
- Code coverage is considered, and tests are written using the React Testing Library.

## 6. Documentation<a name="documentation"></a>

- This documentation provides comprehensive information on setup, features, and user stories.
- Clear instructions on running, building, and extending the application are included.

## 7. Design Principles<a name="design-principles"></a>

- Code is designed following SOLID principles and design patterns.
- The code is readable, reusable, scalable, and maintainable.

## 8. Conclusion<a name="conclusion"></a>

The Weather Forecast application aims to provide users with a simple yet effective tool to check the weather forecast for different cities. Following best practices in React and TypeScript, the application is designed to be robust, maintainable, and user-friendly. If you have any questions or feedback, please reach out to the project contributors.

Thank you for using the Weather Forecast Application!
