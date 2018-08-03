@inject( 'Event', 'Illuminate\Support\Facades\Event' )
@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@inject( 'Request', 'Illuminate\Http\Request' )
@php
    $class      =   $Hook::filter( 'register.crud', $namespace );
@endphp

@if ( ! class_exists( $class ) )
    @include( 'tendoo::errors.unhandled-crud' )
@else
    @php
    $resource   =   new $class;
    @endphp
    <div class="content-wrapper" id="tendoo-table">
        
        @include( 'tendoo::partials.shared.crud-page-title', [
            'title'         =>  $resource->list_title,
            'description'   =>  $resource->list_description,
            'links'         =>  $resource->getLinks()[ 'list' ]
        ])
        
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'tendoo::partials.shared.vue-table-boxed', [
                    'resource'  =>  $resource
                ])
            </div>
        </div>
    </div>
@endif