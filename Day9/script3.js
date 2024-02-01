
  
class Prosecutor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
prosecute(defendant, legalCase) {
    if (defendant.age >= legalCase.minAge && defendant.age <= legalCase.maxAge) {
        defendant.verdict = "GUILTY";
        
        const releaseDate = new Date();
        releaseDate.setFullYear(releaseDate.getFullYear() + legalCase.termYears);
        releaseDate.setMonth(releaseDate.getMonth() + legalCase.termMonths);
        releaseDate.setDate(releaseDate.getDate() + legalCase.termDays);
        defendant.releaseDate = releaseDate.toDateString();
        } 
        else {
        defendant.verdict = "NOT GUILTY";
        }
    }
}
  
class Defendant {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.verdict = null;
        this.releaseDate = null;
    }
}
  
class TrialCourt {
    static initiateTrial(defendant, prosecutor) {
        console.log(`
        Name: ${defendant.name}
        Age: ${defendant.age} years old
        Case Title: ${prosecutor.currentCase.title}
        Filed by: ${prosecutor.name}
        Verdict: ${defendant.verdict}
        Release date: ${defendant.releaseDate || "N/A"}`);
    }
}
 
class Case {
    constructor(title, termYears, termMonths, termDays, minAge, maxAge) {
        this.title = title;
        this.termYears = termYears;
        this.termMonths = termMonths;
        this.termDays = termDays;
        this.minAge = minAge;
        this.maxAge = maxAge;
    }
}

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor("John", 30);
let defendant1 = new Defendant("Mary", 5);
prosecutor.currentCase = case1; 
prosecutor.prosecute(defendant1, case1);
TrialCourt.initiateTrial(defendant1, prosecutor);
  

let defendant2 = new Defendant("Jeff", 25);
prosecutor.currentCase = case1; 
prosecutor.prosecute(defendant2, case1);
TrialCourt.initiateTrial(defendant2, prosecutor);