export interface Button {
    label?: string;
    icon?: string;
    color?: string;

    /**
     * button namespace
     */
    namespace: string;

    /**
     * Handle onclick event
     */
    onClick?: () => void

    /**
     * conditional show
     * @var boolean
     */
    show?: () => boolean;
}

