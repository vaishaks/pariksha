ng build --prod --aot=false
Set-Location -Path .\dist
git init
git config user.email "pariksha@microsoft.com"
git add .
git commit -m "initial"
git remote add azure https://parikshadeploy:bunnycat43@parikshaweb-dev.scm.azurewebsites.net:443/parikshaweb-dev.git
git push -f azure master