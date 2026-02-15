const infoContent = `
  <h3>Personal Information</h3>
  <p>Nom, Email, Date of Birth, Phone Number...</p>
`;

const createContent=`
<h3>create cv</h3>
<p>formulaire pour cree un cv..</p>
`;

const putContent = `
  <h3>Put Your CV</h3>
  <p>Formulaire pour mettre un CV existant...</p>
`;

function showSection(section){
    const card=document.querySelector('.prof-info');
    if(section==='info')card.innerHTML=infoContent;
    if(section==='create')card.innerHTML=createContent;
    if(section==='put')card.innerHTML=putContent;
}