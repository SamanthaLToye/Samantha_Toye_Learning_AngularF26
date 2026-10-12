//creating a new interface for sports cards, collectibles, and figures
//says one property must be optional with ? at the end
export interface collection {
  id: string | number; //union allows 101 or 'A101' for types to be used like this
  name: string;
  category?: 'Trading Card' | 'Figure' | 'Collectible' | 'Mock Collection'; //union types with |
  value: number;
  condition?: 'Poor' | 'Good' | 'Near Mint' | 'Mint' | string; //optional? property
}
