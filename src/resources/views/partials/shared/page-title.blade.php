@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )

<div class="content-header">
    <div class="d-flex flex-row justify-content-between p-4">
        <div class="content-heading mb-2">
            <h3>{{ @$title ? $title : __( 'No title provided' ) }}</h3>
            <small>{{ @$description }}</small>
        </div>
        <div class="d-flex align-items-start justify-content-between">
            @php
            /**
             * @hook:page.header.buttons
             * Filter the header buttons of any page when the page title is provided
            **/
            @endphp
            @foreach( $Hook::filter( 'page.header.buttons', ( array ) @$links ) as $link )
            <a href="{{ $link[ 'href' ] }}" class="{{ @$link[ 'class' ] ? $link[ 'class' ] : 'btn btn-raised btn-primary' }}">{{ $link[ 'text' ] }}</a>
            @endforeach
        </div>
    </div>
</div>