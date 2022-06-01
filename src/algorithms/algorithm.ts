export interface SortingAlgorithm {
    bestCase: string;
    average: string;
    worstCase: string;
    memory: string;
    sort: (arr: Array<Number>) => Array<string>;
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
export interface Isteps {
    array: number[],
    pair: number[],
    pairIndex: number[],
    isSorted: boolean
};