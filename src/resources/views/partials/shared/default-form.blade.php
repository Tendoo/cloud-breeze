@inject( 'Field', 'App\Services\Field' )
@inject( 'Helper', 'App\Services\Helper' )
<form action="">

    <div class="card">
        <div class="card-header d-flex flex-row align-items-stretch">
            <span style="width: 89%;padding-top:0"  class="bmd-form-group">
                <input class="form-control" type="text" placeholder="Some Input">
            </span>
            <button style="width: 10%;margin-left:1%;" class="btn btn-raised btn-primary">Something</button>
        </div>
        <div class="card-body p-0">
            <ul class="nav nav-tabs card-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Another link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <div class="tab-content p-3">
                <div class="row">
                    <div class="col-md-6 col-xs-6">
                        @each( 'partials.shared.fields', $Helper::arrayDivide( $Field::setupAppDetails(), 'even' ), 'field' )
                    </div>
                    <div class="col-md-6 col-xs-6">
                        @each( 'partials.shared.fields', $Helper::arrayDivide( $Field::setupAppDetails(), 'odd' ), 'field' )
                    </div>
                </div>
            </div>
        </div>
    </div>

</form>