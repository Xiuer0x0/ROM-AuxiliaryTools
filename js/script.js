//讀取頁首頁尾
$(document).ready(function () {
    $("#header").load("header.html #header");
    $("#footer").load("footer.html #footer");
})

//UI set
$(document).ready(
    $(".progress")
        .progressbar({
            value: 0,
            max: 100
        })
        .ready(function () {
            $(this).find(".ui-progressbar-value").css({
                "background": "#007bff",
                "border": 0,
                "margin": 0,
            });
        }),
    $("input")
        .focus(function () {
            $(this).select();
            this.style.imeMode = "inactive";
        }),
    $("input.number")
        .keydown(function(e){
            return CheckKeydown("", e, this);
        }),
    $("input.float")
        .keydown(function(e) {
            return CheckKeydown("float", e, this)
        })
)

function CheckKeydown(type, e, item) {
    var code = parseInt(e.keyCode);

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
    else if (type == "float" && (code == 110 || code == 190)) { //小數點
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

//真.四捨五入
function NumberRound(number, float) {
    var point = Math.pow(10 , float);
    return Math.round(number * point) / point;
}

//數值 → 百分比
function NumberPercentage(number, float) {
    return NumberRound(number * 100, float) + "%";
}
//百分比 → 數值
function RemovePercentage(NumberPercentage) {
    if (NumberPercentage.toString().search("%") != -1) {
        NumberPercentage = Number(NumberPercentage.replace("%", "")) / 100;
    }
    return NumberPercentage;
}

//數值 → 千分位顯示
function ThousandthComma(number) {
    var num = number.toString();
    var pattern = /(-?\d+)(\d{3})/;

    while (pattern.test(num)) {
        num = num.replace(pattern, "$1,$2");
    }
    return num;
}
//千分位顯示 → 數值
function RemoveComma(number) {
    return number.replace(/[,]+/g, '');
}

//#endregion 格式化 

//Progress
function View_ProgressBar(itemId, max, num) {
    var bar = $("#" + itemId + "Bar");
    var nowVal = bar.progressbar("value");
    var endVal;
    num = Number(num);
    max = Number(max);
    //console.log(itemId + "_num:" + num);
    //console.log(itemId + "_max:" + max);
    if (num == 0 && max == 0) {
        bar.progressbar("value", 0);
    }
    else {
        endVal = num / max * 100;
        var plus = true;
        if (nowVal > endVal) { plus = false; }
        else { plus = true; }

        var timer = setInterval(fn, 10);
        function fn() {
            if (plus == true) {
                if (nowVal > endVal) {
                    nowVal = endVal;
                    bar.progressbar("value", nowVal);
                    clearInterval(timer);
                }
                else {
                    bar.progressbar("value", nowVal);
                    nowVal += 3;
                };
            }
            else {
                if (nowVal < endVal) {
                    nowVal = endVal;
                    bar.progressbar("value", nowVal);
                    clearInterval(timer);
                }
                else {
                    bar.progressbar("value", nowVal);
                    nowVal -= 3;
                };
            }
        }
    };

    
}

//Snackbar
function Snackbar(message) {
    var x = $("#snackbar");
    x.text(message);
    x.attr("class", "show");

    function clear(){
        x.attr("class", "");
    }
    setTimeout(clear, 1500);
}

//#region Cookie
function SetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function RemoveCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() - 1);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function GetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
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