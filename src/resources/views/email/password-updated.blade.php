@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'Password Change Success' ) }}
{{ sprintf( __( 'Hi, %s We would like to inform you that your password has been successfully updated.' ), $user->username ) }}
@component( 'mail::button', [ 'url' => url( 'tendoo/auth' ) ])
{{ __( 'Login' ) }}
@endcomponent
@endcomponent


@endcomponent
