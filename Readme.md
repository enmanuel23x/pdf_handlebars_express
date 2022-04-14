# Steps to install
1. Clone the repository
2. Access the repository root folder
3. Run the install command for npm packages
``` 
npm install --verbose 
```

# Commands/scripts to run the project
#### production mode
``` 
npm start
```
#### development server mode
```
npm run dev
```

# Routes.
- GET 
    - {{hots}}/pdf/generate/:name (pdf)
    - {{hots}}/pdf/render/:name (html - development server)

# Other data
- Default PORT 2000.
- Default LIVE_PORT 35729 (For development server only).
- Default Host [http://localhost:2000](http://localhost:2000)


# Packages
``` json
{
    "dependencies": {
        "dotenv": "^16.0.0",
        "express": "^4.17.3",
        "handlebars": "^4.7.7",
        "handlebars-pdf": "^1.0.1",
        "hbs": "^4.2.0",
        "html-pdf-node": "^1.0.8",
        "morgan": "^1.10.0"
    },
    "devDependencies": {
        "connect-livereload": "^0.6.1",
        "livereload": "^0.9.3",
        "nodemon": "^2.0.15"
    }
}
```