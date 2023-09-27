let allapot = JSON.parse(localStorage.getItem('csokiAllapot'))||{
    csokik:[
        {
            nev: "Étcsoki",
            ara: 2500,
            raktaron: true
        },
        {
            nev: "Fehér csoki",
            ara: 3500,
            raktaron: false
        },
        {
            nev: "Lyukas csoki",
            ara: 1500,
            raktaron: true
        }

    ]
};

function mentesLocalStorage() {
    localStorage.setItem('csokiAllapot', JSON.stringify(allapot));
}

// Termékek aktualizálása, kiolvasása

function renderCsokik(){
    let csokik = "";
    allapot.csokik.forEach((csoki,index) => {
        csokik += ` <div class ='col'</div> 
        <div class="${csoki.raktaron ? "bg-success" : "bg-danger"} m-4 p-4 text-center text-white">
            <p>${csoki.nev}</p>
            <p>${csoki.ara} Ft</p>
            <button class="btn btn-danger" onclick = "torles (${index})">
            Törlés</button> </div>
        </div>`
    });

    document.getElementById("csoki-lista").innerHTML = csokik;

    
}
let btn = document.getElementById("ujtermek")
btn.onclick = () =>{
    let newFormHTML = `
    <h4>Új csoki hozzáadása</h4>
    <form id="uj-csoki" class="p-5">
        <label class="w-100">
            <h5>Termék neve:</h5>
            <input type="text" name="nev" class="form-control">
        </label>

        <label class="w-100">
            <h5>Termék ára:</h5>
            <input type="number" name="ara" class="form-control">
        </label>

        <label class="w-100">
            <h5>Van-e raktáron?</h5>
            <input type="checkbox" name="raktaron" class="form-control">
        </label>

        <button class="btn btn-primary" type="submit">Felvitel</button>


    </form>
    `;
    document.getElementById("uj").innerHTML = newFormHTML;
    document.getElementById("uj-csoki").onsubmit = function(event){
        event.preventDefault();
        let nev = event.target.elements.nev.value
        console.log(nev)
        let ara = event.target.elements.ara.value
        console.log(ara)
        let raktaron = event.target.elements.raktaron.checked
        console.log(raktaron)
    
    allapot.csokik.push(
        {
        nev: nev,
        ara: ara,
        raktaron: raktaron
        }
    
    );
    document.getElementById('uj').innerHTML = "";
    document.getElementById('ujtermek').style.display = 'block';
    mentesLocalStorage();
    renderCsokik();
}



} 


window.onload = renderCsokik();