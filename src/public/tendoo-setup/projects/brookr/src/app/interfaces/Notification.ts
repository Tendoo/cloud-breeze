export interface Notification {
    id: number;
    title: string;
    description: string;
    actions: string;
    action: string;
    read: boolean;
    type: string;
    user_id: number;
    created_at: string;
    updated_at: string;
}