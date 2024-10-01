interface EventForm {
  eventName: string;
  file: File | null;
  description: string;
  type: string;
  organizerName: string;
  eventDate: Date;
  location: string;
  eventStatus: string;
}
