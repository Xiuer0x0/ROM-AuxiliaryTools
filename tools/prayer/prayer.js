const $LevelMin = $('#LevelMin');
const $LevelMax = $('#LevelMax');
let PrayerData = [];
let sumData = {};
let CashCoupons = {
    ticket: 0,
    cost: 0,
}

$.ajax({
    type: 'GET',
    url: 'prayer.csv',
    dataType: 'text',
    success: function(data) {
        PrayerData = PrayerDataSplit(data);

        const levelMin = Number($LevelMin.val());
        const levelMax = Number($LevelMax.val());
        sumData = calc_sumData(PrayerData, levelMin, levelMax);

        view_EffectTable(sumData);
        view_CostTable(sumData);
    }
})

function PrayerDataSplit(data) {
    const rows = data.split(/\r?\n|\r/);
    const n = rows.length;
    let rData = []; //return Data
    let i = 0;

    for (i = 1; (i < n) && (rows[i] != ''); i++) {
        let cols = rows[i].split(/\t|,/);
        rData[i] = {
            level: Number(cols[0]),
            contribution: Number(cols[1]),
            zeny: Number(cols[2]),
            maxHP: Number(cols[3]),
            atk: Number(cols[4]),
            matk: Number(cols[5]),
            def: Number(cols[6]),
            mdef: Number(cols[7]),
            cashCoupons: Number(cols[8]),
            remainder: Number(cols[9]),
        }
    }
    return rData;
}

function calc_sumData(data, min, max) {
    let sum = {
        maxHP: 0,
        atk: 0,
        matk: 0,
        def: 0,
        mdef: 0,
        zeny: 0,
        contribution: 0,
        cashCoupons: 0,
        remainder: 0,
    }
    let i = min + 1;

    for(; i <= max; i++) {
        sum.maxHP           += data[i].maxHP;
        sum.atk             += data[i].atk  * 10;
        sum.matk            += data[i].matk * 10;
        sum.def             += data[i].def  * 10;
        sum.mdef            += data[i].mdef * 10;
        sum.zeny            += data[i].zeny;
        sum.contribution    += data[i].contribution;
        sum.cashCoupons     += data[i].cashCoupons;
        sum.remainder       += data[i].remainder;
    }
    //小數問題
    sum.atk     /= 10;
    sum.matk    /= 10;
    sum.def     /= 10;
    sum.mdef    /= 10;

    return sum;
}

function calc_CashCoupons(sumData) {
    if (sumData.zeny > -CashCoupons.cost) {
        sumData.zeny += CashCoupons.cost;
    }
    else {
        sumData.zeny = sumData.remainder;
    }
    

    if (sumData.cashCoupons > CashCoupons.ticket) {
        sumData.cashCoupons -= CashCoupons.ticket;
    }
    else {
        sumData.cashCoupons = 0;
    }
    
    return sumData;
}

function view_EffectTable(calcData) {
    let html = '';

    if (typeof calcData === 'undefined') {
        html = `<tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>`;
    }
    else {
        html = `<tr>
            <td>${ThousandthComma(calcData.maxHP)}</td>
            <td>${ThousandthComma(calcData.atk)}</td>
            <td>${ThousandthComma(calcData.matk)}</td>
            <td>${ThousandthComma(calcData.def)}</td>
            <td>${ThousandthComma(calcData.mdef)}</td>
        </tr>`;
    }

    $('#EffectTable').html(html);
}

function view_CostTable(calcData) {
    let html = '';

    if (typeof calcData === 'undefined') {
        html = `<tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>`;
    }
    else {
        html = `<tr>
            <td>${ThousandthComma(calcData.contribution)}</td>
            <td>${ThousandthComma(calcData.zeny)}</td>
            <td>${ThousandthComma(calcData.cashCoupons)} + ${ThousandthComma(calcData.remainder)}</td>
        </tr>`
    }

    $('#CostTable').html(html);
}

$(function() {
    const $RangeInfo = $('#RangeInfo');

    $('#LevelMin, #LevelMax')
        .focus(function() {
            this.select();
            $RangeInfo.text('');
        })
        .focusout(function() {
            if (this.value == '') {
                this.value = 0;
            }
            else if (this.value > 150) {
                this.value = 150;
            }
            
            const levelMin = Number($LevelMin.val());
            const levelMax = Number($LevelMax.val());

            if (levelMin >= levelMax) {
                $RangeInfo.text('目標等級必須大於當前等級!');
                view_EffectTable();
                view_CostTable();
            }
            else {
                sumData = calc_sumData(PrayerData, levelMin, levelMax);
                sumData = calc_CashCoupons(sumData);

                view_EffectTable(sumData);
                view_CostTable(sumData)
            }
        })

    $('#CashCoupons')
        .focus(function(){
            this.value = RemoveComma(this.value);
            this.select();
        })
        .focusout(function() {
            CashCoupons.ticket = this.value;
            CashCoupons.cost = CashCoupons.ticket * -2000;
            $('#CashCouponsCost').text(ThousandthComma(CashCoupons.cost));
            this.value = ThousandthComma(this.value);
            
            calc_CashCoupons(sumData);
            
            view_CostTable(sumData);
        })
})