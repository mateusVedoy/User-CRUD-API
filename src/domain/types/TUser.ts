export type TUser = {
    "userId": string,
    "fullName": String,
	"userContact": {
		"cellPhone": {
			"ddi": string,
			"ddd": string,
			"number": string
		},
		"email": String
	},
	"userAuth": {
		"login": string,
		"pass": string,
		"recoverEmail": string
	},
	"addressId": string
}