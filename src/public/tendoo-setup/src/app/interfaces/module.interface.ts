export interface TendooModule {
    'api-file': string;
    author: string;
    'controllers-path': string;
    'controllers-relative-path': string;
    'dashboard-path': string;
    dependencies: any[];
    enabled: boolean;
    'entry-class': string;
    files: string[];
    'index-file': string;
    namespace: string;
    path: string;
    providers: string[],
    'routes-file': string;
    version: string;
    'view-path': string;
    name: string;
}