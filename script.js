let searchBox = document.querySelector(".search");
let product = document.querySelectorAll(".product");
let h2 = document.querySelectorAll("h2");
let p = document.querySelector("p");

searchBox.addEventListener("keyup",(event)=>{
    let count=0;
    let uv = searchBox.value.toUpperCase();
    for (let i = 0; i < h2.length; i++) {
        let dv = h2[i].innerText.toUpperCase();
        if (dv.indexOf(uv)>-1) {
            product[i].style.display="";
        }else{
            product[i].style.display="none";
            count++;
        }

        p.innerText="";
        if (count==h2.length) {            
            p.innerText=`${searchBox.value} Not Found`;
        }
    }
});
