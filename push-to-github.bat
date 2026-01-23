@echo off
echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Committing changes...
git commit -m "Initial commit: BInsure project with features page"

echo Adding remote repository...
set /p REPO_URL="Enter your GitHub repository URL: "
git remote add origin %REPO_URL%

echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo Done! Code pushed to GitHub.
pause