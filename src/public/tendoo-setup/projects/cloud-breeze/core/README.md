### Cloud Breeze Core
This package contains UI utilities and components that are intented to be
used with Cloud Breeze Backend service (API). It can be used on any Angular 8+ that
use Angular Material as UI Framework.

It contains a set of classes that could help to achieve some repetitive actions
in a very short time:

- Generating fields using a JSON
- Fields validation using Laravel validation rules (some of these)
- Table with CRUD UI with various options for customization
- Material Dialog Simplified

Some of internal services of Cloud Breeze are used as well such as :

- Responsive Service
- Setup Service
- Auth Service
- Config Service
- Crud Service
- Form Service
- Fields Service
- Link Service
- Media Service (for media upload)
- Oauth Service
- Options Service
- Settings Service
- Spinner Service
- Table Service
- Tabs Service
- Update Service
- Users Service
- Tendoo Service

#### Integration on Angular
You just need to import the `CloudBreezeModule` and defining initial configuration, which are URL to
either the backend service (powered by Laravel) and the UI (where angular loads).

```ts
@NgModule({
    ...
    imports: [
        CloudBreezeModule.forRoot({
            baseUrl: 'http://url-to-backend-service.com',
            angularUrl: 'http://url-to-angular-ui.com'
        })
    ]
    ...
})
export class AppModule {}
```

#### Using Form Constructor
The form constructor is made to help you building a forum generated from the backend in no time.
The purpose of having a form defined from the backend, is to ensure that it can be customized by any 
module installed on Cloud Breeze (backend) and rendered on your app without having to compile it each time.
It's then a dynamic form builder.

First of all the fields must be defined from Cloud Breeze Backend as following:

...