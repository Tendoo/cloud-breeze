<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ __( 'DB Error' ) }}</title>
</head>
<body>
    {{ sprintf( __( 'Unable to have access to the database : %s' ), $e->getMessage() ) }}
</body>
</html>