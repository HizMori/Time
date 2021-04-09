function clockTimer() {
    var month = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ]; //создаём массив month, где храняться все месяцы
    var day = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ]; //создаём массив day, где храняться все дни недели

    var new_data = new Date();
    var watch = [new_data.getHours(), new_data.getMinutes(), new_data.getSeconds()]; //создаём массив watch, где храняться часы, минуты, секунды (в виде числа)
    var data = [
        new_data.getDay(),
        new_data.getDate(),
        new_data.getMonth(),
        new_data.getFullYear(),
    ]; //создаём массив data, где храняться день недели, число, месяц, год (в виде числа)

    var watch0 = watch[0] < 10 ? "0" + watch[0] : watch[0]; // если часы < 10, то мы добавляем в начало 0, иначе число остёться не изменным
    var watch1 = watch[1] < 10 ? "0" + watch[1] : watch[1]; // если минуты < 10, то мы добавляем в начало 0, иначе число остёться не изменным
    var watch2 = watch[2] < 10 ? "0" + watch[2] : watch[2]; // если секунды < 10, то мы добавляем в начало 0, иначе число остёться не изменным

    var ready_watch = [watch0, watch1, watch2].join(":"); //между часами, минутами и сикундами мы ставим ":"

    document.getElementById("data").innerHTML = day[data[0]] + ", " + data[1] + " " + month[data[2]] + " " + data[3]; //добавляем в тег с id data день недели (название), дату, месяц (название) и год
    document.getElementById("watch").innerHTML = ready_watch; //добавляем в тег с id watch часы, минуты и секунды

    setTimeout("clockTimer()", 1000); //обновляем функцию clockTimer каждую секунду
};

