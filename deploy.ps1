ng build --prod
Set-Location -Path .\dist
git init
git add .
git commit -m "initial"
git remote add azure https://parikshadeploy:bunnycat43@parikshaweb-dev.scm.azurewebsites.net:443/parikshaweb-dev.git
git push -f azure master