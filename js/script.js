function navbarMenu(x) {
    x.classList.toggle("change");
}

function CancelEvent(e) { e.preventDefault(); }

function numberFormat(value, type, float) {
    value = value.toString();
    if(value.charAt(value.length - 1) == "%") { value = Number(value.replace("%", "") / 100); }
    else { value = Number(value); }
    
    if (type == "%") { value = (value * 100).toFixed(float) + "%"; }
    else { value = value.toFixed(float); }
    return value;
}