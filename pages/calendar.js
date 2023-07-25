let Calendar = function (divId) {
    //Сохраняем идентификатор div
    this.divId = divId;
    // Дни недели с понедельника
    this.DaysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    // Месяцы начиная с января
    this.Months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    //Устанавливаем текущий месяц, год
    let d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
};
// Переход к следующему месяцу
Calendar.prototype.nextMonth = function () {
    if (this.currMonth === 11) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1;
    } else {
        this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
};
// Переход к предыдущему месяцу
Calendar.prototype.previousMonth = function () {
    if (this.currMonth === 0) {
        this.currMonth = 11;
        this.currYear = this.currYear - 1;
    } else {
        this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
};
// Показать текущий месяц
Calendar.prototype.showcurr = function () {
    this.showMonth(this.currYear, this.currMonth);
};
// Показать месяц (год, месяц)
Calendar.prototype.showMonth = function (y, m) {
    const calendar_static_tooltip = document.getElementById("calendar_static_tooltip");
    // calendar_static_tooltip.parentElement.classList.add("--hidden");

    document.getElementById(this.divId).innerHTML = "";

    // Первый день недели в выбранном месяце
    let firstDayOfMonth = new Date(y, m, 7).getDay();
    // Последний день выбранного месяца
    let lastDateOfMonth = new Date(y, m + 1, 0).getDate();
    // Последний день предыдущего месяца
    let lastDayOfLastMonth = m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    let table = document.createElement("table");
    table.className = "calendar__table";

    let thead = document.createElement("thead");
    thead.className = "calendar__head";
    thead.innerHTML = `
    <tr class="calendar__row calendar__row_type_caption">
        <td>
            <button
                id="calendar_prev_btn"
                type="button"
                class="calendar__thumb icon icon_type_arrow-thin-left"
                aria-label="Предыдущий месяц">
            </button>
        </td>
        <td colspan="5">
            <p class="calendar__caption">${this.Months[m]} ${y}</p>
        </td>
        <td>
            <button
                id="calendar_next_btn"
                type="button"
                class="calendar__thumb icon icon_type_arrow-thin-right"
                aria-label="Следующий месяц">
            </button>
        </td>
    </tr>`;

    let tbody = document.createElement("tbody");
    tbody.className = "calendar__body";

    let trDays = document.createElement("tr");
    trDays.className = "calendar__row";

    for (let i = 0; i < this.DaysOfWeek.length; i++) {
        let td = document.createElement("td");
        td.className = "calendar__day";
        td.textContent = this.DaysOfWeek[i];
        trDays.append(td);
    }

    thead.append(trDays);
    table.append(thead);

    // Записываем дни
    let i = 1;
    let currentTr;
    do {
        let dow = new Date(y, m, i).getDay();
        // Начать новую строку в понедельник
        if (dow === 1) {
            currentTr = document.createElement("tr");
            currentTr.className = "calendar__row";
        }
        // Если первый день недели не понедельник показать последние дни предыдущего месяца
        else if (i === 1) {
            currentTr = document.createElement("tr");
            currentTr.className = "calendar__row";
            let k = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (let j = 0; j < firstDayOfMonth; j++) {
                let td = document.createElement("td");
                td.className = "calendar__day calendar__day_not-current";
                td.textContent = k;
                currentTr.append(td);
                k++;
            }
        }
        // Записываем текущий день в цикл
        let chk = new Date();
        let chkY = chk.getFullYear();
        let chkM = chk.getMonth();

        let currentDayElement = document.createElement("td");
        currentDayElement.className = "calendar__day";
        currentDayElement.textContent = i;

        if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay && m === this.currMonth) {
            currentDayElement.classList.add("calendar__day_today");
        }

        if (y === 2023 && m === 7 && i === 23) {
            this.addTooltip(currentDayElement);
        }
        if (y === 2023 && m === 7 && i === 10) {
            this.addTooltip(currentDayElement);
        }

        currentTr.append(currentDayElement);

        // закрыть строку в воскресенье
        if (dow === 0) {
            tbody.append(currentTr);
        }
        // Если последний день месяца не воскресенье, показать первые дни следующего месяца
        else if (i === lastDateOfMonth) {
            let k = 1;
            for (dow; dow < 7; dow++) {
                let td = document.createElement("td");
                td.className = "calendar__day calendar__day_not-current";
                td.textContent = k;
                currentTr.append(td);
                k++;
            }
            tbody.append(currentTr);
        }
        i++;
    } while (i <= lastDateOfMonth);

    table.append(tbody);
    document.getElementById(this.divId).append(table);

    document.getElementById("calendar_prev_btn").onclick = () => this.previousMonth();
    document.getElementById("calendar_next_btn").onclick = () => this.nextMonth();
};

Calendar.prototype.selectMonth = function (year, month) {
    this.showMonth(year, month);
};

Calendar.prototype.addTooltip = function (element) {
    element.onclick = () => {
        Array.from(document.getElementsByClassName("calendar__day calendar__day_selected")).map((item) =>
            item.classList.remove("calendar__day_selected")
        );
    };
};
