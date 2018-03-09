@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@php
    $class      =   $Hook::filter( 'register.crud', $namespace );
@endphp

@if ( ! class_exists( $class ) )
    @include( 'tendoo::errors.unhandled-crud' )
@else
    @php
    $resource   =   new $class;
    @endphp
<div class="content-wrapper">
    @include( 'tendoo::partials.shared.page-title', [
        'title'         =>  @$resource->create_title ? $resource->create_title : __( 'Undefined Page' ),
        'description'   =>  @$resource->create_description ? $resource->create_description : __( 'Undefined Description' ),
        'links'         =>  $resource->getLinks()[ 'create' ]
    ])       
    <div class="content-body">
        <div class="container-fluid pt-3 p-4">
            @include( 'tendoo::partials.backend.crud-form', [
                'actionUrl'     =>  route( 'dashboard.crud.post', [ 'namespace' => $namespace ] ),
                'resource'      =>  $resource,
                'fields'        =>  $resource->getFields(),
                'action'        =>  'create'
            ])
        </div>
    </div>
</div>
@endif