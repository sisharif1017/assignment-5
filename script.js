function scrollsection(){
    const target = document.getElementById('target')
    target.scrollIntoView({
        behavior:'smooth'
    })
}

let seatLeft=40;
let seatBook=0;
let totalprice=0;
let grandprice=0;
let discountprice=0;
const allBtn = document.getElementsByClassName('A')
console.log(allBtn);
    for(const btn of allBtn){
        console.log(btn)
        btn.addEventListener('click', function(){
           
          
            seatLeft--;
            seatBook++;
            if(seatBook >= 5){
                alert("You don't buy no more ticket ")
              return;
            }  
           
            btn.style.backgroundColor = '#1DD100';
            SetInnerText('remaning-seat',seatLeft);
            SetInnerText('count-tricket',seatBook);
            btn.setAttribute('disabled',true);
            // append child taable
            const ticektsection = document.getElementById('price')
            const p = document.createElement('p');
            p.innerText =btn.innerText;
            const p1 = document.createElement('p');
            p1.innerText="Economy";
            const p2 = document.createElement('p');
           
            p2.innerText=550;
            ticektsection.appendChild(p);
            ticektsection.appendChild(p1);
            ticektsection.appendChild(p2);

            

            totalprice += 550;
            SetInnerText('total-price',totalprice);
            grandprice=totalprice;
            SetInnerText('grand-total',grandprice); 
          

            
        })
    }