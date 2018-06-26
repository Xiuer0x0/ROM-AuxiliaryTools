//讀取頁首頁尾
$(document).ready(function(){
    $("#header").load("/header.html #header");
    $("#footer").load("/footer.html #footer");
});

function navbarMenu(x) {
    x.classList.toggle("change");
}

function CancelEvent(e) { e.preventDefault(); }

function NumberFormat(value, type, float) {
    value = value.toString();
    if(value.charAt(value.length - 1) == "%") { value = Number(value.replace("%", "") / 100); }
    else { value = Number(value); }
    
    if (type == "%") { value = NumberRound(value * 100, float) + "%"; }
    else { value = value.toFixed(float); }
    return value;
}

//數字改為千分位模式顯示
function ThousandthComma(number) {
    var num = number.toString();
    var pattern = /(-?\d+)(\d{3})/;

    while (pattern.test(num)) {
        num = num.replace(pattern, "$1,$2");
    }
    return num;
}

//千分位顯示的數值轉為一般數字
function RemoveComma(number) {
    return number.replace(/[,]+/g, '');
}

function RemovePercentage(number) {
    return Number(number.replace("%", "")) / 100;
}

function NumberRound(number, float) {
    var point = Math.pow(10 , float);
    return Math.round(number * point) / point;
}
