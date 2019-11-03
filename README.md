[![Build Status](https://travis-ci.org/Tendoo/cms.svg?branch=master)](https://travis-ci.org/Tendoo/cms)
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/license.svg" alt="License"></a>

# Cloud Breeze : Why this new project
This package has been create to extend laravel to a modulable Framework. Usually for Laravel, most of the time only one application is created per installation. If the application is huge, it might consist into small several features that are somehow linked together. While this might work for anyone willing to create a single application, it becomes more hard when it comes to create a very large ecosystem with a bunch of differents features that might not be at all related. 

Cloud Breeze ensure you to have a moduleable system with (obviously) modules, that has their own and isolated entities : Controllers, Api & Web routes, Migrations, Service Providers, Email, Views... It comes with some extra features on top of the one already provided by Laravel to ease the developpment as much as possible.

- Dedicated Authentication Pages (registration, login, recovery)
- Dedicated Dashboard 
  - User Management
  - Options Management
  - Media Management (images...)
  - Modules Management (install, enable, disable)
  - Applications Management (Let you define API keys for secured API endpoints).
 - Oauth Enpoints 
 
 These are provided with on the laravel package extensions. However, we have decoupled the ui from the backend and so, you can invoke (import) some of the frontend elements such as: 
 
 - Fields, 
 - ValidationGenerator
 - AuthService
 - CoreService
 - FieldsServices
 - FormsServices
 - Crud Component
 - Dialog Component
 - ...
 
 These ensure you to quickly have a working UI that interact directly with Cloud Breeze and all his modules. You should note that the UI of cloud breeze is build with Angular 8, Angular Material and some others dependencies. You can require the package on your environment using npm
 
 `npm i @cloud-breeze/core`
 
 
 

# Installation
Since Cloud Breeze is a package, it could be installed using a composer command : 

`composer require tendoo/cms`

Then, you need to publish the assets of Cloud Breeze by running the following command : 

`php artisan tendoo:publish`

The only action you need now, is to access to the home page of your project to start using it.

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
