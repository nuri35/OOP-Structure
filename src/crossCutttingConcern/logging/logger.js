export  class BaseLogger {
    log(data){
console.log("default logger " + data);
    }
}


export  class MongoLogger extends BaseLogger { //kalıtım yaptık
    log(data){
        console.log("mongo logger " + data);
            }
}

//not : kalıtıım yaparak basedekı fonksıyonları operasyonları butun hepsını mongologgerdada sahıp oluyoruz ama dıgerlerındede log fonskıyonu yazarsak log fonskıyonu kendı ıcınde ezmıs olduk tabı bazı operasyonlar ortak olabılır  ezmeyebılrız

//sımdı nabtın  bır loglama ornegı uzerınden class yapısını gordun ve kalıtım  sımdı bunu userservıcede kullan