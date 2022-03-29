// ** By Using Super
class ParentClass { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
 
 class ChildClass extends ParentClass { 
    display():void { 
       super.display() 
       console.log("display method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
 
 var parentObj = new ParentClass();
 parentObj.display();
 var childObj = new ChildClass();
 childObj.display();
 childObj.hello();

 
 
 // ** Without Using Super
 class ParentClass2 { 
    display():void {
       console.log("2 Display method from Parent Class!") 
    } 
 } 
  
 class ChildClass2 extends ParentClass2 { 
    display():void { 
       //super.display() 
       console.log("2 dislay method from Child Class!")
    } 
    hello():void{
        console.log("2 Hello from Child Class!");
    }
 } 
  
 var parentObj = new ParentClass2();
 parentObj.display();
 var childObj = new ChildClass2();
 childObj.display();
 childObj.hello();