const usaSelector = document.querySelector(".usaTax")
const spainSelector = document.querySelector(".spainTax")
const denmarkSelector = document.querySelector(".denmarkTax")
const allH1Tag = document.querySelectorAll("h1")
const allH2Tag = document.querySelectorAll("h2")
const allImgTag = document.querySelectorAll("img")
const headerEnd = document.querySelector("#headerEnd")

usaSelector.addEventListener("click", () => {
    console.log("Works just fine!")
})

spainSelector.addEventListener("click", () => {
    console.log("Works just fine!")
})

let incomeAfterTax = 0;
function denmarkTacCalculator(salary) {
    //Calculates LMC
    let taxOfIncome = 0;
    if (salary <= 6014) {
        taxOfIncome = salary*0.92;
    } else {
        taxOfIncome = salary*0.92-6014;
    }
    //Calculates tax rate of
    if (taxOfIncome <= 53341 && taxOfIncome > 6014) {
        incomeAfterTax = taxOfIncome*0.62+6360;
    } else if (taxOfIncome > 53341){
        let regularTax = 53341*0.62;
        incomeAfterTax = (taxOfIncome-53341)*0.47+6360+regularTax;
    }

    else if (taxOfIncome < 0){
        incomeAfterTax = taxOfIncome*(-1);
    } else {
        incomeAfterTax = taxOfIncome;
    }
}

denmarkSelector.addEventListener("click", () => {
    //Removes all elements bellow header
    if (denmarkSelector) {
        allH1Tag.forEach(h1 => {
            if (headerEnd.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_FOLLOWING) {
                h1.remove();
            }
        });
        allH2Tag.forEach(h2 => {
            if (headerEnd.compareDocumentPosition(h2) & Node.DOCUMENT_POSITION_FOLLOWING) {
                h2.remove();
            }
        });
        allImgTag.forEach(img => {
            if (headerEnd.compareDocumentPosition(img) & Node.DOCUMENT_POSITION_FOLLOWING) {
                img.remove();
            }
        });
    }
    //Adds all new elements
    let newH1 = document.createElement("h1");
    newH1.textContent = "DENMARK TAX CALXULATOR:";
    document.getElementById("selectCountry").appendChild(newH1);

    let newP1 = document.createElement("p");
    newP1.textContent = "In Denmark the tax rate is quite simple. If you earn bellow 640.100DKK a year you pay 8% in Labor Market Contributions(LMC) and a total sum of 38% tax after LMC. If you earn above 640.100DKK you pay 53% tax after LMC. Also the first 6.360DKK you earn after LMC is tax free.";
    document.getElementById("selectCountry").appendChild(newP1);

    let newInput = document.createElement("input");
    newInput.type = "number";
    newInput.placeholder = "eg. 10.000DKK"
    document.getElementById("selectCountry").appendChild(newInput);

    denmarkTacCalculator(5000)
    console.log(`Salary after taxes: ${incomeAfterTax}`)
    console.log("Works just fine!")
})