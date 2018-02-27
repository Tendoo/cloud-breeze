@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@inject( 'Request', 'Illuminate\Http\Request' )
@php
    $resource   =   $Hook::filter( 'define.crud', null, $namespace );
@endphp

@if ( ! is_object( $resource ) )
    @include( 'tendoo::errors.unhandled-crud' )
@else 
<div class="content-wrapper">
    @php
        $entry     =   $Request->route( 'entry' );
    @endphp
    @include( 'tendoo::partials.shared.page-title', [
        'title'         =>  @$resource->edit_title ? $resource->edit_title : __( 'Undefined Page' ),
        'description'   =>  @$resource->edit_description ? $resource->edit_description : __( 'Undefined Description' ),
        'links'         =>  $resource->getLinks()[ 'edit' ]
    ])
    <div class="content-body">
        <div class="container-fluid pt-3 p-4">
            @include( 'tendoo::partials.backend.dashboard.crud-form', [
                'actionUrl'     =>  route( 'dashboard.crud.put', [ 'namespace' => $namespace, 'id' =>   $entry->id ] ),
                'resource'      =>  $resource,
                'fields'        =>  $resource->getFields( $entry ),
                'action'        =>  'edit'
            ])
        </div>
    </div>
</div>
@endif