
# Sudoku Solver
https://github.com/user-attachments/assets/572be132-6dcf-48bf-8afa-f9e42680f9f1
## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Data Structures and Algorithms](#data-structures-and-algorithms)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The **Sudoku Solver** is a web application designed to solve any valid Sudoku puzzle in real-time. The project is built using HTML, CSS, JavaScript, recursion, and backtracking algorithms. Additionally, it integrates with an external API to generate Sudoku puzzles automatically, saving users the hassle of manual input.

The interface allows users to either input a custom puzzle or generate a random puzzle through the API. Upon pressing "Solve," the backtracking algorithm will attempt to find a solution.

## Features
- Input a custom 9x9 Sudoku puzzle.
- Generate random puzzles using an external API.
- Visualize the step-by-step solving process using recursion and backtracking.
- Option to clear the puzzle and start over.
- Responsive design for both desktop and mobile.
- User-friendly UI to interact with the grid.
- Validation of puzzle inputs (checks if the input is a valid Sudoku configuration).

## Technologies Used
- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout, making the application responsive.
- **JavaScript**: Core logic for the Sudoku solver, UI interactions, and API integration.
- **API**: To fetch pre-generated Sudoku puzzles.
- **DSA**: Recursion and backtracking to solve the Sudoku puzzle.

## Data Structures and Algorithms
### Recursion and Backtracking
The core algorithm to solve the Sudoku puzzle uses recursion and backtracking:
1. **Recursion**: Used to explore each possibility in the Sudoku grid, cell by cell.
2. **Backtracking**: If a particular path doesn't lead to a solution, the algorithm backtracks and tries a different path.

#### Algorithm Steps:
1. Find an empty cell.
2. Try placing digits (1-9) in the cell.
3. Check if the digit placement is valid.
4. Recursively attempt to solve the remaining grid.
5. If placing a digit doesn't lead to a solution, reset the cell (backtrack) and try the next digit.

### Time Complexity
The backtracking algorithm has a worst-case time complexity of O(9^(n)), where n is the number of empty cells.

## API Integration
The Sudoku Solver project utilizes an external API to generate random Sudoku puzzles.

### API Features:
- Fetches pre-generated puzzles of varying difficulty levels.
- Returns puzzles in JSON format with empty cells marked as `0`.

### API Integration Example:
The following code snippet demonstrates how the API is used to populate the Sudoku grid:
```javascript
fetch('https://api.example.com/sudoku/generate')
  .then(response => response.json())
  .then(data => {
    // Populate the grid with the API-generated puzzle
    fillGridWithPuzzle(data.puzzle);
  })
  .catch(error => console.error('Error fetching puzzle:', error));
