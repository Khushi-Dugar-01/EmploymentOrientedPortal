function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var master=document.getElementById("master_row"+no);
 var seeker=document.getElementById("seeker_row"+no);
 var user=document.getElementById("user_row"+no);
 var job=document.getElementById("job_row"+no);
	
 var master_data=master.innerHTML;
 var seeker_data=seeker.innerHTML;
 var user_data=user.innerHTML;
 var job_data=job.innerHTML;
	
 master.innerHTML="<input type='text' id='master_text"+no+"' value='"+master_data+"'>";
 seeker.innerHTML="<input type='text' id='seeker_text"+no+"' value='"+seeker_data+"'>";
 user.innerHTML="<input type='text' id='user_text"+no+"' value='"+user_data+"'>";
 job.innerHTML="<input type='text' id='job_text"+no+"' value='"+job_data+"'>";
}

function save_row(no)
{
 var master_val=document.getElementById("master_text"+no).value;
 var seeker_val=document.getElementById("seeker_text"+no).value;
 var user_val=document.getElementById("user_text"+no).value;
 var job_val=document.getElementById("job_text"+no).value;

 document.getElementById("master_row"+no).innerHTML=master_val;
 document.getElementById("seeker_row"+no).innerHTML=seeker_val;
 document.getElementById("user_row"+no).innerHTML=user_val;
 document.getElementById("job_row"+no).innerHTML=job_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_master=document.getElementById("new_master").value;
 var new_seeker=document.getElementById("new_seeker").value;
 var new_user=document.getElementById("new_user").value;
 var new_job=document.getElementById("new_job").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='master_row"+table_len+"'>"+new_master+"</td><td id='seeker_row"+table_len+"'>"+new_seeker+"</td><td id='user_row"+table_len+"'>"+new_user+"</td><td id='job_row"+table_len+"'>"+new_job+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_master").value="";
 document.getElementById("new_seeker").value="";
 document.getElementById("new_user").value="";
 document.getElementById("new_job").value="";
}