[![Build Status](https://travis-ci.org/Tendoo/cms.svg?branch=master)](https://travis-ci.org/Tendoo/cms)
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/license.svg" alt="License"></a>

# Cloud Breeze
Is a Laravel Package which provide a ready to use API Server for your PWA (Progress Web Application). This package comes with a building : 
- Oauth System (with related pages)
- Modules : which could extends the server features
- Build in UI : which helps you to mange users, modules and medias.

# How Does that works ?
The application essentially allow communication from API endpoints. This means even the built-in UI use the API endpoints to communicate with the application. So, some endpoints are public and could be accessed from any remote application (PWA), unless if explicitely block it (CORS). 

The system also ship flood security which basically block any user which exceed a specific amount of requests per minutes. You can also use the building reCaptcha feature to protect Authentication features (login, register, recovery).

# Installation
Since Cloud Breeze is a package, it could be installed using a composer command : 

`composer require tendoo/cloud-breeze`

# How doest that looks like ?
## 1 - Installation Welcome page
![Installation](https://user-images.githubusercontent.com/5265663/52858180-b749d480-3129-11e9-950a-c9216eacf0dc.png)

## 2 - Database Setup
![Database Setup](https://user-images.githubusercontent.com/5265663/52856253-34724b00-3124-11e9-8cb0-c27db5267d82.png)

## 3 - Application Setup
![Application Setup](https://user-images.githubusercontent.com/5265663/52856336-6c798e00-3124-11e9-8f82-b3fddc522018.png)

## 4 - Login Page
![Login Page](https://user-images.githubusercontent.com/5265663/52856378-887d2f80-3124-11e9-9fa6-6334901576f3.png)

## 5 - Media Page
![Media Page](https://user-images.githubusercontent.com/5265663/52856731-79e34800-3125-11e9-9dd0-c7152d15ab63.png)

## 6 - Full Image Preview
![Full Image Preview](https://user-images.githubusercontent.com/5265663/52856798-aac37d00-3125-11e9-98fa-d2aa4dd0657f.png)

## 7 - User Management Page
![User Management](https://user-images.githubusercontent.com/5265663/52856818-bb73f300-3125-11e9-8e75-733734e94e1e.png)

## 8 - Settings Page
![Settings Page](https://user-images.githubusercontent.com/5265663/52856871-dba3b200-3125-11e9-9010-624ba4e83545.png)

For more image check this [thread](https://github.com/Tendoo/cms/issues/7).
