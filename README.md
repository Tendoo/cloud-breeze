[![Build Status](https://travis-ci.org/Tendoo/cms.svg?branch=master)](https://travis-ci.org/Tendoo/cms)
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/license.svg" alt="License"></a>

# Tendoo Api Server
We do believe in PWA (Progressive Web Application). The purpose of this application, is to create a ready to use API server. It has been build as a laravel package and ship a basic UI for managing the data. The frontend has been build with Angular & Angular Material.

# Getting Started
The project can be installed as any regular laravel package. You can run the following command to start quickly.

`composer require tendoo/cms:dev-api-server`

This should install the application along with the angular version. Not, you need to publish the access. By assets you should understand the necessary js, css and html files.

`php artisan tendoo:publish`

The final step is to access to the application and proceed to the installation. 

# installation
Tendoo CMS only works now with MySQL or equivalent database. You need to create a database and have the credentials ready. Once on the application (while it's not yet installed), you'll see a snackbar notification inviting you to install it. Just click on `INSTALL` and proceed.

