function calculate() {
  var textInTextField = document
    .getElementById("textfield")
    .value.toUpperCase();
  console.log(textInTextField);
  let wordlange = 0;
  for (i = 0; i < textInTextField.length - 1; i++) {
    wordlange += distance(
      textInTextField.charAt(i),
      textInTextField.charAt(i + 1)
    );
  }
  var roundedAbsoluteLength = roundUp(wordlange, 2);
  var roundedRelativeLength = roundUp(wordlange/textInTextField.length, 2);

  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();
  var newCell = newRow.insertCell();
  var newText = document.createTextNode(textInTextField + ": " + roundedAbsoluteLength + "mm insgesamt und " + roundedRelativeLength + "mm/Buchstabe.");
  newCell.appendChild(newText);
}

function clearTable(){
    var Table = document.getElementById("table").getElementsByTagName("tbody")[0];
    Table.innerHTML = "";
}

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  }

function distance(charOne, charTwo) {  
  if (charOne == "Q" && charTwo == "W") {
    return 19.05;
  }
  if (charOne == "Q" && charTwo == "E") {
    return 38.1;
  }
  if (charOne == "Q" && charTwo == "R") {
    return 57.15;
  }
  if (charOne == "Q" && charTwo == "T") {
    return 76.2;
  }
  if (charOne == "Q" && charTwo == "Y") {
    return 95.25;
  }
  if (charOne == "Q" && charTwo == "U") {
    return 114.3;
  }
  if (charOne == "Q" && charTwo == "I") {
    return 133.35;
  }
  if (charOne == "Q" && charTwo == "O") {
    return 152.4;
  }
  if (charOne == "Q" && charTwo == "P") {
    return 171.45;
  }
  if (charOne == "Q" && charTwo == "A") {
    return 19.64;
  }
  if (charOne == "Q" && charTwo == "S") {
    return 30.49;
  }
  if (charOne == "Q" && charTwo == "D") {
    return 46.91;
  }
  if (charOne == "Q" && charTwo == "F") {
    return 64.78;
  }
  if (charOne == "Q" && charTwo == "G") {
    return 83.17;
  }
  if (charOne == "Q" && charTwo == "H") {
    return 101.81;
  }
  if (charOne == "Q" && charTwo == "J") {
    return 120.58;
  }
  if (charOne == "Q" && charTwo == "K") {
    return 139.42;
  }
  if (charOne == "Q" && charTwo == "L") {
    return 158.31;
  }
  if (charOne == "Q" && charTwo == "Z") {
    return 40.69;
  }
  if (charOne == "Q" && charTwo == "X") {
    return 50.63;
  }
  if (charOne == "Q" && charTwo == "C") {
    return 64.78;
  }
  if (charOne == "Q" && charTwo == "V") {
    return 80.96;
  }
  if (charOne == "Q" && charTwo == "B") {
    return 98.18;
  }
  if (charOne == "Q" && charTwo == "N") {
    return 115.97;
  }
  if (charOne == "Q" && charTwo == "M") {
    return 134.11;
  }
  if (charOne == "W" && charTwo == "Q") {
    return 19.05;
  }
  if (charOne == "W" && charTwo == "E") {
    return 19.05;
  }
  if (charOne == "W" && charTwo == "R") {
    return 38.1;
  }
  if (charOne == "W" && charTwo == "T") {
    return 57.15;
  }
  if (charOne == "W" && charTwo == "Y") {
    return 76.2;
  }
  if (charOne == "W" && charTwo == "U") {
    return 95.25;
  }
  if (charOne == "W" && charTwo == "I") {
    return 114.3;
  }
  if (charOne == "W" && charTwo == "O") {
    return 133.35;
  }
  if (charOne == "W" && charTwo == "P") {
    return 152.4;
  }
  if (charOne == "W" && charTwo == "A") {
    return 23.81;
  }
  if (charOne == "W" && charTwo == "S") {
    return 19.64;
  }
  if (charOne == "W" && charTwo == "D") {
    return 30.49;
  }
  if (charOne == "W" && charTwo == "F") {
    return 46.91;
  }
  if (charOne == "W" && charTwo == "G") {
    return 64.78;
  }
  if (charOne == "W" && charTwo == "H") {
    return 83.17;
  }
  if (charOne == "W" && charTwo == "J") {
    return 101.81;
  }
  if (charOne == "W" && charTwo == "K") {
    return 120.58;
  }
  if (charOne == "W" && charTwo == "L") {
    return 139.42;
  }
  if (charOne == "W" && charTwo == "Z") {
    return 38.4;
  }
  if (charOne == "W" && charTwo == "X") {
    return 40.69;
  }
  if (charOne == "W" && charTwo == "C") {
    return 50.63;
  }
  if (charOne == "W" && charTwo == "V") {
    return 64.78;
  }
  if (charOne == "W" && charTwo == "B") {
    return 80.96;
  }
  if (charOne == "W" && charTwo == "N") {
    return 98.18;
  }
  if (charOne == "W" && charTwo == "M") {
    return 115.97;
  }
  if (charOne == "E" && charTwo == "Q") {
    return 38.1;
  }
  if (charOne == "E" && charTwo == "W") {
    return 19.05;
  }
  if (charOne == "E" && charTwo == "R") {
    return 19.05;
  }
  if (charOne == "E" && charTwo == "T") {
    return 38.1;
  }
  if (charOne == "E" && charTwo == "Y") {
    return 57.15;
  }
  if (charOne == "E" && charTwo == "U") {
    return 76.2;
  }
  if (charOne == "E" && charTwo == "I") {
    return 95.25;
  }
  if (charOne == "E" && charTwo == "O") {
    return 114.3;
  }
  if (charOne == "E" && charTwo == "P") {
    return 133.35;
  }
  if (charOne == "E" && charTwo == "A") {
    return 38.4;
  }
  if (charOne == "E" && charTwo == "S") {
    return 23.81;
  }
  if (charOne == "E" && charTwo == "D") {
    return 19.64;
  }
  if (charOne == "E" && charTwo == "F") {
    return 30.49;
  }
  if (charOne == "E" && charTwo == "G") {
    return 46.91;
  }
  if (charOne == "E" && charTwo == "H") {
    return 64.78;
  }
  if (charOne == "E" && charTwo == "J") {
    return 83.17;
  }
  if (charOne == "E" && charTwo == "K") {
    return 101.81;
  }
  if (charOne == "E" && charTwo == "L") {
    return 120.58;
  }
  if (charOne == "E" && charTwo == "Z") {
    return 44.93;
  }
  if (charOne == "E" && charTwo == "X") {
    return 38.4;
  }
  if (charOne == "E" && charTwo == "C") {
    return 40.69;
  }
  if (charOne == "E" && charTwo == "V") {
    return 50.63;
  }
  if (charOne == "E" && charTwo == "B") {
    return 64.78;
  }
  if (charOne == "E" && charTwo == "N") {
    return 80.96;
  }
  if (charOne == "E" && charTwo == "M") {
    return 98.18;
  }
  if (charOne == "R" && charTwo == "Q") {
    return 57.15;
  }
  if (charOne == "R" && charTwo == "W") {
    return 38.1;
  }
  if (charOne == "R" && charTwo == "E") {
    return 19.05;
  }
  if (charOne == "R" && charTwo == "T") {
    return 19.05;
  }
  if (charOne == "R" && charTwo == "Y") {
    return 38.1;
  }
  if (charOne == "R" && charTwo == "U") {
    return 57.15;
  }
  if (charOne == "R" && charTwo == "I") {
    return 76.2;
  }
  if (charOne == "R" && charTwo == "O") {
    return 95.25;
  }
  if (charOne == "R" && charTwo == "P") {
    return 114.3;
  }
  if (charOne == "R" && charTwo == "A") {
    return 55.74;
  }
  if (charOne == "R" && charTwo == "S") {
    return 38.4;
  }
  if (charOne == "R" && charTwo == "D") {
    return 23.81;
  }
  if (charOne == "R" && charTwo == "F") {
    return 19.64;
  }
  if (charOne == "R" && charTwo == "G") {
    return 30.49;
  }
  if (charOne == "R" && charTwo == "H") {
    return 46.91;
  }
  if (charOne == "R" && charTwo == "J") {
    return 64.78;
  }
  if (charOne == "R" && charTwo == "K") {
    return 83.17;
  }
  if (charOne == "R" && charTwo == "L") {
    return 101.81;
  }
  if (charOne == "R" && charTwo == "Z") {
    return 57.35;
  }
  if (charOne == "R" && charTwo == "X") {
    return 44.93;
  }
  if (charOne == "R" && charTwo == "C") {
    return 38.4;
  }
  if (charOne == "R" && charTwo == "V") {
    return 40.69;
  }
  if (charOne == "R" && charTwo == "B") {
    return 50.63;
  }
  if (charOne == "R" && charTwo == "N") {
    return 64.78;
  }
  if (charOne == "R" && charTwo == "M") {
    return 80.96;
  }
  if (charOne == "T" && charTwo == "Q") {
    return 76.2;
  }
  if (charOne == "T" && charTwo == "W") {
    return 57.15;
  }
  if (charOne == "T" && charTwo == "E") {
    return 38.1;
  }
  if (charOne == "T" && charTwo == "R") {
    return 19.05;
  }
  if (charOne == "T" && charTwo == "Y") {
    return 19.05;
  }
  if (charOne == "T" && charTwo == "U") {
    return 38.1;
  }
  if (charOne == "T" && charTwo == "I") {
    return 57.15;
  }
  if (charOne == "T" && charTwo == "O") {
    return 76.2;
  }
  if (charOne == "T" && charTwo == "P") {
    return 95.25;
  }
  if (charOne == "T" && charTwo == "A") {
    return 73.93;
  }
  if (charOne == "T" && charTwo == "S") {
    return 55.74;
  }
  if (charOne == "T" && charTwo == "D") {
    return 38.4;
  }
  if (charOne == "T" && charTwo == "F") {
    return 23.81;
  }
  if (charOne == "T" && charTwo == "G") {
    return 19.64;
  }
  if (charOne == "T" && charTwo == "H") {
    return 30.49;
  }
  if (charOne == "T" && charTwo == "J") {
    return 46.91;
  }
  if (charOne == "T" && charTwo == "K") {
    return 64.78;
  }
  if (charOne == "T" && charTwo == "L") {
    return 83.17;
  }
  if (charOne == "T" && charTwo == "Z") {
    return 72.7;
  }
  if (charOne == "T" && charTwo == "X") {
    return 57.35;
  }
  if (charOne == "T" && charTwo == "C") {
    return 44.93;
  }
  if (charOne == "T" && charTwo == "V") {
    return 38.4;
  }
  if (charOne == "T" && charTwo == "B") {
    return 40.69;
  }
  if (charOne == "T" && charTwo == "N") {
    return 50.63;
  }
  if (charOne == "T" && charTwo == "M") {
    return 64.78;
  }
  if (charOne == "Y" && charTwo == "Q") {
    return 95.25;
  }
  if (charOne == "Y" && charTwo == "W") {
    return 76.2;
  }
  if (charOne == "Y" && charTwo == "E") {
    return 57.15;
  }
  if (charOne == "Y" && charTwo == "R") {
    return 38.1;
  }
  if (charOne == "Y" && charTwo == "T") {
    return 19.05;
  }
  if (charOne == "Y" && charTwo == "U") {
    return 19.05;
  }
  if (charOne == "Y" && charTwo == "I") {
    return 38.1;
  }
  if (charOne == "Y" && charTwo == "O") {
    return 57.15;
  }
  if (charOne == "Y" && charTwo == "P") {
    return 76.2;
  }
  if (charOne == "Y" && charTwo == "A") {
    return 92.47;
  }
  if (charOne == "Y" && charTwo == "S") {
    return 73.93;
  }
  if (charOne == "Y" && charTwo == "D") {
    return 55.74;
  }
  if (charOne == "Y" && charTwo == "F") {
    return 38.4;
  }
  if (charOne == "Y" && charTwo == "G") {
    return 23.81;
  }
  if (charOne == "Y" && charTwo == "H") {
    return 19.64;
  }
  if (charOne == "Y" && charTwo == "J") {
    return 30.49;
  }
  if (charOne == "Y" && charTwo == "K") {
    return 46.91;
  }
  if (charOne == "Y" && charTwo == "L") {
    return 64.78;
  }
  if (charOne == "Y" && charTwo == "Z") {
    return 89.48;
  }
  if (charOne == "Y" && charTwo == "X") {
    return 72.7;
  }
  if (charOne == "Y" && charTwo == "C") {
    return 57.35;
  }
  if (charOne == "Y" && charTwo == "V") {
    return 44.93;
  }
  if (charOne == "Y" && charTwo == "B") {
    return 38.4;
  }
  if (charOne == "Y" && charTwo == "N") {
    return 40.69;
  }
  if (charOne == "Y" && charTwo == "M") {
    return 50.63;
  }
  if (charOne == "U" && charTwo == "Q") {
    return 114.3;
  }
  if (charOne == "U" && charTwo == "W") {
    return 95.25;
  }
  if (charOne == "U" && charTwo == "E") {
    return 76.2;
  }
  if (charOne == "U" && charTwo == "R") {
    return 57.15;
  }
  if (charOne == "U" && charTwo == "T") {
    return 38.1;
  }
  if (charOne == "U" && charTwo == "Y") {
    return 19.05;
  }
  if (charOne == "U" && charTwo == "I") {
    return 19.05;
  }
  if (charOne == "U" && charTwo == "O") {
    return 38.1;
  }
  if (charOne == "U" && charTwo == "P") {
    return 57.15;
  }
  if (charOne == "U" && charTwo == "A") {
    return 111.18;
  }
  if (charOne == "U" && charTwo == "S") {
    return 92.47;
  }
  if (charOne == "U" && charTwo == "D") {
    return 73.93;
  }
  if (charOne == "U" && charTwo == "F") {
    return 55.74;
  }
  if (charOne == "U" && charTwo == "G") {
    return 38.4;
  }
  if (charOne == "U" && charTwo == "H") {
    return 23.81;
  }
  if (charOne == "U" && charTwo == "J") {
    return 19.64;
  }
  if (charOne == "U" && charTwo == "K") {
    return 30.49;
  }
  if (charOne == "U" && charTwo == "L") {
    return 46.91;
  }
  if (charOne == "U" && charTwo == "Z") {
    return 107.02;
  }
  if (charOne == "U" && charTwo == "X") {
    return 89.48;
  }
  if (charOne == "U" && charTwo == "C") {
    return 72.7;
  }
  if (charOne == "U" && charTwo == "V") {
    return 57.35;
  }
  if (charOne == "U" && charTwo == "B") {
    return 44.93;
  }
  if (charOne == "U" && charTwo == "N") {
    return 38.4;
  }
  if (charOne == "U" && charTwo == "M") {
    return 40.69;
  }
  if (charOne == "I" && charTwo == "Q") {
    return 133.35;
  }
  if (charOne == "I" && charTwo == "W") {
    return 114.3;
  }
  if (charOne == "I" && charTwo == "E") {
    return 95.25;
  }
  if (charOne == "I" && charTwo == "R") {
    return 76.2;
  }
  if (charOne == "I" && charTwo == "T") {
    return 57.15;
  }
  if (charOne == "I" && charTwo == "Y") {
    return 38.1;
  }
  if (charOne == "I" && charTwo == "U") {
    return 19.05;
  }
  if (charOne == "I" && charTwo == "O") {
    return 19.05;
  }
  if (charOne == "I" && charTwo == "P") {
    return 38.1;
  }
  if (charOne == "I" && charTwo == "A") {
    return 129.99;
  }
  if (charOne == "I" && charTwo == "S") {
    return 111.18;
  }
  if (charOne == "I" && charTwo == "D") {
    return 92.47;
  }
  if (charOne == "I" && charTwo == "F") {
    return 73.93;
  }
  if (charOne == "I" && charTwo == "G") {
    return 55.74;
  }
  if (charOne == "I" && charTwo == "H") {
    return 38.4;
  }
  if (charOne == "I" && charTwo == "J") {
    return 23.81;
  }
  if (charOne == "I" && charTwo == "K") {
    return 19.64;
  }
  if (charOne == "I" && charTwo == "L") {
    return 30.49;
  }
  if (charOne == "I" && charTwo == "Z") {
    return 125.01;
  }
  if (charOne == "I" && charTwo == "X") {
    return 107.02;
  }
  if (charOne == "I" && charTwo == "C") {
    return 89.48;
  }
  if (charOne == "I" && charTwo == "V") {
    return 72.7;
  }
  if (charOne == "I" && charTwo == "B") {
    return 57.35;
  }
  if (charOne == "I" && charTwo == "N") {
    return 44.93;
  }
  if (charOne == "I" && charTwo == "M") {
    return 38.4;
  }
  if (charOne == "O" && charTwo == "Q") {
    return 152.4;
  }
  if (charOne == "O" && charTwo == "W") {
    return 133.35;
  }
  if (charOne == "O" && charTwo == "E") {
    return 114.3;
  }
  if (charOne == "O" && charTwo == "R") {
    return 95.25;
  }
  if (charOne == "O" && charTwo == "T") {
    return 76.2;
  }
  if (charOne == "O" && charTwo == "Y") {
    return 57.15;
  }
  if (charOne == "O" && charTwo == "U") {
    return 38.1;
  }
  if (charOne == "O" && charTwo == "I") {
    return 19.05;
  }
  if (charOne == "O" && charTwo == "P") {
    return 19.05;
  }
  if (charOne == "O" && charTwo == "A") {
    return 148.86;
  }
  if (charOne == "O" && charTwo == "S") {
    return 129.99;
  }
  if (charOne == "O" && charTwo == "D") {
    return 111.18;
  }
  if (charOne == "O" && charTwo == "F") {
    return 92.47;
  }
  if (charOne == "O" && charTwo == "G") {
    return 73.93;
  }
  if (charOne == "O" && charTwo == "H") {
    return 55.74;
  }
  if (charOne == "O" && charTwo == "J") {
    return 38.4;
  }
  if (charOne == "O" && charTwo == "K") {
    return 23.81;
  }
  if (charOne == "O" && charTwo == "L") {
    return 19.64;
  }
  if (charOne == "O" && charTwo == "Z") {
    return 143.27;
  }
  if (charOne == "O" && charTwo == "X") {
    return 125.01;
  }
  if (charOne == "O" && charTwo == "C") {
    return 107.02;
  }
  if (charOne == "O" && charTwo == "V") {
    return 89.48;
  }
  if (charOne == "O" && charTwo == "B") {
    return 72.7;
  }
  if (charOne == "O" && charTwo == "N") {
    return 57.35;
  }
  if (charOne == "O" && charTwo == "M") {
    return 44.93;
  }
  if (charOne == "P" && charTwo == "Q") {
    return 171.45;
  }
  if (charOne == "P" && charTwo == "W") {
    return 152.4;
  }
  if (charOne == "P" && charTwo == "E") {
    return 133.35;
  }
  if (charOne == "P" && charTwo == "R") {
    return 114.3;
  }
  if (charOne == "P" && charTwo == "T") {
    return 95.25;
  }
  if (charOne == "P" && charTwo == "Y") {
    return 76.2;
  }
  if (charOne == "P" && charTwo == "U") {
    return 57.15;
  }
  if (charOne == "P" && charTwo == "I") {
    return 38.1;
  }
  if (charOne == "P" && charTwo == "O") {
    return 19.05;
  }
  if (charOne == "P" && charTwo == "A") {
    return 167.77;
  }
  if (charOne == "P" && charTwo == "S") {
    return 148.86;
  }
  if (charOne == "P" && charTwo == "D") {
    return 129.99;
  }
  if (charOne == "P" && charTwo == "F") {
    return 111.18;
  }
  if (charOne == "P" && charTwo == "G") {
    return 92.47;
  }
  if (charOne == "P" && charTwo == "H") {
    return 73.93;
  }
  if (charOne == "P" && charTwo == "J") {
    return 55.74;
  }
  if (charOne == "P" && charTwo == "K") {
    return 38.4;
  }
  if (charOne == "P" && charTwo == "L") {
    return 23.81;
  }
  if (charOne == "P" && charTwo == "Z") {
    return 161.71;
  }
  if (charOne == "P" && charTwo == "X") {
    return 143.27;
  }
  if (charOne == "P" && charTwo == "C") {
    return 125.01;
  }
  if (charOne == "P" && charTwo == "V") {
    return 107.02;
  }
  if (charOne == "P" && charTwo == "B") {
    return 89.48;
  }
  if (charOne == "P" && charTwo == "N") {
    return 72.7;
  }
  if (charOne == "P" && charTwo == "M") {
    return 57.35;
  }
  if (charOne == "A" && charTwo == "Q") {
    return 19.64;
  }
  if (charOne == "A" && charTwo == "W") {
    return 23.81;
  }
  if (charOne == "A" && charTwo == "E") {
    return 38.4;
  }
  if (charOne == "A" && charTwo == "R") {
    return 55.74;
  }
  if (charOne == "A" && charTwo == "T") {
    return 73.93;
  }
  if (charOne == "A" && charTwo == "Y") {
    return 92.47;
  }
  if (charOne == "A" && charTwo == "U") {
    return 111.18;
  }
  if (charOne == "A" && charTwo == "I") {
    return 129.99;
  }
  if (charOne == "A" && charTwo == "O") {
    return 148.86;
  }
  if (charOne == "A" && charTwo == "P") {
    return 167.77;
  }
  if (charOne == "A" && charTwo == "S") {
    return 19.05;
  }
  if (charOne == "A" && charTwo == "D") {
    return 38.1;
  }
  if (charOne == "A" && charTwo == "F") {
    return 57.15;
  }
  if (charOne == "A" && charTwo == "G") {
    return 76.2;
  }
  if (charOne == "A" && charTwo == "H") {
    return 95.25;
  }
  if (charOne == "A" && charTwo == "J") {
    return 114.3;
  }
  if (charOne == "A" && charTwo == "K") {
    return 133.35;
  }
  if (charOne == "A" && charTwo == "L") {
    return 152.4;
  }
  if (charOne == "A" && charTwo == "Z") {
    return 21.3;
  }
  if (charOne == "A" && charTwo == "X") {
    return 34.34;
  }
  if (charOne == "A" && charTwo == "C") {
    return 51.29;
  }
  if (charOne == "A" && charTwo == "V") {
    return 69.34;
  }
  if (charOne == "A" && charTwo == "B") {
    return 87.82;
  }
  if (charOne == "A" && charTwo == "N") {
    return 106.49;
  }
  if (charOne == "A" && charTwo == "M") {
    return 125.28;
  }
  if (charOne == "S" && charTwo == "Q") {
    return 30.49;
  }
  if (charOne == "S" && charTwo == "W") {
    return 19.64;
  }
  if (charOne == "S" && charTwo == "E") {
    return 23.81;
  }
  if (charOne == "S" && charTwo == "R") {
    return 38.4;
  }
  if (charOne == "S" && charTwo == "T") {
    return 55.74;
  }
  if (charOne == "S" && charTwo == "Y") {
    return 73.93;
  }
  if (charOne == "S" && charTwo == "U") {
    return 92.47;
  }
  if (charOne == "S" && charTwo == "I") {
    return 111.18;
  }
  if (charOne == "S" && charTwo == "O") {
    return 129.99;
  }
  if (charOne == "S" && charTwo == "P") {
    return 148.86;
  }
  if (charOne == "S" && charTwo == "A") {
    return 19.05;
  }
  if (charOne == "S" && charTwo == "D") {
    return 19.05;
  }
  if (charOne == "S" && charTwo == "F") {
    return 38.1;
  }
  if (charOne == "S" && charTwo == "G") {
    return 57.15;
  }
  if (charOne == "S" && charTwo == "H") {
    return 76.2;
  }
  if (charOne == "S" && charTwo == "J") {
    return 95.25;
  }
  if (charOne == "S" && charTwo == "K") {
    return 114.3;
  }
  if (charOne == "S" && charTwo == "L") {
    return 133.35;
  }
  if (charOne == "S" && charTwo == "Z") {
    return 21.3;
  }
  if (charOne == "S" && charTwo == "X") {
    return 21.3;
  }
  if (charOne == "S" && charTwo == "C") {
    return 34.34;
  }
  if (charOne == "S" && charTwo == "V") {
    return 51.29;
  }
  if (charOne == "S" && charTwo == "B") {
    return 69.34;
  }
  if (charOne == "S" && charTwo == "N") {
    return 87.82;
  }
  if (charOne == "S" && charTwo == "M") {
    return 106.49;
  }
  if (charOne == "D" && charTwo == "Q") {
    return 46.91;
  }
  if (charOne == "D" && charTwo == "W") {
    return 30.49;
  }
  if (charOne == "D" && charTwo == "E") {
    return 19.64;
  }
  if (charOne == "D" && charTwo == "R") {
    return 23.81;
  }
  if (charOne == "D" && charTwo == "T") {
    return 38.4;
  }
  if (charOne == "D" && charTwo == "Y") {
    return 55.74;
  }
  if (charOne == "D" && charTwo == "U") {
    return 73.93;
  }
  if (charOne == "D" && charTwo == "I") {
    return 92.47;
  }
  if (charOne == "D" && charTwo == "O") {
    return 111.18;
  }
  if (charOne == "D" && charTwo == "P") {
    return 129.99;
  }
  if (charOne == "D" && charTwo == "A") {
    return 38.1;
  }
  if (charOne == "D" && charTwo == "S") {
    return 19.05;
  }
  if (charOne == "D" && charTwo == "F") {
    return 19.05;
  }
  if (charOne == "D" && charTwo == "G") {
    return 38.1;
  }
  if (charOne == "D" && charTwo == "H") {
    return 57.15;
  }
  if (charOne == "D" && charTwo == "J") {
    return 76.2;
  }
  if (charOne == "D" && charTwo == "K") {
    return 95.25;
  }
  if (charOne == "D" && charTwo == "L") {
    return 114.3;
  }
  if (charOne == "D" && charTwo == "Z") {
    return 34.34;
  }
  if (charOne == "D" && charTwo == "X") {
    return 21.3;
  }
  if (charOne == "D" && charTwo == "C") {
    return 21.3;
  }
  if (charOne == "D" && charTwo == "V") {
    return 34.34;
  }
  if (charOne == "D" && charTwo == "B") {
    return 51.29;
  }
  if (charOne == "D" && charTwo == "N") {
    return 69.34;
  }
  if (charOne == "D" && charTwo == "M") {
    return 87.82;
  }
  if (charOne == "F" && charTwo == "Q") {
    return 64.78;
  }
  if (charOne == "F" && charTwo == "W") {
    return 46.91;
  }
  if (charOne == "F" && charTwo == "E") {
    return 30.49;
  }
  if (charOne == "F" && charTwo == "R") {
    return 19.64;
  }
  if (charOne == "F" && charTwo == "T") {
    return 23.81;
  }
  if (charOne == "F" && charTwo == "Y") {
    return 38.4;
  }
  if (charOne == "F" && charTwo == "U") {
    return 55.74;
  }
  if (charOne == "F" && charTwo == "I") {
    return 73.93;
  }
  if (charOne == "F" && charTwo == "O") {
    return 92.47;
  }
  if (charOne == "F" && charTwo == "P") {
    return 111.18;
  }
  if (charOne == "F" && charTwo == "A") {
    return 57.15;
  }
  if (charOne == "F" && charTwo == "S") {
    return 38.1;
  }
  if (charOne == "F" && charTwo == "D") {
    return 19.05;
  }
  if (charOne == "F" && charTwo == "G") {
    return 19.05;
  }
  if (charOne == "F" && charTwo == "H") {
    return 38.1;
  }
  if (charOne == "F" && charTwo == "J") {
    return 57.15;
  }
  if (charOne == "F" && charTwo == "K") {
    return 76.2;
  }
  if (charOne == "F" && charTwo == "L") {
    return 95.25;
  }
  if (charOne == "F" && charTwo == "Z") {
    return 51.29;
  }
  if (charOne == "F" && charTwo == "X") {
    return 34.34;
  }
  if (charOne == "F" && charTwo == "C") {
    return 21.3;
  }
  if (charOne == "F" && charTwo == "V") {
    return 21.3;
  }
  if (charOne == "F" && charTwo == "B") {
    return 34.34;
  }
  if (charOne == "F" && charTwo == "N") {
    return 51.29;
  }
  if (charOne == "F" && charTwo == "M") {
    return 69.34;
  }
  if (charOne == "G" && charTwo == "Q") {
    return 83.17;
  }
  if (charOne == "G" && charTwo == "W") {
    return 64.78;
  }
  if (charOne == "G" && charTwo == "E") {
    return 46.91;
  }
  if (charOne == "G" && charTwo == "R") {
    return 30.49;
  }
  if (charOne == "G" && charTwo == "T") {
    return 19.64;
  }
  if (charOne == "G" && charTwo == "Y") {
    return 23.81;
  }
  if (charOne == "G" && charTwo == "U") {
    return 38.4;
  }
  if (charOne == "G" && charTwo == "I") {
    return 55.74;
  }
  if (charOne == "G" && charTwo == "O") {
    return 73.93;
  }
  if (charOne == "G" && charTwo == "P") {
    return 92.47;
  }
  if (charOne == "G" && charTwo == "A") {
    return 76.2;
  }
  if (charOne == "G" && charTwo == "S") {
    return 57.15;
  }
  if (charOne == "G" && charTwo == "D") {
    return 38.1;
  }
  if (charOne == "G" && charTwo == "F") {
    return 19.05;
  }
  if (charOne == "G" && charTwo == "H") {
    return 19.05;
  }
  if (charOne == "G" && charTwo == "J") {
    return 38.1;
  }
  if (charOne == "G" && charTwo == "K") {
    return 57.15;
  }
  if (charOne == "G" && charTwo == "L") {
    return 76.2;
  }
  if (charOne == "G" && charTwo == "Z") {
    return 69.34;
  }
  if (charOne == "G" && charTwo == "X") {
    return 51.29;
  }
  if (charOne == "G" && charTwo == "C") {
    return 34.34;
  }
  if (charOne == "G" && charTwo == "V") {
    return 21.3;
  }
  if (charOne == "G" && charTwo == "B") {
    return 21.3;
  }
  if (charOne == "G" && charTwo == "N") {
    return 34.34;
  }
  if (charOne == "G" && charTwo == "M") {
    return 51.29;
  }
  if (charOne == "H" && charTwo == "Q") {
    return 101.81;
  }
  if (charOne == "H" && charTwo == "W") {
    return 83.17;
  }
  if (charOne == "H" && charTwo == "E") {
    return 64.78;
  }
  if (charOne == "H" && charTwo == "R") {
    return 46.91;
  }
  if (charOne == "H" && charTwo == "T") {
    return 30.49;
  }
  if (charOne == "H" && charTwo == "Y") {
    return 19.64;
  }
  if (charOne == "H" && charTwo == "U") {
    return 23.81;
  }
  if (charOne == "H" && charTwo == "I") {
    return 38.4;
  }
  if (charOne == "H" && charTwo == "O") {
    return 55.74;
  }
  if (charOne == "H" && charTwo == "P") {
    return 73.93;
  }
  if (charOne == "H" && charTwo == "A") {
    return 95.25;
  }
  if (charOne == "H" && charTwo == "S") {
    return 76.2;
  }
  if (charOne == "H" && charTwo == "D") {
    return 57.15;
  }
  if (charOne == "H" && charTwo == "F") {
    return 38.1;
  }
  if (charOne == "H" && charTwo == "G") {
    return 19.05;
  }
  if (charOne == "H" && charTwo == "J") {
    return 19.05;
  }
  if (charOne == "H" && charTwo == "K") {
    return 38.1;
  }
  if (charOne == "H" && charTwo == "L") {
    return 57.15;
  }
  if (charOne == "H" && charTwo == "Z") {
    return 87.82;
  }
  if (charOne == "H" && charTwo == "X") {
    return 69.34;
  }
  if (charOne == "H" && charTwo == "C") {
    return 51.29;
  }
  if (charOne == "H" && charTwo == "V") {
    return 34.34;
  }
  if (charOne == "H" && charTwo == "B") {
    return 21.3;
  }
  if (charOne == "H" && charTwo == "N") {
    return 21.3;
  }
  if (charOne == "H" && charTwo == "M") {
    return 34.34;
  }
  if (charOne == "J" && charTwo == "Q") {
    return 120.58;
  }
  if (charOne == "J" && charTwo == "W") {
    return 101.81;
  }
  if (charOne == "J" && charTwo == "E") {
    return 83.17;
  }
  if (charOne == "J" && charTwo == "R") {
    return 64.78;
  }
  if (charOne == "J" && charTwo == "T") {
    return 46.91;
  }
  if (charOne == "J" && charTwo == "Y") {
    return 30.49;
  }
  if (charOne == "J" && charTwo == "U") {
    return 19.64;
  }
  if (charOne == "J" && charTwo == "I") {
    return 23.81;
  }
  if (charOne == "J" && charTwo == "O") {
    return 38.4;
  }
  if (charOne == "J" && charTwo == "P") {
    return 55.74;
  }
  if (charOne == "J" && charTwo == "A") {
    return 114.3;
  }
  if (charOne == "J" && charTwo == "S") {
    return 95.25;
  }
  if (charOne == "J" && charTwo == "D") {
    return 76.2;
  }
  if (charOne == "J" && charTwo == "F") {
    return 57.15;
  }
  if (charOne == "J" && charTwo == "G") {
    return 38.1;
  }
  if (charOne == "J" && charTwo == "H") {
    return 19.05;
  }
  if (charOne == "J" && charTwo == "K") {
    return 19.05;
  }
  if (charOne == "J" && charTwo == "L") {
    return 38.1;
  }
  if (charOne == "J" && charTwo == "Z") {
    return 106.49;
  }
  if (charOne == "J" && charTwo == "X") {
    return 87.82;
  }
  if (charOne == "J" && charTwo == "C") {
    return 69.34;
  }
  if (charOne == "J" && charTwo == "V") {
    return 51.29;
  }
  if (charOne == "J" && charTwo == "B") {
    return 34.34;
  }
  if (charOne == "J" && charTwo == "N") {
    return 21.3;
  }
  if (charOne == "J" && charTwo == "M") {
    return 21.3;
  }
  if (charOne == "K" && charTwo == "Q") {
    return 139.42;
  }
  if (charOne == "K" && charTwo == "W") {
    return 120.58;
  }
  if (charOne == "K" && charTwo == "E") {
    return 101.81;
  }
  if (charOne == "K" && charTwo == "R") {
    return 83.17;
  }
  if (charOne == "K" && charTwo == "T") {
    return 64.78;
  }
  if (charOne == "K" && charTwo == "Y") {
    return 46.91;
  }
  if (charOne == "K" && charTwo == "U") {
    return 30.49;
  }
  if (charOne == "K" && charTwo == "I") {
    return 19.64;
  }
  if (charOne == "K" && charTwo == "O") {
    return 23.81;
  }
  if (charOne == "K" && charTwo == "P") {
    return 38.4;
  }
  if (charOne == "K" && charTwo == "A") {
    return 133.35;
  }
  if (charOne == "K" && charTwo == "S") {
    return 114.3;
  }
  if (charOne == "K" && charTwo == "D") {
    return 95.25;
  }
  if (charOne == "K" && charTwo == "F") {
    return 76.2;
  }
  if (charOne == "K" && charTwo == "G") {
    return 57.15;
  }
  if (charOne == "K" && charTwo == "H") {
    return 38.1;
  }
  if (charOne == "K" && charTwo == "J") {
    return 19.05;
  }
  if (charOne == "K" && charTwo == "L") {
    return 19.05;
  }
  if (charOne == "K" && charTwo == "Z") {
    return 125.28;
  }
  if (charOne == "K" && charTwo == "X") {
    return 106.49;
  }
  if (charOne == "K" && charTwo == "C") {
    return 87.82;
  }
  if (charOne == "K" && charTwo == "V") {
    return 69.34;
  }
  if (charOne == "K" && charTwo == "B") {
    return 51.29;
  }
  if (charOne == "K" && charTwo == "N") {
    return 34.34;
  }
  if (charOne == "K" && charTwo == "M") {
    return 21.3;
  }
  if (charOne == "L" && charTwo == "Q") {
    return 158.31;
  }
  if (charOne == "L" && charTwo == "W") {
    return 139.42;
  }
  if (charOne == "L" && charTwo == "E") {
    return 120.58;
  }
  if (charOne == "L" && charTwo == "R") {
    return 101.81;
  }
  if (charOne == "L" && charTwo == "T") {
    return 83.17;
  }
  if (charOne == "L" && charTwo == "Y") {
    return 64.78;
  }
  if (charOne == "L" && charTwo == "U") {
    return 46.91;
  }
  if (charOne == "L" && charTwo == "I") {
    return 30.49;
  }
  if (charOne == "L" && charTwo == "O") {
    return 19.64;
  }
  if (charOne == "L" && charTwo == "P") {
    return 23.81;
  }
  if (charOne == "L" && charTwo == "A") {
    return 152.4;
  }
  if (charOne == "L" && charTwo == "S") {
    return 133.35;
  }
  if (charOne == "L" && charTwo == "D") {
    return 114.3;
  }
  if (charOne == "L" && charTwo == "F") {
    return 95.25;
  }
  if (charOne == "L" && charTwo == "G") {
    return 76.2;
  }
  if (charOne == "L" && charTwo == "H") {
    return 57.15;
  }
  if (charOne == "L" && charTwo == "J") {
    return 38.1;
  }
  if (charOne == "L" && charTwo == "K") {
    return 19.05;
  }
  if (charOne == "L" && charTwo == "Z") {
    return 144.14;
  }
  if (charOne == "L" && charTwo == "X") {
    return 125.28;
  }
  if (charOne == "L" && charTwo == "C") {
    return 106.49;
  }
  if (charOne == "L" && charTwo == "V") {
    return 87.82;
  }
  if (charOne == "L" && charTwo == "B") {
    return 69.34;
  }
  if (charOne == "L" && charTwo == "N") {
    return 51.29;
  }
  if (charOne == "L" && charTwo == "M") {
    return 34.34;
  }
  if (charOne == "Z" && charTwo == "Q") {
    return 40.69;
  }
  if (charOne == "Z" && charTwo == "W") {
    return 38.4;
  }
  if (charOne == "Z" && charTwo == "E") {
    return 44.93;
  }
  if (charOne == "Z" && charTwo == "R") {
    return 57.35;
  }
  if (charOne == "Z" && charTwo == "T") {
    return 72.7;
  }
  if (charOne == "Z" && charTwo == "Y") {
    return 89.48;
  }
  if (charOne == "Z" && charTwo == "U") {
    return 107.02;
  }
  if (charOne == "Z" && charTwo == "I") {
    return 125.01;
  }
  if (charOne == "Z" && charTwo == "O") {
    return 143.27;
  }
  if (charOne == "Z" && charTwo == "P") {
    return 161.71;
  }
  if (charOne == "Z" && charTwo == "A") {
    return 21.3;
  }
  if (charOne == "Z" && charTwo == "S") {
    return 21.3;
  }
  if (charOne == "Z" && charTwo == "D") {
    return 34.34;
  }
  if (charOne == "Z" && charTwo == "F") {
    return 51.29;
  }
  if (charOne == "Z" && charTwo == "G") {
    return 69.34;
  }
  if (charOne == "Z" && charTwo == "H") {
    return 87.82;
  }
  if (charOne == "Z" && charTwo == "J") {
    return 106.49;
  }
  if (charOne == "Z" && charTwo == "K") {
    return 125.28;
  }
  if (charOne == "Z" && charTwo == "L") {
    return 144.14;
  }
  if (charOne == "Z" && charTwo == "X") {
    return 19.05;
  }
  if (charOne == "Z" && charTwo == "C") {
    return 38.1;
  }
  if (charOne == "Z" && charTwo == "V") {
    return 57.15;
  }
  if (charOne == "Z" && charTwo == "B") {
    return 76.2;
  }
  if (charOne == "Z" && charTwo == "N") {
    return 95.25;
  }
  if (charOne == "Z" && charTwo == "M") {
    return 114.3;
  }
  if (charOne == "X" && charTwo == "Q") {
    return 50.63;
  }
  if (charOne == "X" && charTwo == "W") {
    return 40.69;
  }
  if (charOne == "X" && charTwo == "E") {
    return 38.4;
  }
  if (charOne == "X" && charTwo == "R") {
    return 44.93;
  }
  if (charOne == "X" && charTwo == "T") {
    return 57.35;
  }
  if (charOne == "X" && charTwo == "Y") {
    return 72.7;
  }
  if (charOne == "X" && charTwo == "U") {
    return 89.48;
  }
  if (charOne == "X" && charTwo == "I") {
    return 107.02;
  }
  if (charOne == "X" && charTwo == "O") {
    return 125.01;
  }
  if (charOne == "X" && charTwo == "P") {
    return 143.27;
  }
  if (charOne == "X" && charTwo == "A") {
    return 34.34;
  }
  if (charOne == "X" && charTwo == "S") {
    return 21.3;
  }
  if (charOne == "X" && charTwo == "D") {
    return 21.3;
  }
  if (charOne == "X" && charTwo == "F") {
    return 34.34;
  }
  if (charOne == "X" && charTwo == "G") {
    return 51.29;
  }
  if (charOne == "X" && charTwo == "H") {
    return 69.34;
  }
  if (charOne == "X" && charTwo == "J") {
    return 87.82;
  }
  if (charOne == "X" && charTwo == "K") {
    return 106.49;
  }
  if (charOne == "X" && charTwo == "L") {
    return 125.28;
  }
  if (charOne == "X" && charTwo == "Z") {
    return 19.05;
  }
  if (charOne == "X" && charTwo == "C") {
    return 19.05;
  }
  if (charOne == "X" && charTwo == "V") {
    return 38.1;
  }
  if (charOne == "X" && charTwo == "B") {
    return 57.15;
  }
  if (charOne == "X" && charTwo == "N") {
    return 76.2;
  }
  if (charOne == "X" && charTwo == "M") {
    return 95.25;
  }
  if (charOne == "C" && charTwo == "Q") {
    return 64.78;
  }
  if (charOne == "C" && charTwo == "W") {
    return 50.63;
  }
  if (charOne == "C" && charTwo == "E") {
    return 40.69;
  }
  if (charOne == "C" && charTwo == "R") {
    return 38.4;
  }
  if (charOne == "C" && charTwo == "T") {
    return 44.93;
  }
  if (charOne == "C" && charTwo == "Y") {
    return 57.35;
  }
  if (charOne == "C" && charTwo == "U") {
    return 72.7;
  }
  if (charOne == "C" && charTwo == "I") {
    return 89.48;
  }
  if (charOne == "C" && charTwo == "O") {
    return 107.02;
  }
  if (charOne == "C" && charTwo == "P") {
    return 125.01;
  }
  if (charOne == "C" && charTwo == "A") {
    return 51.29;
  }
  if (charOne == "C" && charTwo == "S") {
    return 34.34;
  }
  if (charOne == "C" && charTwo == "D") {
    return 21.3;
  }
  if (charOne == "C" && charTwo == "F") {
    return 21.3;
  }
  if (charOne == "C" && charTwo == "G") {
    return 34.34;
  }
  if (charOne == "C" && charTwo == "H") {
    return 51.29;
  }
  if (charOne == "C" && charTwo == "J") {
    return 69.34;
  }
  if (charOne == "C" && charTwo == "K") {
    return 87.82;
  }
  if (charOne == "C" && charTwo == "L") {
    return 106.49;
  }
  if (charOne == "C" && charTwo == "Z") {
    return 38.1;
  }
  if (charOne == "C" && charTwo == "X") {
    return 19.05;
  }
  if (charOne == "C" && charTwo == "V") {
    return 19.05;
  }
  if (charOne == "C" && charTwo == "B") {
    return 38.1;
  }
  if (charOne == "C" && charTwo == "N") {
    return 57.15;
  }
  if (charOne == "C" && charTwo == "M") {
    return 76.2;
  }
  if (charOne == "V" && charTwo == "Q") {
    return 80.96;
  }
  if (charOne == "V" && charTwo == "W") {
    return 64.78;
  }
  if (charOne == "V" && charTwo == "E") {
    return 50.63;
  }
  if (charOne == "V" && charTwo == "R") {
    return 40.69;
  }
  if (charOne == "V" && charTwo == "T") {
    return 38.4;
  }
  if (charOne == "V" && charTwo == "Y") {
    return 44.93;
  }
  if (charOne == "V" && charTwo == "U") {
    return 57.35;
  }
  if (charOne == "V" && charTwo == "I") {
    return 72.7;
  }
  if (charOne == "V" && charTwo == "O") {
    return 89.48;
  }
  if (charOne == "V" && charTwo == "P") {
    return 107.02;
  }
  if (charOne == "V" && charTwo == "A") {
    return 69.34;
  }
  if (charOne == "V" && charTwo == "S") {
    return 51.29;
  }
  if (charOne == "V" && charTwo == "D") {
    return 34.34;
  }
  if (charOne == "V" && charTwo == "F") {
    return 21.3;
  }
  if (charOne == "V" && charTwo == "G") {
    return 21.3;
  }
  if (charOne == "V" && charTwo == "H") {
    return 34.34;
  }
  if (charOne == "V" && charTwo == "J") {
    return 51.29;
  }
  if (charOne == "V" && charTwo == "K") {
    return 69.34;
  }
  if (charOne == "V" && charTwo == "L") {
    return 87.82;
  }
  if (charOne == "V" && charTwo == "Z") {
    return 57.15;
  }
  if (charOne == "V" && charTwo == "X") {
    return 38.1;
  }
  if (charOne == "V" && charTwo == "C") {
    return 19.05;
  }
  if (charOne == "V" && charTwo == "B") {
    return 19.05;
  }
  if (charOne == "V" && charTwo == "N") {
    return 38.1;
  }
  if (charOne == "V" && charTwo == "M") {
    return 57.15;
  }
  if (charOne == "B" && charTwo == "Q") {
    return 98.18;
  }
  if (charOne == "B" && charTwo == "W") {
    return 80.96;
  }
  if (charOne == "B" && charTwo == "E") {
    return 64.78;
  }
  if (charOne == "B" && charTwo == "R") {
    return 50.63;
  }
  if (charOne == "B" && charTwo == "T") {
    return 40.69;
  }
  if (charOne == "B" && charTwo == "Y") {
    return 38.4;
  }
  if (charOne == "B" && charTwo == "U") {
    return 44.93;
  }
  if (charOne == "B" && charTwo == "I") {
    return 57.35;
  }
  if (charOne == "B" && charTwo == "O") {
    return 72.7;
  }
  if (charOne == "B" && charTwo == "P") {
    return 89.48;
  }
  if (charOne == "B" && charTwo == "A") {
    return 87.82;
  }
  if (charOne == "B" && charTwo == "S") {
    return 69.34;
  }
  if (charOne == "B" && charTwo == "D") {
    return 51.29;
  }
  if (charOne == "B" && charTwo == "F") {
    return 34.34;
  }
  if (charOne == "B" && charTwo == "G") {
    return 21.3;
  }
  if (charOne == "B" && charTwo == "H") {
    return 21.3;
  }
  if (charOne == "B" && charTwo == "J") {
    return 34.34;
  }
  if (charOne == "B" && charTwo == "K") {
    return 51.29;
  }
  if (charOne == "B" && charTwo == "L") {
    return 69.34;
  }
  if (charOne == "B" && charTwo == "Z") {
    return 76.2;
  }
  if (charOne == "B" && charTwo == "X") {
    return 57.15;
  }
  if (charOne == "B" && charTwo == "C") {
    return 38.1;
  }
  if (charOne == "B" && charTwo == "V") {
    return 19.05;
  }
  if (charOne == "B" && charTwo == "N") {
    return 19.05;
  }
  if (charOne == "B" && charTwo == "M") {
    return 38.1;
  }
  if (charOne == "N" && charTwo == "Q") {
    return 115.97;
  }
  if (charOne == "N" && charTwo == "W") {
    return 98.18;
  }
  if (charOne == "N" && charTwo == "E") {
    return 80.96;
  }
  if (charOne == "N" && charTwo == "R") {
    return 64.78;
  }
  if (charOne == "N" && charTwo == "T") {
    return 50.63;
  }
  if (charOne == "N" && charTwo == "Y") {
    return 40.69;
  }
  if (charOne == "N" && charTwo == "U") {
    return 38.4;
  }
  if (charOne == "N" && charTwo == "I") {
    return 44.93;
  }
  if (charOne == "N" && charTwo == "O") {
    return 57.35;
  }
  if (charOne == "N" && charTwo == "P") {
    return 72.7;
  }
  if (charOne == "N" && charTwo == "A") {
    return 106.49;
  }
  if (charOne == "N" && charTwo == "S") {
    return 87.82;
  }
  if (charOne == "N" && charTwo == "D") {
    return 69.34;
  }
  if (charOne == "N" && charTwo == "F") {
    return 51.29;
  }
  if (charOne == "N" && charTwo == "G") {
    return 34.34;
  }
  if (charOne == "N" && charTwo == "H") {
    return 21.3;
  }
  if (charOne == "N" && charTwo == "J") {
    return 21.3;
  }
  if (charOne == "N" && charTwo == "K") {
    return 34.34;
  }
  if (charOne == "N" && charTwo == "L") {
    return 51.29;
  }
  if (charOne == "N" && charTwo == "Z") {
    return 95.25;
  }
  if (charOne == "N" && charTwo == "X") {
    return 76.2;
  }
  if (charOne == "N" && charTwo == "C") {
    return 57.15;
  }
  if (charOne == "N" && charTwo == "V") {
    return 38.1;
  }
  if (charOne == "N" && charTwo == "B") {
    return 19.05;
  }
  if (charOne == "N" && charTwo == "M") {
    return 19.05;
  }
  if (charOne == "M" && charTwo == "Q") {
    return 134.11;
  }
  if (charOne == "M" && charTwo == "W") {
    return 115.97;
  }
  if (charOne == "M" && charTwo == "E") {
    return 98.18;
  }
  if (charOne == "M" && charTwo == "R") {
    return 80.96;
  }
  if (charOne == "M" && charTwo == "T") {
    return 64.78;
  }
  if (charOne == "M" && charTwo == "Y") {
    return 50.63;
  }
  if (charOne == "M" && charTwo == "U") {
    return 40.69;
  }
  if (charOne == "M" && charTwo == "I") {
    return 38.4;
  }
  if (charOne == "M" && charTwo == "O") {
    return 44.93;
  }
  if (charOne == "M" && charTwo == "P") {
    return 57.35;
  }
  if (charOne == "M" && charTwo == "A") {
    return 125.28;
  }
  if (charOne == "M" && charTwo == "S") {
    return 106.49;
  }
  if (charOne == "M" && charTwo == "D") {
    return 87.82;
  }
  if (charOne == "M" && charTwo == "F") {
    return 69.34;
  }
  if (charOne == "M" && charTwo == "G") {
    return 51.29;
  }
  if (charOne == "M" && charTwo == "H") {
    return 34.34;
  }
  if (charOne == "M" && charTwo == "J") {
    return 21.3;
  }
  if (charOne == "M" && charTwo == "K") {
    return 21.3;
  }
  if (charOne == "M" && charTwo == "L") {
    return 34.34;
  }
  if (charOne == "M" && charTwo == "Z") {
    return 114.3;
  }
  if (charOne == "M" && charTwo == "X") {
    return 95.25;
  }
  if (charOne == "M" && charTwo == "C") {
    return 76.2;
  }
  if (charOne == "M" && charTwo == "V") {
    return 57.15;
  }
  if (charOne == "M" && charTwo == "B") {
    return 38.1;
  }
  if (charOne == "M" && charTwo == "N") {
    return 19.05;
  }
  return 0.0;if(is || isNaN(charTwo)){
    return 0.0;
}
}
