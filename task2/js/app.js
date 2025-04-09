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