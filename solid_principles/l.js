// liskov-substitution principles

//let P(y) be a property provable for objects y of type A. then P(x) should be  true for objects x of type B if b is a subtype of A.

class Animal{
    eat(){
        console.log('Animal Eats')

    }
}
 class Bird extends Animal{
    fly(){
        console.log('Birds flyy')
    }
 }
 var parrot=new Bird();
 parrot.eat();
 parrot.fly();

 //this doesnot violates the Liskov substitution principles hence correct

 class Ostritch extends Animal{
    walk(){
        console.log('ostritch walks but cant flyy:)')
    }
 }


 // this is the correct example as if we extends ostritch from bird then would be violating the liskov principles

 