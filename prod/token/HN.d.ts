export declare const hnContract: {
    level: (hnId: number) => Promise<any>;
    transferBatch: (to: string, hnIds: number[]) => Promise<any>;
};
