/**
 * Interface for User
 */
export interface User {
  oauthId: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
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
