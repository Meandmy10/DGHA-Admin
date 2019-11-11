import { BasicComplaint } from './basic-complaint';
import { parseISO } from 'date-fns'


export class Complaint extends BasicComplaint {
    public placeID: string;
    public status: string;
    public userEmail: string;

    public constructor(complaint: any) {
        super();
        this.comment = complaint.comment;
        this.placeID = complaint.placeID;
        this.status = complaint.status;
        this.timeLastUpdated = parseISO(complaint.timeLastUpdated);
        this.timeSubmitted = parseISO(complaint.timeSubmitted);
        this.userEmail = complaint.userEmail;
        this.userID = complaint.userID;
    }
}
