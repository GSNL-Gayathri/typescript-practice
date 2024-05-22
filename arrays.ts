const naturalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const consonants: string[] = [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k'];

const vowels: string[] = [ 'a', 'e', 'i', 'o', 'u'];

type traits = {
    name: string,
    height: number,
    bloodgroup: string,
    state: string,
    pincode: string,
    married: boolean
}

const qualities: traits[] = [
    {
    name: "Gayathri",
    height: 5,
    bloodgroup: "O-Ve",
    state: "Andhra",
    pincode: "533250",
    married: false
},
{
    name: "Vasundhara",
    height: 5.3,
    bloodgroup: "O+Ve",
    state: "Andhra",
    pincode: "533250",
    married: false
},
{
    name: "Gopi",
    height: 5.11,
    bloodgroup: "O+Ve",
    state: "Andhra",
    pincode: "533250",
    married: false
}
];

console.log(qualities[0].name, qualities[1].name, qualities[2].name, "are", qualities.length,  "siblings");
console.log(naturalNumbers, consonants, vowels);
