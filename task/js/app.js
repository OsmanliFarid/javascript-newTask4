const a = document.getElementById("call-boxs-box")
const b = document.getElementById("call-item-icon")
let c =  ""
let d = ""
console.log(a);
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


