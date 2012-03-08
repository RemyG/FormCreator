function parseFormStructure() {

	var indent = "&nbsp;&nbsp;&nbsp;&nbsp;";

	var sForm = "&lt;form ";

	var formAction = document.getElementById('form_action').value;

	var formMethod = document.getElementById('form_method').value;

	sForm += "action='"+formAction+"' ";
	sForm += "method='"+formMethod+"' ";

	sForm += "&gt;<br/>";

	var formParameterRegex = document.getElementById('form_regex').value;

	var formParameters = document.getElementById('form_parameters').value;

	var patt1 = new RegExp(formParameterRegex, "g");

	var result = patt1.exec(formParameters);

	while(result != null) {

		sForm += indent + "&lt;input type='hidden' name='"+result[1]+"' value='"+result[2]+"' /&gt;<br/>";
		result = patt1.exec(formParameters);

	}

	sForm += indent + "&lt;input type='submit' /&gt;<br/>"

	sForm += "&lt;/form&gt;"

	document.getElementById('form_result').innerHTML = sForm;
	document.getElementById('form_result').style.display="block";

}
