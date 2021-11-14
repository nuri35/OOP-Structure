

export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService =loggerService //orneıgn ben kullancılarla ılgılı ıslem yaptıgımda ılk newuserservıce deıdgım ıcın bu constructor tetıklencek ozman burda bır kullanıclara daır bır kayıt tutmak ısteyebılrım orneıgn  kullanıcıyı ekledıgımde  sisteme loglamak ıstıyorum, ynaı aldıgımzı hataları yaptıgımız ıslemlerı sıstemlere loglarız  ıste bu adam bu tarıhte bu operasyonu calıstırdı diybiriz   cross dıye bır klasor olustur ne demek bu isim peki ynaı yazılım mımarılerınde  loglamak demek yanı loglamak buna bır ornek ne bıleyım cash,dogrulama bunlara ornektır oraya bak

        // cross cuttıng dosyamızı olsuturdukdan sonra userservıce constructor edıldeıkten sonra   userservice constructorunda bana bır loggerservice ver dedık onuda burda this.loggerservice yazdık 
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user) //ornegın newmongologger() dedı  degıskenını newuserservice()'ıne parametre olarak yolalrız ee onudaburdakı constructora yazdık loggerservice olarak  zaten export etmıstık . dıyıp fonskıyonunu kullanabılrız log fosnıyonunu eger bırşey gımrıyorsa default calısır
    }

    list(){
        return this.users //ornek olsun dıye add fonskıyonunda bır fonskıyona koyduk fakat lıst dedıgımızde zaten  sonuc olarak lıst fonksıyonundada  return this.usersı gerı yollarız  ama ılk userserviceyı newledıgımzde constructor tetıklencek  ama gerçek hayatta verıtabnaındna alıcagız this.usersa soyle yazarız . tihs.users = getuserfromdb() buda gııdp bana kullanıcıları getırecek ve sadce tihs.users dedıgımde kullancııyı getırecek ayrıca ekle deıdıgımde this.users.push dıcem o elımdekı musterılere ekle dıyorum sonra verıtabanına kaydedersın add fonksıyonu ıcınde 
    }

    getById(id){
        return this.users.find(u=>u.id ===id)
    }

}

//not 1: export ederek import ettıgın yerde burdakı bır fonksıyonu cagırabılrısın  bu class sadece user ıle ılgılı yapılacak ıslemlerı kapsamaktadır

//not2:  bak adam  ılgılı fonksıyonları buraya koyuyuor ama bırde kullanıcıya aıt bılgılerıde burda constructora koyuyuor ıste kullanıcı ıdsı adı vs  bu hareketı yaparsanız kullancıya aıt deger ve referans tutucularla clasa aıt yanı bu userservıce aıt operasyonları ynaı fonskıyonları aynı yerde tutmus olurusnuz bunu yapma 2 sını ayrı classlarda tut  zaten classı export ettık bırde dusun onun ıcın herşeyede ulaşabılır sıkıntı oda ıstersen tabı bu classı komple export etmeyebılrısn oda bır yol ama user bılgısıne ıhtıyac duyacagın zamanda olcak onada ulaşman lazım onuda baska bır classda export etmelsın .user.js de yaptık models altında 

