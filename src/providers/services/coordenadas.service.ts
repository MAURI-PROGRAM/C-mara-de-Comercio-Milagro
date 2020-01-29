import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Panico} from '../../interface/IPanico'


@Injectable({
    providedIn: 'root'
})

export class PanicoService {
    private ideas: Observable<Panico[]>;
    private ideaCollection: AngularFirestoreCollection<Panico>;

    constructor(private afs: AngularFirestore) {
        this.ideaCollection = this.afs.collection<Panico>('Panico');
        this.ideas = this.ideaCollection.valueChanges();
    }

    getCordenadas(): Observable<Panico[]> {
        return this.ideas;
    }

    getCordenada(id: string): Observable<Panico> {
        return this.ideaCollection.doc<Panico>(id).valueChanges().pipe(
            take(1),
            map(idea => {
                idea.id = id;
                return idea;
            })
        );
    }

    addCordenadas(coordenada: Panico): Promise<DocumentReference> {
        return this.ideaCollection.add(coordenada);
    }

    updateCordenadas(idea: Panico): Promise<void> {
        return this.ideaCollection.doc(idea.id).update({ latitud: idea.latitud, longitud: idea.longitud });
    }

    deleteCordenadas(id: string): Promise<void> {
        return this.ideaCollection.doc(id).delete();
    }
}
