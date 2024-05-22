import { ServiceItem } from "../models/services.model";

export const mockService1: ServiceItem = {
  cardId: 1,
  title: 'Title name',
  subtitle: '',
  options: [
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    },
    {
      name: ' Sed in ex urna.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    },
    {
      name: 'Donec consequat dolor ut imperdiet accumsan.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    }
  ],
  img: 'https://firebasestorage.googleapis.com/v0/b/mental-health-wroclaw.appspot.com/o/icons%2Fcomedy_ic.png?alt=media&token=ae18625c-722e-42f2-9f71-0010b7c509d1'
}

export const mockService2: ServiceItem = {
  cardId: 2,
  title: 'Title name',
  subtitle: 'Donec consequat accumsan',
  options: [
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    },
    {
      name: 'Lorem ipsum dolor sit amet.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    },
    {
      name: 'Sed in ex urna.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    }
  ],
  img: 'https://firebasestorage.googleapis.com/v0/b/mental-health-wroclaw.appspot.com/o/icons%2Fcomedy_ic.png?alt=media&token=ae18625c-722e-42f2-9f71-0010b7c509d1'
}

export const mockService3: ServiceItem = {
  cardId: 3,
  title: 'Title name',
  subtitle: 'some subtitle',
  options: [
    {
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    },
    // {
    //   name: 'option name 2',
    //   link: 'option link',
    //   body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    // },
    {
      name: 'Donec consequat dolor.',
      link: 'option link',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex urna. Donec consequat dolor ut imperdiet accumsan.'
    }
  ],
  img: 'https://firebasestorage.googleapis.com/v0/b/mental-health-wroclaw.appspot.com/o/icons%2Fcomedy_ic.png?alt=media&token=ae18625c-722e-42f2-9f71-0010b7c509d1'
}

export const mockServices: ServiceItem[] = [
  mockService1,
  mockService2,
  mockService3,
  mockService1,
  mockService2,
  mockService3
]
