/*
	This file is part of FormCreator.

	Copyright 2012 Remy Gardette

	FormCreator is free software: you can redistribute it and/or modify
	it under the terms of the GNU Lesser General Public License as 
	published by the Free Software Foundation, either version 3 of 
	the License, or (at your option) any later version.

	FormCreator is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public License
	along with FormCreator.  If not, see <http://www.gnu.org/licenses/>.
*/

function parseFormStructure() {

	var indent = "    ";

	var formAction = document.getElementById('form_action').value;

	var formMethod = document.getElementById('form_method').value;

	var formHeader = "<form ";
	formHeader += "action='"+escapeHtml(formAction)+"' ";
	formHeader += "method='"+escapeHtml(formMethod)+"' ";
	var formHiddenHeader = formHeader + "target='_blank' name='myform' ";
	formHeader += ">\n";
	formHiddenHeader += ">\n";

	var formContent = "";

	var formFooter = "";
	var formHiddenFooter = "";

	

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

		formContent += indent + "<input type='hidden' name='"+escapeHtml(result[1])+"' value='"+escapeHtml(result[2])+"' />\n";
		result = patt1.exec(formParameters);

	}

	formFooter += indent + "<input type='submit' />\n";
	formHiddenFooter += indent + "<div class='button' onClick='javascript:document.myform.submit();'>Submit</div>\n";

	formFooter += "</form>";
	formHiddenFooter += "</form>";

	document.getElementById('form_result_textarea').value = formHeader + formContent + formFooter;
	document.getElementById('form_result').style.display="block";
	document.getElementById('form_result_form').innerHTML = formHiddenHeader + formContent + formHiddenFooter;

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
	return unsafe;
  return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

