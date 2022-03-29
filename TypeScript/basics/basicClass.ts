class basic {
    constructor(a?: number) {
        if(a)console.log(a)
    }
     method(a:number):void {
        console.log(a, "passed");
    }
}

let obj = new basic;
obj.method(2)
