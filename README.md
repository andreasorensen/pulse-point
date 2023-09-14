# Pulse Point

![Npm package version](https://badgen.net/npm/v/express)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

Pulse Point is a cutting-edge news aggregator app that delivers top headlines from various categories, sourced directly from NewsAPI.

## Table of Contents
- [Live Demo](#live-demo)
- [Features](#features)
- [API](#api)
- [Getting Started](#getting-started)
- [Testing Instructions](#testing-instructions)
- [Components](#components)
- [Contributing](#contributing)

## Live Demo
[Click here](ADD DEMO LINK) to view Pulse Point in action.

## Features
- Real-time news headlines
- News categorization
- Detailed news articles view

## API
Pulse Point utilizes the [NewsAPI](https://newsapi.org/) to fetch top headlines across various categories. Ensure you have your API key set up as described in the [Environment Variables](#environment-variables) section.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm (comes with Node.js)

If not, you can download them from [nodejs.org](https://nodejs.org/).

### Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-github-username/pulse-point.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd pulse-point
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

### Starting the App

1. Navigate to the project directory:
    ```bash
    cd pulse-point
    ```

2. Run the app:
    ```bash
    npm start
    ```
This will start the app and open it in your default browser. If it doesn't open automatically, you can visit [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory and fill in your API key:

    ```bash
    REACT_APP_NEWS_API_KEY=YOUR_API_KEY_HERE
    ```

## Testing Instructions

### Unit Tests

1. **Install Dependencies**
    ```bash
    npm install
    ```

2. **Run Unit Tests**
    ```bash
    npm test
    ```

### End-to-End (E2E) Testing with Cypress

1. **Open Cypress Test Runner**
    ```bash
    npx cypress open
    ```

2. **Run All Tests**
   - In the Cypress Test Runner, click the "Run all specs" button.

3. **Run Specific Test**
   - In the Cypress Test Runner, click on the specific test file you want to run.

For more details on writing and running tests with Cypress, refer to the [Cypress Documentation](https://docs.cypress.io/).

## Components

- **Navbar**: Allows users to navigate between different categories and the home page.
- **HomePage**: Displays the top news headlines.
- **ArticleDetail**: Shows detailed information about a selected article.
- **ArticlesByCategory**: Lists articles based on the selected category.

## Contributing

Contributions, issues, and feature requests are welcome! If you'd like to contribute, please fork the repository and create a new pull request.

