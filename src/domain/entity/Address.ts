export class Address {
    private addressId: string;
    private country: string;
    private state: string;
    private city: string;
    private neighborhood: string;
    private street: string;
    private streetNumber: number;

    constructor(addressId: string, country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number){
        this.addressId = addressId;
        this.country = country;
        this.state = state;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    public getAddressId(){
        return this.addressId;
    }

    public getCountry(){
        return this.country;
    }

    public setCountry(country: string){
        this.country = country;
    }

    public getState(){
        return this.state;
    }

    public setState(state: string){
        this.state = state;
    }

    public getCity(){
        return this.city;
    }

    public setCity(city: string){
        this.city = city;
    }

    public getNeighborhood(){
        return this.neighborhood;
    }

    public setNeighborhood(neighborhood: string){
        this.neighborhood = neighborhood;
    }

    public getStreet(){
        return this.street;
    }

    public setStreet(street: string){
        this.street = street;
    }

    public getStreetNumber(){
        return this.streetNumber;
    }

    public setStreetNumber(number: number){
        this.streetNumber = number;
    }
}