function isPositive(num) {

    var result;

    if (num >= 0) {
        result = true;
    } else if (num < 0) {
        result = false;
    }
    return result;
}

var num;
num = parseInt(prompt("Enter a number"));
while (num != -1) {
    alert(isPositive(num));

    if (isNaN(num)) {
        alert("No number entered. Try again");
        num = parseInt(prompt("Enter a number"));
        isPositive(num);
        while (num != -1) {
            alert(isPositive(num));
        }
    }
}