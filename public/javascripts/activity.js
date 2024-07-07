let event_cards = document.getElementById("event_cards")
let events_list;
let checkboxes = document.getElementById("filters").children;
let filters = [];
function update_cards() {
  let dynamic_events_list = [];
  filters = [];
  for (const checkbox of checkboxes) {
    if (checkbox.id == "all" && checkbox.checked){
      filters = [];
      break;
    }
    else if (checkbox.checked)
      filters.push(checkbox.id);
  }
  if (filters.length == 0){
    dynamic_events_list = [...events_list];
  }
  else {
    for (const event of events_list) {
      for (const filter of filters) {
        if (event[4].includes(filter)) {
          dynamic_events_list.push(event);
          break;
        }
      }
    }
  }

  event_cards.innerHTML = "";
  for (const event of dynamic_events_list) {
    event_cards.innerHTML += `
    				<a href="#">
					<div class="card_credit">
	<div class="status ${event[0].toLowerCase()}">${event[0]}</div>
	<div class="container_image"><img id="bg" src="${event[1]}"/></div>
	<h3>${event[2]}</h3>
	<h4>${event[3]}</h4>
	<h4><i class="fa-solid fa-calendar-days"></i>${event[4]}</h4>
	<h4><i class="fa-solid fa-location-dot"></i>${event[5]}</h4>
					</div>
				</a>

`;
  }
}

fetch('/api/event-list')
  .then(response => response.json())
  .then(data => {
    events_list = data;
    update_cards();
  });
