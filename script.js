 const seatLeft = document.getElementById("seatLeft");
 const seatCount = document.getElementById("seatCount");
 const cartItems = document.getElementById("cartItems");
 const buttons = document.querySelectorAll(".btn");
 const totalPrice = document.getElementById("totalPrice");
 const grandPrice = document.getElementById("GrandTotal");
 const couponBtn = document.getElementById("couponBtn");
 const discountPrice = document.getElementById("discountPrice");
 const discountGroup = document.getElementById("discountGroup");
 const nextBtn = document.getElementById("nextBtn");
 const fullname = document.getElementById("fullname");
 const numberBtn = document.getElementById("numberBtn");
 const email = document.getElementById("email");
 const pop = document.getElementById("pop");
 const Continue = document.getElementById("Continue");


const ticketPrice = 550;
const selected = [];
let availableSeat = Number(seatLeft.innerText);



    //main
    for(let i = 0; i < buttons.length; i++){

        const button = buttons[i];
        
        button.addEventListener("click", (event)=>{
            // console.log(event.target.innerText);

            const element = event.target.innerText;
            
            //more than 4 not allowed
            if(selected.length < 4){

                if(selected.includes(element)){
                    console.log("double selected");

                }
                else{

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
    
                    /////////

                    // total
                    totalPrice.innerText = 550 * (selected.length);
                    
                    //apply btn validation
                    if(selected.length === 4){
                        couponBtn.disabled = false;
                        let discountValue = 0;


                        couponBtn.addEventListener("click", ()=>{
                            // apply coupon
                            if(couponCode.value === "NEW15"){
                                const discountGiven = parseFloat(Number(totalPrice.innerText) * 0.15);
                                console.log("new15", discountGiven);

                                discountPrice.innerText = discountGiven.toFixed(2);
                                discountValue = discountPrice.innerText;

                                const discountParent = discountPrice.parentElement; 
                                discountParent.parentElement.classList.add("flex");
                                discountParent.parentElement.classList.remove("hidden");

                                // grand total
                                grandPrice.innerText = Number(totalPrice.innerText) - parseFloat(discountValue);

                                // remove coupon input btn
                                couponCode.value = "";
                                discountGroup.classList.add("hidden");

                            }
                            else if(couponCode.value === "Couple 20"){
                                const discountGiven = parseFloat(Number(totalPrice.innerText) * 0.20);
                                console.log("couple20", discountGiven);

                                discountPrice.innerText = discountGiven.toFixed(2);
                                discountValue = discountPrice.innerText;

                                const discountParent = discountPrice.parentElement;
                                discountParent.parentElement.classList.add("flex");
                                discountParent.parentElement.classList.remove("hidden");

                                // grand total
                                grandPrice.innerText = Number(totalPrice.innerText) - parseFloat(discountValue);

                                // remove coupon input btn
                                couponCode.value = "";
                                discountGroup.classList.add("hidden");
                            }
                            else{
                                alert("Invalid Coupon Code");
                                couponCode.value = "";
    
                            }
                        })

                        
                        
                    }
                    else{
                        couponBtn.disabled = true;
                        couponBtn.addEventListener("click", ()=>{
                            console.log("clicked");
                        })
                    }

                   


                  

                }
                
               
            }

        }); 

    }

    // nextBtn
    nextBtn.addEventListener("click", () => {
        console.log(selected.length);
        if (selected.length > 0 && numberBtn.value > 0) {
            //   console.log("enable");
            nextBtn.disabled = false;
            pop.classList.add("flex");
            pop.classList.remove("hidden");

        } else {
            //   console.log("disabled");
            nextBtn.disabled = true;
            
        }
    });

    //continue
    Continue.addEventListener("click", ()=>{
        window.location.reload();
        numberBtn.value = "";
    })


          
          




    



