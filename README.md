Arhitektura aplikacije:

Ova aplikacija je izradjena pomocu React java script biblioteke, za dizajn je koriscen Tailwind css, za back-end deo Expess, za bazu Mongo DB i za bazu koja skladisti slike na sajtu Firebase.

Za rute na sajtu je koriscen paket react-router-dom, sa cim je i pocela izrada projekta. Zatim je uradjen Header deo, komponente ovog dela su uzete iz flowbite-react paketa, a ikonice koje se nalaze na sajtu iz react-icons paketa. 

Dalje je kreiran i povezan server sa front-endom kao i baza. Ovde je takodje instaliran i dotenv paket pomocu koga cemo cuvati informacije koje ne zelimo da budu svima dostupne i pozivacemo ih samo iz .env fajla.

Kreiran je model za korisnika i odgovarajuca ruta, kao i ruta za autentifikaciju pomocu koje dajemo funkcionalnost delu za prijavu i registrovanje na sajt. Zatim su napravljene ove strane na projektu kao i footer stranice.

Zatim je instaliran redux toolkit i redux persist(cuvanje stanja) pomocu kojih cemo upravljati stanjem nase aplikacije i poboljsati citljivost koda.
Dodata mogucnost povezivanja profila preko google naloga i povezan firebase nalog sa kodom.

Dalje je kreirana kontrolna tabla, gde je moguce videte svoj profil i azurirati podatke, takodje je dodata mogucnost dodavanja slike na profilu i dodata je simulacija ucitavanja slike u obliku kruga koji ucitava, to je bilo omoguceno preko react-circular-progressbar biblioteke. U back-end delu dodate su i rute za azuriranje i brisanje korisnika.

U sledecem delu je dodata uloga novinara, koji moze da pise vesti, napravljen je model za vest. Pisanje vesti je omoguceno preko react-quill biblioteke za uredjivanje teksta. Napravljene su rute za prikazivanje, uredjivanje i brisanje vesti i ove funkcionalnosti su dodate u front-end deo. Novinaru je dodata mogucnost da vidi sve korisnike i svoje vesti kao i da ih obrise ukoliko zeli pomocu odgovarajucih ruta.

Dodati komentari ispod postova, s tim u vezi je napravljen i model komentara u kom je dodat broj lajkova kao jedan od elemenata pomocu koga smo omogucili lajkovanje komentara i prikazivanje broja lajkova. Omoguceno prikazivanje, menjaje i brisanje komentara korisniku koji je napisao komentar. Takodje dodata je sekcija na kontrolnoj table gde novinar moze videte sve komentare i obrisati ih ukoliko zeli.

Napravljena je kartica vesti pomocu koje cemo prikazivati vesti na pocetnoj strani, uradjena je pocetna strana i strana ‘o nama’ u kojoj takodje mozemo videti 3 najnovije vesti. I za kraj je uradjena ‘Search’ opcija u kojoj mozemo pretraziti vesti po naslovu ili sadrzaju.

Pokretanje aplikacije:

Aplikacija se pokrece tako sto prvo pokrenemo back-end server upisujuci u terminal komandu ‘npm run dev’(potrebno je biti u direktorijumu ‘projekat’), a zatim pokrenemo front-end istom komandom ‘npm run dev’ s tim sto ovog puta se moramo nalaziti u client direktorijumu gde se nalazi front-end.
