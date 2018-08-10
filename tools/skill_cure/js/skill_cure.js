//----------變數定義-----------
//全域變數 >> 開頭大寫
//區域變數 >> 開頭小寫
//temp變數 >> 開頭加 _ 區別
var Data = {
    base: {
        level: {
            value: 99,
            min: 0,
            max: 110,
        },
        int: {
            value: 200,
            min: 0,
            max: 350,
        },
        sum: 0,
    },
    skill: {
        cure: {
            value: 10,
            min: 0,
            max: 20,
        },
        meditation: {
            value: 10,
            min: 0,
            max: 10,
        },
        emergencyCure: {
            value: 1,
            min: 0,
            max: 3,
        },
    },
    astrolabe: {
        cureAddition: {
            value: 5,
            min: 0,
            max: 8,
        },
        holyAtkOne: {
            value: 3,
            min: 0,
            max: 8,
        },
        holyAtkTwo: {
            value: 2,
            min: 0,
            max: 2,
        },
    },
    groupGoddes: {
        holyAtk: {
            value: 10,
            min: 0,
            max: 20,
        },
    },
    equipment: {
        arms: {
            select: 2,
            refining: {
                ui: false,
                value: 10,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 4,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0,
                holyAtk: 0,
            },
        },
        clothes: {
            select: 1,
            refining: {
                ui: false,
                value: 10,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 4,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0,
                holyAtk: 0,
            },
        },
        shoes: {
            select: 0,
            refining: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0,
                holyAtk: 0.01,
            },
        },
        head: {
            select: 0,
            refining: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0.01,
                holyAtk: 0.03,
            },
        },
        back: {
            select: 0,
            refining: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0,
                holyAtk: 0,
            },
        },
        pet: {
            value: 10,
            min: 0,
            max: 10,
            effect: {
                treatmentAddition: 0.005,
                holyAtk: 0,
            },
        },
        artifact: {
            select: 0,
            refining: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            boost: {
                ui: false,
                value: 0,
                min: 0,
                max: 0,
            },
            effect: {
                treatmentAddition: 0.15,
                holyAtk: 0,
            },
        },
    },
    enchanting: {
        treatmentAddition: {
            arms: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            cloak: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            shoes: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            head: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            face: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            mouth: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            back: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            tail: {
                value: 0.04,
                min: 0,
                max: 0.05,
            },
            sum: 0,
        },
    },
    card: {
        equipment: {
            arms1: false,
            arms2: false,
            head: false,
        },
        adventrue: {
            anglePoly: false,
            witch: false,
        },
    },
    beCured: {
        value: 50,
        min: 0,
        max: 100,
    },
    details: {
        baseCure: 0,
        treatmentAddition: 0,
        holyAtk: 0,
        cureAddition: 0,
        cureSkillEffectUp: 0,
    },
    result: {
        cure: 0,
        beCured: 0,
    },
}

var DefaultData = {
    webVersion: "v2.1",
    base: {
        level: 100,
        int: 250,
        sum: 0,
    },
    skill: {
        cure: 10,
        meditation: 10,
        emergencyCure: 3,
    },
    astrolabe: {
        cureAddition: 5,
        holyAtkOne: 4,
        holyAtkTwo: 2,
    },
    groupGoddes: {
        holyAtk: 10,
    },
    equipment: {
        arms: {
            select: 2,
            refining: 10,
            boost: 4,
        },
        clothes: {
            select: 1,
            refining: 10,
            boost: 4,
        },
        shoes: {
            select: 0,
            refining: 0,
            boost: 0,
        },
        head: {
            select: 0,
            refining: 0,
            boost: 0,
        },
        back: {
            select: 0,
            refining: 0,
            boost: 0,
        },
        pet: 10,
        artifact: {
            select: 0,
            refining: 0,
            boost: 0,
        },
    },
    enchanting: {
        treatmentAddition: {
            arms: 0.04,
            cloak: 0.04,
            shoes: 0.04,
            head: 0.04,
            face: 0.04,
            mouth: 0.04,
            back: 0.04,
            tail: 0.04,
            sum: 0,
        },
    },
    card: {
        equipment: {
            arms1: false,
            arms2: false,
            head: true,
        },
        adventrue: {
            anglePoly: false,
            witch: false,
        },
    },
    beCured: 50,
    details: {
        baseCure: 0,
        treatmentAddition: 0,
        holyAtk: 0,
        cureAddition: 0,
        cureSkillEffectUp: 0,
    },
    result: {
        cure: 0,
        beCured: 0,
    },
}
var CookieData = "";

function Tools_Save() {
    CookieData = {
        webVersion: DefaultData.webVersion,
        base: {
            level: Data.base.level.value,
            int: Data.base.int.value,
            sum: Data.base.sum,
        },
        skill: {
            cure: Data.skill.cure.value,
            meditation: Data.skill.meditation.value,
            emergencyCure: Data.skill.emergencyCure.value,
        },
        astrolabe: {
            cureAddition: Data.astrolabe.cureAddition.value,
            holyAtkOne: Data.astrolabe.holyAtkOne.value,
            holyAtkTwo: Data.astrolabe.holyAtkTwo.value,
        },
        groupGoddes: {
            holyAtk: Data.groupGoddes.holyAtk.value,
        },
        equipment: {
            arms: {
                select: Data.equipment.arms.select,
                refining: Data.equipment.arms.refining.value,
                boost: Data.equipment.arms.boost.value,
            },
            clothes: {
                select: Data.equipment.clothes.select,
                refining: Data.equipment.clothes.refining.value,
                boost: Data.equipment.clothes.boost.value,
            },
            shoes: {
                select: Data.equipment.shoes.select,
                refining: Data.equipment.shoes.refining.value,
                boost: Data.equipment.shoes.boost.value,
            },
            head: {
                select: Data.equipment.head.select,
                refining: Data.equipment.head.refining.value,
                boost: Data.equipment.head.boost.value,
            },
            back: {
                select: Data.equipment.back.select,
                refining: Data.equipment.back.refining.value,
                boost: Data.equipment.back.boost.value,
            },
            pet: Data.equipment.pet.value,
            artifact: {
                select: Data.equipment.artifact.select,
                refining: Data.equipment.artifact.refining.value,
                boost: Data.equipment.artifact.boost.value,
            },
        },
        enchanting: {
            treatmentAddition: {
                arms: Data.enchanting.treatmentAddition.arms.value,
                cloak: Data.enchanting.treatmentAddition.cloak.value,
                shoes: Data.enchanting.treatmentAddition.shoes.value,
                head: Data.enchanting.treatmentAddition.head.value,
                face: Data.enchanting.treatmentAddition.face.value,
                mouth: Data.enchanting.treatmentAddition.mouth.value,
                back: Data.enchanting.treatmentAddition.back.value,
                tail: Data.enchanting.treatmentAddition.tail.value,
                sum: Data.enchanting.treatmentAddition.sum,
            },
        },
        card: {
            equipment: {
                arms1: Data.card.equipment.arms1,
                arms2: Data.card.equipment.arms2,
                head: Data.card.equipment.head,
            },
            adventrue: {
                anglePoly: Data.card.adventrue.anglePoly,
                witch: Data.card.adventrue.witch,
            },
        },
        beCured: 0,
        details: {
            baseCure: Data.details.baseCure,
            treatmentAddition: Data.details.treatmentAddition,
            holyAtk: Data.details.holyAtk,
            cureAddition: Data.details.cureAddition,
            cureSkillEffectUp: Data.details.cureSkillEffectUp,
        },
        result: {
            cure: Data.result.cure,
            beCured: 0,
        },
    }
    SetCookie("UserCureValue", JSON.stringify(CookieData), 730);
}

function Loading(status) {
    function fn() {
        Read_Cookie(status);
        Set_UI();
        Calc_Base();
        Calc_EnchantingTreatmentAddition();
        Calc_DetailsBaseCure();
        Calc_DetailsTreatmentAddition();
        Calc_DetailsHolyAtk();
        Calc_DetailsCureAddition();
        Calc_DetailsCureEffectUp();
        Calc_ResultCure();
        Calc_Comparison();
    }
    
    switch (status) {
        case "cookie":
            status = true;
            fn();
            break;
        case "default":
            status = false;
            fn();
            break;
        default:
            console.log("Loading type error, Please key 'cookie' or 'default'!")
            break;
    }
}

function Read_Cookie(enabled) {
    var data;

    if (enabled) {
        var _temp = GetCookie("UserCureValue");

        if (_temp != "") {
            CookieData = JSON.parse(_temp);

            //確認Cookie版本
            if (DefaultData.webVersion != CookieData.webVersion) {
                console.log("CookieData checking~~")
                function structCheck(standardData, checkData) {
                    if (typeof standardData === "object") {
                        var standard = Object.keys(standardData);
                        var check = Object.keys(checkData);
                        if (standard.length > 0) {
                            //檢測該層變數是否相同，若否逐一比對
                            if (standard.sort().toString() != check.sort().toString()) {
                                for (var i = 0; i < standard.length; i++) {
                                    //當不存在時，建立並存入預設值
                                    if (standard[i] != check[i]) {
                                        //深層複製，傳值
                                        checkData[standard[i]] = JSON.parse(JSON.stringify(standardData[standard[i]]));
                                        check = Object.keys(checkData).sort();
                                    }
                                }
                            }

                            for (var i = 0; i < standard.length; i++) {
                                checkData[check[i]] = structCheck(standardData[standard[i]], checkData[check[i]]);
                            }
                        }
                    }
                    return checkData;
                }

                CookieData = structCheck(DefaultData, CookieData);
            }
        }

        data = CookieData;
    }
    else {
        data = DefaultData;
    }

    if (data == "") {
        data = DefaultData;
    }

    //#region 將資料逐一載入Data
    //基本素質
    Data.base.level.value = data.base.level;
    Data.base.int.value = data.base.int;

    //技能
    Data.skill.cure.value = data.skill.cure;
    Data.skill.meditation.value = data.skill.meditation;
    Data.skill.emergencyCure.value = data.skill.emergencyCure;

    //星盤
    Data.astrolabe.cureAddition.value = data.astrolabe.cureAddition;
    Data.astrolabe.holyAtkOne.value = data.astrolabe.holyAtkOne;
    Data.astrolabe.holyAtkTwo.value = data.astrolabe.holyAtkTwo;

    //公會
    Data.groupGoddes.holyAtk.value = data.groupGoddes.holyAtk;

    //裝備
    Data.equipment.arms.select = data.equipment.arms.select;
    Data.equipment.arms.refining.value = data.equipment.arms.refining;
    Data.equipment.arms.boost.value = data.equipment.arms.boost;
    Data.equipment.clothes.select = data.equipment.clothes.select;
    Data.equipment.clothes.refining.value = data.equipment.clothes.refining;
    Data.equipment.clothes.boost.value = data.equipment.clothes.boost;
    Data.equipment.shoes.select = data.equipment.shoes.select;
    Data.equipment.shoes.refining.value = data.equipment.shoes.refining;
    Data.equipment.shoes.boost.value = data.equipment.shoes.boost;
    Data.equipment.head.select = data.equipment.head.select;
    Data.equipment.head.refining.value = data.equipment.head.refining;
    Data.equipment.head.boost.value = data.equipment.head.boost;
    Data.equipment.back.select = data.equipment.back.select;
    Data.equipment.back.refining.value = data.equipment.back.refining;
    Data.equipment.back.boost.value = data.equipment.back.boost;
    Data.equipment.pet.value = data.equipment.pet;
    Data.equipment.artifact.select = data.equipment.artifact.select;
    Data.equipment.artifact.refining.value = data.equipment.artifact.refining;
    Data.equipment.artifact.boost.value = data.equipment.artifact.boost;

    //附魔（治癒加成）
    Data.enchanting.treatmentAddition.arms.value = data.enchanting.treatmentAddition.arms;
    Data.enchanting.treatmentAddition.cloak.value = data.enchanting.treatmentAddition.cloak;
    Data.enchanting.treatmentAddition.shoes.value = data.enchanting.treatmentAddition.shoes;
    Data.enchanting.treatmentAddition.head.value = data.enchanting.treatmentAddition.head;
    Data.enchanting.treatmentAddition.face.value = data.enchanting.treatmentAddition.face;
    Data.enchanting.treatmentAddition.mouth.value = data.enchanting.treatmentAddition.mouth;
    Data.enchanting.treatmentAddition.back.value = data.enchanting.treatmentAddition.back;
    Data.enchanting.treatmentAddition.tail.value = data.enchanting.treatmentAddition.tail;
    Data.enchanting.treatmentAddition.sum = data.enchanting.treatmentAddition.sum;

    //卡片
    Data.card.equipment.arms1 = data.card.equipment.arms1;
    Data.card.equipment.arms2 = data.card.equipment.arms2;
    Data.card.equipment.head = data.card.equipment.head;
    Data.card.adventrue.witch = data.card.adventrue.witch;
    Data.card.adventrue.anglePoly = data.card.adventrue.anglePoly;

    //受治癒
    Data.beCured.value = data.beCured;

    //明細
    Data.details.baseCure = data.details.baseCure;
    Data.details.treatmentAddition = data.details.treatmentAddition;
    Data.details.holyAtk = data.details.holyAtk;
    Data.details.cureAddition = data.details.cureAddition;
    Data.details.cureSkillEffectUp = data.details.cureSkillEffectUp;

    //結果
    Data.result.cure = data.result.cure;
    Data.result.beCured = data.result.beCured;
    //#endregion 資料載入結束
}

function Set_UI() {
    function setRange(_id, _min, _max, _value) {
        View_ProgressBar(_id, _max, _value);

        if (_id.search("Enchanting") != -1) {
            _value = NumberPercentage(_value, 1);
        }

        var inputItem = $("#" + _id + "Input");
        inputItem.attr({ 
            min: _min, 
            max: _max, 
        });
        inputItem.val(_value);
        View_DetailsCard(_id);
    }

    function setSelect(_id) {
        var _equipment;

        if (_id == "EquipmentArms") {
            _equipment = Data.equipment.arms;
        }
        else if (_id == "EquipmentClothes") {
            _equipment = Data.equipment.clothes;
        }
        else if (_id == "EquipmentShoes") {
            _equipment = Data.equipment.shoes;
        }
        else if (_id == "EquipmentHead") {
            _equipment = Data.equipment.head;
        }
        else if (_id == "EquipmentBack") {
            _equipment = Data.equipment.back;
        }

        $("#" + _id).val(_equipment.select);
        Read_Select(_id);
        setRange(_id + "Refining", _equipment.refining.min, _equipment.refining.max, _equipment.refining.value);
        setRange(_id + "Boost", _equipment.boost.min, _equipment.boost.max, _equipment.boost.value);
        View_DetailsCard(_id);
    }

    function setCheckbox(_id, checked) {
        if (checked == true) {
            $("#" + _id).prop("checked", true);
            View_ProgressBar(_id, 1, 1);
        }
        else {
            $("#" + _id).prop("checked", false);
            View_ProgressBar(_id, 1, 0)
        }
        View_DetailsCard(_id);
    }

    //基本素質
    setRange("BaseLevel", Data.base.level.min, Data.base.level.max, Data.base.level.value);
    setRange("BaseInt", Data.base.int.min, Data.base.int.max, Data.base.int.value);
    
    //技能
    setRange("SkillCure", Data.skill.cure.min, Data.skill.cure.max, Data.skill.cure.value);
    setRange("SkillMeditation", Data.skill.meditation.min, Data.skill.meditation.max, Data.skill.meditation.value );
    setRange("SkillEmergencyCure", Data.skill.emergencyCure.min, Data.skill.emergencyCure.max, Data.skill.emergencyCure.value );

    //星盤
    setRange("AstrolabeCureAddition", Data.astrolabe.cureAddition.min, Data.astrolabe.cureAddition.max, Data.astrolabe.cureAddition.value );
    setRange("AstrolabeHolyAtkOne", Data.astrolabe.holyAtkOne.min, Data.astrolabe.holyAtkOne.max, Data.astrolabe.holyAtkOne.value );
    setRange("AstrolabeHolyAtkTwo", Data.astrolabe.holyAtkTwo.min, Data.astrolabe.holyAtkTwo.max, Data.astrolabe.holyAtkTwo.value );

    //公會    
    setRange("GroupGoddesHolyAtk", Data.groupGoddes.holyAtk.min, Data.groupGoddes.holyAtk.max, Data.groupGoddes.holyAtk.value );

    //裝備
    setSelect("EquipmentArms");
    setSelect("EquipmentClothes");
    setSelect("EquipmentShoes");
    setSelect("EquipmentHead");
    setSelect("EquipmentBack");
    View_ProgressBar($("#EquipmentBack").attr("id"), 3, Number($("#EquipmentBack").val()));
    setRange("EquipmentPet", Data.equipment.pet.min, Data.equipment.pet.max, Data.equipment.pet.value );

    //附魔（治癒加成）
    setRange("EnchantingTreatmentAdditionArms", Data.enchanting.treatmentAddition.arms.min, Data.enchanting.treatmentAddition.arms.max, Data.enchanting.treatmentAddition.arms.value );
    setRange("EnchantingTreatmentAdditionCloak", Data.enchanting.treatmentAddition.cloak.min, Data.enchanting.treatmentAddition.cloak.max, Data.enchanting.treatmentAddition.cloak.value );
    setRange("EnchantingTreatmentAdditionShoes", Data.enchanting.treatmentAddition.shoes.min, Data.enchanting.treatmentAddition.shoes.max, Data.enchanting.treatmentAddition.shoes.value );
    setRange("EnchantingTreatmentAdditionHead", Data.enchanting.treatmentAddition.head.min, Data.enchanting.treatmentAddition.head.max, Data.enchanting.treatmentAddition.head.value );
    setRange("EnchantingTreatmentAdditionFace", Data.enchanting.treatmentAddition.face.min, Data.enchanting.treatmentAddition.face.max, Data.enchanting.treatmentAddition.face.value );
    setRange("EnchantingTreatmentAdditionMouth", Data.enchanting.treatmentAddition.mouth.min, Data.enchanting.treatmentAddition.mouth.max, Data.enchanting.treatmentAddition.mouth.value );
    setRange("EnchantingTreatmentAdditionBack", Data.enchanting.treatmentAddition.back.min, Data.enchanting.treatmentAddition.back.max, Data.enchanting.treatmentAddition.back.value );
    setRange("EnchantingTreatmentAdditionTail", Data.enchanting.treatmentAddition.tail.min, Data.enchanting.treatmentAddition.tail.max, Data.enchanting.treatmentAddition.tail.value );

    //卡片
    setCheckbox("CardArmsOneGlowinghand", Data.card.equipment.arms1);
    setCheckbox("CardArmsTwoGlowinghand", Data.card.equipment.arms2);
    setCheckbox("CardHeadSealOfBaiSuzhen", Data.card.equipment.head);
    setCheckbox("CardAdventrueWitch", Data.card.adventrue.witch);
    setCheckbox("CardAdventrueAngelPoly", Data.card.adventrue.anglePoly);

    //受治癒
}

//Even
var BtnDown = {
    status: false,
    startTime: 0,
    endTime: 0,
}

$(document).ready(
    //Loading
    $(function() {
        Loading("cookie");
    }),
    //UI
    $(".fa-info, .tools")
        .tooltip({
            effect: "slideDown",
            delay: 250
        }),
    //#region Even
    $("#tools-save")
        .click(function() {
            Tools_Save();
            Snackbar("儲存成功！");
        }),
    $("#tools-load")
        .click(function() {
            if (CookieData == "") {
                Snackbar("尚未有儲存紀錄！");
            }
            else {
                Loading("cookie");
                Snackbar("讀取成功！");
            }
        }),
    $("#tools-default")
        .click(function() {
            Loading("default");
            Snackbar("成功恢復本站預設值！");
        }),
    $(".select")
        .change(function () {
            var id = $(this).attr("id");
            Read_Select(id);
            View_DetailsCard(id);
        }),
    $("#EquipmentBack, #EquipmentArtifact") //裝備區塊中，例外的select，僅用於顯示ProgressBar狀態.
        .change(function() {
            View_ProgressBar($(this).attr("id"), $(this).children("option").length -1, Number($(this).val()));
        }),
    $(".btn.btn-xs.square, .btn.btn-xs.left, .btn.btn-xs.right")
        .on("mousedown touchstart", function(e) {
            var id = $(this).attr("id");
            BtnDown.status = true;
            Btn_Range(id, Check_Block(id));
        })
        .on("mouseup mouseout touchend touchcancel", function() {
            if (BtnDown.status == true) {
                BtnDown.status = false;
                var id = $(this).attr("id");
                Btn_Up(id, Check_Block(id));
                View_DetailsCard(id);
            }
        }),
    $("input.number, input.float")
        .focus(function () {
            var id = $(this).attr("id");
            if (id.search("Enchanting") != -1) {
                $(this).val(NumberRound(RemovePercentage($(this).val()) * 100, 1));
            }
            //避免focus於input時，Btn觸發mouseout，造成暴走之「暫代方案」.
            InputFocus(id);
            $(this).select();
        })
        .focusout(function() {
            var inputItem = $(this);
            //暫代方案
            InputFocusout(inputItem.attr("id"));
            var input = {
                value: inputItem.val(),
                min: Number(inputItem.attr("min")),
                max: Number(inputItem.attr("max")),
                type: "",
            }
            
            //避免focus於input時，Btn觸發mouseout，造成暴走.
            //var block = Check_Block(inputItem.attr("id"));
            //input.value = InputFocusError(input.value, input.max, block, e.type);

            input.value = Number(RemovePercentage(input.value))

            if (inputItem.attr("id").search("Enchanting") != -1) {
                input.type = "Percentage";
                input.value = input.value / 100;
            }

            if (input.value > input.max) {
                input.value = input.max;
            }
            else if (input.value < input.min) {
                input.value = input.max;
            }

            var id = $(this).attr("id").replace("Input", "");
            View_ProgressBar(id, input.max, input.value);
            Read_InputValueToData(id, Check_Block(id), input.value);

            if (input.type == "Percentage") {
                input.value = NumberPercentage(input.value, 1);
            }

            inputItem.val(input.value);
            View_DetailsCard(inputItem.attr("id"));
        }),
    $("input.checkbox")
        .click(function(e) {
            var id = $(this).attr("id");
            var checked = $(this).prop("checked");
            Read_CheckBox(id, checked);
            View_DetailsCard(id);
        }),
    $("form.row.block > div.title")
        .click(function() {
            if ($(this).next(".details").length != 0) {
                var _class = $(this).next(".details").attr("class");
                if (_class.search(" hide") == -1) {
                    $(this).next(".details").attr("class", _class + " hide");
                    $(this).children(".fa").attr("class", "fa fa-plus");
                }
                else {
                    $(this).next(".details").attr("class", _class.replace(" hide", ""));
                    $(this).children(".fa").attr("class", "fa fa-minus");
                }
            }
        })
    //#endregion Even
)

//避免focus於input時，Btn觸發，造成暴走.
function InputFocusError(value, max, block, evenType) {

    if (value.search("%") != -1) {
        console.log("A");
        value = RemovePercentage(value);
    }
    else if (value.search("%") == -1 && block == "Enchanting") {
        console.log("B");
        value = value / 100;
    }
    else if (value == "" || value == ".") {
        console.log("C");
        value = 0;
    }
    else if (value.match(/\./g) != null) {
        console.log("D");
        if (value.match(/\./g).length > 1) {
            console.log("E");
            value = 0;
        }
    }
    

    value = Number(value);
    if (value > max) {
        value = max;
    }
    return value;
}
//#region 以上的暫代方案
function InputFocus(id) {
    id = id.replace("Input", "");
    var btn_minus = $("#" + id + "Btn_Minus");
    var btn_plus = $("#" + id + "Btn_Plus");
    var btn_stepBackward = $("#" + id + "Btn_StepBackward");
    var btn_stepforward = $("#" + id + "Btn_StepForward");

    btn_minus.attr("class",  btn_minus.attr("class") + " hide");
    btn_plus.attr("class",  btn_plus.attr("class") + " hide");
    btn_stepBackward.attr("class",  btn_stepBackward.attr("class") + " hide");
    btn_stepforward.attr("class",  btn_stepforward.attr("class") + " hide");
}

function InputFocusout(id) {
    var inputItem = $("#" + id);
    var input = {
        match: inputItem.val().match(/\./g),
        value: inputItem.val(),
    }
   
    if (input.match != null) {
        if (input.match.length > 1 || input.value == ".") {
            $("#" + id).val(0);
        }
    }

    id = id.replace("Input", "");
    var btn_minus = $("#" + id + "Btn_Minus");
    var btn_plus = $("#" + id + "Btn_Plus");
    var btn_stepBackward = $("#" + id + "Btn_StepBackward");
    var btn_stepforward = $("#" + id + "Btn_StepForward");

    btn_minus.attr("class",  btn_minus.attr("class").replace(" hide", ""));
    btn_plus.attr("class",  btn_plus.attr("class").replace(" hide", ""));
    btn_stepBackward.attr("class",  btn_stepBackward.attr("class").replace(" hide", ""));
    btn_stepforward.attr("class",  btn_stepforward.attr("class").replace(" hide", ""));
}
//#endregion 以上的暫代方案

//識別按鈕屬於的區塊
function Check_Block(itemId) {
    var _block = "";
    
    if (itemId.search("Base") != -1) {
        _block = "Base";
    }
    else if (itemId.search("Skill") != -1) {
        _block = "Skill";
    }
    else if (itemId.search("Astrolabe") != -1) {
        _block = "Astrolabe";
    }
    else if (itemId.search("GroupGoddes") != -1) {
        _block = "GroupGoddes";
    }
    else if (itemId.search("Equipment") != -1) {
        _block = "Equipment";
    }
    else if (itemId.search("Enchanting") != -1) {
        _block = "Enchanting";
    }
    else if (itemId.search("Card") != -1) {
        _block = "Card";
    }
    return _block;
}

//#region UI Read of Control
var BtnTimer = 0;
function Btn_Range(itemId, block) {
    if (itemId.search("_") != -1) {
        var _btnType = itemId.slice(itemId.search("_") + 1, itemId.length);
        var _inputItem = $("#" + itemId.slice(0, itemId.search("Btn")) + "Input");
        var _input = {
            value: Number(RemovePercentage(_inputItem.val())),
            min: Number(_inputItem.attr("min")),
            max: Number(_inputItem.attr("max")),
            type: "",
        }

        //避免focus於input時，Btn觸發，造成暴走.
        //_input.value = InputFocusError(_input.value, _input.max, block);

        var _count = 0;
        var _step = 1

        if (block == "Enchanting") {
            _step = 0.001;
            _input.type = "Percentage";
        }

        function fn() {
            switch (_btnType) {
                case "Minus":
                    if (_input.value > _input.min) {
                        _input.value -= _step
                        if (_input.value < _input.min) {
                            _input.value = _input.min;
                            clearInterval(BtnTimer);
                        }
                    }
                    break;
                case "Plus":
                    if (_input.value < _input.max) {
                        _input.value += _step;
                        if (_input.value > _input.max) {
                            _input.value = _input.max;
                            clearInterval(BtnTimer);
                        }
                    }
                    break;
                case "StepBackward":
                    _input.value = _input.min;
                    clearInterval(BtnTimer);
                    break;
                case "StepForward":
                    _input.value = _input.max;
                    clearInterval(BtnTimer);
                    break;
                default:
                    clearInterval(BtnTimer);
                    break;
            }

            if (_input.type == "Percentage") {
                _input.value = NumberPercentage(_input.value, 1);
            }

            _inputItem.val(_input.value);
            _input.value = RemovePercentage(_input.value);

            _count++;
            if (_count > 7) {
                _step += _step;
                _count = 0;
            }
        }

        BtnTimer = setInterval(fn, 80);
    }
}
function Btn_Up(itemId, block) {
    clearInterval(BtnTimer);
    
    var _id = itemId.slice(0, itemId.search("Btn"));
    var _inputItem = $("#" + _id + "Input");
    var _input = {
        value: Number(RemovePercentage(_inputItem.val())),
        max: Number(_inputItem.attr("max")),
    }

    //避免focus於input時，Btn觸發mouseout，造成暴走.
    //_input.value = InputFocusError(_input.value, _input.max, _block);

    View_ProgressBar(_id, _input.max, _input.value);
    Read_InputValueToData(_id, block, _input.value);
}

function Read_InputValueToData(id, block, value) {
    var type = id.replace(block, ""),
        keyWords = "",
        equipmentData;
    value = NumberRound(value, 3);

    if (block == "Base") {
        switch (type) {
            case "Level":
                Data.base.level.value = value;
                break;
            case "Int":
                Data.base.int.value = value;
                break;
            default:
                console.log(block + " not found:" + type);
                break;
        }
        Calc_Base();
        Calc_DetailsBaseCure();
    }
    else if (block == "Skill") {
        switch (type) {
            case "Cure":
                Data.skill.cure.value = value;
                break;
            case "Meditation":
                Data.skill.meditation.value = value;
                Calc_DetailsTreatmentAddition();
                break;
            case "EmergencyCure":
                Data.skill.emergencyCure.value = value;
                break;
            default:
                console.log(block + " not found:" + type);
                break;
        }
        Calc_DetailsBaseCure();
    }
    else if (block == "Astrolabe") {
        switch(type) {
            case "CureAddition":
                Data.astrolabe.cureAddition.value = value;
                Calc_DetailsCureAddition();
                break;
            case "HolyAtkOne":
                Data.astrolabe.holyAtkOne.value = value;
                Calc_DetailsHolyAtk();
                break;
            case "HolyAtkTwo":
                Data.astrolabe.holyAtkTwo.value = value;
                Calc_DetailsHolyAtk();
                break;
            default:
                console.log(block + " not found:" + type);
                break;
        }

    }
    else if (block == "GroupGoddes") {
        switch(type) {
            case "HolyAtk":
                Data.groupGoddes.holyAtk.value = value;
                Calc_DetailsHolyAtk();
                break;
            default:
                console.log(block + " not found:" + type);
                break;
        }
    }
    else if (block == "Equipment") {
        if (type.search("Arms") != -1) {
            keyWords = "Arms";
            equipmentData = Data.equipment.arms;
        }
        else if (type.search("Clothes") != -1) {
            keyWords = "Clothes";
            equipmentData = Data.equipment.clothes;
        }
        else if (type.search("Shoes") != -1) {
            keyWords = "Shoes";
            equipmentData = Data.equipment.shoes;
        }
        else if (type.search("Head") != -1) {
            keyWords = "Head";
            equipmentData = Data.equipment.head;
        }
        else if (type.search("Back") != -1) {
            keyWords = "Back";
            equipmentData = Data.equipment.back;
        }
        else if (type.search("Pet") != -1) {
            keyWords = "Pet";
            equipmentData = Data.equipment.pet;
        }
        else if (type.search("Artifact") != -1) {
            keyWords = "Artifact";
            equipmentData = Data.equipment.artifact;
        }

        switch (type.replace(keyWords, "")) {
            case "Refining":
                equipmentData.refining.value = value;
                break;
            case "Boost":
                equipmentData.boost.value = value;
                break;
            default:
                if (type == "Pet") {
                    equipmentData.value = value;
                }
                else {
                    console.log(block + " not found:" + keyWords);
                }
                break;
        }
        Calc_DetailsTreatmentAddition();
        Calc_DetailsHolyAtk();
    }
    else if (block == "Enchanting") {
        if (type.search("TreatmentAddition") != -1) {
            keyWords = "TreatmentAddition";
            equipmentData = Data.enchanting.treatmentAddition;
        }

        switch (type.replace(keyWords, "")) {
            case "Arms":
                equipmentData.arms.value = value;
                break;
            case "Cloak":
                equipmentData.cloak.value = value;
                break;
            case "Shoes":
                equipmentData.shoes.value = value;
                break;
            case "Head":
                equipmentData.head.value = value;
                break;
            case "Face":
                equipmentData.face.value = value;
                break;
            case "Mouth":
                equipmentData.mouth.value = value;
                break;
            case "Back":
                equipmentData.back.value = value;
                break;
            case "Tail":
                equipmentData.tail.value = value;
                break;
            default:
                console.log(block + " not found:" + keyWords);
                break;
        }
        Calc_EnchantingTreatmentAddition();
        Calc_DetailsTreatmentAddition();
    }
    Calc_ResultCure();
    Calc_Comparison();
}

function Read_Select(itemId) {
    var _equipment;

    function reset(equipment) {
        equipment.select = 0;
        equipment.refining.ui = false;
        equipment.refining.min = 0;
        equipment.refining.max = 0;
        equipment.boost.ui = false;
        equipment.boost.min = 0;
        equipment.boost.max = 0;
        equipment.effect.treatmentAddition = 0;
        equipment.effect.holyAtk = 0;
    }

    //讀取Select後給值
    var selectValue = Number($("#" + itemId).val());
    
    if (itemId == "EquipmentArms") {
        //先初始化，再給值
        reset(Data.equipment.arms);
        Data.equipment.arms.select = selectValue;
        switch (selectValue) {
            case 1: //恢復之杖        
                Data.equipment.arms.refining.ui = true;
                Data.equipment.arms.refining.max = 15;
                Data.equipment.arms.effect.treatmentAddition = 0.03;
                break;
            case 2: //紅十字杖
                Data.equipment.arms.refining.ui = true;
                Data.equipment.arms.refining.max = 15;
                Data.equipment.arms.boost.ui = true;
                Data.equipment.arms.boost.max = 8;
                Data.equipment.arms.effect.treatmentAddition = 0.04;
                break;
            default :
                break;
        }

        _equipment = Data.equipment.arms;
    }
    else if (itemId == "EquipmentClothes") {
        //先初始化，再給值
        reset(Data.equipment.clothes);
        Data.equipment.clothes.select = selectValue;
        switch (selectValue) {
            case 1: //天衣月舞
                Data.equipment.clothes.refining.ui = true;
                Data.equipment.clothes.refining.max = 15;
                Data.equipment.clothes.boost.ui = true;
                Data.equipment.clothes.boost.max = 8;
                break;
            default :
                break;
        }

        _equipment = Data.equipment.clothes;
    }
    else if (itemId == "EquipmentShoes") {
        //先初始化，再給值
        reset(Data.equipment.shoes);
        Data.equipment.shoes.select = selectValue;
        switch (selectValue) {
            case 1: //審判之鞋
                Data.equipment.shoes.refining.ui = true;
                Data.equipment.shoes.refining.max = 15;
                Data.equipment.shoes.boost.ui = false;
                Data.equipment.shoes.boost.max = 0;
                break;
            default :
                break;
        }

        _equipment = Data.equipment.shoes;
    }
    else if (itemId == "EquipmentHead") {
        //先初始化，再給值
        reset(Data.equipment.head);
        Data.equipment.head.select = selectValue;
        switch (selectValue) {
            case 1: //懶懶波利
                Data.equipment.head.refining.ui = true;
                Data.equipment.head.refining.max = 15;
                Data.equipment.head.effect.treatmentAddition = 0.01;
                Data.equipment.head.effect.holyAtk = 0.03;
                break;
            default:
                break; 
        }

        _equipment = Data.equipment.head;
    }
    else if (itemId == "EquipmentBack") {
        //先初始化，再給值
        reset(Data.equipment.back);
        Data.equipment.back.select = selectValue;
        switch(selectValue) {
            case 1: //寶貝・別哭
                Data.equipment.back.effect.treatmentAddition = 0.03;
                Data.equipment.back.effect.holyAtk = 0.03;
                break;
            case 2: //賢者之書
                Data.equipment.back.effect.holyAtk = 0.05;
                break;
            case 3: //金色聖誕鈴鐺
                Data.equipment.back.effect.holyAtk = 0.08;
                break;
            default:
                break;
        }

        _equipment = Data.equipment.back;
    }
    else if (itemId == "EquipmentArtifact") {
        //先初始化，再給值
        reset(Data.equipment.artifact);
        Data.equipment.artifact.select = selectValue;
        switch(selectValue) {
            case 1: //金枝
                Data.equipment.artifact.effect.treatmentAddition = 0.15;
                break;
            default:
                break;
        }

        _equipment = Data.equipment.artifact;
    }

    //設定UI
    function set_ui(itemId, eqptdata, type) {
        var input = $("#" + itemId + type + "Input");

        //設定input最大值
        function setInputMax(inputMax) {
            input.attr("max", inputMax);
        }

        function setEnabled(enabled) {
            var group = $("#" + itemId + type + "Group"),
                group_class = group.attr("class");

            if (enabled == false ) {
                if (group_class.search(" disabled") == -1) {
                    group.attr("class", group_class + " disabled");
                    input.prop("disabled", true);
                }                
            }
            else {
                group.attr("class", group_class.replace(" disabled", ""));
                input.prop("disabled", false);
            }
        }

        //檢查input最大值
        function checkInput(inputData) {
            if (input.val() > inputData.max) {
                input.val(inputData.max);
                inputData.value = inputData.max;
            }
        }

        switch (type) {
            case "Refining":
                setInputMax(eqptdata.refining.max);
                setEnabled(eqptdata.refining.ui);
                checkInput(eqptdata.refining);
                break;
            case "Boost":
                setInputMax(eqptdata.boost.max);
                setEnabled(eqptdata.boost.ui);
                checkInput(eqptdata.boost);
                break;
            default:
                console.log("Not find:" + type);
                break;
        }
        View_ProgressBar(itemId + type, input.attr("max"), input.val());
    }

    set_ui(itemId, _equipment, "Refining");
    set_ui(itemId, _equipment, "Boost");
    
    Calc_DetailsTreatmentAddition();
    Calc_DetailsHolyAtk();
    Calc_ResultCure();
    Calc_Comparison();
}

function Read_CheckBox(itemId, checked) {
    if (checked == true) {
        View_ProgressBar(itemId, 1, 1);
    }
    else {
        View_ProgressBar(itemId, 1, 0)
    }
    
    switch (itemId) {
        case "CardArmsOneGlowinghand":
            Data.card.equipment.arms1 = checked;
            Calc_DetailsTreatmentAddition();
            break;
        case "CardArmsTwoGlowinghand":
            Data.card.equipment.arms2 = checked;
            Calc_DetailsTreatmentAddition();
            break;
        case "CardHeadSealOfBaiSuzhen":
            Data.card.equipment.head = checked;
            Calc_DetailsCureEffectUp();
            break;
        case "CardAdventrueWitch":
            Data.card.adventrue.witch = checked;
            Calc_DetailsHolyAtk();
            break;
        case "CardAdventrueAngelPoly":
            Data.card.adventrue.anglePoly = checked;
            Calc_DetailsHolyAtk();
            break;
        default:
            break;
    }
    Calc_ResultCure();
    Calc_Comparison();
}
//#endregion UI Read of Control

//#region ClacCalculation

//計算「基本素質」和
function Calc_Base() {
    Data.base.sum = Data.base.level.value + Data.base.int.value;
    $("#SumBase").html(Data.base.sum);
}
//計算「附魔」和
function Calc_EnchantingTreatmentAddition() {
    Data.enchanting.treatmentAddition.sum = NumberRound(
        ( Data.enchanting.treatmentAddition.arms.value * 100
        + Data.enchanting.treatmentAddition.cloak.value * 100
        + Data.enchanting.treatmentAddition.shoes.value * 100
        + Data.enchanting.treatmentAddition.head.value * 100
        + Data.enchanting.treatmentAddition.face.value * 100
        + Data.enchanting.treatmentAddition.mouth.value * 100
        + Data.enchanting.treatmentAddition.back.value * 100
        + Data.enchanting.treatmentAddition.tail.value * 100
        ) / 100, 3);
    $("#SumEnchanting").html(NumberPercentage(Data.enchanting.treatmentAddition.sum, 1));
}
//計算「基礎治癒量」
function Calc_DetailsBaseCure() {
    //計算「緊急治療」
    var emergencyCure = {
        level: Data.skill.emergencyCure.value,
        value: 0,
    }

    if (emergencyCure.level > 1) {
        emergencyCure.value = (emergencyCure.level -1)*50;
    }
    
    //計算「治癒術」
    var cure = {
        level: Data.skill.cure.value,
        value: 0,
        x: 0,   //技能係數
    }

    if (cure.level > 0 ) {
        cure.x = 4 + cure.level * 8;
        //技能顛峰係數補正
        if (cure.level > 10) {
            cure.x -= (cure.level - 10) * 6;
        }
        
        cure.value = 100 + cure.x * Math.floor(Data.base.sum / 10) + emergencyCure.value;
    }

    Data.details.baseCure = cure.value;
    $("#DetailsBaseCure").text(cure.value);
}
//計算「治療加成」
function Calc_DetailsTreatmentAddition() {
    //因小數問題，數值由千分比小數放大至整數，結果儲存為小數.
    //#region 裝備穿戴效果
    var wearingEffect = 0;

    //精煉效果「武器」
    wearingEffect += Data.equipment.arms.refining.value * Data.equipment.arms.effect.treatmentAddition * 1000;

    //精煉效果「紅十字杖」
    if (Data.equipment.arms.select == 2 && Data.equipment.arms.refining.value >= 13 && Data.equipment.arms.boost.value >= 8) {
        wearingEffect += 100;
    }

    //精煉效果「天衣月舞」
    if (Data.equipment.clothes.select == 1 && Data.equipment.clothes.boost.value >= 8 && Data.equipment.clothes.refining.value >= 10) {
        wearingEffect += 50;
    }

    //套裝效果「紅十字杖IV + 天衣月舞IV」
    if (Data.equipment.arms.select == 2 && Data.equipment.clothes.select == 1 && Data.equipment.arms.boost.value >= 4 && Data.equipment.clothes.boost.value >= 4) {
        wearingEffect += 50;
        if (Data.equipment.clothes.refining.value >= 10) {
            wearingEffect += 50;
        }
    }

    //精煉效果「頭飾」
    if (Data.equipment.head.select == 1) {
        wearingEffect += Data.equipment.head.refining.value * Data.equipment.head.effect.treatmentAddition * 1000;
    }

    //穿戴效果「背飾」
    wearingEffect += Data.equipment.back.effect.treatmentAddition * 1000;

    //寵物技能效果
    wearingEffect += Data.equipment.pet.value * Data.equipment.pet.effect.treatmentAddition * 1000;
    
    //穿戴效果「神器」
    if (Data.equipment.artifact.select == 1) {
        wearingEffect += Data.equipment.artifact.effect.treatmentAddition * 1000;
    }

    //卡片「武器1」
    if (Data.card.equipment.arms1 == true) {
        wearingEffect += 0.15 * 1000;
    }

    //卡片「武器2」
    if (Data.card.equipment.arms2 == true) {
        wearingEffect += 0.15 * 1000;
    }

    //#endregion 裝備穿戴效果

    Data.details.treatmentAddition =
        ( wearingEffect
        + Data.skill.meditation.value * 20
        + Data.enchanting.treatmentAddition.sum * 1000
        ) / 1000;
    $("#DetailsTreatmentAddition").text(NumberPercentage(Data.details.treatmentAddition, 1));
}
//計算「聖屬性攻擊」
function Calc_DetailsHolyAtk() {
    //因小數問題，數值由千分比小數放大至整數，結果儲存為小數.
    var effect = 0;
    
    //裝備「審判之鞋」
    if (Data.equipment.shoes.select == 1 && Data.equipment.shoes.refining.value > 10) {
        effect += (Data.equipment.shoes.refining.value - 10) * 10;
    }
    //存入「巫婆卡片」
    if (Data.card.adventrue.witch == true) {
        effect += 10;
    }
    //存入「天使波利卡片」
    if (Data.card.adventrue.anglePoly == true) {
        effect += 50;
    }
    
    Data.details.holyAtk = 
    ( effect
    + Data.astrolabe.holyAtkOne.value * 10
    + Data.astrolabe.holyAtkTwo.value * 20
    + Data.groupGoddes.holyAtk.value * 5
    + Data.equipment.head.effect.holyAtk * 1000
    + Data.equipment.back.effect.holyAtk * 1000
    ) / 1000;
    $("#DetailsHolyAtk").text(NumberPercentage(Data.details.holyAtk, 1));
}
//計算「治癒量提升」
function Calc_DetailsCureAddition() {
    Data.details.cureAddition = Data.astrolabe.cureAddition.value * 0.02;
    $("#DetailsCureAddition").text(NumberPercentage(Data.details.cureAddition, 1));
}
//計算「治癒術效果提升」
function Calc_DetailsCureEffectUp() {
    var effect = 0;
    if (Data.card.equipment.head == true) {
        effect = 0.1;
    }
    Data.details.cureSkillEffectUp = effect;
    $("#DetailsCureSkillEffectUp").text(NumberPercentage(Data.details.cureSkillEffectUp, 1));
}
//計算「治癒術」結果
function Calc_ResultCure() {
    var item = $("#ResultCure");
    if (Data.skill.cure.value != 0) {
        Data.result.cure = Math.ceil(Data.details.baseCure
            * (1 + Data.details.treatmentAddition)
            * (1 + Data.details.holyAtk)
            * (1 + Data.details.cureAddition)
            * (1 + Data.details.cureSkillEffectUp));
            item.text(Data.result.cure);
            item.css("font-size", 96);
    }
    else {
        item.html("請輸入治癒術等級<br>༼ つ ◕▽◕ ༽つ");
        item.css("font-size", 36);
    }
    
}

//計算「比較結果」
function Calc_Comparison() {
    if (CookieData != "") {
        function comparison(id, now, cookie) {
            var _value = now - cookie;
            var _class = "";
            if (_value > 0) {
                _class = "fa fa-long-arrow-up";
            }
            else if (_value < 0) {
                _class = "fa fa-long-arrow-down";
                _value = -_value;
            }
            else {
                _value = "-";
            }

            if (!(id == "DetailsBaseCure" || id == "ResultCure" || _value == "-")) {
                _value = NumberPercentage(_value, 1);
            }

            $("#" + id + "Status").attr("class", _class);
            $("#" + id + "StatusValue").text(_value);
        }
        comparison("DetailsBaseCure", Data.details.baseCure, CookieData.details.baseCure);
        comparison("DetailsTreatmentAddition", Data.details.treatmentAddition, CookieData.details.treatmentAddition);
        comparison("DetailsHolyAtk", Data.details.holyAtk, CookieData.details.holyAtk);
        comparison("DetailsCureAddition", Data.details.cureAddition, CookieData.details.cureAddition);
        comparison("DetailsCureSkillEffectUp", Data.details.cureSkillEffectUp, CookieData.details.cureSkillEffectUp);
        comparison("ResultCure", Data.result.cure, CookieData.result.cure);
    }
}

//#endregion ClacCalculation

//「明細卡」狀態變化
function View_DetailsCard(id) {
    var block = Check_Block(id);

    function view(cardId, enabled) {
        var card = $("#" + cardId);
        var card_class = card.attr("class");
        var status = card.children(".title").children("i");
        var status_class = status.attr("class");

        if (enabled == true) {
            card.attr("class", card_class.replace(" disabled", ""));
            status.attr("class", status_class.replace(" fa-close", " fa-check"));
        }
        else {
            if (card_class.search(" disabled") == -1) {
                card.attr("class", card_class + " disabled");
                status.attr("class", status_class.replace(" fa-check", " fa-close"));
            }
        }
    }

    switch (block) {
        case "Equipment":
            if (id.search("EquipmentArms") != -1) {
                view("CardEquipmentArms1", false);
                view("CardEquipmentArms2", false);
                view("CardEquipmentArms3", false);
                switch (Data.equipment.arms.select) {
                    case 1:
                        view("CardEquipmentArms1", true);
                        break;
                    case 2:
                        view("CardEquipmentArms2", true);
                        if (Data.equipment.arms.refining.value >= 13 && Data.equipment.arms.boost.value >= 8) {
                            view("CardEquipmentArms3", true);
                        }
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.arms.select);
                        break;
                }
            }
            else if (id.search("EquipmentClothes") != -1) {
                view("CardEquipmentClothes1", false);
                switch (Data.equipment.clothes.select) {
                    case 1:
                        if (Data.equipment.clothes.refining.value >= 10 && Data.equipment.clothes.boost.value >= 8) {
                            view("CardEquipmentClothes1", true);
                        }
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.clothes.select);
                        break;
                }
            }
            else if (id.search("EquipmentShoes") != -1) {
                view("CardEquipmentShoes1", false);
                switch (Data.equipment.shoes.select) {
                    case 1:
                        if (Data.equipment.shoes.refining.value >= 11) {
                            view("CardEquipmentShoes1", true);
                        }
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.shoes.select);
                        break;
                }
            }
            else if (id.search("EquipmentHead") != -1) {
                view("CardEquipmentHead1", false);
                switch (Data.equipment.head.select) {
                    case 1:
                        view("CardEquipmentHead1", true);
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.head.select);
                        break;
                }
            }
            else if (id.search("EquipmentBack") != -1) {
                view("CardEquipmentBack1", false);
                view("CardEquipmentBack2", false);
                view("CardEquipmentBack3", false);
                switch (Data.equipment.back.select) {
                    case 1:
                        view("CardEquipmentBack1", true);
                        break;
                    case 2:
                        view("CardEquipmentBack2", true);
                        break;
                    case 3:
                        view("CardEquipmentBack3", true);
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.back.select);
                        break;
                }
            }
            else if (id.search("EquipmentPet") != -1) {
                view("CardEquipmentPet1", false);
                if(Data.equipment.pet.value > 0) {
                    view("CardEquipmentPet1", true);
                }
            }
            else if (id.search("EquipmentArtifact") != -1) {
                view("CardEquipmentArtifact", false);
                switch (Data.equipment.artifact.select) {
                    case 1:
                        view("CardEquipmentArtifact", true);
                        break;
                    default:
                        console.log("Not find card >> " + id + " select:" + Data.equipment.artifact.select);
                        break;
                }
            }
            
            view("CardEquipmentWearing1", false);
            view("CardEquipmentWearing2", false);
            if (Data.equipment.arms.select == 2 && Data.equipment.clothes.select == 1) {
                if (Data.equipment.arms.boost.value >= 4 && Data.equipment.clothes.boost.value >= 4) {
                    view("CardEquipmentWearing1", true);
                    if (Data.equipment.clothes.refining.value >= 10) {
                        view("CardEquipmentWearing2", true);
                    }
                }
            }
            break;
        case "Card":
            if (id.search("CardArms") != -1) {
                view("CardCardArmsGlowinghand", false);
                if (Data.card.equipment.arms1 == true || Data.card.equipment.arms2 == true) {
                    view("CardCardArmsGlowinghand", true);
                }
            }
            else if (id.search("CardHead") != -1) {
                view("CardCardHeadSealOfBaiSuzhen", false);
                if (Data.card.equipment.head == true) {
                    view("CardCardHeadSealOfBaiSuzhen", true);
                }
            }
            else if (id.search("CardAdventrue") != -1) {
                view("CardCardAdventrueWitch", false);
                view("CardCardAdventrueAngelPoly", false);
                if (Data.card.adventrue.witch == true) {
                    view("CardCardAdventrueWitch", true);
                }
                if (Data.card.adventrue.anglePoly == true) {
                    view("CardCardAdventrueAngelPoly", true);
                }
            }
            break;
    }
};