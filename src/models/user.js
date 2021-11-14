export default class User {
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}

//not: new user seklınde cagırdıgımzda constructor kısmı calısır. sonra bana nesne verır cagırdıgım yerde daha sonra  onuda userservicedekı bır fonksıyona yollayabılrım