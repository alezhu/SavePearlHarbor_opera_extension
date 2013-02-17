window.addEventListener('DOMContentLoaded', function () {

	var cbAutoRedirect = document.getElementById("autoRedirect");
	var autoRedirect = widget.preferences["autoRedirect"];
	if (autoRedirect === "true")
	{
		cbAutoRedirect.checked = true;
	} else {
		cbAutoRedirect.checked = false;
	}

	cbAutoRedirect.addEventListener("Change", function(e)
	{
		if (cbAutoRedirect.checked) {
			widget.preferences["autoRedirect"] = "true";
		} else {
			widget.preferences["autoRedirect"] = "false";
		}
	}, true);


}, false );