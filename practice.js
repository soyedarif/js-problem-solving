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
//Basic-4 (while 7-19 odd numbers)
let i=7;
while(i<=19){
    // console.log(i);
    i+=2;
};
//Basic-5  একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
const friends=['Rahim','Karim',"Himel","Sajal","Nahid","Nabil","Ridoy",'Rokib',"Jack","Bill"]
for (let friend of friends){
    // console.log(friend)
}
//Basic-6  একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
const numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
let large=numbers[0];
for (let number of numbers){
    if(number>80){
        // console.log(number)
    }
}
//Basic-7
function feetToInch(value){
    return value*12;
}
// console.log(feetToInch(2))
//Basic-8
function centimeterToMeter(value){
    return value*0.01;
}
// console.log(centimeterToMeter(100))
//Basic-9
function paperRequirements(book1,book2,book3){
    const firstBookPage=100;
    const secondBookPage=200;
    const thirdBookPage=300;
    const totalFirstBookPages=book1* firstBookPage;
    const totalSecondBookPages=book2 * secondBookPage;
    const totalThirdBookPages=book3 * thirdBookPage;
    const totalPageRequirements=totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;
    return totalPageRequirements;
}
// console.log(paperRequirements(2,2,2))
const friendsName=['sajid','mamun','kamal','jubayer bin rased', 'chinku'];
function bestFriend(names){
    let largest=names[0];
    for (let name of names){
        if(name.length>largest.length){
            largest=name.length;
        }
    }
    return largest;
}
// console.log(bestFriend(friendsName))

const myNumbers=[45,87,96,11,63,-56,71,28];
function oddNumbers(numbers){
    let positiveNums=[];
    for(let number of numbers){
        if(number>=0){
            positiveNums.push(number)
        }else{
            break
        }
    }
    return positiveNums;
}
console.log(oddNumbers(myNumbers))
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
// console.log(publicBusFair(185))
// publicBusFair(365)
