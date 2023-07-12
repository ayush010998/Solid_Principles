//Open-Closed Principles

//"Software Entitites, (classes,objects,functions) are open for extension but closed for modification."

/**There are two primary attributes in the OCP, they are.

Open for extension — we are able to extend what the module does.
Closed for modification — extending the behavior of a module does not result in changes to the source or binary code of the module.
It would seem that these two attributes are at odds with each other because the normal way to extend the behavior of a module is to make changes to the source code of that module. */


let allowedRole=['ceo','cto','cfo','staff']
function checkPriviledge(employee){
    if (allowedRole.includes(employee.role)){
        return true;
        //employee having priviledge
    }
    else{
        return false;

    }
}

function addRoles(role){
    allowedRole.push(role)
}
