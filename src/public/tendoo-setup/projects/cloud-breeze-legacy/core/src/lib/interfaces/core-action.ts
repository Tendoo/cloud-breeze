export interface CoreAction {
    type :  'module.enabled' | 
            'module.disabled' | 
            'module.deleted' |
            'crud.bulk.failed' |
            'crud.bulk.success' |
            'crud.action.failed' |
            'crud.action.success';
    data: any
}