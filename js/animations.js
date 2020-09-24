let observer = new IntersectionObserver(function (entrer) {
    entrer.forEach(function (observable) {//selectionne les éléments de entrer
        if(observable.intersectionRatio > 0.5){//si 50% de l'élément est "passer" 
            observable.target.classList.add("visible") //le rendre visible
        }
    })

}, {
    threshold: [0.5] //lorsque la cible à atteint 50% de l'élément
})


let items = document.querySelectorAll(article) //selection le la class d'objets à observer

items.forEach(function(item) {//selection des objets
    observer.observe(item)
})

