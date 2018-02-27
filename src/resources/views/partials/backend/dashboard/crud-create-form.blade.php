@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@php
    $resource   =   $Hook::filter( 'define.crud', null, $namespace );
@endphp

@if ( ! is_object( $resource ) )
    @include( 'tendoo::errors.unhandled-crud' )
@else
<div class="content-wrapper">
    @include( 'tendoo::partials.shared.page-title', [
        'title'         =>  @$resource->create_title ? $resource->create_title : __( 'Undefined Page' ),
        'description'   =>  @$resource->create_description ? $resource->create_description : __( 'Undefined Description' ),
        'links'         =>  $resource->getLinks()[ 'create' ]
    ])       
    <div class="content-body">
        <div class="container-fluid pt-3 p-4">
            @include( 'tendoo::partials.backend.dashboard.crud-form', [
                'actionUrl'     =>  route( 'dashboard.crud.post', [ 'namespace' => $namespace ] ),
                'resource'      =>  $resource,
                'fields'        =>  $resource->getFields(),
                'action'        =>  'create'
            ])
        </div>
    </div>
</div>
@endif