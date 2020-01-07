import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Coordenadas {
    id?: string;
    latitud: string;
    longitud: string;
}


@Injectable({
    providedIn: 'root'
})

export class CoordenadasService {
    private ideas: Observable<Coordenadas[]>;
    private ideaCollection: AngularFirestoreCollection<Coordenadas>;

    constructor(private afs: AngularFirestore) {
        this.ideaCollection = this.afs.collection<Coordenadas>('Coordenadas');
        this.ideas = this.ideaCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getCordenadas(): Observable<Coordenadas[]> {
        return this.ideas;
    }

    getCordenada(id: string): Observable<Coordenadas> {
        return this.ideaCollection.doc<Coordenadas>(id).valueChanges().pipe(
            take(1),
            map(idea => {
                idea.id = id;
                return idea;
            })
        );
    }

    addCordenadas(coordenada: Coordenadas): Promise<DocumentReference> {
        return this.ideaCollection.add(coordenada);
    }

    updateCordenadas(idea: Coordenadas): Promise<void> {
        return this.ideaCollection.doc(idea.id).update({ latitud: idea.latitud, longitud: idea.longitud });
    }

    deleteCordenadas(id: string): Promise<void> {
        return this.ideaCollection.doc(id).delete();
    }
}
