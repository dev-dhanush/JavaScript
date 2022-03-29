class Demo {
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string) {
        this.firstName =firstName;
        this.lastName = lastName;
    }

    showPerson = ():void=>{
        console.log("first naem",this.firstName,"last name",this.lastName);
        
    }

}


let oD = new Demo("dh","p");

oD.showPerson()