
// is yahoo on tsla?
// check URL?
var yahoo_url = window.location.href;
if (yahoo_url.includes("TSLA")) {
  var parent = document.getElementsByClassName('D(ib) Mend(20px)')[1].innerText;
  if (parent.length > 0) {
    var spliced_string_price = parent.substring(0, parent.indexOf('+'));
    var pre_price = 5 * parseInt(spliced_string_price);
    var br = document.createElement("br");
    document.getElementById('quote-market-notice').appendChild(br);
    var element = document.createElement("span");
    element.setAttribute("id", "go_ducks");
    element.appendChild(document.createTextNode(' The Pre-Split Price would be: $' + pre_price));
    document.getElementById('quote-market-notice').appendChild(element);
    console.log("Pre Stock Price span added");
}
}
