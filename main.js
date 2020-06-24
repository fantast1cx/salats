var mainFrame = document.querySelector('#mainFrame');
var frame = document.querySelector('#frame');
var back = document.querySelector('#back');
var fotos = document.querySelector('#fotos');
var imgView = document.querySelector('.imgView');
var counter = document.querySelector('#counter');
var frameTask = document.querySelector('#frameTask');
var title = document.querySelector('#title');
var flag = document.querySelector('#flag');
var menu = document.querySelector('#menu');
var soremo = document.querySelector('#soremo');

var country = 'tr';
var count = 0;

var uk = {
    title: 'オリヴィエ',
    oneImg: 'images/olivie.jpg',
    twoImg: 'images/olivieS.jpg',
    flag: 'images/uk.png',
    soremo: [['21.png','えび'],['22.png','かに'],['23.png','チキン']],
    salat: [['4.png','じゃがいも'],['3.png','にんじん'],['2.png','たまご'],['13.png','ソーセージ'],['1.png','きゅうり'],['6.png','グリンピース'],['7.png','マヨネーズ']]
};

var tr = {
    title: 'チョバン',
    oneImg: 'images/choban.jpeg',
    twoImg: 'images/chobanS.jpeg',
    flag: 'images/tr.png',
    soremo: [['14.png','ミント'],['12.png','チーズ'],['15.png','オリーブオイル']],
    salat: [['5.png','たまねぎ'],['10.png','ピーマン'],['8.png','トマト'],['9.png','レーモンジュース'],['11.png','パセリ'],['1.png','きゅうり']]
};

var id = {
    title: 'ルジャック',
    oneImg: 'images/rojak.jpeg',
    twoImg: 'images/rojakS.png',
    flag: 'images/id.png',
    soremo: [['24.png','なし'],['25.png','パイナップル'],['26.png','バナナ']],
    salat: [['16.png','りんご'],['17.png','マンゴー'],['18.png','とうがらし'],['19.png','らっかせい'],['20.png','赤いさとう']]
}

var frameStyle = [
    'width: 100%;',
    'height: 100%;',
    'border: none;',
    'borderRadius: none;'
];

var imgViewStyle = [
    'background: url(images/choban.jpeg);',
    'background-position: 0% 30%;',
    'background-size: cover;'
];

var backStyle = [
    'display: none;',
    'opacity: 0;'
];

function init(value) {
    country = value;
    mainFrame.style.display = 'block';
    if(country == 'uk') {
        imgViewStyle = [
            'width: 100%;',
            'height: 100%;',
            `background: url(${uk.oneImg}) no-repeat;`,
            'background-position: center;',
            'background-size: cover'
        ];
        imgView.style.cssText = imgViewStyle.join('');
    }
    if(country == 'tr') {
        imgViewStyle = [
            'width: 100%;',
            'height: 100%;',
            `background: url(${tr.oneImg}) no-repeat;`,
            'background-position: center;',
            'background-size: cover'
        ];
        imgView.style.cssText = imgViewStyle.join('');
    }
    if(country == 'id') {
        imgViewStyle = [
            'width: 100%;',
            'height: 100%;',
            `background: url(${id.oneImg}) no-repeat;`,
            'background-position: center;',
            'background-size: cover'
        ];
        imgView.style.cssText = imgViewStyle.join('');
    }
};

function move(value) {
    if(value.className == 'right nav') {
        console.log(count);
        count++;
        if(count > 2) {
            count = 2;
            return;
        }
    }
    if(value.className == 'left nav') {
        console.log(count);
        count--;
        if(count < 0) {
            count = 0;
            return;
        }
    }
    if(count == 0) {
        bback(0);
    }
    if(count == 1) {
        con = '';
        if(country == 'uk') con = uk;
        if(country == 'tr') con = tr;
        if(country == 'id') con = id;
        imgViewStyle = [
            `background: url(${con.oneImg});`,
            'background-position: 0% 30%;',
            'background-size: cover;'
        ];
        flag.style.background = `url(${con.flag})`;
        frame.style.cssText = frameStyle.join('');
        back.style.cssText = backStyle.join('');
        fotos.style.height = '300px';
        imgView.style.cssText = imgViewStyle.join('');
        for(let i = 0; i < counter.children.length; i++) {
            counter.children[i].style.background = 'transparent';
        }
        counter.children[1].style.background = 'var(--blue)';
        frameTask.style.display = 'block';

        title.innerHTML = con.title;
        menu.innerHTML = '';
        soremo.innerHTML = '';
        let delay = 0;
        con.salat.forEach((item, i, arr) => {
            delay += 0.2;
            menu.innerHTML += `<div class="item" style="animation-delay: ${delay + 's'}">`+
                `<img src="images/${item[0]}">`+
                `<div class="itemName">${item[1]}</div>`+
            `</div>`;
        });
        delay = 0;
        con.soremo.forEach((item, i, arr) => {
            delay += 0.2
            soremo.innerHTML += `<div class="item" style="animation-delay: ${delay + 's'}">`+
                `<img src="images/${item[0]}">`+
                `<div class="itemName">${item[1]}</div>`+
            `</div>`;
        });
        
    }
    if(count == 2) {
        bback(2);
    }
};

function bback(value) {
    con = '';
    if(country == 'uk') con = uk;
    if(country == 'tr') con = tr;
    if(country == 'id') con = id;
    var im = con.oneImg;
    if(value == 0) im = con.oneImg;
    if(value == 2) im = con.twoImg;
    let fStyle = [
        'width: calc(4vw * 14);',
        'height: calc(4vw * 9);',
        'border: 4px solid var(--blue);',
        'border-radius: 16px;'
    ];

    let iStyle = [
        'width: 100%;',
        'height: 100%;',
        `background: url(${im}) no-repeat;`,
        'background-position: center;',
        'background-size: cover'
    ];

    frame.style.cssText = fStyle.join('');
    back.style.display = 'block';
    fotos.style.height = '100%';
    imgView.style.cssText = iStyle.join('');
    for(let i = 0; i < counter.children.length; i++) {
        counter.children[i].style.background = 'transparent';
    }
    counter.children[value].style.background = 'var(--blue)';
    frameTask.style.display = 'none';
};

function cls() {
    console.log('test');
    mainFrame.style.display = 'none';
    if(country == 'uk') {
        document.querySelector('.ukc').style.display = 'block';
    }
    if(country == 'tr') {
        document.querySelector('.trc').style.display = 'block';
    }
    if(country == 'id') {
        document.querySelector('.idc').style.display = 'block';
    }
    count = 0;
};