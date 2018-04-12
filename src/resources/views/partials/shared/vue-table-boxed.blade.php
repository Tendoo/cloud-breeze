@inject( 'Request', 'Illuminate\Http\Request' )
@section( 'partials.shared.footer' )
    @parent
    <script>
    var data    =   {!! json_encode([
        'columns'   =>  $resource->getColumns()
    ]) !!}
    </script>
    <script src="{{ asset( 'tendoo/js/dashboard/table.vue.js' ) }}"></script>
@endsection

@if ( @$resource )
    <form class="mb-0 form-container" action="{{ route( 'dashboard.crud.bulk-actions', [
            'namespace'     =>  $resource->getNamespace()
        ]) }}" method="post">
        {{ csrf_field() }}
        <div class="card" id="tendoo-table" v-cloak>
            <div class="card-header p-2-5 d-flex justify-content-between">
                <div>
                    @if( $resource->isEnabled( 'bulk-actions' ) )
                    <select v-model="action" name="action" class="custom-select">
                        <option selected value="">{{ __( 'Bulk Actions' ) }}</option>
                        @foreach( $resource->getBulkActions() as $key => $value )
                        <option value="{{ $key }}">{{ $value }}</option>
                        @endforeach
                    </select>
                    <button @click="bulk( action )" type="button" class="btn btn-raised btn-primary">{{ __( 'Apply' ) }}</button>
                    @endif
                    @if( $resource->isEnabled( 'exports' ) )
                    <select v-model="format" name="action" class="custom-select">
                        <option selected value="">{{ __( 'Choose...' ) }}</option>
                        @foreach( $resource->getExports() as $key => $value )
                        <option value="{{ $key }}">{{ $value }}</option>
                        @endforeach
                    </select>
                    <button @click="export( format )" type="button" class="btn btn-raised btn-primary">{{ __( 'Export' ) }}</button>
                    @endif
                </div>
            </div>
            <div class="card-body p-0 table-responsive">
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
                            <th scope="col" v-for="( column, namespace ) in columns" :class="'column-' + namespace">
                                <div class="d-flex justify-content-between" @click="sortBy( namespace, column )">
                                    <a href="javascript:void(0)">@{{ column.text }}</a>
                                    <i class="material-icons" style="float:right" v-show="column.method == 'asc'">arrow_drop_down</i>
                                    <i class="material-icons" style="float:right" v-show="column.method == 'desc'">arrow_drop_up</i>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="entries.length > 0">
                            <td>
                                <div class="checkbox">
                                    <label>
                                        <input class="entry-checkbox" type="checkbox" name="entry_id[]" value="">
                                    </label>
                                </div>
                            </td>

                            @foreach( ( array ) @$resource->getColumns() as $name => $column )
                                @if ( is_callable( @$column[ 'filter' ] ) )
                                <!-- Hopfully PHP 7.x let us acheive this -->
                                <th class="column-{{ $name }}"></th>
                                @else 
                                <th class="column-{{ $name }}">{{ $name }}</th>
                                @endif
                            @endforeach
                            
                            <th class="p-2" width="100">
                                <div class="dropdown show">
                                    <a class="btn mb-0 btn-raised btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{ __( 'Options' ) }}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right">
                                        @foreach( $resource->getActions() as $name => $action )
                                            <a href="#" class="dropdown-item">{{ $name }}</a>
                                        @endforeach
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr v-if="entries.length == 0">
                            <td colspan="{{ count( @$resource->getColumns() ) + 2 }}" class="text-center">{{ __( 'No entry available' ) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                
            </div>
        </div>
    </form>
@else
    @include( 'tendoo::errors.unhandled-crud' )
@endif