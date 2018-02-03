<label for="{{ $field->name }}">{{ @$field->label }}</label>
<div class="switch">
    @foreach( $field->options as $value => $text )
    <label>
        <input {{ in_array( $value, ( array ) @$field->value ) ? 'checked="checked"' : null }} type="checkbox"  name="{{ $field->name }}[]" value="{{ $value }}">
        {{ @$text }}
    </label>
    @endforeach

    @if ( $errors->has( $field->name ) )
    <div class="invalid-feedback d-block">
        {{ $errors->first( $field->name ) }}
    </div>
    @else
    <small class="form-text text-muted">{{ @$field->description }}</small>
    @endif
    <br>
</div>
<input name="_checkbox[]" value="{{ $field->name }}" type="hidden"/>