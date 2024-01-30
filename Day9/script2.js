
// class Item {

//     constructor(name, price, stock) {
//         this.name = name;
//         this.price = price;
//         this.stock = stock;
//         this.sold = 0;
//     }

//     logDetails() {
//         console.log(`Item: ${this.name}, Price: ${this.price}, Stock: ${this.stock}`);
//     }

//     buy() {
//         if (this.stock > 0) {
//             console.log("Buying");
//             this.sold++;
//             this.stock--;
//         }
//         else {
//             console.log("The product is out of stock.");
//         }
//     }

//     returnItem() {
//         if (this.sold > 0) {
//             console.log("Returning");
//             this.sold--;
//             this.stock++;
//         }
//         else {
//             console.log("Cannot return. No items sold.");
//         }
//     }
// }

// const item1 = new Item("Ariel", 110, 5);
// const item2 = new Item("Surf", 70, 0);
// const item3 = new Item("Tide", 90, 7);

// //First item - Ariel
// item1.buy();
// item1.buy();
// item1.buy();
// item1.returnItem();
// item1.logDetails();

// //Second item - Surf
// item2.buy();
// item2.returnItem();
// item2.logDetails();

// //Third item - Tide
// item3.returnItem();
// item3.returnItem();
// item3.returnItem();
// item3.logDetails();



class House {

    constructor(location, price, lot, type,) {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.discount = (type === "Pre-selling") ? 0.2 : 0.05;
        this.show_all();
    }

    show_all() {

        const discountPercentage = this.discount * 100;
        const discountedPrice = this.price - (this.price * this.discount);

        console.log(`
        Location ${this.location} 
        Price: ${this.price}
        Lot: ${this.lot} 
        Type: ${this.type} 
        Price: ${this.price} 
        Discount: ${discountPercentage}
        Total Price: ${discountedPrice}\n`);
    }

}

const house1 = new House("Cebu", "1000000", "200sqm", "Pre-selling");

const house2 = new House("Metro Manila", "1000000", "150sqm", "Ready for Occupancy");



// class EmailBuilder {
    
//     constructor() {
//         this.email = {
//             recipient: '',
//             subject: '',
//             body: '',
//             attachment: []
//         };
//     }

//     setRecipient(recipient) {
//         this.email.recipient = recipient;
//         return this;
//     }

//     setSubject(subject) {
//         this.email.subject = subject;
//         return this;
//     }

//     setBody(body) {
//         this.email.body = body;
//         return this;
//     }

//     setAttachment(attachment) {
//         this.email.attachment = attachment;
//         return this;
//     }


//     send () {
        
//         console.log("Sending email:");
//         console.log(`Recipient: ${this.email.recipient}`);
//         console.log(`Subject: ${this.email.subject}`);
//         console.log(`Body: ${this.email.body}`);
//         console.log(`Attachment: ${JSON.stringify(this.email.attachment)}`);
//     }

// }

// const emailBuilder = new EmailBuilder();
// emailBuilder

// .setRecipient('johndoe@gmail.com')
// .setSubject('Meeting Tomorrow')
// .setBody('Attached in this email is the agenda for the meeting tomorrow.')
// .setAttachment(['meeting_agenda.pdf'])
// .send();