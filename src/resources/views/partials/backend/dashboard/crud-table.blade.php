@inject( 'Event', 'Illuminate\Support\Facades\Event' )
@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@inject( 'Request', 'Illuminate\Http\Request' )
@php
    $resource   =   $Hook::filter( 'register.crud', null, $namespace );
@endphp

@if ( ! is_object( $resource ) )
    @include( 'tendoo::errors.unhandled-crud' )
@else 
    <div class="content-wrapper">
        
        @include( 'tendoo::partials.shared.page-title', [
            'title'         =>  $resource->list_title,
            'description'   =>  $resource->list_description,
            'links'         =>  $resource->getLinks()[ 'list' ]
        ])
        
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'tendoo::partials.shared.tables-boxed', [
                    'resource'  =>  $resource
                ])
            </div>
        </div>
    </div>
@endif