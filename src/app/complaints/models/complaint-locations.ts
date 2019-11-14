import { BasicComplaint } from './basic-complaint';

export class ComplaintLocations {
    public placeId: string;
    public name: string;
    public address: string;
    public types: string[];
    public complaints: BasicComplaint[];
}
