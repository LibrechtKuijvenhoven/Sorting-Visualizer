export interface SortingAlgorithm {
    bestCase: string;
    average: string;
    worstCase: string;
    memory: string;
    sort(arr: Array<string>): Array<string>;
}

export enum TypeOfAlgorithm {
    Heap,
    Quick,
    Bubble,
    Merge,
    Insertion,
    Selection,
    Shell,
    Bogo
}