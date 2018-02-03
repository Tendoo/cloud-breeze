@inject( 'Request', 'Illuminate\Http\Request' )
@section( 'partials.shared.footer' )
    @parent
    <script src="{{ asset( 'js/dashboard/table.vue.js' ) }}"></script>
@endsection

@if ( @$resource )
    @php
    $entries     =   $resource->getEntries();
    @endphp
    <form class="mb-0" action="{{ route( 'dashboard.crud.bulk-actions', [
            'namespace'     =>  $resource->getNamespace()
        ]) }}" method="post">
        {{ csrf_field() }}
        <div class="card" id="tendoo-table">
            <div class="card-header p-2-5 d-flex justify-content-between">
                <div>
                    @if( $resource->isEnabled( 'bulk-actions' ) )
                    <select name="action" class="custom-select">
                        <option selected value="">{{ __( 'Bulk Actions' ) }}</option>
                        @foreach( $resource->getBulkActions() as $key => $value )
                        <option value="{{ $key }}">{{ $value }}</option>
                        @endforeach
                    </select>
                    <button type="submit" class="btn btn-raised btn-primary">{{ __( 'Apply' ) }}</button>
                    @endif
                </div>
            </div>
            @include( 'partials.shared.errors', compact( 'errors' ) )
            <div class="card-body p-0">
                <table class="table table-striped mb-0">
                    <thead>
                        <tr>
                            <th width="10">
                                <div class="checkbox">
                                    <label>
                                        <input @click="toggleCheckbox( $event )" type="checkbox">
                                    </label>
                                </div>
                            </th>
                            @foreach( @$resource->getColumns() as $name => $column )
                            <th class="column-{{ $name }}">
                                @if ( $Request->query( 'order' ) == 'asc' )
                                    <a href="{{ route( $resource->getMainRoute(), [ 'order' => 'desc', 'column' => $name ]) }}">{{ $column[ 'text' ] }}</a>
                                @else 
                                    <a href="{{ route( $resource->getMainRoute(), [ 'order' => 'asc', 'column' => $name ]) }}">{{ $column[ 'text' ] }}</a>
                                @endif
                            </th>
                            @endforeach
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @if( @$entries )
                            @foreach( $entries as $entry )
                            <tr>
                                <td>
                                    <div class="checkbox">
                                        <label>
                                            <input class="entry-checkbox" type="checkbox" name="entry_id[]" value="{{ $entry->id }}">
                                        </label>
                                    </div>
                                </td>

                                @foreach( ( array ) @$resource->getColumns() as $name => $column )
                                    @if ( is_callable( @$column[ 'filter' ] ) )
                                    <!-- Hopfully PHP 7.x let us acheive this -->
                                    <th class="column-{{ $name }}">{{ $column[ 'filter' ]( $entry->$name ) }}</th>
                                    @else 
                                    <th class="column-{{ $name }}">{{ $entry->$name }}</th>
                                    @endif
                                @endforeach
                                
                                <th class="p-2" width="100">
                                    <div class="dropdown show">
                                        <a class="btn mb-0 btn-raised btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{ __( 'Options' ) }}
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-right">
                                            @foreach( $resource->getActions() as $name => $action )
                                                @php
                                                    $config    =   $action( $entry );
                                                @endphp
                                                @if ( $config )
                                                    @if  ( $name == 'delete' )
                                                        <a @click="deleteEntry( {{ $entry->id }}, $event )" href="{{ $config[ 'url' ] }}" class="dropdown-item">{{ $config[ 'text' ] }}</a>
                                                    @else
                                                        <a href="{{ $config[ 'url' ] }}" class="dropdown-item">{{ $config[ 'text' ] }}</a>
                                                    @endif
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            @endforeach
                        @else
                        <tr>
                            <td colspan="{{ count( @$resource->getColumns() ) + 2 }}" class="text-center">{{ __( 'No entry available' ) }}</td>
                        </tr>
                        @endif
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                @if ( @$entries )
                    @php
                    $pagination     =   $entries->toArray();
                    @endphp
                    <nav aria-label="...">
                        <ul class="pagination mb-0">
                            <li class="page-item {{ ! $pagination[ 'prev_page_url' ] ? 'disabled' : '' }}">
                                <a class="page-link" href="{{ $pagination[ 'prev_page_url' ] ? $pagination[ 'first_page_url' ] : '#' }}">{{ __( 'First' ) }}</a>
                            </li>
                            <li class="page-item {{ ! $pagination[ 'prev_page_url' ] ? 'disabled' : '' }}">
                                <a class="page-link" href="{{ $pagination[ 'prev_page_url' ] ? $pagination[ 'prev_page_url' ] : '#' }}">{{ __( 'Previous' ) }}</a>
                            </li>
                            @for ( $i = 1; $i <= round( intval( $pagination[ 'total' ] ) / intval( $pagination[ 'per_page' ] ) ); $i++ ) 
                                @if ( intval( $pagination[ 'current_page' ] ) == $i ) 
                                <li class="page-item active">
                                    <span class="page-link">
                                        {{ $i }}
                                    </span>
                                </li>
                                @elseif ( intval( $pagination[ 'current_page' ] ) - $i <= 5 || $i - intval( $pagination[ 'current_page' ] ) >= 5 )
                                <li class="page-item"><a class="page-link" href="{{ $pagination[ 'path' ] . '?page=' . $i }}">{{ $i }}</a></li>
                                @endif                    
                            @endfor
                            <li class="page-item {{ ! $pagination[ 'next_page_url' ] ? 'disabled' : '' }}">
                                <a class="page-link" href="{{ $pagination[ 'next_page_url' ] ? $pagination[ 'next_page_url' ] : '#' }}">{{ __( 'Next' ) }}</a>
                            </li>
                            <li class="page-item {{ ! $pagination[ 'next_page_url' ] ? 'disabled' : '' }}">
                                <a class="page-link" href="{{ $pagination[ 'next_page_url' ] ? $pagination[ 'last_page_url' ] : '#' }}">{{ __( 'Last' ) }}</a>
                            </li>
                        </ul>
                    </nav>
                @endif
            </div>
        </div>
    </form>

@else
    @include( 'errors.unhandled-crud' )
@endif