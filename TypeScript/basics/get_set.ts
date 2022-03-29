// tsc -t es5 Getter_Setter.ts
class Person {
    private _age: number;
    
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 && theAge >= 100) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getAge(): number {
        return this._age;
    }
}

var personObj=new Person();
personObj.age=110;
console.log(personObj.getAge());


    