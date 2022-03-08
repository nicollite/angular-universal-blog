import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  a: any;

  constructor(public db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .doc("a/b")
      .get()
      .subscribe(doc => {
        this.a = doc.data();
        console.log(this.a);
      });
  }
}
