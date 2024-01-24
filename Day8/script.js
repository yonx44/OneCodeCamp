/*
console.log("First")
console.log("Second")
console.log("Third")

//Asynchronous
console.log("First")

setTimeout(() => {
    console.log("Third");
}, 2000);

console.log("Second");

//callbacks for asynchronous operations
const getDAta = (callback) => {
    setTimeout(() => {
        const data = "This is a data.";
}, 2000);
};

const processData = (data) => {
    console.log("Processed data:", data);
};

getData(processData);


//callback hell 
const step1 = (callback) => {
    setTimeout(() => {
        console.log("Step 1 comple.");
        callback();
    }, 1000);
};

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Step 2 complete.");
        callback();
    }, 1000);
};

const step3 = (callback) => {
    setTimeout(() => {
        console.log("Step 3 complete.");
        callback();
    }, 1000);
};

//nested callback
step1(() => {
    step2(() => {
        step3(() =>{
            console.log("All steps complete.");
        });
    });
});

//promises
const step4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};

const step5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};

const step6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve();
        }, 1000);
    });
};

//chaining promises
step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All steps complete");
    })
    .catch((error) => {
        console.log("An error occured:");
    });


    //async await
    const step1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Step 1 complete");
                resolve();
            }, 1000);
        });
    };

    const step2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Step 2 complete");
                resolve();
            }, 1000);
        });
    };

    const step3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Step 3 complete");
                resolve();
            }, 1000);
        });
    };

    const performSteps = async () => {
        try {
            await step1();
            await step2();
            await step3();
            console.log()
        } catch (error) {
            console.log("An error occured: ", error);
        };
    };

    performSteps();
    */

    
    //Traditional Callback
    function EmitRandomNumber(attempt, maxAttempts, callback) {
        if (attempt > maxAttempts) {
            console.log("Maximum attempts reached.");
            return;
        }
    
        setTimeout(() => {
            const random = Math.floor(Math.random() * 100) + 1;

            console.log("2 seconds have passed. Generated number is ", random);
    
            if (random <= 80) {
                EmitRandomNumber(attempt + 1, maxAttempts, callback);
            } else {

                console.log("2 seconds have passed. Generated number is ", random);

                callback();
            }
        }, 2000);
    }
    
    const maxAttempts = 10;
    
    EmitRandomNumber(1, maxAttempts, () => {
        console.log("Done");
    });
    
    
    //Promises
    function EmitRandomNumber(attempt) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.floor(Math.random() * 100) + 1;

                console.log("2 seconds have passed. Generated number is ", random);
    
                if (random <= 80 && attempt < 10) {
                    EmitRandomNumber(attempt + 1).then(resolve);
                } else {
                    if (random > 80) {
                        console.log("2 seconds have passed. Generated number is ", random);
                    }
                    resolve();
                }
            }, 2000);
        });
    }
    
    function runProgram() {
        EmitRandomNumber(1).then(() => {
            console.log("Done");
        });
    }
    
    runProgram();
    

    //Async wait
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function EmitRandomNumber(attempt) {
        await delay(2000);
    
        const random = Math.floor(Math.random() * 100) + 1;
        console.log("2 seconds have passed. Generated number is ", random);
    
        if (random <= 80 && attempt < 10) {
            await EmitRandomNumber(attempt + 1);
        } else {
            if (random > 80) {
                console.log("2 seconds have passed. Generated number is ", random);
            }
        }
    }
    
    async function runProgram() {
        await EmitRandomNumber(1);
        console.log("Done");
    }
    
    runProgram();
    