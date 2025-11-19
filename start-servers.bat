@echo off
echo Starting Strapi backend...
cd /d "c:\strapi project\backend"
start "Strapi Backend" cmd /k "npm run dev"

echo Waiting for backend to start...
timeout /t 10 /nobreak

echo Starting Next.js frontend...
cd /d "c:\strapi project\frontend"
start "Next.js Frontend" cmd /k "npm run dev"

echo Both servers are starting...
echo Backend: http://localhost:1337
echo Frontend: http://localhost:3000
pause
