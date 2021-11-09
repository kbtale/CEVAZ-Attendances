var formats = [
    {
      name: "WED-FRI Kids 2-3PM Set 1",
      options: ["3", "11", "2021", "8", "12", "2021"]
    },
    {
      name: "WED-FRI Kids 2-3PM Set 2",
      options: ["12", "1", "2022", "28", "1", "2022"]
    }
  ]

var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
var days_id = ["id_sdays_Mon","id_sdays_Tue","id_sdays_Wed","id_sdays_Thu", "id_sdays_Fri", "id_sdays_Sat", "id_sdays_Sun"];
var hours = ["8:30", "10:00", "10:30", "11:30", "12:00", "12:30", "1:30", "2:00", "3:00", "3:15", "4:15", "4:30", "5:00", "6:00"]
var hours_input = [
  ["8","30"],
  ["10","0"],
  ["10","30"],
  ["11","30"],
  ["12","0"],
  ["12","30"],
  ["13","30"],
  ["14","0"],
  ["15","0"],
  ["15","15"],
  ["16","15"],
  ["16","30"],
  ["17","0"],
  ["18","0"]
]

  function useFormat(f){
    document.getElementsByName("sessiondate[day]")[0].value = f[0];
    document.getElementsByName("sessiondate[month]")[0].value = f[1];
    document.getElementsByName("sessiondate[year]")[0].value = f[2];
    document.getElementById("id_sessionenddate_day").value = f[3];
    document.getElementById("id_sessionenddate_month").value = f[4];
    document.getElementById("id_sessionenddate_year").value = f[5];

  }

  function startChange(){
    if (document.getElementById('id_sessiontype_1')){
      document.getElementById('id_sessiontype_1').checked = true;
      document.getElementById('id_sessiontype_0').checked = false;
    }
    document.getElementsByName("addmultiply")[0].checked = true;
    document.getElementById("id_headeraddmultiplesessions").classList.remove("collapsed");

    var scheduleSelect = document.createElement("select");
    scheduleSelect.id = "schedule_select";
    scheduleSelect.classList = "select";
    var option = document.createElement("option");
    option.text =  "-- Select an option --";
    option.disabled = true;
    option.selected = true;
    scheduleSelect.appendChild(option);
    for (var i = 0; i < formats.length; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = formats[i].name;
      scheduleSelect.appendChild(option);
    }
    document.getElementById("fitem_id_groups").insertAdjacentElement("afterend",scheduleSelect);
  }

  window.addEventListener('load', (event) => {
    startChange();
  });
  
  document.addEventListener('change',function(e){
      if(e.target && e.target.id == 'schedule_select'){
        selection = document.getElementById("schedule_select").value;
        console.log(selection)
        useFormat(formats[selection].options);
      }
  });

  document.getElementById("id_groups").addEventListener('change', (event) => {
    secondHour = [];
    hoursSkipped = 0;

    selection = document.getElementById("id_groups").options[document.getElementById("id_groups").selectedIndex].text;
    days.forEach((day, i) => {
      (selection.includes(day)) ? document.getElementById(days_id[i]).checked = true : document.getElementById(days_id[i]).checked = false; 
    })

    for (const [i, hour] of hours.entries()) {
      if (selection.includes(hour)){
        document.getElementsByName("sestime[starthour]")[0].value = hours_input[i][0];
        document.getElementsByName("sestime[startminute]")[0].value = hours_input[i][1];
        secondHour = hours.slice(i+1, hours.length);
        hoursSkipped = i+1;
        break;
      }
    }

    for (const [i, hour] of secondHour.entries()) {
      if (selection.includes(hour)){
        document.getElementsByName("sestime[endhour]")[0].value = hours_input[hoursSkipped+i][0];
        document.getElementsByName("sestime[endminute]")[0].value = hours_input[hoursSkipped+i][1];
        break;
      }
    }

  });