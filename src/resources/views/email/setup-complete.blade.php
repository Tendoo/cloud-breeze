@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'Thank You for installing Tendoo CMS' ) }}
{{ __( 'Your new Tendoo application has been correctly installed.')}}
@component( 'mail::button', [ 'url' => url( '/auth/login' ) ])
{{ __( 'Login' ) }}
@endcomponent
@endcomponent

@endcomponent
