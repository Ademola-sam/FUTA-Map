export interface Event {
  id?: string; // Firestore document ID
  eventName: string;
  eventDescription: string;
  eventType: string;
  organizerName: string;
  eventDate: any; // Use 'any' if storing Firestore Timestamps
  eventLocation: string;
  fileURL: string;
  createdBy: string; // User ID of the event creator
  createdAt: any; // Date the event was created
}
