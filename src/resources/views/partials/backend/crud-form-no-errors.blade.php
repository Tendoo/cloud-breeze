
<form class="mb-0" action="{{ $actionUrl }}" enctype="multipart/form-data" method="post">
    <div class="card" style="box-shadow:  none;">
        <div class="card-header p-0">
            @if ( $action == 'edit' )
            <h5 class="box-title">{{ @$resource->edit_title ? $resource->edit_title : __( 'Undefined Page' ) }}</h5>
            @elseif ( $action == 'create' )
            <h5 class="box-title">{{ @$resource->create_title ? $resource->create_title : __( 'Undefined Page' ) }}</h5>
            @endif
        </div>
        {{ csrf_field() }}
        <div class="card-body p-3">
            @each( 'tendoo::partials.shared.fields', $fields, 'field' )
        </div>
        <div class="p-2 card-footer">
            <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ __( 'Submit' ) }}</button>
        </div>
    </div>
</form>