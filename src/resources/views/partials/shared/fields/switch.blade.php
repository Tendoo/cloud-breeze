<div class="mdc-switch">
    @foreach( $field->options as $value => $text )
    <input name="{{ $field->name }}" value="true" {{ in_array( $value, array_keys( ( array ) @$field->value ) ) ? 'checked="checked"' : null }} type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch">
    @endforeach 
    <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
    </div>
</div>
<label for="{{ $field->name }}">{{ @$field->label }}</label>
<br>
@if ( $errors->has( $field->name ) )
<div class="invalid-feedback d-block">
    {{ $errors->first( $field->name ) }}
</div>
@else
<small class="form-text text-muted">{{ @$field->description }}</small>
@endif
<br>
<input name="_checkbox[]" value="{{ $field->name }}" type="hidden" />