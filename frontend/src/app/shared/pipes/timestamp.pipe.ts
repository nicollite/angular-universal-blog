import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { Timestamp } from "firebase/firestore";

@Pipe({
  name: "timestamp",
})
export class TimestampPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(date: string | Date | Timestamp, ...args: any[]): string {
    if (date instanceof Timestamp) date = date.toDate();
    return this.datePipe.transform(date, ...args);
  }
}
