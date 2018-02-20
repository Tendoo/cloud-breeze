@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'Activate Your Account' ) }}
{{ sprintf( __( 'Hi %s, your account has been created at %s, and it can be activated by clicking on the activation link below.' ), $user->username, url('/') ) }}
@component( 'mail::button', [ 'url' => $link ])
{{ __( 'Activate' ) }}
@endcomponent
@endcomponent


@endcomponent
