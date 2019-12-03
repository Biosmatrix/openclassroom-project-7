export const restaurantRatingStars = el =>{

    if (el){

        return el.forEach(element => {

            if (parseInt(element.parentNode.children[5].value) >= parseInt(element.getAttribute('data-rating'))) {

                return element.classList.remove('fa-star-o'), element.classList.add('fa-star');

            } else {

                return element.classList.remove('fa-star'), element.classList.add('fa-star-o');

            }

        });
    }
};

export const renderRestaurantRatingStars = (el) => {

    if (el){

        el.forEach(star =>{

            star.addEventListener("click", function () {

                star.parentNode.children[5].value = star.getAttribute('data-rating');

                return restaurantRatingStars(el);
            })
        })
    }
};