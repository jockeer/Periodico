
let direccionURLN = 'https://diarionuevonorte.herokuapp.com';
// let direccionURLN = 'http://localhost:3000';

(async function cargarUltimasNoticias(){
    async function getUltimasNoticias(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaNoticias= await getUltimasNoticias(`${direccionURLN}/api/obtenerUltimasCincoNacional`);
    // const $listaNoticias= await getUltimasNoticias(`http://localhost:3000/api/obtenerUltimasCincoNacional`);
    // debugger
    function NoticiasItemTemplate(noticia){
        return `<div class="item">
        <h6>${noticia.nombrecategoria}</h6>
        <img class="imgUltimaNoticia" src='../img/ultimaNoticia.png'>
        <a href="noticia.html">
            <img class="imagenesUltimasCinco" src="${noticia.fotografia}" alt="">
            <h4>${noticia.titulo}</h4>
            <p class="quienPublico">por ${noticia.nombres} ${noticia.apellidos}</p>
        </a>
    </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    function addEventClick($element,$nota) {
        debugger
        $element.addEventListener('click', () => {
            sessionStorage.setItem('idnoticia',`${$nota.idnoticia}`);
            sessionStorage.setItem('titulo',`${$nota.titulo}`);
            sessionStorage.setItem('subtitulo',`${$nota.subtitulo}`);
            sessionStorage.setItem('texto',`${$nota.texto}`);
            sessionStorage.setItem('foto',`${$nota.fotografia}`);
            sessionStorage.setItem('frase',`${$nota.frase}`);
            sessionStorage.setItem('fecha',`${$nota.fecha}`);
            sessionStorage.setItem('nombrecat',`${$nota.nombrecategoria}`);
            // getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
            // alert(`comentario Eliminado`)
            // location.reload();
        //   showModal($visita)
        })
    }
    function renderNoticiaList(listnoticia, $container){
        listnoticia.data.forEach(noticia => {
            
          const HTMLString = NoticiasItemTemplate(noticia);
          const noticiaElement = createTemplate(HTMLString);
          addEventClick(noticiaElement,noticia);
          
          $container.append(noticiaElement);
        });    
    }
    const $containerNoticias = document.getElementById('containerUltimasCinco')
    renderNoticiaList($listaNoticias, $containerNoticias)
})();

(async function cargarUltimaEditorial(){
    async function getUltimaEditorial(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $UltimaEditorial= await getUltimaEditorial(`${direccionURLN}/api/obtenerUltimaEditorial`);
    // const $UltimaEditorial= await getUltimaEditorial(`http://localhost:3000/api/obtenerUltimaEditorial`);
    console.log($UltimaEditorial)


    document.getElementById('tEditorial').textContent=$UltimaEditorial.data[0].titulo;
    document.getElementById('dEditorial').textContent=`${$UltimaEditorial.data[0].descripcion.substr(0,100)}`;
    document.getElementById('cardEditorial').addEventListener('click',()=>{
     
        sessionStorage.setItem('ideditorial',`${$UltimaEditorial.data[0].ideditorial}`);
        sessionStorage.setItem('tituloEditorial',`${$UltimaEditorial.data[0].titulo}`);
        sessionStorage.setItem('descripcionEditorial',`${$UltimaEditorial.data[0].descripcion}`);
        sessionStorage.setItem('fraseEditorial',`${$UltimaEditorial.data[0].fraserelevante}`);
        sessionStorage.setItem('fechaEditorial',`${$UltimaEditorial.data[0].fecha.substr(0,10)}`);  
        location.href="editorial.html"  
    })
})();
(async function cargarURL(){
    async function getURL(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $URL= await getURL(`${direccionURLN}/api/obtenerURL`);
    // const $URL= await getURL(`http://localhost:3000/api/obtenerURL`);
    console.log($URL)
        document.getElementById('URLvideo').src=$URL.data[0].url;
    
})();

(async function cargarOtrasNotas(){
    async function getOtrasNotas(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const $listaNotas= await getOtrasNotas(`${direccionURLN}/api/obtenerOtrasNotasNacional`);
    // const $listaNotas= await getOtrasNotas(`http://localhost:3000/api/obtenerOtrasNotasNacional`);
    // debugger
    function NotaItemTemplate(nota){
        return `<div class="noticia">
                    <img src="${nota.fotografia}" alt="">
                    <div class="InfoNoti">
                        <a href="nodos/noticia.html"><h4 style="font-weight: bold; color: black;">${nota.titulo}</h4> </a>
                        <h6 style="font-weight: bold;">${nota.subtitulo}</h6>
                        <small>${nota.fecha.substr(0,10)}</small>
                        <h5>${nota.nombrecategoria}</h5>
                        <p>${nota.texto}</p>
                    </div>
                    <hr>
                </div>`;
    }
    function createTemplate(HTMLString){
        const $html = document.implementation.createHTMLDocument();
        $html.body.innerHTML = HTMLString;
        return $html.body.children[0];
    }
    function addEventClick($element,$nota) {
        // debugger
        $element.addEventListener('click', () => {
            sessionStorage.setItem('idnoticia',`${$nota.idnoticia}`);
            sessionStorage.setItem('titulo',`${$nota.titulo}`);
            sessionStorage.setItem('subtitulo',`${$nota.subtitulo}`);
            sessionStorage.setItem('texto',`${$nota.texto}`);
            sessionStorage.setItem('foto',`${$nota.fotografia}`);
            sessionStorage.setItem('frase',`${$nota.frase}`);
            sessionStorage.setItem('fecha',`${$nota.fecha}`);
            sessionStorage.setItem('nombrecat',`${$nota.nombrecategoria}`);
            // getComentarios(`http://localhost:3000/api/EliminarComentario/${$comentario.idcomentario}`);
            // alert(`comentario Eliminado`)
            // location.reload();
        //   showModal($visita)
        })
    }
    function renderNotaList(listnota, $container){
        listnota.data.forEach(nota => {
            
          const HTMLString = NotaItemTemplate(nota);
          const notaElement = createTemplate(HTMLString);
    

            addEventClick(notaElement.children[1].children[0].children[0],nota);
          
          $container.append(notaElement);
        });    
    }
    const $containerNotas = document.getElementById('masNoticias')
    renderNotaList($listaNotas, $containerNotas)
})();