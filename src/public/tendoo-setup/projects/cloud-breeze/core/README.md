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

#### Using Table Builder `<cb-table/>`

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

### Form builder and Validation

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

The `ValidationGenerator` class has some other interesting methods.

| Methods           | Description                                                                                                                  |
| ----------------- |              --------------------------------------------------------------------------------------------------------------------------- |
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
