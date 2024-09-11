import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GeoJson } from '../schema/mapGeo';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {
    (mapboxgl as any).accessToken = environment.MAPBOX_KEY.accessToken;
  }

  getMarkers(): Observable<any[]> {
    const makerRef: AngularFirestoreCollection<any> =
      this.afs.collection('/makers');

    // Use `snapshotChanges()` to get the document data along with the ID
    return makerRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data(); // Get the document data
          const id = a.payload.doc.id; // Get the document ID
          return { id, ...data }; // Return both the ID and the data
        })
      )
    );
  }

  createMaker(data: any) {
    console.log('GeoJson =>', GeoJson);
    return this.afs.collection('/makers').add(data);
  }

  removeMaker(maker_id: any) {
    return this.afs.doc('/makers/' + maker_id).delete();
  }
}
