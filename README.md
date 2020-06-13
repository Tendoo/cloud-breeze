[![Build Status](https://travis-ci.org/Tendoo/cms.svg?branch=master)](https://travis-ci.org/Tendoo/cms)
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/tendoo/cms"><img src="https://poser.pugx.org/tendoo/cms/license.svg" alt="License"></a>

[Internal Screenshots](https://github.com/Tendoo/cloud-breeze/wiki/Internal-Screenshots)

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

### Download Package
Since Cloud Breeze is a package, it could be installed using a composer command : 

`composer require tendoo/cms`

Then, you need to publish the assets of Cloud Breeze by running the following command : 

`php artisan tendoo:publish`

It's important to publish the assets, since the system need to save on the database your current Cloud Breeze version. This will be helpful, to
know exaclty when to perform an update.

### Create Storage Disks
You need to update your filesystems.php file available on the config directory with the following changes : 

```php
'disks' => [
  // ...

    'cb-root'       =>  [
        'driver'    =>  'local',
        'root'      =>  base_path()
    ],

  // ...
],
```
Updating the filesystems will allow Cloud Breeze to save modules and to publish useful assets correctly.

### Register EncryptCookies Middleware
By default, the cookies registered by Cloud Breeze will be encrypted. With that, Cloud Breeze won't be able to authenticate and remember the user
authenticated from the login UI provided. You need to register the middleware on the Kernel.php. If you have any specific cookie excaped from the middleware `App\Http\Middleware\EncryptCookies` it will be used on `CloudBreeze\Core\Http\Middleware\EncryptCookies`. You'll then comment (or delete) the default middleware on `app\Http\Kernel.php` like so :

```php
// something before...
protected $middlewareGroups = [
    'web' => [
        // \App\Http\Middleware\EncryptCookies::class, <= should be commended or deleted
        \CloudBreeze\Core\Http\Middleware\EncryptCookies::class, // <= here
        // other middleware ...
    ],

    // something else...
];
// something after...
```

### Change User Model
Cloud Breeze provides with his own authentication tables and models. The Users table is named `_users` leaded by the table prefix.
You need so to adjust your authentication congifuration file and make sure the Model used is the one provided by Cloud Breeze. Typically, you'll have to change it like so : 

```php
'providers' => [
    'users' => [
        'driver' => 'eloquent',
        // 'model' => App\User::class,
        'model' => CloudBreeze\Core\Models\User::class, // <= the class here
    ],

    // 'users' => [
    //     'driver' => 'database',
    //     'table' => 'users',
    // ],
],
```

If you're using Cloud Breeze on a old project, make sure to check wether the .env is valid. It might happen Cloud Breeze writes on the same line as an existing
configuration. This usually crash the application without any hint on what cause that usually.

# Security 
Cloud Breeze comes with a built-in security system. This system basically is made to prevent Brute-Force attack on login and registration page. Basically, it act as a throttle middleware provided by Laravel, but goes beyong by blacklisting an IP which becomes suspect over the time. Obviouly, this behaviour can be disabled and configured. First you should have published the package to ensure having the configuration "tendoo.php" available on the config directory of your laravel project.

`php artisan vendor:publish`

Once the `config/tendoo.php` file is published, it comes with some configuration that you can set to leverage your security as per your needs. You'll find on that file 2 security  system :

- Anti-Flood Requests
- Suspicious Requests

While the Anti-Flood Request prevents too many request to be send from one client (based on their IP), the Suspect Request allow you to blacklist immediately any client (user) who try to makes unprobable requests. For example make a GET request /wp-admin/login.php, it looks clearly this client is looking for login page while he shoudln't. The solution let you handle such request and if necessary block them.

The Suspicious Requests configurations looks like this :

```php
'ip-banner' => [
    'enable'        =>  true,

    /**
     * describe what is forbidden
     * on each request processed
     */
    'forbidden'     =>  [
        '.php',
    ],

    /**
     * if a client makes the same mistake
     * "x" times, his ip will be banned
     */
    'mistakes-threshold'    =>  1,

    /**
     * the ip of the client
     * will be recorded
     * on the mentionned htaccess file
     */
    'htaccess-blocking'     =>  false,

    'htaccess-path'         =>  ''
],
```

For the anti-flood request, you just need to mention how many requests per minutes a client can make. Here is how it looks like : 

```php
'flood'             =>  [
    'prevent'       =>  false, // should be enabled
    'limit'         =>  30,
    'expiration'    =>  60
],
```

# API
This describe how the internal API works. 

## Users Permissions & Roles
A role allow you to group users whom should have the same attributes. For example, you could have a editor role on your system, if for example you're planning to create blog where such role will be needed. Once a role is created, you can assign permission to it. A permission is the capacity to perform an action on the system. Assigning a permissions is not the only step as you need to verify if a user has the permission to perform certains actoin through his role.

### Creating Role
Creating a role is possible thanks to the class `CloudBreeze\Core\Models\Role`. A role has a name, and a `namespace` which is more like a computer identifier for the entity. Let's consider the following example : 

```php
<?php
use CloudBreeze\Core\Models\Role;

$role   = new Role;
$role->name   =   __( 'Super Man' );
$role->namespace  = 'superman';
$role->description  = ''; // whatever relevant to describe the role
$role->save();

```

So far you've create a role and it's that simple. The second steps is to assign a Permission, but first of all, let's create some permissions

### Creating a Permission
A permission allow to perform an action on the system. You can manipulate the permissions using the model `CloudBreeze\Core\Models\Permission`. Let's then create some permissions for the Super Man role.

```php
use CloudBreeze\Core\Models\Permission;

// ...
$permission   = new Permission;
$permission->name   =   __( 'Fly' );
$permission->namespace  =   'fly';
$permission->description  = ''; // once again whatever could be relevant.
$permission->save();
```

### Assigning Permission to Role
Now we've create permission, let's give Super Man the capacity to fly. It should be made using a static method
on the Model class, taking as  first parameter, the namespace of the role and on second parameter the namespace of the permission. `Role::addPermissions( '[role namespace]', '[permission namespace]' );`. Let's have a look at a concret example

```php
use CloudBreeze\Core\Models\Role;

// ... 
Role::addPermissions( 'superman', 'fly' );
```

You can also add a bunch of permission by passing an array to the second parameter.

```php
use CloudBreeze\Core\Models\Role;

// ...
Role::addPermissions( 'superman', [ 'fly', 'eyelazer', 'frozen.breath' ]);
```
You should note there is not specific way to write permission namespace, however the convention is to not use spaces and to separate your strings with a dot "." or a hyphen "-". Here is an example "long.permission.namespace".

### Removing Permissions from a Role
While you can add permission usin the static method `addPermissions`, you should use `RemovePermissions` to remove permissions on a specific role. Here is the use case of that method.

```php
Role::namespace( 'superman' )
  ->removePermission([ 'fly' ]);
```
Note here that the second parameter should always be an array.

### Checking User Permission
As said above, the verification of a permission is made on role through the User model. You can then check if the User class. Here is how you should proceed : 

```php
use CloudBreeze\Core\Models\User;

if ( User::allowedTo( 'snap.infinite.gaunglet' ) ) {
  /// you're not strong enough
}
```
The user we're making this verification  over, is the one connected. This function won't then work if no users is currently connected.


## Forms & Fields API
The forms let you retreive from the server a form or field schema that you can use to render your fields on the Frontend. Note that this could be used in combinaison with the "TendooFormsService" & "TendooFieldsService" form the npm package.

### How to register a Form endpoint
Form configuration can be retreive through an endpoint. Here is how you can make this available :

```php
// let's register the event first
use CloudBreeze\Core\Facades\Hook;

//...
Hook::addFilter( 'public.forms', useThis( Event::class )->method( 'forms' ) );
// useThis() .. is a shorthand to write 'Modules\Events\Event@form'
```

Typically, using the `TendooFormsService` service from the angular library, will perform a request to the API server
using the following request : 

`http://yourapi.com/api/tendoo/public/forms/{namespace}/{index?}`

Where the `namespace` stands for the namespace of your public form and the `index` is the optional identifier to a resource (for example a user id to populate the for with his details) sent to the server (usually while fetching a form for a specific entity during a modification).

Now, you just need to return the form if the namespace provided match your form namespace.

```php
namespace Modules\YourModule\Events;

class Event
{
  public function forms( $forms, $namespace ) 
  {
    if ( $namespace === 'your-namespace' ) {
      return [
        'title' =>  __( 'Your Form Titlte' ),
        'description' => '', // a description here
        'sections'  =>  [
          {
            'title' =>  '', // section title
            'description' =>  '',
            'fields'  =>  [ // here to register as many field as the section has.
              {
                'label' =>  'Field Name',
                'name'  =>  'field-name',
                'validation'  =>  'required',
                'description' =>  'field description',
                'appearance' => 'outline', // or any angular material valid field appearance
              }
            ]
          }
        ]
      ];
    }

    return $forms;
  }
}
```

### How to register a Field endpoint

Registering a field endpoint is almost similar to registering a form. It's made through the Hook `public.fields`. 

Note that, if you don\'t need to have
a complex form architecture including sections, but just want to have the fields, this is what you should use. 

This can be useful to create login & registration page, which doesn't often consist of sections but just fields.

```php
use CloudBreeze\Core\Facades\Hook;

// ...
Hook::addFilter( 'public.fields', useThis( Event::class )->method( 'fields' ) );
```

Now on the callback, you just need to return the field if the namespace match your fields namespace.

```php
namespace Modules\YourModule\Events;

class Event
{
  public function fields( $fields, $namespace )
  {
    if ( $namespace === 'your-fields-namespace' ) {
      return [
        [
          'label' =>  __( 'Username' ),
          'name'  =>  'username',
          'validation'  =>  'required',
          'description' =>  __( 'Your username' ),
          'appearance'  =>  'outline',
          'type'      =>  'text'
        ], [
          'label' =>  __( 'Password' ),
          'name'  =>  'password',
          'validation'  =>  'required',
          'description' =>  __( 'Your username' ),
          'appearance'  =>  'outline',
          'type'      =>  'password' // to turn the text field into a password field
        ]
      ]
    }
    return $fields;
  }
}
```


## Crud API
the crud API helps you to quickly a create/read/update/delete feature on specific table. The purpose is to create a ready to use UI which most useful feature. This section will then describe how to use this API.

### Register an API namespace
The first step is to register the namespace. A namespace stand here for a unique identifier. You can define it as you want, but a convention needs it to use the module namespace. You can then end with a similar namespace : `yourmodule.orders` where "yourmodule" is your module namespace, and "orders" the object of the crud.

Here is how a CRUD resource should be defined : 

```php
use CloudBreeze\Core\Facades\Hook;

Hook::addFilter( 'register.crud', useThis( CrudEvent::class )->method( 'orderCRUD' ) );
```

Now from the event class, you just need to return the class that should be used for the CRUD component. Note that, you can automatically generate crud using the `php artisan module:crud` command. At the end of the process, you'll end up with a class that is the reference for the CRUD entity.

```php
namespace Modules\YourModule\Events;

use Modules\YourModules\Crud\OrdersCRUD;

class CrudEvent
{
  public function orderCRUD( $namespace )
  {
    if ( $namespace === 'yourmodule.orders' ) {
      return OrdersCRUD::class;
    }

    return $namespace;
  }
}
```

Note that the identifier `yourmodule.orders` is what is mentionned while using the `TendooCrudService`, from the Angular Library. Typically here is how you'll perform request using that library.

```ts
import { TendooCrudService } from '@cloud-breeze/core';

class OrdersComponent implements OnInit {
  constructor(
    private tendooCrud: TendooCrudService
  ){}

  ngOnInit() {
    this.tendooCrud.getConfig( 'yourmodule.orders' ).subscribe( config => {
      // render the crud
    })
  }
}
```

Refer to the [Angular Library](https://www.npmjs.com/package/@cloud-breeze/core) for better examples.