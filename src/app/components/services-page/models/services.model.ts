// Services Page Content
export interface ContentData {
  name: string;
  pageId: number;
  sections: Section[];
}

export interface Section {
  name: string;
  title: string;
  subtitle?: string;
  txtContent?: {
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
    paragraph4?: string;
    paragraph5?: string;
    paragraph6?: string;
  };
  imageSrc?: string;
  imageAlt?: string;
  cards?: Card[];
  accordionOptions?: Accordion[];
  contacts?: Contacts;
  servicesList?: ServiceItem[];
}

export interface Card {
  title: string;
  txtContent: {
    [key:string]: string;
  };
  imageSrc: string;
  imageAlt: string;
}

export interface Accordion {
  title: string;
  body: string;
}

export interface Contacts {
  placeName: string;
  address: {
    street: string;
    building: string;
    room: string;
    postalCode: string;
    city: string;
  },
  phoneNumber: string;
  email: string;
}

export interface ServiceItem {
  cardId: number;
  title: string;
  subtitle: string;
  options: ServiceOption[];
  imgUrl: string;
}

export interface ServiceOption {
  name: string;
  link: string;
  body: string;
}

