// We can use any of the 3 following approaches to define the structure of an object.

let employee : {
    id: number ,
    name: string
}
employee = {
    id: 201,
    name: "Gayathri"
}

/**
 * let employee: { id: number, name: string } = {
    id: 201,
    name: "Gayathri"
};
 */



interface Employ  {
    id: number ,
    name: string
}

type Characteristics = {
    name: string,
    height: number,
    bloodgroup: string,
    state: string,
    pincode: string,
    married: boolean
}





const getEmployeeDetails : (employee: Employ) =>  string = function(employee:Employ): string {
    return `${employee.name}'s employee id is: ${employee.id}`

};


const getCharacteristics : (name: string) => Characteristics = function(name) : Characteristics {
    return {
        name: name,
        height: 5.12,
        bloodgroup: "O-ve",
        state: "AP",
        pincode: "533250",
        married: false
    }   
}


const employeeData = getEmployeeDetails(employee);

const characteristics = getCharacteristics("Basha");


console.log("characteristics are", characteristics, getCharacteristics(employee.name));

