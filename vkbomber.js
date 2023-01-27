//  // массив с оскорблениями
//  const insults = ['даун', 'дебил', 'идиот', 'долбоёб', 'хуесос', 'аутист', 'дегенерат', 'хуерыга', 'дерево', 'ебанат', 'шизоид',];
//  переменная, которая ищет долбоёба
    


//     const inputField = document.querySelector('.im_editable im-chat-input--text _im_text')
//   // условие, то есть какой долбоёб тебе нужен
//   function findIdiot() {
//      if (userNameAndSurname == 'Владислав Махалов') {
//         let insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
//         return inputField.write(insultsWord); 
//      }else {
//         return inputField.write('не понял');
//      }
//  }





// // изменение заголовка на хабре
// setInterval(() => {
//     const insults = [
//         'даун',
//         'дебил',
//         'идиот', 
//         'долбоёб', 
//         'хуесос', 
//         'аутист', 
//         'дегенерат', 
//         'хуерыга', 
//         'дерево', 
//         'ебанат', 
//         'шизоид',
//         "омежка", 
//         "двачер", 
//         "любит большой хуй", 
//         "бестолковый", 
//         "слепой", 
//         "нерадивый", 
//         "несчастное существо", 
//         "дурацкий", 
//         "бессмысленное существо", 
//         "твоя мать - проститутка"];
//     let insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
//     const findElem = document.querySelector('.tm-article-snippet__title');
//     let b = findElem.lastElementChild;
//     b.innerHTML = insultsWord;
//     console.log(b);
// }, 1000);





// const findAudio = document.querySelector('.im-send-btn im-chat-input--send _im_send im-send-btn_audio');
// const sendAudio = () =>{
//     findAudio.click();
// }

// setInterval(() => {
//     sendAudio();
// }, 5000);





// function findIdiot() {
//      if (userNameAndSurname == 'Владислав Махалов') {
//          let insultsWord = insults[Math.floor(Math.random() * insults.length)]; 
//         return inputField.innerHTML = insultsWord;   
//     }
//      console.log(inputField)
//  }





// актуален на 26/01/2023
// для влада чикулаева в цикл добавить inputField.innerHTML = 'Влад Чикулаев ' + insultsWord;
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