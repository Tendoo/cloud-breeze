<div class="form-group">
    <label for="{{ $field->name }}">{{ $field->label }}</label>
    <input name="{{ $field->name }}" type="text" class="form-control {{ $errors->has( $field->name ) ? 'is-invalid' : '' }}" value="{{ old( $field->name ) ? old( $field->name ) : @$field->value }}" placeholder="{{ @$field->placeholder }}">
    @if( $errors->has( $field->name ) )
    <div class="invalid-feedback d-block">
        {{ $errors->first( $field->name ) }}
    </div>
    @else
    <small class="form-text text-muted">{{ @$field->description }}</small>
    @endif
</div>