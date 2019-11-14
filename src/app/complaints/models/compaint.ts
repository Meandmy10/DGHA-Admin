import { BasicComplaint } from './basic-complaint';
import { parseISO } from 'date-fns'


export class Complaint extends BasicComplaint {
    public userEmail: string;
}
