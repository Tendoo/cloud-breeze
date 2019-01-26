export interface CoreAction {
    type : 'module.enabled' | 'module.disabled' | 'module.deleted';
    data: any
}