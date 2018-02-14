# Tendoo CMS
Tendoo CMS 5 is a new version of Tendoo CMS build with CodeIgniter.
The purpose of this project is to share with other the skills i've earned during my professional life on CodeCanyon and providing a
better tool to create web application with all outstanding Laravel/Vue2/Bootstrap-Material features.

# Getting Started
You can use this project as any regular laravel installation. 
## 1 - Add it to composer.json
To get started, all you have to do is add it to composer.json as following : 
`composer require tendoo/cms:dev-master`

## 2 - Publish Vendor
Now you're required to publish the vendors and select Tendoo/ServiceProvider.php
`php artisan vendor:publish`

## 3 - Serve Laravel and access to the setup page
Now all you have to do, to `php artisan serve`, then access to http://localhost:8000/do-setup (according to your port configuration).

## 4 - Login to the dashboard
Now you have the project installed. You can starte reading the documentation on https://tendoo-cms.readme.io/v5.0
The documentation is currently written as we add/remove feature. 

# How to get involved
Just fork the project and send your pull request :). 
The code is commented and we do follow PSR-2, PSR-4 Standars, hope you're skilled.

# Internal Commands
We've just recently turned this app into a Laravel package. So efore it was an entire Laravel application, but we wanted to ease 
setup as well as update, with all feature that composer actually offer. You might then see some bugs with some command below. If it's the case
please report it :)

## 1 - Generating a module
`php artisan make:module`

## 2 - Generating a migration for a module

`php artisan module:migration Foo`

Where 'Foo' is the module namespace. You'll have to input the release under which you would like to run a migration. You can input 1.0, as well as 10.5
Then you'll have to provide the migration file name, which will be used as the migration class name as well, like so :

`Create Some Migration Table`

You can create table and table columns like so :

`Create Some Migration Table --table=foo --schema=name:string|birth_date:datetime|role_id:integer`
How to enable and disable a module

`php artisan module:enable {ModuleNamespace}`

To disable a module

`php artisan module:disable {ModuleNamespace}`

Make sure to replace {ModuleNamespace}, by your current module namespace.

## 3 - Generating a controller for a module
`php artisan module:controller Foo WhatEverController`

## 4 - Deleting all controllers for a module
`php artisan module:controller Foo --delete=all`
You'll have to confirm your action.

## 5 - Creating Model for modules
`php artisan module:model {module_namespace} {model_name}`
Create a model on the module Model folder.

## 6 - Managing options from CLI
### A - Set a value
`php artisan option:set {key} --v={value}`
### B - Delete a value
`php artisan option:delete {key}`

this will launch the module generator command where you'll have to provide namespae, name, author and description. the default verison is set to 1.0.
We'll add more generator to generate : 
- Settings Pages
- Crud Pages
- Fields Options
...

# Handling Tendoo Errors
Tendoo generates his own errors and out of the box, a laravel application can't properly handle theses errors. In order to add support for theses errors, your `App\Http\Exceptions\Handler` must extends `Tendoo\Core\Exceptions\TendooHandler` which already extends `Illuminate\Foundation\Exceptions\Handler`.

`
namespace App\Exceptions;

use Exception;
use Tendoo\Core\Exceptions\TendooHandler;

class Handler extends TendooHandler
`

This parent class `...\TendooHandler` will add support for Tendoo specific exceptions, and you'll have the capacity in your own handle to extends it.

## Known Issue
When you attempt to reset the system using `php artisan reset`, make sure to delete the cookie on your browser. You might just try to disconnect before resetting. We we're unable so far to delete cookies before "resetting" the system.
