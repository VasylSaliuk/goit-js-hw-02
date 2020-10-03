function formatString (string, maxLength = 40) {
    // arrayString = string.split(" ")
    return string.length < maxLength ? string : string.slice(0, maxLength) + "...";
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));

