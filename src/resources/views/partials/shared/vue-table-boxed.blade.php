@inject( 'Request', 'Illuminate\Http\Request' )
@section( 'partials.shared.footer' )
    @parent
    <script>
    var data    =   {!! json_encode([
        'columns'       =>  $resource->getColumns(),
        'getURL'        =>  route( 'dashboard.crud.list', [
            'namespace' =>  $resource->getNamespace()
        ]),
        'deleteURL'     =>  route( 'dashboard.crud.delete', [
            'namespace' =>  $resource->getNamespace()
        ]),
        'editURL'       =>  route( 'dashboard.users.edit' ),
        'textDomain'    =>  [
            'deleteSelected'    =>  __( 'Would you like to delete selected entries ?' )
        ],
        'url'   =>  [
            'bulk'    =>  route( 'dashboard.crud.bulk-actions', [
                'namespace'     =>  $resource->getNamespace()
            ])
        ]
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
            @include( 'tendoo::partials.shared.errors' )
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
                            <th width="200" scope="col" v-for="( column, namespace ) in columns" :class="'column-' + namespace">
                                <div class="d-flex justify-content-between" @click="sortBy( namespace, column )">
                                    <span style="font-size:18px">@{{ column.text }}</span>
                                    <i class="material-icons" style="float:right" v-show="column.method == 'desc'">arrow_drop_down</i>
                                    <i class="material-icons" style="float:right" v-show="column.method == 'asc'">arrow_drop_up</i>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-if="result">
                        <tr v-for="( entry, rowIndex ) of result.data">
                            <td>
                                <div class="checkbox">
                                    <label>
                                        <input :checked="entry.$selected" @click="selectEntry( entry )" class="entry-checkbox" type="checkbox" name="entry_id[]" :value="entry.id">
                                    </label>
                                </div>
                            </td>

                            <th v-for="( column, namespace ) in columns" :class="'column-' + namespace">@{{ entry[ namespace ] }}</th>
                            
                            <th class="p-2" width="100">
                                <div class="dropdown show">
                                    <a class="btn mb-0 btn-raised btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{ __( 'Options' ) }}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right" v-if="entry.$actions">
                                        <a v-for="( action, name ) of entry.$actions" href="javascript:void(0)" @click="handle( action, entry.id, rowIndex )" class="dropdown-item">@{{ action.text }}</a>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr v-if="! result">
                            <td colspan="{{ count( @$resource->getColumns() ) + 2 }}" class="text-center">{{ __( 'No entry available' ) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination mb-0">
                                <li class="page-item"><a @click="goTo( currentPage == 1 ? 1 : currentPage -1 )" class="page-link" href="javascript:void(0)"><i class="material-icons">keyboard_arrow_left</i></a></li>
                                <li class="page-item p-1" :class="{ 'active' : index == result.current_page }" v-for="index of pageIndexes"><a @click="goTo( index )" class="page-link" href="javascript:void(0)">@{{ index }}</a></li>
                                <li class="page-item"><a @click="goTo( currentPage == lastPage ? lastPage : currentPage + 1 )" class="page-link" href="javascript:void(0)"><i class="material-icons">keyboard_arrow_right</i></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-6 col-lg-6 d-flex justify-content-end">
                        <div class="dropdown pull-right">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ __( 'Displayed' )}} &mdash; @{{ perPage }}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a @click="setPerPage(10)" class="dropdown-item" href="javascript:void(0)">10</a>
                                <a @click="setPerPage(25)" class="dropdown-item" href="javascript:void(0)">25</a>
                                <a @click="setPerPage(50)" class="dropdown-item" href="javascript:void(0)">50</a>
                                <a @click="setPerPage(100)" class="dropdown-item" href="javascript:void(0)">100</a>
                                <a @click="setPerPage(200)" class="dropdown-item" href="javascript:void(0)">200</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
@else
    @include( 'tendoo::errors.unhandled-crud' )
@endif