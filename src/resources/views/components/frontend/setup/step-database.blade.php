@extends( 'components.frontend.setup.master' )
@section( 'components.frontend.setup.body' )
<div class="card">
    <form action="{{ route( 'setup.post.database' ) }}" method="post" class="mb-0">
        {{ csrf_field() }}
        <div class="card-header text-center">
            <h3 style="margin-bottom:0px" class="card-title">{{ __( 'Database Configuration' ) }}</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label for="exampleInputEmail1">{{ __( 'Host Name' ) }}</label>
                        <input name="hostname" type="text" class="form-control {{ $errors->has( 'hostname' ) ? 'is-invalid' : '' }}" value="{{ old( 'hostname' ) ? old( 'hostname' ) : 'localhost' }}" placeholder="{{ __( 'Eg: localhost' ) }}">
                        @if( $errors->has( 'hostname' ) )
                        <div class="invalid-feedback d-block">
                            {{ $errors->first( 'hostname' ) }}
                        </div>
                        @else
                        <small class="form-text text-muted">{{ __( 'Hostname in order to have access to the database.' ) }}</small>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{{ __( 'Database Name' ) }}</label>
                        <input name="db_name" type="text" class="form-control {{ $errors->has( 'db_name' ) ? 'is-invalid' : '' }}" value="{{ old( 'db_name' ) ? old( 'db_name' ) : 'tendoo' }}" placeholder="{{ __( 'Eg: tendoo' ) }}">
                        @if( $errors->has( 'db_name' ) )
                        <div class="invalid-feedback d-block">
                            {{ $errors->first( 'db_name' ) }}
                        </div>
                        @else
                        <small class="form-text text-muted">{{ __( 'Database name where Tendoo will be installed.' ) }}</small>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{{ __( 'Table Prefix' ) }}</label>
                        <input value="tendoo_" name="table_prefix" type="text" class="form-control" placeholder="{{ __( 'Eg: tendoo_' ) }}">
                        <small class="form-text text-muted">{{ __( 'This may help you to have multiple installation in one database.' ) }}</small>
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label for="exampleInputEmail1">{{ __( 'Username' ) }}</label>
                        <input name="username" value="{{ old( 'username' ) ? old( 'username' ) : 'root' }}" type="text" class="form-control {{ $errors->has( 'username' ) ? 'is-invalid' : '' }}" placeholder="{{ __( 'Eg: Root' ) }}">
                        @if( $errors->has( 'username' ) )
                        <div class="invalid-feedback d-block">
                            {{ $errors->first( 'username' ) }}
                        </div>
                        @else
                        <small class="form-text text-muted">{{ __( 'The username which have access to the hostname.' ) }}</small>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">{{ __( 'Password' ) }}</label>
                        <input name="password" type="text" class="form-control">
                        <small class="form-text text-muted">{{ __( 'User password to have acces to the database.' ) }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer p-2">
            <button type="submit" class="btn btn-primary mb-0 btn-raised">{{ __( 'Save Settings' ) }}</button>
        </div>
    </form>
</div>
@endsection