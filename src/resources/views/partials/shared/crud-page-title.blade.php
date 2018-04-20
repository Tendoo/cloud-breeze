@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )

<div class="content-header">
    <div class="d-flex flex-row justify-content-between p-4">
        <div class="content-heading mb-2">
            <h3>{{ @$title ? $title : __( 'No title provided' ) }}</h3>
            <small>{{ @$description }}</small>
        </div>
        <div class="d-flex align-items-start justify-content-between">
            @php
            /**
             * @hook:page.header.buttons
             * Filter the header buttons of any page when the page title is provided
            **/
            @endphp
            <div class="form-group" v-show="searchEnabled">
                <input style="color: #FFF" type="text" v-model="searchValue" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="{{ __( 'Search' ) }}">
            </div>
            <button type="button" class="btn mr-2 btn-primary bmd-btn-fab btn-fab-xs" v-show="searchEnabled" @click="search()">
                <i class="material-icons">search</i>
            </button>
            <button type="button" class="btn mr-2 btn-primary bmd-btn-fab btn-fab-xs" v-show="! searchEnabled" @click="toggleSearch()">
                <i class="material-icons">search</i>
            </button>
            <button type="button" class="btn mr-2 btn-danger bmd-btn-fab btn-fab-xs" v-show="searchEnabled" @click="toggleSearch()">
                <i class="material-icons">cancel</i>
            </button>
            @foreach( $Hook::filter( 'page.header.buttons', ( array ) @$links ) as $link )
            <a href="{{ $link[ 'href' ] }}" class="{{ @$link[ 'class' ] ? $link[ 'class' ] : 'btn btn-raised btn-primary' }}">{{ $link[ 'text' ] }}</a>
            @endforeach
        </div>
    </div>
</div>