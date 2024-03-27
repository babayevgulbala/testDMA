// Task-01
// Konsola mesaj verin: «My name is Murad».
//console.log("My name is Gunel");



// Task-02
// Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin.

//const Name="Gunel Aliyeva";
//console.log(Name);

// Task-03
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// person
// $add


// Task-04
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

// let bookPrice=750;
// let bookAmount=14;
// total=bookPrice*bookAmount;
// console.log(total);



// Task-05
// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

// let kmhSpeed=75;
// msSpeed=kmhSpeed*1000/3600;
// console.log(msSpeed);



// Task-06
// İstifadəçinin doğum ilini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.

// date=prompt("Dogum tarixinizi qeyd edin:");
// thisisstate=2024;
// age=thisisstate-date;
// day=age*365
// console.log(day);

// Task-07
// Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Konsola çıxaran belə proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// num=25;
// quvvet=num**5;
// qaliq=num%3;
// console.log(quvvet,qaliq)



// Task-08
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

// let firstName = 'Alan';
// let lastName = 'Turing';

// console.log("Sizin adiniz " + firstName + " " + lastName +" Tanisligimiza cox sadam!");


// Task-09
// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.

// let firstName =prompt("Adinizi qeyd edin:") 
// let lastName = prompt("Soyadinizi qeyd edin:")

// console.log(Sizi bir daha gormeyimize sadiq,${firstName} ${lastName});

// Task-10
// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.
// let fullName = "Murad Orucov"

// let fullName = "Murad Orucov";
// uzunluq=fullName.length-1;
// console.log(uzunluq);


// Task-11
// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// let fullName="Gunel Eliyeva";
// console.log(fullName[0],fullName[fullName.indexOf(" ")+1]);


// Task-12
// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let fullName=prompt("Adinizi ve soyadinizi daxil edin:");
// let name=fullName.slice(0,fullName.indexOf(" "));
// let surname=fullName.slice(fullName.indexOf(" ")+1);
// console.log(surname,name);


// Task-13
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let firstName=prompt("Adinizi daxil edin:");
// console.log("Salam" + firstName);


// Task-14
// İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.
// let num1=+prompt("birinci ededi daxil edin:");
// let num2=+prompt("ikinci ededi daxil edin:");
// toplama=num1+num2;
// cixma=num1-num2;
// vurma=num1*num2;
// bolme=num1/num2;
// console.log(toplama);
// console.log(cixma);
// console.log(vurma);
// console.log(bolme);

// Task-15
// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın.
// let num1=12345;
// let num2=98765;
// total=num1 * num2 +"";
// console.log(total[5]);


// Task-16
// Əməliyyatların nəticəsini müəyyənləşdirin.

//     "" + 1 + 0 ="10"

//     "" - 1 + 0 =-1  

//     "true" - false =NaN

//     6 / "3" =2

//     4 + 5 + "px" =9px

//     "$" + 4 +5 = $45 

//     "4" - 2 =2

//     "4px" - 2 + "px" =NaNpx

//     7 / 0 =infinity

//     "-9" + 5 =-95

//     "-9" - 5 =-14

//     null + 1 =1

//     undefined + 1 =NaN


// Task-17
// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let num=prompt("Dord reqemli eded daxil edin:");
// let a=+(num.charAt(0));
// let b=+(num.charAt(1));
// let c=+(num.charAt(2));
// let d=+(num.charAt(3));
// let toplama=a+b+c+d;
// console.log(toplama);

// Task-18
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let fullName=prompt("Adinizi  ve soyadinizi daxil edin:");
// let name=fullName.slice(0,fullName.indexOf(" "));
// console.log( salam, ${name}!);

// Task-19
// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let manat=prompt("1 ci reqemi qeyd edin:");
// let qepik=prompt("2 ci reqemi qeyd edin:");
// let total=(${manat} manat  ${qepik} qepik);
// console.log(total);

// Task-20
// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.
// let emekHaqqi=prompt("Emek haqqinizi daxil edin:");
// let vergisiz_maas=emekHaqqi-(emekHaqqi*13/100);
// console.log(vergisiz_maas);




// Task-21
// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let userName=prompt("Soyadinizi adinizi ve ata adinizi qeyd edin:");
// let fullName=userName.split(" ");
// let user=fullName[0];
// let surName=fullName[1][0];
// let parent=fullName[2][0];
// console.log(${user} ${surName}.${parent}.);




// Task-22
// Depozitdən mənfəətin hesablanması üçün proqram yazın.
// Proqram istifadəçidən əmanətin məbləğini, müddətini və
// faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.
// let depozit=prompt("Depoziti daxil edin:");
// let faiz=prompt("Faizi daxil edin:");
// let date=prompt("Ayi daxil edin:")
// let menfeet=(depozit * faiz)/100;
// let qazanc=date*menfeet;
// console.log(qazanc);

// Task-23
// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.

// let value = 10
// console.log(value<11);
// console.log(value<=10);
// console.log(value<20);
// console.log(value<11);
// console.log(value<19);

// let value = 20
// console.log(value<11);
// console.log(value<=10);
// console.log(value<20);
// console.log(value<11);
// console.log(value<19);



// Task-24
// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.
// let age=prompt("yasinizi daxil edin:");
// if(age<18){
//     console.log("Access denied");
// }
// else{
//     console.log("Access granted");
    
// }

// Task-25
// Üç ədədin ortancılını tapmaq üçün proqram yazın.
// İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
// "45 46 47"
// "47 46 45"
// "46 45 47"
// "46 47 45"



// let num=prompt("3 dene iki reqemli eded qeyd edin:").split(" ");

// let num1=+num[0];
// let num2=+num[1];
// let num3=+num[2];

// if(num1>num2 && num1<num3 ||num1<num2 && num1>num3){
//     console.log(num1);

// } if(num2>num1&& num2<num3 || num2<num1 && num2>num3){
//     console.log(num2);

// }else if(num3>num1&& num3<num2 || num3<num1 && num3>num2){
//     console.log(num3);

// }else{
//     alert("dogru melumat qeyd edin:");
// }

// Task-26
// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.

// let year=prompt("bir il daxil edin:");
// if(year%4==0){
//     alert("il uzun ildir");
// }

// else{
//     alert("il uzun il deyil");

// }


// Task-27
// if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }



// let id = prompt ('enter product id:');
// switch(id){
//     case "1":
//         alert ('Available 10 pcs.');
//         break;
//     case "2":
//         alert ('Available 256 pcs.');
//         break;
//     case "3":
//         alert ('Available 53 pcs.');
//         break;
//     case "4":
//         alert ('There are 3 available.');
//         break;
//     default:
//         alert ('Out of stock');

// }


// Task-28
// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let gender=prompt("Cinsinizi qeyd edin(F and M):");
// if (gender=="F"){
//     alert ('Female');
// }
// else if(gender=="M"){
//     alert('Male');
// }
// else{
//     alert("İnvalid value")
// }

// Task-29
// Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// let ayin_nomresi=prompt("Necenci aydir?");
// switch(ayin_nomresi){
//     case "1":
//         console.log("Yanvar");
//         break;
//     case "2":
//         console.log("Fevral");
//         break;
//     case "3":
//         console.log("Mart");
//         break;
//     case "4":
//         console.log("Aprel");
//         break;
//     case "5":
//         console.log("May");
//         break;
//     case "6":
//         console.log("Iyun");
//         break;
//     case "7":
//         console.log("Iyul");
//         break;
//     case "8":
//         console.log("Avqust");
//         break;
//     case "9":
//         console.log("Sentyabr");
//         break;
//     case "10":
//         console.log("Oktyabr");
//         break;
//     case "11":
//         console.log("Noyabr");
//         break;
//     case "12":
//         console.log("Dekabr");
//         break;
//     default:
//         console.log("Invalid value");
// }

// Task-30
// İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

// let date = prompt("Tarixi daxil edin(2009.12.19):").split(".");
// let year = date[0];
// let month = date[1];
// let day = date[2];

// switch (month) {
//   case "1":
//     alert(${day} Yanvar ${year});
//     break;
//   case "2":
//     alert(${day} Fevral ${year});
//     break;
//   case "3":
//     alert(${day} Mart ${year});
//     break;
//   case "4":
//     alert(${day} Aprel ${year});
//     break;
//   case "5":
//     alert(${day} May ${year});
//     break;
//   case "6":
//     alert(${day} Iyun ${year});
//     break;
//   case "7":
//     alert(${day} Iyul ${year});
//     break;
//   case "8":
//     alert(${day} Avqust ${year});
//     break;
//   case "9":
//     alert(${day} Sentyabr ${year});
//     break;
//   case "10":
//     alert(${day} Oktyabr ${year});
//     break;
//   case "11":
//     alert(${day} Noyabr ${year});
//     break;
//   case "12":
//     alert(${day} Dekabr ${year});
//     break;
//   default:
//     alert("doğru seçim edin");
// }