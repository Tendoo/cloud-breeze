{{-- Adding Field : text --}}
@if ( $field->type == 'text' ) 
    @include( 'tendoo::partials.shared.fields.text' )
@endif

{{-- Adding Field : hidden --}}
@if ( $field->type == 'hidden' ) 
    @include( 'tendoo::partials.shared.fields.hidden' )
@endif

{{-- Adding Field : textarea --}}
@if ( $field->type == 'textarea' ) 
    @include( 'tendoo::partials.shared.fields.textarea' )
@endif

{{-- Adding Field : password --}}
@if ( $field->type == 'password' ) 
    @include( 'tendoo::partials.shared.fields.password' )
@endif

{{-- Adding Field : email --}}
@if ( $field->type == 'email' ) 
    @include( 'tendoo::partials.shared.fields.email' )
@endif

{{-- Adding Field : select --}}
@if ( $field->type == 'select' ) 
    @include( 'tendoo::partials.shared.fields.select' )
@endif

{{-- Adding Field : md-select --}}
@if ( $field->type == 'md-select' ) 
    @include( 'tendoo::partials.shared.fields.md-select' )
@endif

{{-- Adding Field : checkbox --}}
@if ( $field->type == 'checkbox' ) 
    @include( 'tendoo::partials.shared.fields.checkbox' )
@endif

{{-- Adding Field : switch --}}
@if ( $field->type == 'switch' ) 
    @include( 'tendoo::partials.shared.fields.switch' )
@endif

{{-- Adding Field : radio --}}
@if ( $field->type == 'radio' ) 
    @include( 'tendoo::partials.shared.fields.radio' )
@endif

{{-- Adding Field : html --}}
@if ( $field->type == 'html' ) 
    {!! $field->output !!}
@endif

{{-- Adding Field : file --}}
@if ( $field->type == 'file' ) 
    @include( 'tendoo::partials.shared.fields.file' )
@endif
