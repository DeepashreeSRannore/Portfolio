@echo off
echo ========================================
echo   Cleaning Up Portfolio Folder
echo ========================================
echo.
echo This will delete helper/documentation files
echo but keep all essential portfolio files.
echo.
echo Files to DELETE:
echo - All .bat helper scripts
echo - Documentation .md files (except README.md)
echo - Helper scripts (.ps1, .js)
echo - Duplicate image file
echo.
echo Files to KEEP:
echo - package.json, vite.config.js, index.html
echo - src/ folder (all React code)
echo - public/ folder (assets)
echo - .gitignore, vercel.json, netlify.toml
echo - README.md
echo.
pause

cd /d "%~dp0"

echo.
echo Deleting helper batch files...
del /q START.bat START_HERE.bat START_FIXED.bat RUN_NOW.bat RUN_PORTFOLIO.bat QUICK_DEPLOY.bat 2>nul
del /q FIX_PATH.bat ADD_YOUR_IMAGE.bat PUSH_TO_GITHUB.bat PUSH_TO_GITHUB_FIXED.bat 2>nul
del /q PUSH_WITH_TOKEN.bat FIX_AND_PUSH.bat CLEANUP_PORTFOLIO.bat 2>nul

echo Deleting documentation files...
del /q ADD_IMAGE.md IMAGE_SETUP.md DEPLOYMENT.md DEPLOYMENT_GUIDE.md DEPLOY_NOW.md 2>nul
del /q DO_THIS_NOW.md INSTALL_AND_PUSH.md INSTALL_AND_RUN.md INSTALL_NODEJS.md 2>nul
del /q QUICK_START.md README_FIRST.txt README_START_HERE.txt NEXT_STEPS.md 2>nul
del /q FIX_PUSH_ERROR.md MANUAL_PUSH_STEPS.md MANUAL_OPTIONS.md MANUAL_COMMANDS.txt 2>nul
del /q COPY_PASTE_THESE_COMMANDS.txt START_DEPLOYMENT.md 2>nul

echo Deleting helper scripts...
del /q setup.ps1 check-setup.js STEP_BY_STEP_FIX.ps1 2>nul

echo Deleting duplicate image...
del /q profile_image.jpeg 2>nul

echo.
echo ========================================
echo   Cleanup Complete!
echo ========================================
echo.
echo Remaining files should be:
echo - Essential config files
echo - src/ folder (React code)
echo - public/ folder (assets)
echo.
echo You can now commit and push easily!
echo.
pause
