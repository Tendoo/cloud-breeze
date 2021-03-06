@Inject( 'Str', 'Illuminate\Support\Str' )
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Tendoo CMS</title>
    <base href="{{ $Str::finish( url( '/tendoo' ), '/' ) }}">
    <style type="text/css">
        .loader {
            height: 100%;
            align-items: center;
            vertical-align: middle;
            justify-content: center;
            width: 100%;
            flex: auto;
            display: flex;
        }
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="{{ asset( 'tendoo-public/tendoo-setup/styles.css' ) }}" rel="stylesheet"/>
</head>

<body>
    <app-root style="height: 100%;">
        <div class="loader">
            <img src="{{ asset( 'tendoo-public/tendoo-setup/assets/images/logo.png' ) }}" style="width: 150px" alt="" srcset=""/>
        </div>
    </app-root>
    <script>
        const tendoo    =   {
            base_url                :   '{{ url( "/api" ) }}/',
            angular_url             :   `{{  asset( 'tendoo-public/tendoo-setup' ) }}/`
        }
    </script>
    <script type="text/javascript" src="{{ asset( 'tendoo-public/tendoo-setup/vendor.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo-public/tendoo-setup/runtime.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo-public/tendoo-setup/polyfills.js' ) }}"></script>
    <script type="text/javascript" src="{{ asset( 'tendoo-public/tendoo-setup/main.js' ) }}"></script>
    <!-- <script type="text/javascript" src="{{ asset( 'tendoo/tendoo-setup/styles.js' ) }}"></script> -->
</body>

</html>