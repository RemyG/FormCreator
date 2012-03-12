function parseFormStructure() {

	var indent = "    ";

	var sForm = "<form ";

	var formAction = document.getElementById('form_action').value;

	var formMethod = document.getElementById('form_method').value;

	sForm += "action='"+escapeHtml(formAction)+"' ";
	sForm += "method='"+escapeHtml(formMethod)+"' ";

	sForm += ">\n";

	var formParameterRegex = document.getElementById('form_regex').value;

	if(formParameterRegex == "") {

		document.getElementById('form_result_textarea').value = "Please specify a value for the parameters format.";
		document.getElementById('form_result').style.display="block";
		return;

	}

	var formParameters = document.getElementById('form_parameters').value;

	var patt1 = new RegExp(formParameterRegex, "g");

	var result = patt1.exec(formParameters);

	while(result != null) {

		sForm += indent + "<input type='hidden' name='"+escapeHtml(result[1])+"' value='"+escapeHtml(result[2])+"' />\n";
		result = patt1.exec(formParameters);

	}

	sForm += indent + "<input type='submit' />\n"

	sForm += "</form>"

	document.getElementById('form_result_textarea').value = sForm;
	document.getElementById('form_result').style.display="block";

}

function clearAll() {
	
	document.getElementById('form_action').value = "";

	document.getElementById('form_method').value = "";

	document.getElementById('form_regex').value = "";

	document.getElementById('form_parameters').value = "";

	document.getElementById('form_result_textarea').value = "";
	document.getElementById('form_result').style.display="none";

}

function escapeHtml(unsafe) {
	return unsafe;
  return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

