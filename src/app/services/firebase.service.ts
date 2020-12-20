import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Appointment } from '../services/appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
 // Create
 createBooking(apt: Appointment) {
  return this.bookingListRef.push({
    name: apt.name,
    email: apt.email,
    mobile: apt.mobile
  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/appointment/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/appointment');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: Appointment) {
  return this.bookingRef.update({
    name: apt.name,
    email: apt.email,
    mobile: apt.mobile
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/appointment/' + id);
  this.bookingRef.remove();
}
}
