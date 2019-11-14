import { parseISO } from 'date-fns';
import { Complaint } from './compaint';

export class BasicComplaint {
    public placeID: string;
    public userID: string;
    public timeSubmitted: string;

    public comment: string;
    public timeLastUpdated: string;
    public status: string;
}
