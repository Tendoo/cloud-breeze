export interface PaginatedResponse {
    current_page: number;
    data: any[];
    first_page_url: string;
    from: null | string;
    last_page: number;
    last_page_url: string;
    path: string;
    next_page_url: string;
    prev_page_url: string;
    to: null | number;
    total: number;
    per_page: number;
}