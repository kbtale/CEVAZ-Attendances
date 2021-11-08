document.addEventListener("DOMContentLoaded", function(event) {
  // opens a communication between scripts
  var port = chrome.runtime.connect();

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
    console.log(formats[f]);
    console.log(document.getElementById("id_sessiondate_day"));

    document.getElementsByName("sessiondate[day]")[0].value = format[0];
    document.getElementsByName("sessiondate[month]")[0].value = format[1];
    document.getElementsByName("sessiondate[year]")[0].value = format[2];
    document.getElementsByName("sestime[starthour]")[0].value = format[3];
    document.getElementsByName("sestime[startminute]")[0].value = format[4];
    document.getElementsByName("sestime[endhour]")[0].value = format[5];
    document.getElementsByName("sestime[endminute]")[0].value = format[6];

    document.getElementsByName("addmultiply")[0].checked = true;
    format[7].forEach((day) => {
      document.getElementById(day).checked = true;
    });

    document.getElementById("sessionenddate[day]").value = format[8];
    document.getElementById("sessionenddate[month]").value = format[9];
    document.getElementById("sessionenddate[year]").value = format[10];

  }

  document.getElementById('id_wf_k_2-3s1').onclick = useFormat(0);
  document.getElementById('id_wf_k_2-3s2').onclick = useFormat(1);

});
