# Tic Tac Toe Game

A fully functional, modern Tic-tac-toe game built with HTML, CSS, and JavaScript. Features a beautiful UI with animations, score tracking, and accessibility features.

## Features

- **Modern UI**: Beautiful gradient design with smooth animations
- **Score Tracking**: Keeps track of wins for both players across sessions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support
- **Animations**: Smooth pop-in effects for moves and winning combinations
- **Local Storage**: Scores persist between browser sessions
- **Game Controls**: Reset current game or start a completely new game

## How to Play

1. **Start the Game**: Open `index.html` in any modern web browser
2. **Take Turns**: Players X and O take turns clicking on empty cells
3. **Win Condition**: Get three of your marks in a row (horizontally, vertically, or diagonally)
4. **Game End**: The game ends when someone wins or all cells are filled (draw)

## Controls

- **Mouse**: Click on any empty cell to make a move
- **Keyboard**: Use Tab to navigate and Enter/Space to select cells
- **Reset Game**: Clears the current board but keeps scores
- **New Game**: Resets both the board and scores to zero
- **Escape**: Close the game over modal

## File Structure

```
tictacktoe/
├── index.html       # Main HTML structure
├── styles.css       # Modern CSS styling and animations
├── script.js        # Game logic and functionality
├── start-server.bat # to start the game automatically
├── install.bat      # to install dependencies automatically
├── requriments.txt  # to install dependencies if necessary
├── server.py        # to start game in terminal
└── README.md        # This file for all the information about the project 

```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+


### Visual Design
- Gradient background with glassmorphism effect
- Smooth hover animations on cells and buttons
- Color-coded players (X = Red, O = Blue)
- Winning combination highlighting with green gradient

### Game Logic
- Prevents invalid moves (clicking on filled cells)
- Automatic win detection for all 8 possible winning combinations
- Draw detection when board is full
- Player turn switching with status updates

### Score System
- Persistent score tracking using localStorage
- Separate scores for X and O players
- Visual score display in the header

### Accessibility
- Full keyboard navigation support
- Focus indicators for all interactive elements
- Screen reader friendly markup
- High contrast mode support

## Getting Started

### Option 1: Direct File Opening (Simplest)
1. Download or clone the files to your local machine
2. Open `index.html` in your web browser
3. Start playing immediately!

### Option 2: Docker (Recommended for Production)
For containerized deployment:

#### Using Docker Compose (Easiest)
```bash
# Build and start the container
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

#### Using Docker Directly
```bash
# Build the image
docker build -t tic-tac-toe .

# Run the container
docker run -p 8000:8000 tic-tac-toe

# Or run in background
docker run -d -p 8000:8000 --name tic-tac-toe-game tic-tac-toe
```

### Option 3: Localhost Server (Development)
For the best development experience, run the game on a local server:

#### Quick Setup (Windows)
1. Double-click `install.bat` to run the setup script
2. Choose your installation type (Basic or Development)
3. Double-click `start-server.bat` to start the game

#### Using Python (Built-in)
```bash
# Method 1: Use the provided server script
python server.py

# Method 2: Use Python's built-in server
python -m http.server 8000
```

#### Using Node.js
```bash
# Install dependencies (optional)
npm install

# Start with live-server (auto-reload)
npm run live-server

# Start with http-server
npm run http-server
```

#### Using Windows Batch File
1. Double-click `start-server.bat`
2. The game will automatically open in your browser

### Installation Options

#### Basic Installation (No Dependencies)
The game works with just Python's built-in modules - no external packages needed!

#### Development Installation (Optional)
For enhanced development experience:
```bash
# Install development dependencies
pip install -r requirements-dev.txt

# Available tools:
# - black (code formatter)
# - flake8 (linter)
# - pytest (testing)
# - mypy (type checking)
```

### Access the Game
Once the server is running, open your browser and go to:
- **http://localhost:8000** (main directory)
- **http://localhost:8000/index.html** (direct game link)

## Why Use Localhost?

Running on localhost provides several benefits:
- **Better Security**: Some browsers restrict features when opening files directly
- **CORS Support**: Enables proper cross-origin resource sharing
- **Development Tools**: Better debugging and developer tools access
- **Future Features**: Ready for adding backend features or APIs

## Customization

You can easily customize the game by modifying:

- **Colors**: Edit the CSS variables in `styles.css`
- **Animations**: Adjust timing and effects in the CSS keyframes
- **Game Logic**: Modify win conditions or add new features in `script.js`
- **UI Layout**: Change the structure in `index.html`

## License

This project is open source and available under the MIT License. 