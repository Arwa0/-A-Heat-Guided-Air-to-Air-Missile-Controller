import { Injectable } from '@angular/core';
import { addDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { User } from '../classes/user';
import { map } from 'rxjs/operators';
import { collectionChanges } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {
  allusers: number = 0;


  constructor(private db: Firestore) {

  }
  ngOnInit(): void {
    collectionChanges(this.getall()).pipe(
      map((changes: any) => {
        return changes.map((c: any) => {
          return ({ id: c.doc.id, ...c.doc.data() })

        }
        )

      })
    ).subscribe(data => {
      this.allusers = Number(data[data.length - 1].id) + 1;
    });

  }
  create(user: User) {
    const dbInsatnce = collection(this.db, "sensor")
    return addDoc(dbInsatnce, { ...user });
    //setDoc(doc(dbInsatnce, "4"), { ...user });
    //this.allusers.toString()


  }
  getall() {
    return collection(this.db, "sensor");
  }
}
