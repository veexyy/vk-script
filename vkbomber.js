// актуален на 26/01/2023
// v 1.1.0
// массив с говном
const insults = [
    'даун',
    'дебил',
    'идиот', 
    'долбоёб', 
    'хуесос', 
    'аутист', 
    'дегенерат', 
    'хуерыга', 
    'тупорылый', 
    'ебанат', 
    'шизоид',
    "омежка", 
    "двачер", 
    "еблан", 
    "уёбище", 
    "слепой", 
    "еблище", 
    "несчастное существо", 
    "негр", 
    "бессмысленное существо", 
    "твоя мать - проститутка",
    "котак",
    "котакбас", 
    "котакжеме", 
    "шешен сыгин", 
    "пидорас",
    "пидр", 
    "пидрила", 
    "пидор", 
    "блядь", 
    "блядина",
    "шлюха", 
    "аутист", 
    "гидроцефал",
    'я ебал твою мать',
    'ты сын ебаной шлюхи',
    'сын хуйни',
    "кусок долбоёба",
    "сосунок",
    "закрой своё ебало",
    "сыночек шлюхи",
    "иди на хуй",
    "каблук",
    "кусок говна",
    ];
    
// получение кнопки отправки сообщения
const sendMessageButton = document.querySelectorAll('.im-send-btn');
const toArrSendMessageButton = Array.from(sendMessageButton);
const sendButtonFromArray = toArrSendMessageButton[1];

//  получение поля ввода
const inputField = document.querySelector('.im_editable');

//  получение всех пользователей
const userNameAndSurname = document.querySelectorAll('.im-mess-stack--lnk');

// преобразование нодлиста в массив
const toArrUserNameAndSurname = Array.from(userNameAndSurname);

// получение последнего элемента
const lastElementInArr = toArrUserNameAndSurname[toArrUserNameAndSurname.length-1];


setInterval(() => {
        // рандомизация оскорблений
            const insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
        // проверка пользователя
            if (lastElementInArr.innerHTML = lastElementInArr) {
                inputField.innerHTML = insultsWord; // inputField.innerHTML = 'Влад Чикулаев ' + insultsWord;
                sendButtonFromArray.click();
            }  else{
                console.log('not gay');
            }
}, 1000);
