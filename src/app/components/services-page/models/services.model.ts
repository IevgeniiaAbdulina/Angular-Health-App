export interface ServiceItem {
  cardId: number;
  title: string;
  subtitle: string;
  options: ServiceOption[];
  img: string;
}

export interface ServiceOption {
  name: string;
  link: string;
  body: string;
}
