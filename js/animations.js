(function (){
    let observerPage = new IntersectionObserver(function (observables) {
        observables.forEach(function (observable) {
            // L'élément devient visible
            if (observable.intersectionRatio > 0.3) {
                observable.target.classList.remove('not_visible')
            }
        })
        observer.unobserve(observable.target)
    }, 
    {
        threshold: [0.3]
    });
    
    let observerZoom = new IntersectionObserver(function (observables) {
        observables.forEach(function (observable) {
            // Zoom sur l'element
            if (observable.intersectionRatio > 0.3) {
                observable.target.classList.add('zoom')
            }
        })
        observer.unobserve(observable.target)
    }, 
    {
        threshold: [0.3]
    });
    
    let observerApparition = new IntersectionObserver(function (observables) {
        observables.forEach(function (observable) {
            // Zoom sur l'element
            if (observable.intersectionRatio > 0.3) {
                observable.target.classList.add('apparition')
            }
        })
        observer.unobserve(observable.target)
    }, 
    {
        threshold: [0.3]
    });
    
    // On observe nos éléments
    let apparaitre = document.querySelectorAll('.apparaitre')
    apparaitre.forEach(function (item) {
        item.classList.add('not_visible')
        observerPage.observe(item)
    })
    let texte_banniere = document.querySelectorAll('.texte_banniere')
    texte_banniere.forEach(function (item) {
        observerApparition.observe(item)
    })
    let diplome = document.querySelectorAll('.diplome')
    diplome.forEach(function (item) {
        observerZoom.observe(item)
    })
    let BoxiutEnChiffre = document.querySelectorAll('.BoxiutEnChiffre')
    BoxiutEnChiffre.forEach(function (item) {
        observerZoom.observe(item)
    })
})()