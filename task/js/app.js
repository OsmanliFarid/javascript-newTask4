const a = document.getElementById("call-boxs-box")
const b = document.getElementById("call-item-icon")
let c =  ""
let d = ""
let mesaj = ""
function parent (){
    
    a.innerHTML = ""
    {
        mesaj = `<div class="form-boxs-boxs" id="parent0">
                            <div class="call-boxs" >
                                <div class="icon"><i class="fa-solid fa-x" id="icon-form-title"></i></div>
                                <div class="call-box">
                                    <h1 class="call-header-title">Elaqe formasi</h1>
                                    <form method="get">
                                        <input type="text" placeholder="adinizi daxil edin" class="input-title">
                                        <input type="text" placeholder="soyadini daxil et" class="input-title2">
                                        <input type="text" placeholder="telefon nomresini daxil et" class="input-title3">
                                    </form>
                                </div>
                            </div> 
                        </div>`
        a.innerHTML += mesaj
                        
    }
     c = document.getElementById("icon-form-title")
     d = document.getElementById("parent0")
     function parent2(){
        
        d.remove()

        
    }
    c.onclick = parent2


}



b.onclick = parent


const dropdown_box_id = document.querySelector("#dropdown-box-id")
        const dropdown_toggle_id = document.querySelector("#dropdown-toogle-id")
        const dropdown_arr_box = ["Bloq", "Xəbərlər", "Qalereya", "Layihələr"]
        const dropdown_menu_id = document.querySelector("#dropdown-menu-id")

        let dropdown_active = dropdown_arr_box[0]
        dropdown_toggle_id.innerHTML = `<a href="#" class="dropdown-toggle">${dropdown_active}</a>`

        dropdown_toggle_id.onclick = () => {
            dropdown_menu_id.classList.toggle("show-dropdown")
        }

        const menuList = dropdown_menu_id.querySelectorAll("li")
        
        menuList.forEach(list => {
            list.onclick = () => {
                dropdown_active = list.innerText;
                dropdown_toggle_id.innerHTML = `<a href="#" class="dropdown-toggle">${dropdown_active}</a>`
                dropdown_menu_id.classList.remove("show-dropdown")
            }
        })

const calculater_boxs_btn = document.querySelector("#calculater-boxs-btn")
const acmaq_btn = document.querySelector("#acmaq-btn")

acmaq_btn.onclick = () =>{
    if(acmaq_btn.innerHTML === "acmaq"){
        calculater_boxs_btn.innerHTML += ` <div class="calculater-boxs">
        <div class="value-start" >
            <div class="value-start-btn" id="value-start1"></div>
        </div>
        <div class="value-box">
        <button class="calculater-btn" id="calculater-btn1">1</button>
        <button class="calculater-btn" id="calculater-btn2">2</button>
        <button class="calculater-btn" id="calculater-btn3">3</button>
        <button class="calculater-btn" id="calculater-btn4">4</button>
        <button class="calculater-btn" id="calculater-btn5">5</button>
        <button class="calculater-btn" id="calculater-btn6">6</button>
        <button class="calculater-btn" id="calculater-btn7">7</button>
        <button class="calculater-btn" id="calculater-btn8">8</button>
        <button class="calculater-btn" id="calculater-btn9">9</button>
        <button class="calculater-btn" id="calculater-btn0">0</button>
        <button class="calculater-btn" id="calculater-btn10">.</button>
        <button class="calculater-btn" id="reset-btn">C</button>
        <button class="calculater-btn topla-btn" id="topla-btn">+</button>
        <button class="calculater-btn cixma-btn" id="cixma-btn">-</button>
        <button class="calculater-btn" id="vurma-btn">x</button>
        <button class="calculater-btn" id="bolme-btn"><i class="fa-solid fa-divide"></i></button>
        <button class="calculater-btn beraber-btn" id="beraber-btn">=</button>
        </div>
    </div>`
    acmaq_btn.innerText = "qapat"
    }else if(acmaq_btn.innerText === "qapat"){
        calculater_boxs_btn.innerText = ""
        acmaq_btn.innerText = "acmaq"
    }
    
    
                    const value_start1 = document.querySelector("#value-start1")
const calculater_btn1 = document.querySelector("#calculater-btn1")
const calculater_btn2 = document.querySelector("#calculater-btn2")
const calculater_btn3 = document.querySelector("#calculater-btn3")
const calculater_btn4 = document.querySelector("#calculater-btn4")
const calculater_btn5 = document.querySelector("#calculater-btn5")
const calculater_btn6 = document.querySelector("#calculater-btn6")
const calculater_btn7 = document.querySelector("#calculater-btn7")
const calculater_btn8 = document.querySelector("#calculater-btn8")
const calculater_btn9 = document.querySelector("#calculater-btn9")
const calculater_btn10 = document.querySelector("#calculater-btn0")
const calculater_btn100 = document.querySelector("#calculater-btn10")
const topla_btn = document.querySelector("#topla-btn")
const bolme_btn = document.querySelector("#bolme-btn")
const vurma_btn = document.querySelector("#vurma-btn")
const cixma_btn = document.querySelector("#cixma-btn")
const beraber_btn = document.querySelector("#beraber-btn")
const reset_btn = document.querySelector("#reset-btn")


    calculater_btn1.onclick = () =>{
        value_start1.innerText += calculater_btn1.innerText
        
        
    }
    calculater_btn2.onclick = () =>{
        value_start1.innerText += calculater_btn2.innerText
        
    }
    calculater_btn3.onclick = () =>{
        value_start1.innerText += calculater_btn3.innerText
        
    }
    calculater_btn4.onclick = () =>{
        value_start1.innerText += calculater_btn4.innerText
        
    }
    calculater_btn5.onclick = () =>{
        value_start1.innerText += calculater_btn5.innerText
        
    }
    calculater_btn6.onclick = () =>{
        value_start1.innerText += calculater_btn6.innerText
        
    }
    calculater_btn7.onclick = () =>{
        value_start1.innerText += calculater_btn7.innerText
        
    }
    calculater_btn8.onclick = () =>{
        value_start1.innerText += calculater_btn8.innerText
        
    }
    calculater_btn9.onclick = () =>{
        value_start1.innerText += calculater_btn9.innerText
        
    }
    calculater_btn10.onclick = () =>{
        value_start1.innerText += calculater_btn10.innerText
        
    }
    calculater_btn100.onclick = () =>{
        value_start1.innerText += calculater_btn100.innerText
        
    }
    topla_btn.onclick = () =>{
        value_start1.innerText += topla_btn.innerText
        
    }
    cixma_btn.onclick = () =>{
        value_start1.innerText += cixma_btn.innerText
        
    }
    bolme_btn.onclick = () =>{
        value_start1.innerText += bolme_btn.innerText
        
    }
    vurma_btn.onclick = () =>{
        value_start1.innerText += vurma_btn.innerText
        
    }
    reset_btn.onclick = () =>{
        value_start1.innerText = ""
    }

    beraber_btn.onclick = () =>{
       value_start1.innerText +=  beraber_btn.innerText
       let mesaj3 = value_start1.innerText
       let num1 = null;
       let num2 = null;
       let value = null;
       let operator = null;
       if(mesaj3.includes("=")){
        let newMesaj = mesaj3.split("")
        newMesaj.splice(-1,1)
        mesaj3 = newMesaj.join("")
        
        
       }
       
if(mesaj3.includes("+")){
    let newMesaj2 = mesaj3.split("+")
     num1 = Number(newMesaj2[0])
    num2 = Number(newMesaj2[1])
    value = num1 + num2
    value_start1.innerText = value
            
            
            
}else if(mesaj3.includes("-")){
        let newMesaj2 = mesaj3.split("-")
        num1 = Number(newMesaj2[0])
        num2 = Number(newMesaj2[1])
        value = num1 - num2
        value_start1.innerText = value
        
        
        
}else if(mesaj3.includes("*")){
    let newMesaj2 = mesaj3.split("*")
    num1 = Number(newMesaj2[0])
    num2 = Number(newMesaj2[1])
    value = num1 * num2
    value_start1.innerText = value
    
    
    
}else if(mesaj3.includes("/")){
    let newMesaj2 = mesaj3.split("/")
    num1 = Number(newMesaj2[0])
    num2 = Number(newMesaj2[1])
    value = num1 / num2
    value_start1.innerText = value
    
    
    
}
   
       
       
}
    






}

