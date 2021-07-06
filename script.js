const programmers = [
    "Dennis Ritchie",
    "Brian Kernighan",
    "Ken Thompson",
    "Linus Torvalds",
    "Bjarne Stroustrup",
    "Tim Berners-Lee",
    "Donald Knuth",
    "Alan Turing",
    "Mark Zuckerberg",
    "Bill Gates",
    "Larry Page",
    "Elon Musk",
    "Jack Dorsey",
    "Satoshi Nakamoto",
    "Ada Lovelace",
    "Grace Hopper",
    "Dan Ambramov",
    "Jordan Walke",
    "Ryan Dahl",
    "David Heinemeier Hansson",
    "Guido van Rossum",
    "Yukihiro Matsumoto",
    "Sergey Brin",
    "Lyndsey Scott",
    "Abhinav Asthana", 
    "Abhijit Kane", 
    "Ankit Sobti",
    "Loi Tran",
    "Charles Lee",
    "Tuan Nguyen",
    "Tan Vo",
  ];


//3.1 First name
function threePointOne(){
    function firstName(element){
     return element.split(' ')[0]
    }
    const threePointOne=programmers.map(firstName)
document.getElementById("3.1").innerHTML =  threePointOne.join(" ");

}
threePointOne()



//3.2 Last name
function threePointTwo(){
    function lastName(element){
        return element.split(' ')[1]
    }
    const threePointTwo = programmers.map(lastName);
    document.getElementById("3.2").innerHTML =  threePointTwo.join(" ");  
}

threePointTwo()

// 3.3 Sum char of first name
function threePointThree(){
    function sumofFirstName (element){
        return element.split(' ')[0].length
    }
    const threePointThree = programmers.map(sumofFirstName);
    document.getElementById("3.3").innerHTML =  threePointThree.join(" ");
}
threePointThree()




//3.4 Sum char of last name
function threePointFour(){
    function sumofLastname (element){
        return element.split(' ')[1].length
    }
    const threePointFour=programmers.map(sumofLastname);
    document.getElementById("3.4").innerHTML =  threePointFour.join(" ");
}
threePointFour()




//3.5 Sum char length of all the programmers.
function threePointFive(){
    function sumofAll(element){
        return element.length
    }
    const threePointFive = programmers.map(sumofAll);
    document.getElementById("3.5").innerHTML =  threePointFive.join(" ");
}
threePointFive()





//3.6 alphabetical order of the first name of the programmers, A-Z.
function threePointSix(){
    const threePointSix = programmers.sort()
    document.getElementById("3.6").innerHTML =  threePointSix.join(" ");
}
threePointSix()


//3.7 alphabetical order of the last name of the programmers, A-Z.
function threePointSeven (){
    function lastname (element){
        return element.split(' ')[element.split(' ').length-1]
    }
    const last = programmers.map(lastname);
    const threePointSeven= last.sort((a,b) => (a>b ? 1: -1));
    document.getElementById("3.7").innerHTML =  threePointSeven.join(" ");
}
threePointSeven()


// 3.8
// function threePointEight(){
//     function firstname (element){
//         return { element[0]: element.split(' ')[0].length}
//     }
//     const lenghtoffirst = programmers.map(firstname);
//     console.log(lenghtoffirst);
//     const threePointEight= lenghtoffirst.sort((a,b) => (a>b ? 1: -1));
//     // document.getElementById("3.8").innerHTML =  threePointEight.join(" ");
// }
// threePointEight()



//3.10
function threePointTen(){
    function firstname(element){
        return element.split(' ')[0]
    }
    const firstName = programmers.map(firstname)
    const threePointTen = firstName.filter((element)=> element[0]=='L')
    document.getElementById("3.10").innerHTML =  threePointTen.join(" ");
}
threePointTen()



//3.11
function threePointEleven(){
    function lastname(element){
        return element.split(' ')[element.split(' ').length-1]
    }
    const newLastname = programmers.map(lastname)
    const threePointEleven = newLastname.filter((element)=> element[0]=='T')
    document.getElementById("3.11").innerHTML =  threePointEleven.join(" ");
}
threePointEleven()


//3.12
function threePointTwelve(){
    function firstname(element){
        return element.split(' ')[0]
    }
    const firstName312=programmers.map(firstname)
    const threePointTwelve=firstName312.filter((element)=>element.length<4)
    document.getElementById("3.12").innerHTML =  threePointTwelve.join(" ");
}
threePointTwelve()



//3.13
function threePointThirteen(){
    function firstname(element){
        return element.split(' ')[0]
    }
    const firstName313=programmers.map(firstname)
    const threePointThirteen=firstName313.filter((element)=>element.length>4)
    document.getElementById("3.13").innerHTML =  threePointThirteen.join(" ");
}
threePointThirteen()




//3.14
function threePointFourteen(){
    const threePointFourteen=programmers.filter((element)=>element.length>8)
    document.getElementById("3.14").innerHTML =  threePointFourteen.join(" ");
}
threePointFourteen()


//3.15
function threePointFifteen(){
    const threePointFifteen=programmers.filter((element)=>element.length<8)
    document.getElementById("3.15").innerHTML =  threePointFifteen.join(" ");
}
threePointFifteen()



//3.16
function threePointSixteen(){
    function lastname(element){
        return element.split(' ')[element.split(' ').length-1]
    }
    const Lastname316 = programmers.map(lastname)
    const threePointSixteen = Lastname316.filter((element)=> element[0]=='K' && element[element.length-1]=='n')
    document.getElementById("3.16").innerHTML =  threePointSixteen.join(" ");
}
threePointSixteen()




//3.17
function threePointSeventeen(){
    function firstname(element){
        return element.split(' ')[0]
    }
    const firstName317=programmers.map(firstname)
    const threePointSeventeen=firstName317.filter((element)=>element.length==3)
    document.getElementById("3.17").innerHTML =  threePointSeventeen.join(" ");
}
threePointSeventeen()



//3.18
function threePointEightteen(){
    function firstname(element){
        return element.split(' ')[0]
    }
    const firstName318=programmers.map(firstname)
    const threePointEightteen=firstName318.filter((element)=>element[0]=='A')
    document.getElementById("3.18").innerHTML =  threePointEightteen.join(" ");
}
threePointEightteen()



//3.19
// function threePointNineteen(){
//     function firstname(element){
//         return element.split(' ')[0]
//     }
//     function lastname(element){
//         return element.split(' ')[element.split.length-1]
//     }
//     const firstname319=programmers.map(firstname)
//     // console.log(name319)
//     const lastname319= programmers.map(lastname)
//     const threePointNineteen=firstname319.filter((element)=>element[0]==lastname319[0])
//     document.getElementById("3.19").innerHTML =  threePointNineteen.join(" ");
// }
// threePointNineteen()