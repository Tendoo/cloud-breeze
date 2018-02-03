@if( @$errors->has( 'status' ) )
    <div class="alert alert-{{ $errors->first( 'status' ) }} {{ @$class }} mb-0" role="alert">
        {{ $errors->first( 'message' )}}
    </div>
@endif

@if( session()->has( 'status' ) )
    <div class="alert alert-{{ session()->get( 'status' ) }} {{ @$class }} mb-0" role="alert">
        {!! session()->get( 'message' ) !!}
    </div>
@endif

@if ( session()->has( 'success' ) )
    <div class="alert alert-success {{ @$class }} mb-0" role="alert">
        {!! session()->get( 'success' ) !!}
    </div>
@endif

@if ( session()->has( 'danger' ) )
    <div class="alert alert-danger {{ @$class }} mb-0" role="alert">
        {!! session()->get( 'danger' ) !!}
    </div>
@endif

{{--
@if ( $errors->any() )
    <div class="alert alert-danger mb-0" role="alert">
        <ul class="mb-0">
            @foreach ( $errors->all() as $error ) 
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif 
--}}