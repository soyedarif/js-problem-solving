/* Basic
*1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
*৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
*এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।
ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]
আউটপুটঃ 3
*/
//basic 1
function add(n){
    let sum =0;
    for (let i=1; i<=n;i++ ){
        sum+=i;
    }
    return sum;
}
// const myNumber=add(3);
// console.log(myNumber)
// basic 2
function multiplyTable(value){
    let table=[];
    for (let i=1; i<=10;i++){
        table.push(value+'x'+i+'='+value*i)
    }
    return table;
}
// console.log(multiplyTable(3))
//basic3
function largeThanFive(numbers){
    let nums=0;
    for(let i=0; i<numbers.length;i++){
        const number=numbers[i];
        if(number>5){
            nums++
        }
    }
    return nums;
}
// const arr=[-1,2,-3,4,5,6,-7,8,-9,10];
// console.log(largeThanFive(arr))
/* 
তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
*/
function reversedLargeName(name1,name2){
    if(name1>name2){
        const reverse1=name1.split('').reverse().join('');
        return reverse1;
    }else{
        const reverse2=name2.split('').reverse().join('');
        return reverse2;
    };
};
// console.log(reversedLargeName('Arif','Shakil'))
/* 
এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।
*/
function milimeterToLiter(value){
    return parseFloat((value/1000).toFixed(2));
}
// console.log(milimeterToLiter(560099334))
/* 
একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
*/
function youngestPerson(persons){
    let yougest=persons[0];
    for(let person of persons){
        if(person.age<yougest.age){
            yougest=person.age;
        }
    }
    return yougest;
}
/* const myArrOfObj=[
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
]
console.log(youngestPerson(myArrOfObj)); */
function radianToDegree(value){
    return parseFloat((value*180/Math.PI).toFixed(2));
}
// console.log(radianToDegree(25))
function isJavaScriptFile(file){
    if(file.endsWith('js')){
        return true;
    }else{
        return false;
    }
};
// console.log(isJavaScriptFile('image.jpg.png'))
function oilPrice(dieselAmount,petrolAmount,octenAmount){
    const dieselRate=114;
    const pertrolRate=130;
    const octenRate=135;
    
    const totalDieselPrice=dieselAmount * dieselRate;
    const totalPetrolPrice=petrolAmount * pertrolRate;
    const totalOctenPrice=octenAmount * octenRate;
    const totalCost=totalDieselPrice + totalPetrolPrice + totalOctenPrice;
    return totalCost;
}
// console.log(oilPrice(1,0,2))
function publicBusFair(persons){
        let busCapacity=50;
        let microCapacity=11;
        const publicBusFare=250;
        if(typeof persons!=='number'&&persons<50){
            return 'Provide required participants'
        }
        let remaining=0;
        // after calculatiing the amount of people who can travel by our bus
        //the value of remaining people will be
        remaining=persons%busCapacity;

        remaining=remaining%microCapacity;
        //now calculate the total cost of public bus
        let costOfPublicBus=remaining*publicBusFare
        return costOfPublicBus;
}
console.log(publicBusFair(185))
// publicBusFair(365)

