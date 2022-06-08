export class Adress {
    public addressId: string;
    public country: string;
    public state: string;
    public city: string;
    public neighborhood: string;
    public street: string;
    public streetNumber: number;

    constructor(addressId: string, country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number){
        this.addressId = addressId;
        this.country = country;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}