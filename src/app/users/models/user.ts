export class User {
    public Id: string;
    // public UserName: string; //currently is the same as email so no point adding it.
    public Email: string;
    public Roles: string[];

    //these values could be added later:
    // EmailConfirmed
    // TwoFactorEnabled
}
