<label for="{{ $field->name }}">{{ @$field->label }}</label>
<div class="radio">
    @foreach( @$field->options as $value => $text )
    <label>
        <input type="radio" name="{{ $field->name }}" id="{{ $field->name }}-field" value="{{ $value }}" {{ @$field->value == $value ? 'checked="checked"' : null }}">
        {{ $text }}
        {{ @$field->value . '-' . $value }}
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
<input name="_radio[]" value="{{ $field->name }}" type="hidden"/>
