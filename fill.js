var formats = [
  {
    name: "WED-FRI Kids 2-3PM Set 1",
    options: ["3", "11", "2021", "14", "0", "15", "0", ["id_sdays_Wed", "id_sdays_Fri"], "8", "12", "2021"]
  },
  {
    name: "WED-FRI Kids 2-3PM Set 2",
    options: ["12", "1", "2022", "14", "0", "15", "0", ["id_sdays_Wed", "id_sdays_Fri"], "28", "1", "2022"]
  }
]
function useFormat(f){
  var format = formats[f];

  document.getElementById("id_sessiondate_day").value = format[0];
  document.getElementById("id_sessiondate_month").value = format[1];
  document.getElementById("id_sestime_starthour").value = format[2];
  document.getElementById("id_sestime_startminute").value = format[3];
  document.getElementById("id_sestime_endhour").value = format[4];
  document.getElementById("id_sestime_endminute").value = format[5];

  document.getElementById("id_addmultiply").checked = true;
  format[6].forEach((day) => {
    document.getElementById(day).checked = true;
  });

  document.getElementById("id_sessionenddate_day").value = format[7];
  document.getElementById("id_sessionenddate_month").value = format[8];
  document.getElementById("id_sessionenddate_year").value = format[9];

}
