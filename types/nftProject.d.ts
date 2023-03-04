export interface NftProject {
  attributes: {
    name: string;
    description: string;
    website: string;
    twitter: string;
    instagram: string;
    supply: string;
    discord: string;
    facebook: string;
    project_founders?: string;
    price: string;
    blockchain: {
      name: string;
      currency: string;
    };
    drop_date: string;
  };
}
