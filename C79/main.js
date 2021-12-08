Students_name_array=[];

function Submit()

{
var name_1=document.getElementById("Name1").value;
var name_2=document.getElementById("Name2").value;
var name_3=document.getElementById("Name3").value;
var name_4=document.getElementById("Name4").value;




Students_name_array.push(name_1);
Students_name_array.push(name_2);
Students_name_array.push(name_3);
Students_name_array.push(name_4);

console.log(Students_name_array);


document.getElementById("display_names").innerHTML = Students_name_array;

}


function Sort()

{
    Students_name_array.sort();
    console.log(Students_name_array);
    document.getElementById("display_names").innerHTML = Students_name_array;

}
