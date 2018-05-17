function CancelEvent(e) { e.preventDefault(); }

function numberFormat(value, type, float) {
    value = value.toString();
    if(value.charAt(value.length - 1) == "%") { value = Number(value.replace("%", "") / 100); }
    else { value = Number(value); }
    
    if (type == "%") { value = (value * 100).toFixed(float) + "%"; }
    else { value = value.toFixed(float); }
    return value;
}
    
function btnLimit(id, value, max) {
    var item = document.getElementById(id);
    var num = item.innerHTML;
    if (num.charAt(num.length - 1) == "%") { item.innerHTML = numberFormat(value, "%", 1); }
    else { item.innerHTML = value; }
    document.getElementById(id + "Bar").style.width = numberFormat(value / max, "%", 0);
}

function checkLimitBar(id) {
    var num = 0;
    if (document.getElementById(id).checked == true) { num = 100; }
    document.getElementById(id + "Bar").style.width = num + "%";
}

function selectBar(id, max) {
    var num = document.getElementById(id).value;
    document.getElementById(id + "Bar").style.width = numberFormat(num / max, "%", 0);
}

var timer = 0;
function btnRangeDown(id, type, min, max, step) {
    var item = document.getElementById(id);
    var num = item.innerHTML;
    var percentage = false;
    if (num.charAt(num.length - 1) == "%") {
        percentage = true;
        num = Number(num.replace("%", "")) / 100;
    }
    else { num = Number(num); }
    var count = 0;

    timer = setInterval(fn, 80)
    function fn() {
        if (num < max && type == "plus") { num += step; }
        else if (num > min && type == "less") { num -= step; }
        else { clearInterval(timer); }

        count++;
        if (count > 7) {
            step += step;
            count = 0;
        }
        if (num > max) { num = max; }
        if (num < min) { num = min; }
        if (percentage == true) { item.innerHTML = numberFormat(num, "%", 1); }
        else { item.innerHTML = num; }
        document.getElementById(id + "Bar").style.width = numberFormat(num / max, "%", 0);
    }
}

function btnRangeUp() {
    clearInterval(timer);
}

//讀取「基本素質」
var value_BaseSum = 0;
function readBaseValue() {
    value_BaseSum = Number(document.getElementById("BaseLevel").innerHTML) + Number(document.getElementById("IntSum").innerHTML);
    CalculationBaseCure();
}

//讀取「技能」
var value_CureLevel = 1, value_Meditation = 0, value_EmergencyCure = 0;
function readSkill() {
    value_CureLevel = Number(document.getElementById("CureLevel").innerHTML);
    value_Meditation = Number(document.getElementById("Meditation").innerHTML);
    value_EmergencyCure = Number(document.getElementById("EmergencyCure").innerHTML);
    CalculationBaseCure();
    CalculationCureAddition();
}

//讀取「星盤」
var value_CureBoost = 0, value_HolyAtkOne = 0, value_HolyAtkTwo = 0;
function readAstrolabe() {
    value_CureBoost = Number(document.getElementById("CureBoost").innerHTML);
    value_HolyAtkOne = Number(document.getElementById("HolyAtkOne").innerHTML);
    value_HolyAtkTwo = Number(document.getElementById("HolyAtkTwo").innerHTML);
    CalculationHolyAtk();
    CalculationCureBoost();
}

//讀取「公會（女神祝福）」
var value_GroupHolyAtkValue = 0;
function readGroupGoddes() {
    value_GroupHolyAtkValue = Number(document.getElementById("HolyAtkGoddes").innerHTML);
    CalculationHolyAtk();
} 

//讀取「裝備」
var value_Arms = 0, value_ArmsBoost = 0, value_Clothes = 0, value_ColthesBoost = 0, value_BackCureAddition = 0, value_BackHolyAtk = 0, value_PetSkill = 0;
function readEquipment() {
    value_Arms = Number(document.getElementById("Arms").innerHTML);
    value_ArmsBoost = Number(document.getElementById("ArmsBoost").innerHTML);
    value_Clothes = Number(document.getElementById("Clothes").innerHTML);
    value_ClothesBoost = Number(document.getElementById("ClothesBoost").innerHTML);
    switch(Number(document.getElementById("Back").value)) {
        case 1:     //寶貝・別哭
            value_BackCureAddition = 0.03;
            value_BackHolyAtk = 0.03;
            break;
        case 2:     //賢者之書
            value_BackCureAddition = 0;    
            value_BackHolyAtk = 0.05;
            break;
        case 3:     //金色聖誕鈴鐺
            value_BackCureAddition = 0;
            value_BackHolyAtk = 0.08;
            break;
        default:    //無
            value_BackCureAddition = 0;
            value_BackHolyAtk = 0;
            break;
    }
    value_PetSkill = Number(document.getElementById("PetSkill").innerHTML);
    CalculationHolyAtk();
    CalculationCureAddition();
}

//讀取「附魔」
var value_ArmsEnchanting = 0, value_CloakEnchanting = 0, value_ShoesEnchanting = 0;
function readEnchanting() {
    value_ArmsEnchanting = Number(numberFormat(document.getElementById("ArmsEnchanting").innerHTML, "", 3));
    value_CloakEnchanting = Number(numberFormat(document.getElementById("CloakEnchanting").innerHTML, "", 3));
    value_ShoesEnchanting = Number(numberFormat(document.getElementById("ShoesEnchanting").innerHTML, "", 3));
    CalculationCureAddition();
}

//讀取「卡片」
var value_CardSealOfBaiSuzhen = 0, value_CardWitch = 0, value_CardAngelPoly = 0;
function readCard() {
    var item_CradSealOfBaiSuzhen = document.getElementById("CardSealOfBaiSuzhen");
    if(item_CradSealOfBaiSuzhen.checked == true) { value_CardSealOfBaiSuzhen = 0.1; }
    else { value_CardSealOfBaiSuzhen = 0; }
    CalculationCureSkillEffectUp();

    var item_CardWitch = document.getElementById("CardWitch");
    if(item_CardWitch.checked == true) { value_CardWitch = 0.01; }
    else { value_CardWitch = 0; }

    var item_CardAngelPoly = document.getElementById("CardAngelPoly");
    if(item_CardAngelPoly.checked == true) { value_CardAngelPoly = 0.05; }
    else { value_CardAngelPoly = 0;}
    CalculationHolyAtk();
}

//基礎治癒量
function CalculationBaseCure() {
    var emergencyCureValue;
    if( value_EmergencyCure > 1) { emergencyCureValue = (value_EmergencyCure - 1) * 50; }
    else { emergencyCureValue = 0; }

    var cure_x = 4 + value_CureLevel * 8;   //技能參數
    if(value_CureLevel > 10) { cure_x -= (value_CureLevel - 10) * 6; }
    document.getElementById("BaseCureSum").innerHTML = (100 + Math.floor(value_BaseSum / 10) * cure_x + emergencyCureValue);
    CalculationFinallyCure();
}

//治癒量提升
function CalculationCureAddition() {
    var wearing = 0;
    if(value_ArmsBoost >= 4 && value_ClothesBoost >= 4) {
        wearing = 0.05;
        if(value_Clothes >= 10) { wearing = 0.1; }
    }

    var sum = ( wearing * 1000
        + value_Meditation * 0.02 * 1000
        + value_Arms * 0.04 * 1000
        + value_BackCureAddition * 1000
        + value_PetSkill * 0.005 * 1000
        + value_ArmsEnchanting * 1000
        + value_CloakEnchanting * 1000
        + value_ShoesEnchanting * 1000 ) / 1000 ;
    document.getElementById("CureAdditionSum").innerHTML = numberFormat(sum, "%", 1);
    CalculationFinallyCure();
}

//聖屬性攻擊
function CalculationHolyAtk() {
    var sum = ( value_CardWitch * 1000
        + value_CardAngelPoly * 1000
        + value_GroupHolyAtkValue * 0.005 * 1000
        + value_HolyAtkOne * 0.01 * 1000
        + value_HolyAtkTwo * 0.02 * 1000 
        + value_BackHolyAtk * 1000
    ) / 1000;
    document.getElementById("HolyAtkSum").innerHTML = numberFormat(sum, "%", 1);
    CalculationFinallyCure();
}

//治癒術-強效
function CalculationCureBoost() {
    document.getElementById("CureBoostSum").innerHTML = numberFormat(value_CureBoost * 0.02, "%", 0);
    CalculationFinallyCure();
}

//封印的白素貞卡片
function CalculationCureSkillEffectUp() {
    document.getElementById("CureSkillEffectUp").innerHTML = numberFormat(value_CardSealOfBaiSuzhen, "%",0);
    CalculationFinallyCure();
}

//最終治癒量
function CalculationFinallyCure() {
    var BaseCureSum = Number(document.getElementById("BaseCureSum").innerHTML),
        CureAdditionSum = Number(numberFormat(document.getElementById("CureAdditionSum").innerHTML, "", 3)),
        HolyAtkSum = Number(numberFormat(document.getElementById("HolyAtkSum").innerHTML, "", 3)),
        CureBoostSum = Number(numberFormat(document.getElementById("CureBoostSum").innerHTML, "", 3)),
        CureSkillEffectUp = Number(numberFormat(document.getElementById("CureSkillEffectUp").innerHTML, "", 3));

    var sum = BaseCureSum * (1 +  CureAdditionSum) * (1 + HolyAtkSum) * (1 + CureBoostSum) * (1 + CureSkillEffectUp);
    
    document.getElementById("FinallyCure").innerHTML = numberFormat(sum, "", 1);
    console.log(sum);
}

readBaseValue();
readSkill();
readAstrolabe();
readGroupGoddes();
readEquipment();
readEnchanting();
readCard();

CalculationFinallyCure();







