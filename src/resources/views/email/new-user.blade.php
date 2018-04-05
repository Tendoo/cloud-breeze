@component( 'mail::message' )

@component('mail::panel')
# {{ __( 'New User Registration' ) }}
{{ sprintf( __( 'A new user has registered to your website : %s.
Here is the new username : %s, and email : %s.'), url(), $user->username, $user->email ) }}
@component( 'mail::button', [ 'url' => $link ])
{{ __( 'Users List' ) }}
@endcomponent
@endcomponent


@endcomponent
