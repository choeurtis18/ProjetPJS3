let observer = new IntersectionObserver(function (entrer) {

    entrer.forEach(function (observable) {
        if(observable.intersectionRatio > 0.3){
            observable.target.classList.remove('not_visible')
            observer.unobserve(observable.target)
            console.log("ok")
        }
    })

}, {
    threshold: [0.3] //lorsque la cible à atteint 50% de l'élément
})


let items = document.querySelectorAll(".partie") //selection le la class d'objets à observer

items.forEach(function(item) {//selection des objets
    item.classList.add('not_visible')
    observer.observe(item)
})

