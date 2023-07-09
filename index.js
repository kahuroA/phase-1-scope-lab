// Write your solution in this file!
var customerName ='bob';
function upperCaseCustomerName(){
    return customerName=customerName.toUpperCase();

}

function setBestCustomer(){
    globalThis.bestCustomer='not bob';

    return bestCustomer;
}


function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer= "Jane";


function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="Fred";

    return leastFavoriteCustomer;
}