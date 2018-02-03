{{-- Adding Field : text --}}
@if ( $field->type == 'text' ) 
    @include( 'partials.shared.fields.text' )
@endif

{{-- Adding Field : textarea --}}
@if ( $field->type == 'textarea' ) 
    @include( 'partials.shared.fields.textarea' )
@endif

{{-- Adding Field : password --}}
@if ( $field->type == 'password' ) 
    @include( 'partials.shared.fields.password' )
@endif

{{-- Adding Field : email --}}
@if ( $field->type == 'email' ) 
    @include( 'partials.shared.fields.email' )
@endif

{{-- Adding Field : select --}}
@if ( $field->type == 'select' ) 
    @include( 'partials.shared.fields.select' )
@endif

{{-- Adding Field : md-select --}}
@if ( $field->type == 'md-select' ) 
    @include( 'partials.shared.fields.md-select' )
@endif

{{-- Adding Field : checkbox --}}
@if ( $field->type == 'checkbox' ) 
    @include( 'partials.shared.fields.checkbox' )
@endif

{{-- Adding Field : switch --}}
@if ( $field->type == 'switch' ) 
    @include( 'partials.shared.fields.switch' )
@endif

{{-- Adding Field : radio --}}
@if ( $field->type == 'radio' ) 
    @include( 'partials.shared.fields.radio' )
@endif

