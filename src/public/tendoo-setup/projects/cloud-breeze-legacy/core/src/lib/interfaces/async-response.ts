export interface AsyncResponse {
    message: string;
    status: 'success' | 'failed' | 'error' | 'info' | 'installed' | 'not-installed';
    errors?: any;
    class?: string;
    action?: string;
    data: any;
    line: number;
    file: string;
}