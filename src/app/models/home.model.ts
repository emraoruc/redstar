export interface Box {
crossRates: any;
    type: string;
    grid: number;
    imageUrl?: string;
    title?: string;
    table?: {
      headers: string[];
      rows: {
        role: string;
        department: string;
        content: string;
      }[];
    };
    employees?: {
      name: string;
      position: string;
      image: string;
      startDate: string;
      endDate: string;
    }[];
    buttons?: {
      text: string;
      url: string;
    }[];
    events?: {
      text: string;
      date: string;
    }[];
    links?: {
      text: string;
      url: string;
    }[];
    rates?: {
selling: any;
buying: any;
      currency: string;
      rate: string;
    }[];
  }
  
  export interface HomeData {
    data: Box[];
  }
  