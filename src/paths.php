<?php
/**
 *  Changing the Auth Model Provider
 */
config([ 'auth.providers.users'     =>  [
    'driver'    =>  'eloquent',
    'model'     =>  'CloudBreeze\Core\Models\User'
]]);