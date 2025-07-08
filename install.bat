@echo off
echo ========================================
echo    Tic-tac-toe Game Setup Script
echo ========================================
echo.

echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo Please install Python from https://python.org
    echo Make sure to check "Add Python to PATH" during installation
    pause
    exit /b 1
)

echo ✅ Python is installed
python --version
echo.

echo Checking pip installation...
pip --version >nul 2>&1
if errorlevel 1 (
    echo ❌ pip is not available
    echo Please ensure pip is installed with Python
    pause
    exit /b 1
)

echo ✅ pip is available
echo.


echo Installing basic requirements...
echo Note: The game works without external dependencies!
echo.
echo Choose installation type:
echo 1. Basic (no external packages needed)
echo 2. Development (with testing and code quality tools)
echo.
set /p choice="Enter your choice (1 or 2): "

if "%choice%"=="1" (
    echo.
    echo ✅ Basic setup complete! No external packages needed.
    echo You can now run: python server.py
) else if "%choice%"=="2" (
    echo.
    echo Installing development dependencies...
    pip install -r requirements-dev.txt
    if errorlevel 1 (
        echo ❌ Failed to install development dependencies
        pause
        exit /b 1
    )
    echo ✅ Development dependencies installed successfully!
    echo.
    echo Available commands:
    echo - python server.py (start game server)
    echo - black . (format code)
    echo - flake8 . (lint code)
    echo - pytest (run tests)
) else (
    echo ❌ Invalid choice
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup complete! 🎉
echo ========================================
echo.
echo To start the game:
echo 1. Run: python server.py
echo 2. Or double-click: dockerstart.bat
echo.
echo The game will open automatically in your browser!
echo.
pause 