import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/schema/interface';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events$: Observable<Event[]>;

  constructor(private ds: DataService, private afs: AngularFirestore) {
    this.getEvents();
  }

  ngOnInit() {}

  getEvents() {
    this.events$ = this.afs
      .collection<Event>('/events', (ref) => ref.orderBy('createdAt', 'desc'))
      .valueChanges({ idField: 'id' });
    // `valueChanges` fetches real-time updates. If you want the document ID too, use `{ idField: 'id' }`.
    console.log(this.events$);
  }
}
