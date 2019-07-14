$(document).ready(function () {
    //讀取頁首頁尾
    $('#header').load('/header.html #header');
    $('#footer').load('/footer.html #footer');

    //UI set
    $('.progress')
        .progressbar({
            value: 0,
            max: 100
        })
        .find('.ui-progressbar-value').css({
            "background": "#007bff",
            "border": 0,
            "margin": 0,
        });
    $('input')
        .focus(function () {
            $(this).select();
            this.style.imeMode = "inactive";
        })
        .keydown(function(e) {
            return CheckKeydown(this.className, e, this);
        })

    //UI even
    $(window)
        .scroll(function(){
            if($(this).scrollTop() > 75){
                $('#scroll').fadeIn();
            }else{
                $('#scroll').fadeOut();
            }
        }),
    $('#scroll')
        .click(function(){
            $("html, body").animate({ scrollTop: 0 }, 400);
            return false;
        })
})

/** input check key down
 * 基本允許操作「數字、小鍵盤數字、backspace、tab、delete、方向鍵」，可透過type添加字串而外允許.
 * @param {string} type 'float'允許小數點，'negative'允許負數，'text'全文字輸入.
 * @param {*} e 
 * @param {*} item input物件
 */
function CheckKeydown(type, e, item) {
    const code = parseInt(e.keyCode);

    if (code == 13) {   //按下Enter，失焦
        $(item).blur();
    }
    else if (code >= 48 && code <= 57 ||//數字
        code >= 96 && code <= 105 ||    //小鍵盤數字
        code == 8 ||                    //backspace
        code == 9 ||                    //tab
        code == 46 ||                   //delete
        code >= 37 && code <= 40) {     //方向鍵
        return true; 
    }
    else if (type.indexOf('text') !=  -1) { //全文字允許模式

    }
    else if (type.indexOf('float') != -1 && (code == 110 || code == 190)) { //小數點
        return true;
    }
    else if (type.indexOf('negative') != -1 &&(code == 109 || code == 189)) { //允許負數
        return true;
    }
    else { 
        return false;
    }
}

function navbarMenu(x) {
    x.classList.toggle("change");
}

function CancelEvent(e) { 
    e.preventDefault(); 
}

//#region 格式化
function NumberFormat(value, type, float) {
    value = value.toString();
    if(value.charAt(value.length - 1) == "%") { value = Number(value.replace("%", "") / 100); }
    else { value = Number(value); }
    
    if (type == "%") { value = NumberRound(value * 100, float) + "%"; }
    else { value = value.toFixed(float); }
    return value;
}

/** 真.四捨五入
 * @param {number} number 數值.
 * @param {number} float 小數點位數.
 * @returns {number}
 */
function NumberRound(number, float) {
    const point = Math.pow(10 , float);
    return Math.round(number * point) / point;
}

/** 數值 → 百分比
 * @param {number} number 數值.
 * @param {number} float 顯示百分比小數位數.
 * @returns {string}
 */
function NumberPercentage(number, float) {
    return NumberRound(number * 100, float) + "%";
}
/** 百分比 → 數值
  * @param {string} NumberPercentage 含百分比的數字字串.
  * @returns {number} 傳回浮點數.
 */
function RemovePercentage(NumberPercentage) {
    if (NumberPercentage.toString().indexOf("%") != -1) {
        NumberPercentage = Number(NumberPercentage.replace("%", "")) / 100;
    }
    return NumberPercentage;
}

/** 數值 → 千分位顯示
 * @param {number} number 數值.
 * @returns {string} 
 */
function ThousandthComma(number) {
    const pattern = /(-?\d+)(\d{3})/;
    let num = number.toString();

    while (pattern.test(num)) {
        num = num.replace(pattern, "$1,$2");
    }

    return num;
}

/** 千分位數字字串 轉 數值.
 * @param {string} number 含千分位的數字字串.
 * @returns {number}
 */
function RemoveComma(number) {
    return number.replace(/[,]+/g, '');
}

/** 字首轉大寫
 * @param {string} string 
 * @return {string}
 */
function toFristUpper(string) {
    return string.toLowerCase().replace(/^\S/g, function (s) { return s.toUpperCase(); });
}

//#endregion 格式化 

//Progress
function View_ProgressBar(itemId, max, num) {
    const $bar = $(`#${itemId}Bar`);
    let nowVal = $bar.progressbar("value");
    let endVal;
    num = Number(num);
    max = Number(max);
    //console.log(itemId + "_num:" + num);
    //console.log(itemId + "_max:" + max);
    if (num == 0 && max == 0) {
        $bar.progressbar("value", 0);
    }
    else {
        endVal = num / max * 100;
        let plus = true;
        if (nowVal > endVal) { plus = false; }
        else { plus = true; }
        
        function fn() {
            if (plus == true) {
                if (nowVal > endVal) {
                    nowVal = endVal;
                    $bar.progressbar("value", nowVal);
                    clearInterval(timer);
                }
                else {
                    $bar.progressbar("value", nowVal);
                    nowVal += 3;
                };
            }
            else {
                if (nowVal < endVal) {
                    nowVal = endVal;
                    $bar.progressbar("value", nowVal);
                    clearInterval(timer);
                }
                else {
                    $bar.progressbar("value", nowVal);
                    nowVal -= 3;
                };
            }
        }
        let timer = setInterval(fn, 10);
    };

    
}

//Snackbar
function Snackbar(message) {
    const $x = $("#snackbar");
    $x.text(message);
    $x.addClass('show');
    
    function clear(){
        $x.removeClass();
    }
    setTimeout(clear, 1500);
}

//#region Cookie
/** 將資料存入本機Cookie. 
 * @param {string} cname 名稱
 * @param {*} cvalue 內容
 * @param {number} exdays 過期時間（單位：日）
 */
function SetCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    const expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** 移除本機Cookie.
 * @param {string} cname 名稱
 */
function RemoveCookie(cname) {
    let d = new Date();
    d.setTime(d.getTime() - 1);

    const expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

/** 取得本機Cookie
 * @param {string} cname 名稱
 */
function GetCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    const n = ca.length;
    for(let i = 0; i < n; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//#endregion Cookie