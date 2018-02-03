@inject( 'Event', 'Illuminate\Support\Facades\Event' )
@php
    $resource   =   @$Event::fire( 'define.crud', $namespace )[0];
@endphp

@if ( ! is_object( $resource ) )
    @include( 'errors.unhandled-crud' )
@else 
<div class="content-wrapper">
    @include( 'partials.shared.page-title', [
        'title'         =>  @$resource->create_title ? $resource->create_title : __( 'Undefined Page' ),
        'description'   =>  @$resource->create_description ? $resource->create_description : __( 'Undefined Description' ),
        'links'         =>  $resource->getLinks()[ 'create' ]
    ])
    <div class="content-body">
        <div class="container-fluid pt-3 p-4">
            <form class="mb-0" action="{{ route( 'dashboard.crud.post', [ 'namespace' => $resource->getNamespace() ] ) }}" enctype="multipart/form-data" method="post">
                <div class="card">
                    <div class="card-header p-0">
                        <h5 class="box-title">{{ @$resource->create_title ? $resource->create_title : __( 'Undefined Page' ) }}</h5>
                    </div>
                    <div class="card-body p-0">
                    @include( 'partials.shared.errors', compact( 'errors' ) )
                    </div>
                    {{ csrf_field() }}
                    <div class="card-body p-3">
                        @each( 'partials.shared.fields', $resource->getFields(), 'field' )
                    </div>
                    <div class="p-2 card-footer">
                        <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ @$resource->create_button ? $resource->create_button : __( 'Create' ) }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endif