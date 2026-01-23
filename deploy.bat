@echo off
git init
git add .
git commit -m "Initial commit: BInsure project with features page"
git remote add origin https://github.com/aks-45/binsure.git
git branch -M main
git push -u origin main
pause