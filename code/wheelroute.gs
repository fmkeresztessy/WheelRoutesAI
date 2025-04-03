/**
 * WheelRoute: Generate accessibility-focused vacation plans using GPT.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('WheelRoute')
    .addItem('Plan Accessible Trip', 'promptUserForTrip')
    .addToUi();
}

function promptUserForTrip() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Accessible Trip Planner', 'Describe your trip (e.g. "3-day accessible trip to Tokyo under $1000"):', ui.ButtonSet.OK_CANCEL);
  
  if (response.getSelectedButton() !== ui.Button.OK) return;
  var prompt = response.getResponseText().trim();
  if (!prompt) {
    ui.alert("Please enter a valid trip description.");
    return;
  }
  
  var result = callGPT(prompt);
  SpreadsheetApp.getActiveSheet().getRange("A1").setValue("GPT-Generated Accessible Itinerary:");
  SpreadsheetApp.getActiveSheet().getRange("A2").setValue(result);
}

function callGPT(prompt) {
  const apiKey = "YOUR_OPENAI_API_KEY";
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a travel assistant that only creates wheelchair-accessible vacation plans." },
      { role: "user", content: prompt }
    ],
    max_tokens: 500
  };

  const options = {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + apiKey },
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    return json.choices[0].message.content.trim();
  } catch (e) {
    return "Error: " + e.message;
  }
}
