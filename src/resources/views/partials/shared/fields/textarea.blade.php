<div class="form-group">
    <label for="{{ $field->name }}">{{ $field->label }}</label>
    <textarea 
        name="{{ $field->name }}"
        class="form-control {{ $errors->has( $field->name ) ? 'is-invalid' : '' }}" 
        placeholder="{{ @$field->placeholder }}" 
        id="field-{{ $field->name }}" 
        rows="5">{{ old( $field->name ) ? old( $field->name ) : @$field->value }}</textarea>
    @if( $errors->has( $field->name ) )
    <div class="invalid-feedback d-block">
        {{ $errors->first( $field->name ) }}
    </div>
    @else
    <small class="form-text text-muted">{{ @$field->description }}</small>
    @endif
</div>