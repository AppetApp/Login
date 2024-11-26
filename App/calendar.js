const daysContainer = document.getElementById("days");
const monthName = document.getElementById("month-name");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const visits = [
    { day: 5, type: 'visita' }, // 5th is a visit
    { day: 12, type: 'desparacitación' }, // 12th is deworming
    { day: 20, type: 'visita' }, // 20th is visit
    { day: 25, type: 'desparacitación' } // 25th is deworming
];

function loadCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();

    monthName.textContent = `${getMonthName(month)} ${year}`;
    daysContainer.innerHTML = '';

    // Empty spaces for the first row
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    // Add actual days to the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;

        // Add special classes for visits and deworming
        const visit = visits.find(v => v.day === day);
        if (visit) {
            dayDiv.classList.add(visit.type);
        }

        daysContainer.appendChild(dayDiv);
    }
}

function changeMonth(offset) {
    currentMonth += offset;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    loadCalendar(currentMonth, currentYear);
}

function getMonthName(month) {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[month];
}

loadCalendar(currentMonth, currentYear);
