<div class="mdc-select" id="field-{{ $field->name }}">
    <select name="{{ $field->name }}" class="mdc-select__native-control" style="min-width: 300px">
        @php 
        $index = 0; 
        $selectedIndex = 0; 
        $selectedValue = ''; 
        @endphp

        @foreach( ( array ) 
            @$field->options as $value => $text
        )
        <option value="{{ @$value }}"{{ @$field->value === $value ? ' selected="selected"' : null }}>{{ $text }}</option>
            @php 
            $index++; 
            @endphp
        @endforeach
    </select>
    <label class="mdc-floating-label">{{ $field->label }}</label>
    <div class="mdc-line-ripple"></div>
</div>
@if ( $errors->has( $field->name ) )
<div class="invalid-feedback d-block">
    {{ $errors->first( $field->name ) }}
</div>
@else
<small class="form-text text-muted">{{ @$field->description }}</small>
<br> 
@endif
@push( 'partials.shared.footer' )
<script>
const select = new mdc.select.MDCSelect(document.querySelector('#field-{{ $field->name }}'));
</script>
@endpush