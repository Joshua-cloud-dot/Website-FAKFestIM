let button = document.getElementById("Formular").addEventListener('submit', sendeMail);

function sendeMail(event) {
    event.preventDefault();

    let Formular = event.target;
    let formData = new FormData(Formular);

    formData.append("time", Date.now()); 

    for(let key of formData.keys()) {
        console.log(key, formData.get(key)); 
    }

    let url = "http://localhost:3000/";

    let request = new Request(url, {
        body: formData,
        method: "POST",
    }); 

    fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log("Antowort vom Server:", data);
            
        })
        
        .catch((error) => {
            console.warn(error);
        }); 

}
