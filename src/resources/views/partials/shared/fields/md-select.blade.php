<div id="field-{{ $field->name }}" style="width:100%" class="mdc-select" role="listbox" tabindex="0">
    <div class="mdc-select__surface">
        <div class="mdc-select__label mdc-select__label">{{ $field->label }}</div>
        <div class="mdc-select__selected-text"></div>
        <div class="mdc-select__bottom-line"></div>
    </div>
    <div class="mdc-simple-menu mdc-select__menu">
        <ul class="mdc-list mdc-simple-menu__items">
        @php
        $index          =   0;
        $selectedIndex  =   0;
        $selectedValue  =   '';
        @endphp
        @foreach( ( array ) @$field->options as $value => $text )
            <li data-value="{{ $value }}" class="mdc-list-item" role="option" tabindex="0">
                {{ $text }}
            </li>
            @if( @$field->value == $value )
                @php
                $selectedIndex  =   $index;
                $selectedValue  =   $value;
                @endphp
            @endif
            @php
            $index++;
            @endphp
        @endforeach
        </ul>
    </div>
</div>
@if ( $errors->has( $field->name ) )
<div class="invalid-feedback d-block">
    {{ $errors->first( $field->name ) }}
</div>
@else
<small class="form-text text-muted">{{ @$field->description }}</small>
<br>
@endif
<input type="hidden" name="{{ $field->name }}">
<script>
jQuery( document ).ready( function(){
    var MDCSelect               = mdc.select.MDCSelect;
    var selectField             = document.getElementById( 'field-{{ $field->name }}' );
    var selectFieldComponent    = new mdc.select.MDCSelect( selectField );
    var adapter                 = new mdc.select.MDCSelectFoundation( selectFieldComponent );
    selectFieldComponent.listen( 'MDCSelect:change', () => {
        $( '[name="{{ $field->name }}"]' ).val(
            $( selectFieldComponent.selectedOptions[0] ).attr( 'data-value' )
        );
    })

    // selectFieldComponent.selectedIndex	    =   {{ $selectedIndex }};
    $( '[name="{{ $field->name }}"]' ).val( '{{ $selectedValue }}' );
});
</script>