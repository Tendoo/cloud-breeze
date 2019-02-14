export interface AsyncResponse {
    message: string;
    status: 'success' | 'failed' | 'error' | 'info' | 'installed' | 'not-installed';
    errors?: any;
    class?: any;
    action?: string;
}