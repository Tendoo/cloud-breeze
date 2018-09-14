@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'Password Reset Requested' ) }}
{{ sprintf( __( 'A password reset has been requested for the user : %s.
You might to edit the customer profile for further assistance. 
The user email is %s.'), $user->username, $user->email ) }}
@component( 'mail::button', [ 'url' => $link ])
{{ __( 'Edit User' ) }}
@endcomponent
@endcomponent


@endcomponent
