export interface AsyncResponse {
    message: string;
    status: 'success' | 'failed' | 'error' | 'info';
    errors?: any;
    class?: any;
    action?: string;
}