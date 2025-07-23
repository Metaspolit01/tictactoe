@echo off
echo ========================================
echo    Tic-tac-toe Game Server (Windows)
echo ========================================
echo.

echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo.
    echo Please install Python from: https://python.org
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    echo After installing Python, run this script again.
    pause
    exit /b 1
)

echo ✅ Python is installed
python --version
echo.

echo 🚀 Starting Tic-tac-toe server...
echo.
echo The game will open automatically in your browser.
echo Server will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

python server.py

echo.
echo Server stopped. Press any key to exit...
pause >nul 