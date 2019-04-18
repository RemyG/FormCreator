/*
	This file is part of FormCreator.

	Copyright (c) 2012-2019 Remy Gardette

	This software has been released under the MIT License. 
	You should have received a copy of the MIT License along with this software. 
	If not, see <>http://opensource.org/licenses/MIT>.
*/

function parseFormStructure() {

	var indent = "    ";

	var formAction = document.getElementById('form_action').value;

	var formMethod = document.getElementById('form_method').value;

	var formHeader = '<form ';
	formHeader += 'action="'+escapeHtml(formAction)+'" ';
	formHeader += 'method="'+escapeHtml(formMethod)+'" ';
	var formHiddenHeader = formHeader + 'target="_blank" name="myform">';
	formHeader += '>\n';

	var formParameterRegex = document.getElementById('form_regex').value;

	if(formParameterRegex == "") {

		document.getElementById('form_result_textarea').value = "Please specify a value for the parameters format.";
		document.getElementById('form_result').style.display="block";
		return;
	}

	var formParameters = document.getElementById('form_parameters').value;

	var patt1 = new RegExp(formParameterRegex, "g");

	var result = patt1.exec(formParameters);

	var formContent = "";
	var formHiddenContent = "";

	while(result != null) {

		var input = '<input type="hidden" name="'+escapeHtml(result[1])+'" value="'+escapeHtml(result[2])+'">';
		formContent += indent + input + '\n';
		formHiddenContent += input;
		result = patt1.exec(formParameters);

	}

	var formFooter = indent + '<input type="submit">\n';
	var formHiddenFooter = '<input class="btn btn-success" type="submit" value="Submit Test Query">';

	formFooter += "</form>";
	formHiddenFooter += "</form>";

	var hiddenForm = formHiddenHeader + formHiddenContent + formHiddenFooter;
	console.log(hiddenForm);

	document.getElementById('form_result_textarea').value = formHeader + formContent + formFooter;
	document.getElementById('form_result').style.display="block";
	document.getElementById('form_result_form').innerHTML = hiddenForm;

}

function clearAll() {
	
	document.getElementById('form_action').value = "";

	document.getElementById('form_method').value = "";

	document.getElementById('form_regex').value = "";

	document.getElementById('form_parameters').value = "";

	document.getElementById('form_result_textarea').value = "";
	document.getElementById('form_result').style.display="none";

	document.getElementById('form_result_form').innerHTML = "";

}

function addCaptureGroup() {
	document.getElementById('form_regex').value = document.getElementById('form_regex').value + "(.+?)";
	document.getElementById('form_regex').focus();
}

function toHtml(raw) {
	return raw.replace("\\n", "<br/>");
}

function escapeHtml(unsafe) {
	//return unsafe;
  return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

