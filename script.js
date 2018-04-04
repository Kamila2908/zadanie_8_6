var a = 1;
var b = 1;

value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
    console.log('Wynik dodatni')
} else {
    console.log('Wynik ujemny')
}

switch (value) {
    case 0:
    console.log('Wynik równa się zero')
}