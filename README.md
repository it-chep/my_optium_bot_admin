
1) npm i

как запускать:
1) npm start - Запускает development-сервер

Сборка + запуск production-версии:
1) npm run build
2) npx serve -s build



env: 
REACT_APP_SERVER_URL_ADMIN
REACT_APP_CLIENT_URL

REACT_APP_USE_AUTH

REACT_APP_USE_MOCK

### use auth
либо 'false', либо любое другое знач ('')
например, REACT_APP_USE_AUTH=false

### use mock
либо 'true', либо любое другое знач ('')
например, REACT_APP_USE_MOCK=true