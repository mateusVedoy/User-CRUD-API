import { TUser } from "./../types/TUser";


export class User {

    private userId: string;
    private fullName: string;
    private cellPhoneDDD: string;
    private cellPhoneDDI: string;
    private cellPhoneNumber: string;
    private email: string;
    private login: string;
    private pass: string;
    private recoverEmail: string;
    private addressId: string;

    public constructor(id: string, fullName: string, cellPhoneDDI: string, cellPhoneDDD: string, cellPhone: string, email: string, login: string, pass: string, recoverEmail: string, addressId: string) {
        this.setUserId(id);
        this.setUserFullName(fullName);
        this.setCellPhoneDDD(cellPhoneDDD);
        this.setCellPhoneDDI(cellPhoneDDI);
        this.setCellPhoneNumber(cellPhone);
        this.setEmail(email);
        this.setLogin(login);
        this.setPass(pass);
        this.setRecoverEmail(recoverEmail);
        this.setAddressId(addressId);
    }

    public getUserId() {
        return this.userId;
    }

    private setUserId(userId: string) {
        this.userId = userId;
    }

    public getUserFullName() {
        return this.fullName;
    }

    public setUserFullName(userFullName: string) {
        this.fullName = userFullName;
    }

    public getCellPhoneDDD() {
        return this.cellPhoneDDD;
    }

    public setCellPhoneDDD(cellPhoneDDD: string) {
        this.cellPhoneDDD = cellPhoneDDD;
    }

    public getCellPhoneNumber() {
        return this.cellPhoneNumber;
    }

    public setCellPhoneNumber(cellPhoneNumber: string) {
        this.cellPhoneNumber = cellPhoneNumber;
    }

    public getCellPhoneDDI() {
        return this.cellPhoneDDI;
    }

    public setCellPhoneDDI(cellPhoneDDI: string) {
        this.cellPhoneDDI = cellPhoneDDI;
    }

    public getEmail() {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getLogin() {
        return this.login;
    }

    public setLogin(login: string) {
        this.login = login;
    }

    public getPass() {
        return this.pass;
    }

    public setPass(pass: string) {
        this.pass = pass;
    }

    public getRecoverEmail() {
        return this.recoverEmail;
    }

    public setRecoverEmail(recoverEmail: string) {
        this.recoverEmail = recoverEmail;
    }

    public getAddressId() {
        return this.addressId;
    }

    public setAddressId(addressId: string) {
        this.addressId = addressId;
    }

    public toString(): TUser {
        return ({
            "userId": this.userId,
            "fullName": this.fullName,
            "cellPhone": {
                "ddi": this.cellPhoneDDI,
                "ddd": this.cellPhoneDDD,
                "number": this.cellPhoneNumber
            },
            "email": this.email,
            "userAuth": {
                "login": this.email,
                "pass": this.pass,
                "recoverEmail": this.recoverEmail
            },
            "addressId": this.addressId
        });
    }
}