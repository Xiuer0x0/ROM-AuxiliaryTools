//UI
$(document).ready(
    //精煉範圍
    $(function () {
        var range_min = $("#Refining-min");
        var range_max = $("#Refining-max");
        $("#RefiningRangeSlider")
            .slider({
                range: true,
                min: 0,
                max: 10,
                values: [4, 10],
                //ticks: [0, 4, 10],
                create: function () {
                    range_min.text($(this).slider("values", 0));
                    range_max.text($(this).slider("values", 1));
                    Read_RefiningRange(range_min, range_max);
                },
                slide: function (even, ui) {
                    range_min.text(ui.values[0]);
                    range_max.text(ui.values[1]);
                    Read_RefiningRange(range_min, range_max);
                    Calculation_NeedTotal(refiningMin, refiningMax);
                    Read_HaveNeed("EquipmentQuantity");
                    Read_HaveNeed("ConsumablesQuantity");
                    Calculation_CostRefiningRange()
                    View_Charts();
                }
            })
            .tooltip({
                effect: "slideDown",
                delay: 250
            });
        }),
    //輸出圖表
    $("#OutputCharts")
        .CanvasJSChart({
            animationEnabled: true,
            animationDuration: 300,
            title: {
                text: "爆炸",
                verticalAlign: "center",
                fontFamily: "Microsoft JhengHei",
                fontSize: 40,
                fontWeight: "bold",
                padding: { bottom: 10 },
            },
            subtitles: [{
                text: "(((ﾟДﾟ;)))Σ(ﾟДﾟ；≡；ﾟдﾟ)(((ﾟдﾟ)))",
                verticalAlign: "center",
                maxWidth: 500,
                fontFamily: "Microsoft JhengHei",
                fontSize: 28,
                fontWeight: "bold",
                fontColor: "orange",
                padding: { top: 70 },
            }],
            toolTip: {
                enabled: false,
            },
            legend: {
                horizontalAlign: "center",
                verticalAlign: "top",
                //maxWidth: 100
                fontSize: 20,
            },
            backgroundColor: "rgba(0, 0, 0, 0)",
            data: [{
                mousemove: function (e) {
                    $("#OutputCharts").CanvasJSChart().title.set("text", e.dataPoint.name);
                    $("#OutputCharts").CanvasJSChart().subtitles[0].set("text", CanvasJS.formatNumber(e.dataPoint.y, "#,##0"));
                },
                mouseout: function () {
                    $("#OutputCharts").CanvasJSChart().title.set("text", "總費用");
                    $("#OutputCharts").CanvasJSChart().subtitles[0].set("text", Totalcost());
                },
                type: "doughnut",
                explodeOnClick: false,
                showInLegend: true,
                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                indexLabelFontWeight: "bold",
                indexLabelFontFamily: "Microsoft JhengHei",
                dataPoints: []
            }]
        }),
    $(".progress")
        .progressbar({
            value: 0,
            max: 100
        })
        .ready(function(){
            $(this).find(".ui-progressbar-value").css({
                "background": "#007bff",
                "border":0,
                "margin":0,
            });
        }),
    $(".fa-info")
        .tooltip({
            effect: "slideDown",
            delay: 250
        })
);

//Loading
$(document).ready(
    $(function () {
        $("#PricesEquipment").val(ThousandthComma($("#PricesEquipment").val()));
        $("#PricesConsumables").val(ThousandthComma($("#PricesConsumables").val()));
        
        Read_ItemPrices();
        Calculation_CostDetails();
        View_CostDetails();
        View_AutoTable_thColspan();

        Calculation_NeedTotal(refiningMin, refiningMax);
        Calculation_CostRefiningRange();
        View_Charts();
    })
);

//Event
$(document).ready(
    $(window)
        .resize(function () {
            View_AutoTable_thColspan();
        }),
    $("input")
        .focus(function () {
            $(this).val(RemoveComma($(this).val()));
            $(this).select();
            this.style.imeMode="inactive";
        })
        .focusout(function () {
            var item = $(this);
            var val = Number(item.val());
            if (val == "" || isNaN(val)) { item.val(0); }
            else { item.val(ThousandthComma(val)); };
        })
        .keydown(function(e){
            if(e.which == 13) {$(this).blur();}; //按下Enter，失焦
        })
        .on("keydown", function (e) {
            var code = parseInt(e.keyCode); 
            //允許數字||小鍵盤數字||backspace||delete||方向鍵
            if (code >= 48 && code <= 57 || code >= 96 && code <= 105 || code == 8 || code == 46 || code >= 37 && code <= 40) { return true; } 
            else { return false; }
        }),
    $("input[type=text]")
        .change(function () {
            Read_ItemPrices();
            Calculation_CostDetails();
            View_CostDetails();

            Calculation_CostRefiningRange();
            View_Charts();
        }),        
    $("input[type=number]")
        .on("click change focusout", function() {
            var itemId = $(this).attr("id");

            Read_HaveNeed(itemId);
            Calculation_CostRefiningRange()
            View_Charts();
        }),

    //已備項limit btn
    $(".limit")
        .click(function() {
            Btn(this, "Max");
        }),
    //已備項clear btn
    $(".clear")
        .click(function() {
            Btn(this, "Clear");
        })
);

//固定參數
var needEquipment = [0, 0, 0, 0, 1, 2, 3, 4, 6, 10, 0, 0, 0, 0, 0];
var needConsumables = [1, 1, 1, 1, 5, 10, 15, 25, 50, 85, 0, 0, 0, 0, 0];
var costRefining = [10000, 20000, 30000, 40000, 100000, 220000, 470000, 910000, 1630000, 2740000, 0, 0, 0, 0, 0];
var pricesMarketPercentage = [1, 1, 1, 1, 2.02, 3.08, 4.18, 8.56, 14.2, 22.28, 37.48, 64.8, 0, 0, 336.5];
var pricesMarketPlus = [10000, 55000, 110000, 175000, 221800, 405200, 875800, 1934600, 3551500, 5933400, 14569200, 25694000, 0, 0, 128295200];

/*---------------------------------------- Read ----------------------------------------*/

//讀取「物價」
var pricesConsumables, pricesEquipment;

function Read_ItemPrices() {
    function read(id) {
        var val = Number(RemoveComma($("#" + id).val()));
        if (isNaN(val)) { val = 0; }
        return val;
    }

    pricesEquipment = read("PricesEquipment");
    pricesConsumables = read("PricesConsumables");
    //console.log("equipment:" + pricesEquipment + "\n" + "consumables:" + pricesConsumables);
}

//讀取「精煉區間」
var refiningMin, refiningMax;

function Read_RefiningRange(item_min, item_max) {
    refiningMin = Number(item_min.text());
    refiningMax = Number(item_max.text());
    
    Calculation_CostRefiningRange();
}

//讀取「已備項」
var costHaveNeedEquipment = 0, costHaveNeedConsumables = 0;

function Read_HaveNeed(itemId) {
    var item = $("#" + itemId);
    var max = Number($("#" + itemId + "Total").text());
    
    if (item.val() > max) { item.val(max); };
    
    View_ProgressBar(itemId, max, item.val());

    if(itemId == "EquipmentQuantity") { 
        costHaveNeedEquipment = pricesEquipment * item.val(); 
    }
    else if (itemId == "ConsumablesQuantity") { 
        costHaveNeedConsumables = pricesConsumables * item.val();
    };
}


/*------------------------------------ Calculation ------------------------------------*/

//計算「詳細」
var costEquipment = [];
var costConsumables = [];
var costSum = [];
var pricesEstimatedMarket = [];

function Calculation_CostDetails() {
    for (var i = 0; i < needEquipment.length; i++) {
        costEquipment[i] = needEquipment[i] * pricesEquipment
    }
    for (var i = 0; i < needConsumables.length; i++) {
        costConsumables[i] = needConsumables[i] * pricesConsumables;
    }
    for (var i = 0; i < needEquipment.length; i++) {
        costSum[i] = costConsumables[i] + costEquipment[i] + costRefining[i];
    }
    for (var i = 0; i < pricesMarketPercentage.length; i++) {
        pricesEstimatedMarket[i] = Math.round(pricesMarketPercentage[i] * pricesEquipment + costConsumables[i] + pricesMarketPlus[i]);
    }
}

//計算「自備項total」
function Calculation_NeedTotal(refiningMin, refiningMax) {
    var totalEquipment = 0, totalConsumables = 0;

    for (var i = refiningMin; i < refiningMax; i++) {
        totalEquipment += needEquipment[i];
        totalConsumables += needConsumables[i];
    }

    function View_Total(itemId, total) {
        $("#" + itemId + "Total").text(total);

        var item = $("#" + itemId);

        item.attr("max", total);
        if(item.val() > total) { item.val(total); }
    }

    View_Total("EquipmentQuantity", totalEquipment);
    View_Total("ConsumablesQuantity", totalConsumables);
}

//計算「精煉範圍費用」
var sumCostEquipment, sumCostConsumables, sumCostRefining;

function Calculation_CostRefiningRange() {

    function SumCost(costItem) {
        var sum = 0;
        for (var i = refiningMin; i < refiningMax; i++) {
            sum += costItem[i];
        }
        return sum;
    }

    sumCostEquipment = SumCost(costEquipment) - costHaveNeedEquipment;
    sumCostConsumables = SumCost(costConsumables) - costHaveNeedConsumables;
    sumCostRefining = SumCost(costRefining);
}


/*---------------------------------------- View ----------------------------------------*/

//輸出表格的TitleCols調整
function View_AutoTable_thColspan() {
    if ($("#CostDetails tr:last td:eq(2)").css("display") == "none") {
        $("#CostDetails tr:first th[colspan=2]").attr("colspan", "1");
    }
    else {
        $("#CostDetails tr:first th[colspan=1]").attr("colspan", "2");
    }
}

function View_ProgressBar(itemId, max, num) {
    var bar = $("#" + itemId + "Bar");
    var now = bar.progressbar("value");
    var endVal;
    if (num == 0 && max == 0) {
        bar.progressbar("value", 100);
    }
    else {
        endVal = Number(num) / Number(max) * 100;
        var plus = true;
        if (now > endVal) { plus = false; }
        else { plus = true; }

        var timer = setInterval(fn, 10);
        function fn() {
            if (plus == true) {
                if (now > endVal) {
                    now = endVal;
                    bar.progressbar("value", now);
                    clearInterval(timer);
                }
                else {
                    bar.progressbar("value", now);
                    now += 3;
                };
            }
            else {
                if (now < endVal) {
                    now = endVal;
                    bar.progressbar("value", now);
                    clearInterval(timer);
                }
                else {
                    bar.progressbar("value", now);
                    now -= 3;
                };
            }
        }
    };

    
}

//顯示「詳情」
function View_CostDetails() {
    var table = "#CostDetails";
    var colCSStag = ["", "needEquipment", "costEquipment", "needConsumables", "costConsumables", "costRefining", "costSum", "market"];
    
    function row(x) {
        var cells = [x + 1,
        needEquipment[x],
        costEquipment[x],
        needConsumables[x],
        costConsumables[x],
        costRefining[x],
        costSum[x],
        pricesEstimatedMarket[x]];
        return cells;
    }

    for (var i = 0; i < costRefining.length; i++) {
        var cells = row(i);
        var newRow = "<tr>";
        for (var j = 0; j < colCSStag.length; j++) {
            if(i >= 10  && cells[j] == 0) { 
                newRow += "<td class=\"" + colCSStag[j] + "\">" + "-" + "</td>";
            }
            else {
                newRow += "<td class=\"" + colCSStag[j] + "\">" + ThousandthComma(cells[j]) + "</td>";
            }
        }
        if($(table + " tr").length > 15){
            $(table + " tr:eq(1)").remove();
        }
        newRow += "</tr>";
        $(table + " tr:last").after(newRow);
    }
}

//顯示「甜甜圈數值」
function View_Charts() {
    var chart = $("#OutputCharts").CanvasJSChart();
    var costTotal = RemoveComma(Totalcost());

    if (isNaN(costTotal)) {
        chart.title.set("text", "請選擇範圍");
    }
    else {
        chart.title.set("text", "總費用");
        
        var sumCostEquPercentage = sumCostEquipment / RemoveComma(costTotal);
        var sumCostConPercentage = sumCostConsumables / RemoveComma(costTotal);
        var sumCostRefPercentage = sumCostRefining / RemoveComma(costTotal);

        function fixPercentage() {
            var num = [ NumberRound(sumCostEquPercentage, 3),
                        NumberRound(sumCostConPercentage, 3),
                        NumberRound(sumCostRefPercentage, 3) ];
                        
            //比較最小值，最大值
            var index = { min: 0, max: 0 };

            for (var i = 0; i < num.length; i++) {
                if (num[i] > num[index.max]) { index.max = i; }
                else if (num[i] < num[index.min]) { index.min = i; };
            };

            //尋找相同值
            function sameValue(array, comparativeNum) {
                var t_array = JSON.parse(JSON.stringify(array));
                t_array.splice(comparativeNum, 1);

                for (var i = 0; i < t_array.length; i++) {
                    if (t_array[i] == array[comparativeNum]) { return true; }
                }
                return false;
            }

            //加總除了選取的值
            function sumArrayOther(array, removeNum) {
                var temp = 0;
                var t_array = JSON.parse(JSON.stringify(array));

                t_array.splice(removeNum, 1);

                for (var i = 0; i < t_array.length; i++) { temp += t_array[i]; };
                return temp;
            };

            //顯示比重調整（解決：因進位取捨，造成顯示時總合不為100％
            var sum = num[0] + num[1] + num[2];

            if (sum > 1) {
                if (sameValue(num, index.min)) {
                    num[index.max] = (1 - sumArrayOther(num, index.max));
                }
                else { num[index.min] = (1 - sumArrayOther(num, index.min)); };
            }
            else if (sum < 1) {
                if (sameValue(num, index.max)) {
                    num[index.min] = (1 - sumArrayOther(num, index.min));
                }
                else { num[index.max] = (1 - sumArrayOther(num, index.max)); }
            };

            function view_Set(value) {
                if (value == 0) { return "" }
                else { return NumberFormat(value, "%", 1) }
            }
            sumCostEquPercentage = view_Set(num[0]);
            sumCostConPercentage = view_Set(num[1]);
            sumCostRefPercentage = view_Set(num[2]);
        }
        fixPercentage();

        var dataPoints = [
            { y: sumCostEquipment, color: "green", indexLabel: sumCostEquPercentage, name: "+0裝備" },
            { y: sumCostConsumables, color: "darkblue", indexLabel: sumCostConPercentage, name: "精煉耗材" },
            { y: sumCostRefining, color: "gray", indexLabel: sumCostRefPercentage, name: "精煉費" }
        ];
    }
    
    chart.data[0].set("dataPoints", dataPoints);
    chart.subtitles[0].set("text", ThousandthComma(costTotal));
    chart.subtitles[0].set("maxWidth", 300);
}

function Totalcost() {
    var sum = sumCostEquipment + sumCostConsumables + sumCostRefining;
    if (sum == 0) { return "(´⊙ω⊙`)"}
    else { return CanvasJS.formatNumber(sum, "#,##0")};
}

/*---------------------------------------- Btn ----------------------------------------*/
function Btn(classTag, _even) {
    var itemId = $(classTag).attr("id").replace(_even + "btn", "");
    var item = $("#" + itemId);
    var itemTotal = $("#" + itemId + "Total").text();

    if( _even == "Clear" ) { item.val(0); }
    else if ( _even == "Max" ) { item.val(itemTotal); };
    

    View_ProgressBar(itemId, itemTotal, item.val());

    Read_HaveNeed(itemId);
    Calculation_CostRefiningRange()
    View_Charts();
}


    

