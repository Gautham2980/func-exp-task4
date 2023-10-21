
var a=parseInt(prompt("enter a number"))
document.write("The number is"+a+" ")

let double=function(a){
    if(a<13){
        return 13-a;
    }

    else{
        return (a-13)*2;
    }
}

document.write("Answer="+double(a));


