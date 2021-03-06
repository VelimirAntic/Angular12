export declare enum StorageScope {
    SESSION = "Session",
    LOCAL = "Local"
}
export interface StorageOptions {
    key: string;
}
export interface StorageServiceEvent {
    key?: string;
    scope: StorageScope;
    event: StorageServiceEventEnum;
    previousValue?: any;
    currentValue?: any;
}
export declare enum StorageServiceEventEnum {
    ADDED = "Added",
    MODIFIED = "Modified",
    REMOVED = "Removed",
    CLEARED = "Cleared"
}
