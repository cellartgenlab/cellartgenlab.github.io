(() => {
 const form=document.getElementById('cellartgenCareerForm'); if(!form)return;
 const feedback=document.getElementById('careerFeedback'); const button=form.querySelector('button[type="submit"]');
 form.addEventListener('submit',async event=>{
  event.preventDefault(); if(!form.reportValidity())return;
  const file=form.elements.resume.files[0];
  if(!file){feedback.textContent='Please attach your resume.';return;}
  if(file.size>5*1024*1024){feedback.textContent='Resume must be 5 MB or smaller.';return;}
  const allowed=['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if(!allowed.includes(file.type)){feedback.textContent='Please upload a PDF, DOC or DOCX file.';return;}
  button.disabled=true; const old=button.textContent;button.textContent='Submitting…';feedback.textContent='';
  try{
   const dataUrl=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(new Error('Could not read the resume file.'));reader.readAsDataURL(file);});
   const values=Object.fromEntries(new FormData(form).entries());
   const payload={name:values.name,email:values.email,phone:values.phone,position:values.position,coverNote:values.coverNote||'',consent:form.elements.consent.checked,resume:{name:file.name,type:file.type,data:dataUrl}};
   const response=await fetch('/api/career-applications',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
   const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.error||'Application could not be submitted.');
   feedback.textContent=result.message||'Application submitted successfully.';feedback.style.color='#4b9b68';form.reset();
  }catch(error){feedback.textContent=error.message;feedback.style.color='#c66b5f';}
  finally{button.disabled=false;button.textContent=old;}
 });
})();
