import { Injectable } from '@angular/core';

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
    (mapboxgl as any).accessToken = environment.MAPBOX_KEY.accessToken
  }

  getMakers(): Observable<any[]> {
    const makerRef: AngularFirestoreCollection<any> =
      this.afs.collection('/makers');
    return makerRef.valueChanges()
  }

  createMaker(data: GeoJson) {
    return this.afs.collection("/makers").add(data)
  }

  deleteMaker($key: string) {
    return this.afs.doc("/makers/" + $key).delete()
  }
}
