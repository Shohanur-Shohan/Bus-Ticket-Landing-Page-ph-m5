 const seatLeft = document.getElementById("seatLeft");
 const seatCount = document.getElementById("seatCount");
 const cartItems = document.getElementById("cartItems");
 const buttons = document.querySelectorAll(".btn");
 console.log(buttons.length);

 
const ticketPrice = 550;
const selected = [];
let availableSeat = Number(seatLeft.innerText);



    for(let i = 0; i < buttons.length; i++){

        const button = buttons[i];
        
        button.addEventListener("click", (event)=>{
            // console.log(event.target.innerText);

            const element = event.target.innerText;
            
            //more than 4 not allowed
            if(selected.length < 4){
                
                selected.push(element);
                console.log(element);
                button.classList.add("bg-green-500", "text-white");

                const available = availableSeat - selected.length;
                seatLeft.innerText = available;               
                seatCount.innerText = selected.length;

                // one div
                const div = document.createElement('div');
                div.classList.add('flex', 'justify-between', 'text-left');

                const h1 = document.createElement('h1');
                h1.classList.add('text-[#03071299]', 'text-[16px]', 'font-inter', 'font-medium');
                h1.id = "cartItem";
                h1.innerText = `${element}`;
                div.appendChild(h1);

                const h2 = document.createElement('h1');
                h2.classList.add('text-[#03071299]', 'text-[16px]', 'font-inter', 'font-medium');
                h2.innerText = "Economy";
                div.appendChild(h2);

                const h3 = document.createElement('h1');
                h3.classList.add('text-[#03071299]', 'text-[16px]', 'font-inter', 'font-medium');
                h3.innerText = "550";
                div.appendChild(h3);

                cartItems.appendChild(div);

            }


        });
    

}




    



