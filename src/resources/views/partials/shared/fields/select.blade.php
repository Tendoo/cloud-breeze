<div class="form-group">

    <label for="{{ $field->name }}">{{ $field->label }}</label>
    
    <select name="{{ $field->name }}" class="form-control">
        @foreach( ( array ) @$field->options as $value => $text )
            <option value="{{ $value }}" {{ $value == @$field->value ? 'selected="selected"' : '' }}>{{ $text }}</option>
        @endforeach
    </select>

    @if ( $errors->has( $field->name ) )
    <div class="invalid-feedback d-block">
        {{ $errors->first( $field->name ) }}
    </div>
    @else
    <small class="form-text text-muted">{{ @$field->description }}</small>
    @endif

</div>