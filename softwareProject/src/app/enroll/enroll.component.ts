import { ServerServiceService } from './../services/server-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { collectionChanges } from '@angular/fire/firestore';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  usermodel = new User(0, 0, 0, 0, "up", 0, "")
  public allusers: number = 0;


  constructor(private serverservice: ServerServiceService) { }

  ngOnInit(): void {
    collectionChanges(this.serverservice.getall()).pipe(
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
  sendfun() {
    return this.allusers;
  }
  submitdata() {
    console.log(this.usermodel)
    this.serverservice.create(this.usermodel).then(() => {


      alert("information sending successfullyy :)")
    })
  }

}
