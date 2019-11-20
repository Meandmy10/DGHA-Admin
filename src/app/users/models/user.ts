export class User {
    public id: string;
    // public UserName: string; //currently is the same as email so no point adding it.
    public email: string;
    public roles: string[];

    //these values could be added later:
    // EmailConfirmed
    // TwoFactorEnabled
}
