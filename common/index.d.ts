/**
 * Interface for User
 */
export interface User {
    name: string;
}

/**
 * Interface for Website Source
 */
export interface Source {
    name: string;
    displayName: string;
    url: string;
    bias: string;
    accuracy: string;
    mbfcUrl: string;
    verifiedDate: Date;
}
