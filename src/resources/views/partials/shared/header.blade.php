@inject( 'Page', 'App\Services\Page' )
@inject( 'User', 'App\Services\UserOptions' )
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $Page::getTitle() }}</title>
    @include( 'partials.shared.header-css' )
    @include( 'partials.shared.header-js' )
    @yield( 'partials.shared.head' )
    <script>
    var tendoo                      =   new Object;
        tendoo.url                  =   new Object;
        tendoo.url.base             =   '{{ url('') }}';
        tendoo.url.dashboard        =   '{{ url('dashboard') }}';
        tendoo.url.postOptions      =   '{{ route( 'dashboard.options.post' ) }}';

        // let axios to be recognized as Ajax Request
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    </script>
</head>
<body class="{{ $User->getOption( 'theme_class', 'default-theme' ) }}">