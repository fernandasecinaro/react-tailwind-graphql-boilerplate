export interface Language {
  name: string;
}

export interface Continent {
  name: string;
}

export interface Country {
  code: string;
  name: string;
  continent: Continent;
  languages: Language[];
  capital?: string;
}

export interface CountryChart {
  code: string;
  name: string;
  continent: Continent;
}
