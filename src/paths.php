<?php
/**
 *  Changing the Auth Model Provider
 */
config([ 'auth.providers.users'     =>  [
    'driver'    =>  'eloquent',
    'model'     =>  'Tendoo\Core\Models\User'
]]);