export interface StoreState {
    count: number;
}

export interface CountAction {
    type: string;
    data: number
}