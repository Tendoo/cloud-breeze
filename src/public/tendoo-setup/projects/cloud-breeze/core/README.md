## Cloud Breeze Core

This package contains UI utilities and components that are intented to be
used with Cloud Breeze Backend Headless (API). It can be used on any Angular 8+ that
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

### Integration on Angular

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

### API Usage & Example

The following part will cover the usage and example of the internal API.

#### Form builder, Fields and Validation API

The form builder allow you to create form using a JSON that might be retreived
remotely. once again, this helps to have a dynamic form instead of a fixed one that
will require to compile the app everytime that we want to add a single field input.

There is an interface on the package that describe a field shape.

```ts
import { Field } from "@cloud-breeze/core";
```

Here is the field shape as a JSON.

```json
{
  "label": "Your Username",
  "name": "username",
  "validation": "required|min:6",
  "description": "Here your provide your username",
  "appearance": "outline"
}
```

There are other values that are populated using the `ValidationGenerator` class. For building a
form we use the `ReactiveFormsModule` provided by Angular. Your form will then usually consist of
multiple fields and that could be actived like so :

```ts
import { Component, OnInit } from "@angular/core";
import { Field } from "@cloud-breeze/core";

@Component({
  selector: "app-demo",
  templateUrl: `./demo.component.html`,
  styleUrls: ["./demo.component.scss"]
})
class DemoComponent implements OnInit {
  fields: Field[] = [
    {
      label: "Your Username",
      name: "username",
      type: "text",
      validation: "required|min:6",
      description: "Here your provide your username.",
      appearance: "outline"
    },
    {
      label: "Your Password",
      name: "username",
      type: "password",
      validation: "required|min:6",
      description: "Only you know what to put here.",
      appearance: "outline"
    }
  ];

  // ...
}
```

Rendering the fields is easy as looping over the `fields` property like so:

```html
<cb-field *ngFor="let field of fields" [field]="field"></cb-field>
```

You'll need to put this template within a form to which is bound a FormGroup. After having
defined the fields, you can use the `ValidationGenerator` to build a FormGroup object like so :

```ts
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ValidationGenerator } from "@cloud-breeze/core";

@Component({
  selector: "app-demo",
  templateUrl: `./demo.component.html`,
  styleUrls: ["./demo.component.scss"]
})
class DemoComponent implements OnInit {
  fields: Field[] = [
    {
      label: "Your Username",
      name: "username",
      type: "text",
      validation: "required|min:6",
      description: "Here your provide your username.",
      appearance: "outline"
    },
    {
      label: "Your Password",
      name: "username",
      type: "password",
      validation: "required|min:6",
      description: "Only you know what to put here.",
      appearance: "outline"
    }
  ];

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = ValidationGenerator.buildFormGroup(this.fields);
  }

  // ...
}
```

Now you can update your template like so :

```html
<form [FormGroup]="formGroup">
  <cb-field
    *ngFor="let field of fields"
    [field]="field"
    [group]="formGroup"
  ></cb-field>
</form>
```

The form group is now build and the validation supported. While submitting a form,
you just need to make sure all fields are touched and check if the form is valid or not.

```ts
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ValidationGenerator } from "@cloud-breeze/core";

@Component({
  selector: "app-demo",
  templateUrl: `./demo.component.html`,
  styleUrls: ["./demo.component.scss"]
})
class DemoComponent implements OnInit {
  fields: Field[] = [
    {
      label: "Your Username",
      name: "username",
      type: "text",
      validation: "required|min:6",
      description: "Here your provide your username.",
      appearance: "outline"
    },
    {
      label: "Your Password",
      name: "username",
      type: "password",
      validation: "required|min:6",
      description: "Only you know what to put here.",
      appearance: "outline"
    }
  ];

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = ValidationGenerator.buildFormGroup(this.fields);
  }

  submitting() {
    ValidationGenerator.touchAllFields(this.formGroup);

    if (this.formGroup.invalid) {
      // return something here
    }

    // it's all good let's proceed
  }
  // ...
}
```

**Working With Form Builder (since 1.2.0)**\
The form builder is a new feature that helps to build an entire form with sections and fields.
The purpose of this feature it to have a form dynamically defined form a remote server that get 
rendered without having to recompile the application from scratch.

This new update introduce then `Form` which is an interface and a new method `buildFrom` withing the `ValidationGenerator` class. Let's proceed first by exploring the `Form` interface.

```ts
export class Form {
  title: string; // if your form has a title, it might be defined here
  description: string; // the same goes for the description
  sections: [ // you'll define your form sections here
    {
      title: string; // if the section has a title
      description: string; // if the section has a description
      fields: Field[] // an array of fields
    }
    // repeat as many section as you want...
  ]
  url: string; // where the Form should be submitted to. Must be define as a full URL.
}
```

Using the `TendooFormsService` you can get forms from a Cloud Breeze backend using the method 
`getPublicForms` which requires a namespace (unique identifier that is identified by your module, so that i can return the Form configuration as a JSON). The method proceed a Asynchronous request and return an `Observable<Form>` (observable of form).

Usually you'll have to initialize a form like so.

```ts
// ... formService is an instance of TendoFormsService injected on the constructor
  ngOnInit() {
    this.formsService.getPublicForms( 'my-form-namespace' )
      .subscribe( (form: Form) => {
        this.form   = ValidationGenerator.buildForm( form );
      }) 
  }
```

The reason why `buildForm` is required, is to make sure the Form actually has a FormGroup defined. The method `buildForm` added to the `ValidationGenerator` loops over the fields and create a FormGroup object accordingly. If your fields has a validation, a validation will be generated on each `FormControl` attached to the field.

The `Form` object can now be used to generate the template on the component.

##### Supported Type of Fields
While using the JSON for building forms, it's important to understand what are the fields type supported. By file type, we're talking about the value used for the "type" attribute. If `text`, `textarea` and `password` are pretty straingforward to understand (creating a text, textarea and a password field), a special attention needs to be put over the following : `email`, `select`, `datetime`, `multiple_select`, `switch`, `recaptcha`.

**Email** \
Will define the type 'email' so that some browser could natively force validation that allow email value.

**Select** \
As the regular select tag on HTML, this let you create the exact same field. However, you should include 1 more entry on the JSON : `òptions`.

```ts
const field: Field  = {
  type: 'select',
  options: [
    {
      value: 'your_value',
      label: 'Value Label'
    }
  ],
  label: 'Select Your Role',
  description: 'put a description here.',
  validation: 'required'
}
```
Note that, the "value" attribute on the Field interface is used to match the "value" inside the options objects.

**datetime** \
Use the [Angular Material Component](https://material.angular.io/components/datepicker/overview) datetime picker.

**multiple_select** \
Similar to select, but instead of a single choice, more that one value will be selected.

**switch** \
Helps to render a switch value. Usually on Cloud Breeze, the switch value doesn't matter. while saving an option, if the switch is untoggled, the option will be deleted from the database. Obviously, there is an internal mecanism that track forms
that includes switches. So the value could be "1" or "yes" as you want. Verifying that the field is checked, consist then to see wether an option having the field name exists.

**recaptcha** \
This field provide a support to the recaptcha field provided by [ngx-captcha](https://www.npmjs.com/package/ngx-captcha). It support additionnal parameters that are necessary to render the field properly : 

```ts
const field: Field  = {
  type: 'recaptcha',
  data: {
    siteKey: 'YOUR_KEY_HERE'
  },
  label: 'Select Your Role',
  description: 'put a description here.',
  validation: 'required'
}
```

The `ValidationGenerator` class has some other interesting methods.

| Methods           | Description                                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| from              | Build Validation rule from a string                                                                                          |
| extractControls   | Extract an object of FormControl from an array of Field                                                                      |
| buildFormControls | build FormControl by defining the value set on "value" property and extract the controls. It return an object of FormControl |
| buildFormControl  | build a single FormControl and return it                                                                                     |
| touchAllFields    | Touch all fields within a FormGroup                                                                                          |
| buildFormGroup    | Build form group using an array of Field (Field[])                                                                           |
| deactivateFields  | Make sure fields can't be edited. Accepts an array of Field (Field[])                                                        |
| enableFields      | Make sure fields can be edited. Accepts an array of Field (Field[])                                                          |
| throwFieldsError  | Throw a custom field Error                                                                                                   |
| noNullValue       | Return an object of FormControl that has a value different from null                                                         |

#### Table & CRUD API

The table builder let you create a table powered with CRUD operations. The basic usage of the component
requires you to use the following tag :

```html
<cb-table></cb-table>
```

The component accepts various properties and raised various events depending on the user action.

##### Supported Properties

| Property  | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| crud      | Contains the configuration of the table. it's a required property that define the columns, the values, the labels... |
| isLoading | Since the table doesn't perform async operation, the use can then notify the table when something is being loaded.   |

##### Supported Events

| Event   | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| sort    | trigger when the user click on a column to sort the results.      |
| delete  | trigger when the user delete an entry.                            |
| action  | trigger when the user click on a custom action.                   |
| search  | trigger when the user click on a the search button.               |
| refresh | trigger when the user click on a the refresh button.              |
| page    | trigger when the user click on a the a page under the pagination. |

#### Dialog API

The Cloud Breeze provide an easy way to use the Material Dialog
to create either confirm, alert or multi-purpose dialogs using the Angular Dialog API.

It consit of a component that is injected on the Dialog that can display a title, a message
and as many buttons as you set. Here is how to define a Diloag :

```ts
import { MatDialog } from "@angular/material";
import { Component } from "@angular/core";
import { Dialog, DialogComponent } from "@cloud-breeze/core";

@Component({
  selector: "app-foo-component",
  templateUrl: "./foo.component.html"
})
class FooComponent {
  constructor(private dialog: MatDialog) {
    this.dialog.open(DialogComponent, {
      // ...
      data: <Dialog>{
        title: "Your Title",
        message: "Your message",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              // do something
            }
          },
          {
            label: "No",
            onClick: () => {
              // do something
            }
          }
        ]
      }
      // ...
    });
  }
}
```

#### Media API

The media API helps to manage the media (usually images). It's provided by the internal service `TendooMediasService`,
that you could inject in your components. You'll then be able to use internal features such as `uploadFile`:

```ts
//...
(<TendooMediasService>this.mediasService).uploadFile(<File>file); // => Promise<File>
```

You should note that on Cloud Breeze, each medias are linked with a model that is created as it's uploaded. It stores useful
informations about the medias and helps to link this one with some others model. Obviously deleting a Media model delete
the file reference on the storage as well.

```ts
// assuming "this.mediasService" is an instance of TendooMediasService
this.mediasService.deleteMediaById(); // => Observable<HttpResponse>
```

For some of the method available, the logged user should required permissions otherwhise the action
will fail with an "NotAuthorizedException" (Server Side).

As one of the internal methods, you can get a paginated result of the medias using the method `getMedias` :

```ts
  // get medias
  this.mediasService.getMedias( page: int ); // => Observable<HttpResponse>
```

#### Modules API

The module helps to extends internal Cloud Breeze features. It could be made by adjusting an existing feature, or by providing completely new API endpoints that could be consummed by external applications/modules. This Angular Service has endpoints to manage entirely the modules installed. Here is the list of method available with their description and the expected response.

| Method          | Response                  | Description                                                                                                                                                                                                         |
| --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resetMigrations | Observable >AsyncResponse | Reset a specific module migration. This usually means all the table will be truncated and the migration files will run over.                                                                                        |
| getAll          | Observable Module[] | Returns an array of installed modules                                                                                                                                                                               |
| uploadFile      | Observable > AsyncResponse | Upload a File blob so that Cloud Breeze install it as a module. The file should be a valid Cloud Breeze module.                                                                                                     |
| deleteModule    | Observable > AsyncResponse | Delete a specific module using a provided namespace                                                                                                                                                                 |
| enable          | Observable > AsyncResponse | enable a specific module using the provided namespace. Sometime, the migrations is provided if the module hasn't never been enabled(installed). You can then run the migration on Cloud Breeze using `runMigration` |
| runMigration    | Observable > AsyncResponse | Run a migration for a specific module, file and version. Usually provided after having enabled the module                                                                                                           |
| download        | Observable > AsyncResponse | Return an async response that include the file URL, to download a cached zip of the module, which namespace is provided as unique parameter.                                                                        |
| createSymLink   | Observable > AsyncResponse | If a module include assets, the method helps to create a symbolic link on the public directory of laravel that points to the module public directory.                                                               |
