<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>TendooSetup</title>
    <base href="{{ str_finish( url( '/' ), '/' ) }}">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <app-root></app-root>
    <script>
        const tendoo    =   {
            base_url    :   '{{ url("/") }}/'
        }
    </script>
    <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/runtime.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/polyfills.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/styles.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/vendor.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/main.js' ) }}"></script>
</body>

</html>