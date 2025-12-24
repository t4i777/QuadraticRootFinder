document.getElementById("mySubmit").onclick = function() {
    const aInput = document.getElementById("aValue").value.trim();
    const bInput = document.getElementById("bValue").value.trim();
    const cInput = document.getElementById("cValue").value.trim();
    const digits = 5;

    if (aInput == "" || bInput == "" || cInput == "") {
        document.getElementById("x1").textContent = "Please enter all fields.";
        document.getElementById("x2").textContent = "";
        return;
    }

    const a = Number(aInput);
    const b = Number(bInput);
    const c = Number(cInput);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("x1").textContent = "Please enter valid numbers!";
        document.getElementById("x2").textContent = "";
        return;
    }

    if (a == 0) {
        document.getElementById("x1").textContent = "Not a quadratic!";
        document.getElementById("x2").textContent = "";
        return;
    }
    
    const discriminant = b**2 - 4*a*c;

    if (discriminant < 0) {
        let realPart = Number(-b / (2*a)).toFixed(digits);
        realPart = parseFloat(realPart);
        let complexPart = Number(Math.sqrt(Math.abs(discriminant)) / (2 * a)).toFixed(digits);
        complexPart = parseFloat(complexPart);
        if (realPart == 0) {
            document.getElementById("x1").innerHTML = `x<sub>1</sub> = -${complexPart}i`;
            document.getElementById("x2").innerHTML = `x<sub>2</sub> = ${complexPart}i`;
            return;
        } else if (complexPart == 1) {
            document.getElementById("x1").innerHTML = `x<sub>1</sub> = ${realPart} - i`;
            document.getElementById("x2").innerHTML = `x<sub>2</sub> = ${realPart} + i`;
            return;
        } else if (realPart == 0 && complexPart == 1) {
            document.getElementById("x1").innerHTML = `x<sub>1</sub> = -i`;
            document.getElementById("x2").innerHTML = `x<sub>2</sub> = i`;
            return;
        }
        document.getElementById("x1").innerHTML = `x<sub>1</sub> = ${realPart} - ${complexPart}i`;
        document.getElementById("x2").innerHTML = `x<sub>2</sub> = ${realPart} + ${complexPart}i`;
        return;
    }

    if (discriminant == 0) {
        let x = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(digits);
        x = parseFloat(x);
        document.getElementById("x1").textContent = `x = ${x}`;
        document.getElementById("x2").textContent = "";
        return;
    }

    let x1 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(digits);
    x1 = parseFloat(x1);

    let x2 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(digits);
    x2 = parseFloat(x2);

    document.getElementById("x1").innerHTML = `x<sub>1</sub> = ${x1}`;
    document.getElementById("x2").innerHTML = `x<sub>2</sub> = ${x2}`;
}