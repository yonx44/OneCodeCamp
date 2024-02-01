class MobilePhone {

    //constructor
    constructor(brand, color, sim, apps = []) {
        //properties
        this.brand = brand;
        this.color = color;
        this.sim = sim;
        this.apps = apps;
    }

    //methods
    installApp(appName) {
        this.apps.push(appName);
        console.log(`App "${appName}" installed successfully.`);
        return this;
    }

    displayDetails() {
        console.log("Mobile Phone Detail: ");
        console.log(`Brand: ${this.brand}`);
        console.log(`Color: ${this.color}`);
        console.log(`Sim: ${this.sim}`);
        console.log(`Apps:`, this.apps.length > 0 ? this.apps.join(`, `) : "None");
        return
    }
}


const mobile1 = new MobilePhone("Samsung", "Pink", "Globe");
mobile1.installApp("Messenger").displayDetails();

