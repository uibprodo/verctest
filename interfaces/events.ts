export interface Events {
  data: Data;
  entities: { [key: string]: Entity };
  sentiment: Sentiment;
}

export interface Data {
  attendees: Attendee[];
  description: string;
  duration: number;
  end: {
    dateTime: string;
  };
  eventType: string;
  id: string;
  location: string;
  start: {
    dateTime: string;
  };
  status: string;
  summary: string;
}

export interface Attendee {
  email: string;
  responseStatus: string;
  displayName?: string;
  organizer?: boolean;
  self?: boolean;
}

export interface Entity {
  etype: string;
  salience: number;
  phone: string;
}

export interface Sentiment {
  magnitude: number;
  score: number;
}
