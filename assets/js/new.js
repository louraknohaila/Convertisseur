function convertirLangueur() {
    var valeur = parseFloat(document.getElementById('input1').value);
    var unit1 = parseInt(document.getElementById('unit1').value);
    var unit2 = parseInt(document.getElementById('unit2').value);
    if (unit1 === 1) {
        if (unit2 === 2) {
            valeur *= 1000;  
        } else if (unit2 === 3) {
            valeur *= 10000;  
        } else if (unit2 === 4) {
            valeur *= 100000;  
        } else if (unit2 === 5) {
            valeur *= 1000000;
        }
    }
    else if (unit1 === 2) {
        if (unit2 === 1) {
            valeur /= 1000;  
        } else if (unit2 === 3) {
            valeur *= 10;  
        } else if (unit2 === 4) {
            valeur *= 100;  
        } else if (unit2 === 5) {
            valeur *= 1000; 
        }
    }
    else if (unit1 === 3) {
        if (unit2 === 1) {
            valeur /= 10000;  
        } else if (unit2 === 2) {
            valeur /= 10;  
        } else if (unit2 === 4) {
            valeur *= 10;  
        } else if (unit2 === 5) {
            valeur *= 100;  
        }
    }
    else if (unit1 === 4) {
        if (unit2 === 1) {
            valeur /= 100000; 
        } else if (unit2 === 2) {
            valeur /= 100;  
        } else if (unit2 === 3) {
            valeur /= 10;  
        } else if (unit2 === 5) {
            valeur *= 10;  
        }
    }
    else if (unit1 === 5) {
        if (unit2 === 1) {
            valeur /= 1000000;  
        } else if (unit2 === 2) {
            valeur /= 1000;  
        } else if (unit2 === 3) {
            valeur /= 100;  
        } else if (unit2 === 4) {
            valeur /= 10;  // 
        }
    }

    document.getElementById('input2').value = valeur;
}

function convertirMasse() {
    var valeur = parseFloat(document.getElementById('input11').value);
    var unit1 = parseInt(document.getElementById('unit11').value);
    var unit2 = parseInt(document.getElementById('unit22').value);

    if (unit1 === 1) {
        if (unit2 === 2) {
            valeur *= 1000;
        } else if (unit2 === 3) {
            valeur *= 10000;
        } else if (unit2 === 4) {
            valeur *= 100000;
        } else if (unit2 === 5) {
            valeur *= 1000000;
        }
    } else if (unit1 === 2) {
        if (unit2 === 1) {
            valeur /= 1000;
        } else if (unit2 === 3) {
            valeur *= 10;
        } else if (unit2 === 4) {
            valeur *= 100;
        } else if (unit2 === 5) {
            valeur *= 1000;
        }
    } else if (unit1 === 3) {
        if (unit2 === 1) {
            valeur /= 10000;
        } else if (unit2 === 2) {
            valeur /= 10;
        } else if (unit2 === 4) {
            valeur *= 10;
        } else if (unit2 === 5) {
            valeur *= 100;
        }
    } else if (unit1 === 4) {
        if (unit2 === 1) {
            valeur /= 100000;
        } else if (unit2 === 2) {
            valeur /= 100;
        } else if (unit2 === 3) {
            valeur /= 10;
        } else if (unit2 === 5) {
            valeur *= 10;
        }
    } else if (unit1 === 5) {
        if (unit2 === 1) {
            valeur /= 1000000;
        } else if (unit2 === 2) {
            valeur /= 1000;
        } else if (unit2 === 3) {
            valeur /= 100;
        } else if (unit2 === 4) {
            valeur /= 10;
        }
    }

    document.getElementById('input22').value = valeur;
}


function convertirVolume() {
    var valeur = parseFloat(document.getElementById('inp1').value);
    var unit1 = parseInt(document.getElementById('un1').value);
    var unit2 = parseInt(document.getElementById('un2').value);

    if (unit1 === 1) {
        if (unit2 === 2) {
            valeur *= 1000;
        } else if (unit2 === 3) {
            valeur /= 4.54609; // Conversion de litres à gallons
        } else if (unit2 === 4) {
            valeur /= 1.76; // Conversion de litres à pintes
        } else if (unit2 === 5) {
            valeur *= 1000; // Conversion de litres à centimètres cubes
        }
    } else if (unit1 === 2) {
        if (unit2 === 1) {
            valeur /= 1000;
        } else if (unit2 === 3) {
            valeur /= 4546.09; // Conversion de millilitres à gallons
        } else if (unit2 === 4) {
            valeur /= 1760; // Conversion de millilitres à pintes
        } else if (unit2 === 5) {
            valeur *= 1; // Millilitres à centimètres cubes
        }
    } else if (unit1 === 3) {
        if (unit2 === 1) {
            valeur *= 4.54609; // Conversion de gallons à litres
        } else if (unit2 === 2) {
            valeur *= 4546.09; // Conversion de gallons à millilitres
        } else if (unit2 === 4) {
            valeur *= 8; // Conversion de gallons à pintes
        } else if (unit2 === 5) {
            valeur *= 4546.09; // Conversion de gallons à centimètres cubes
        }
    } else if (unit1 === 4) {
        if (unit2 === 1) {
            valeur *= 1.76; // Conversion de pintes à litres
        } else if (unit2 === 2) {
            valeur *= 1760; // Conversion de pintes à millilitres
        } else if (unit2 === 3) {
            valeur /= 8; // Conversion de pintes à gallons
        } else if (unit2 === 5) {
            valeur *= 568.261; // Conversion de pintes à centimètres cubes
        }
    } else if (unit1 === 5) {
        if (unit2 === 1) {
            valeur /= 1000; // Conversion de centimètres cubes à litres
        } else if (unit2 === 2) {
            valeur /= 1; // Conversion de centimètres cubes à millilitres
        } else if (unit2 === 3) {
            valeur /= 4546.09; // Conversion de centimètres cubes à gallons
        } else if (unit2 === 4) {
            valeur /= 568.261; // Conversion de centimètres cubes à pintes
        }
    }

    document.getElementById('inp2').value = valeur;
}

function convertirTemperature() {
    console.log('valider');
    var valeur = parseFloat(document.getElementById('inp11').value);
    var unit1 = parseInt(document.getElementById('uni11').value);
    var unit2 = parseInt(document.getElementById('uni22').value);

    if (unit1 === 1) {
        if (unit2 === 2) {
            valeur = (valeur * 9/5) + 32; // Celsius à Fahrenheit
        } else if (unit2 === 3) {
            valeur = valeur + 273.15; // Celsius à Kelvin
        }
    } else if (unit1 === 2) {
        if (unit2 === 1) {
            valeur = (valeur - 32) * 5/9; // Fahrenheit à Celsius
        } else if (unit2 === 3) {
            valeur = (valeur - 32) * 5/9 + 273.15; // Fahrenheit à Kelvin
        }
    } else if (unit1 === 3) {
        if (unit2 === 1) {
            valeur = valeur - 273.15; // Kelvin à Celsius
        } else if (unit2 === 2) {
            valeur = (valeur - 273.15) * 9/5 + 32; // Kelvin à Fahrenheit
        }
    }

    document.getElementById('inp22').value = valeur;
}

function convertirVitesse() {
    var valeur = parseFloat(document.getElementById('inputv1').value);
    var unit1 = parseInt(document.getElementById('unitv1').value);
    var unit2 = parseInt(document.getElementById('unitv2').value);

    if (unit1 === 1) {
        if (unit2 === 2) {
            valeur = valeur * (5/18); // km/h à m/s
        } else if (unit2 === 3) {
            valeur = valeur * (0.621371); // km/h à mph
        } else if (unit2 === 4) {
            valeur = valeur * (0.539957); // km/h à kt
        }
    } else if (unit1 === 2) {
        if (unit2 === 1) {
            valeur = valeur * (18/5); // m/s à km/h
        } else if (unit2 === 3) {
            valeur = valeur * (2.23694); // m/s à mph
        } else if (unit2 === 4) {
            valeur = valeur * (1.94384); // m/s à kt
        }
    } else if (unit1 === 3) {
        if (unit2 === 1) {
            valeur = valeur * (1.60934); // mph à km/h
        } else if (unit2 === 2) {
            valeur = valeur * (0.44704); // mph à m/s
        } else if (unit2 === 4) {
            valeur = valeur * (0.868976); // mph à kt
        }
    } else if (unit1 === 4) {
        if (unit2 === 1) {
            valeur = valeur * (1.852); // kt à km/h
        } else if (unit2 === 2) {
            valeur = valeur * (0.514444); // kt à m/s
        } else if (unit2 === 3) {
            valeur = valeur * (1.15078); // kt à mph
        }
    }

    document.getElementById('inputv2').value = valeur;
}

async function convertirDevise() {
    var valeur = parseFloat(document.getElementById('inputd1').value);
    var unit1 = parseInt(document.getElementById('unitd1').value);
    var unit2 = parseInt(document.getElementById('unitd2').value);

    try {
        // Utilisez une API de taux de change en temps réel pour obtenir les taux actuels
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const tauxUSD = 1.0;
        const tauxEUR = data.rates.EUR;
        const tauxGBP = data.rates.GBP;
        const tauxCAD = data.rates.CAD;
        const tauxDHS = data.rates.AED;

        var resultat;

        if (unit1 === 1 && unit2 === 2) {
            resultat = valeur * tauxUSD / tauxEUR;
        } else if (unit1 === 1 && unit2 === 3) {
            resultat = valeur * tauxUSD / tauxGBP;
        } else if (unit1 === 1 && unit2 === 4) {
            resultat = valeur * tauxUSD / tauxCAD;
        } else if (unit1 === 1 && unit2 === 5) {
            resultat = valeur * tauxUSD / tauxDHS;
        } else if (unit1 === 2 && unit2 === 1) {
            resultat = valeur * tauxEUR / tauxUSD;
        } else if (unit1 === 2 && unit2 === 3) {
            resultat = valeur * tauxEUR / tauxGBP;
        } else if (unit1 === 2 && unit2 === 4) {
            resultat = valeur * tauxEUR / tauxCAD;
        } else if (unit1 === 2 && unit2 === 5) {
            resultat = valeur * tauxEUR / tauxDHS;
        } else if (unit1 === 3 && unit2 === 1) {
            resultat = valeur * tauxGBP / tauxUSD;
        } else if (unit1 === 3 && unit2 === 2) {
            resultat = valeur * tauxGBP / tauxEUR;
        } else if (unit1 === 3 && unit2 === 4) {
            resultat = valeur * tauxGBP / tauxCAD;
        } else if (unit1 === 3 && unit2 === 5) {
            resultat = valeur * tauxGBP / tauxDHS;
        } else if (unit1 === 4 && unit2 === 1) {
            resultat = valeur * tauxCAD / tauxUSD;
        } else if (unit1 === 4 && unit2 === 2) {
            resultat = valeur * tauxCAD / tauxEUR;
        } else if (unit1 === 4 && unit2 === 3) {
            resultat = valeur * tauxCAD / tauxGBP;
        } else if (unit1 === 4 && unit2 === 5) {
            resultat = valeur * tauxCAD / tauxDHS;
        } else if (unit1 === 5 && unit2 === 1) {
            resultat = valeur * tauxDHS / tauxUSD;
        } else if (unit1 === 5 && unit2 === 2) {
            resultat = valeur * tauxDHS / tauxEUR;
        } else if (unit1 === 5 && unit2 === 3) {
            resultat = valeur * tauxDHS / tauxGBP;
        } else if (unit1 === 5 && unit2 === 4) {
            resultat = valeur * tauxDHS / tauxCAD;
        } else {
            // Conversion impossible ou unités identiques, le résultat est égal à la valeur d'entrée
            resultat = valeur;
        }

        document.getElementById('inputd2').value = resultat.toFixed(2);
    } catch (error) {
        console.error('Erreur lors de la récupération des taux de change', error);
    }
}

        
        function afficherModal() {
            document.getElementById('modal').style.display = 'flex';
        }
    
        function fermerModal() {
            document.getElementById('modal').style.display = 'none';
        }
        function afficherModal1() {
            document.getElementById('modal1').style.display = 'flex';
        }
    
        function fermerModal1() {
            document.getElementById('modal1').style.display = 'none';
        }
        function afficherModal2() {
            document.getElementById('modal2').style.display = 'flex';
        }
    
        function fermerModal2() {
            document.getElementById('modal2').style.display = 'none';
        }
        function afficherModal3() {
            document.getElementById('modal3').style.display = 'flex';
        }
    
        function fermerModal3() {
            document.getElementById('modal3').style.display = 'none';
        }
        function afficherModal4() {
            document.getElementById('modal4').style.display = 'flex';
        }
    
        function fermerModal4() {
            document.getElementById('modal4').style.display = 'none';
        }
        function afficherModal5() {
            document.getElementById('modal5').style.display = 'flex';
        }
    
        function fermerModal5() {
            document.getElementById('modal5').style.display = 'none';
        }
        
