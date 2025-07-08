@echo off
setlocal
8000
REM === Step 1: Change to the script directory ===
cd /d %~dp0

REM === Step 2: Check for Docker ===
docker --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Docker is not installed. Please install Docker Desktop from:
    echo https://www.docker.com/products/docker-desktop
    pause
    exit /b
)

REM === Step 3: Start Docker Desktop if it's not running ===
docker info >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [INFO] Starting Docker Desktop...
    start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    echo [INFO] Waiting for Docker to start...
    timeout /t 15 >nul
)

REM === Step 4: Build and start docker-compose project ===
echo [INFO] Building and running docker-compose...
docker-compose up --build -d

REM === Step 5: Open Chrome to the app URL ===
echo [INFO] Opening in Chrome...
start chrome http://localhost:8000/index.html
echo http://localhost:8000/index.html


REM === Step 6: Prompt user for action ===
:CHOICE
echo.
set /p action="Type STOP to stop container, DOWN to delete: "
if /i "%action%"=="STOP" (
    docker-compose stop
) else if /i "%action%"=="DOWN" (
    docker-compose down
) else (
    echo Invalid input.
    goto CHOICE
)

echo [DONE] Script finished.
pause


