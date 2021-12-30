console.log("Script Running....")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.images').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
       document.querySelector('.dot').style.display = 'inline'
       document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.dot').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline' 
        }, 300);
        
    }

})
