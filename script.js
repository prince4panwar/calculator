var inputElement = document.querySelector("#js-input");
const buttonElement = document.querySelectorAll(".js-button");
 let string = "";
 
 let point = 0;

//  Array.from(buttonElement).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e.target);
//     })
// })
newArray = Array.from(buttonElement);
// console.log(newArray);
newArray.forEach((element) => {
    element.addEventListener("click",(e)=>{
        if(e.target.innerHTML === '=')
        {
            if(string != "")
            {
                string = eval(string);
                point = 0;
            }
            else{}
            
        }
        else if(e.target.innerHTML === 'AC')
        {
            location.reload();
        }
        else if(e.target.innerHTML === 'DEL')
        {
            if(typeof string === typeof "1")
            {
                if(string[string.length - 1] === '.')
                    point = 0;
                string = string.slice(0,-1);
            }
            else 
                string = "";
        }
        else if(e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*' || e.target.innerHTML === '/' || e.target.innerHTML === '+' || e.target.innerHTML === '%')
        {
            if((string[string.length - 1 ] >= '1' && string[string.length - 1 ] <= '9'&& e.target.innerHTML === '+' )||
            (string[string.length - 1 ] >= '1' && string[string.length - 1 ] <= '9' && e.target.innerHTML === '-' ) || 
            (string[string.length - 1 ] >= '1' && string[string.length - 1 ] <= '9' && e.target.innerHTML === '*' ) || 
            (string[string.length - 1 ] >= '1' && string[string.length - 1 ] <= '9' && e.target.innerHTML === '/' )||
            (string[string.length - 1 ] >= '1' && string[string.length - 1 ] <= '9' && e.target.innerHTML === '%'))
            {
                // console.log("hello1");
                // console.log(string[string.length - 1]);
                string = string + e.target.innerHTML;
                // console.log(string);
                // console.log(string[string.length - 1]);
            }
            else
            {
                // console.log("hello2");
                // console.log(string[string.length - 1]);
                // console.log(typeof string);
                if(typeof string === typeof 1)
                    string = string + e.target.innerHTML;
                else 
                {
                    string = string.slice(0,-1);
                    string = string + e.target.innerHTML;
                }
            }

        }
        else if (e.target.innerHTML === '.')
        {
            if(string.length === 0)
                string = "0.";
            else if(string.length != 0 && point!=1)
                string = string + e.target.innerHTML;
            point = 1;
        }
        else 
        {
            string = string + e.target.innerHTML;
        }
        inputElement.value = string;
        
    })
});

/*for(let i=0; i<buttonElement.length; i++)
{
    buttonElement[i].addEventListener("click",()=>{
        console.log(buttonElement[i].innerHTML);
        if(buttonElement[i].innerHTML === "AC")
        {
            location.reload();
        }
        else if(buttonElement[i].innerHTML === "DEL")
        {
            string = string.slice(0, string.length - 1)
            console.log(string);
            inputElement.value = string;
        }
        else if(buttonElement[i].innerHTML === "=")
        {
            
       
            // newArray = Array.from(string)
            // num = 0;
            // newArray.forEach(element => {
            //    if(element>='0'&&element<='9')
            //    {
            //     num = 10*num + Number(element);
            //    }
            // });
            // string1 = eval(string);
            // console.log(string1);

            // inputElement.value = string1;
        }
        else
        {
            inputElement.value = inputElement.value+buttonElement[i].innerHTML;
            string = inputElement.value;
        }
        
    })
}
*/