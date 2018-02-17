@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'Password Recovery' ) }}
{{ sprintf( __( 'A password recovery has been requested for your account : %s.
In order to change your password, click on the following link. 
If you\'ve not requested a password changing, please ignore this email.'), $user->email ) }}
@component( 'mail::button', [ 'url' => $link ])
{{ __( 'Password Change' ) }}
@endcomponent
@endcomponent


@endcomponent
