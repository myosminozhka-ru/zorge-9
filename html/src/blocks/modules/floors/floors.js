import $ from "jquery";

$(function() {
    class Apartments {
        constructor({apartmentsLink}) {
            this.apartmentsLink = apartmentsLink;
            this.apartments = null;
        }
        getApartments() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: this.apartmentsLink,
                    success: function(data) {
                        resolve(data);
                    },
                    error: function(err) {
                        reject(err);
                    }
                });
            })
        }
        addAttributes() {
            this.apartments.forEach(item => {
                switch (item.corpus) {
                    case 'Madison':
                        console.log(item.corpus, item.floor, item.position)
                        console.log($(`[data-corpse="1"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`))
                        break;
                }
            })
        }
        init() {
            this.getApartments()
                .then(result => {
                    this.apartments = result.apartments;
                    this.addAttributes();
                })
                .catch(error => {
                    alert(error)
                });
        }
    }
    let apartments = new Apartments({
        apartmentsLink: 'static/apartments.json',
    });
    apartments.init();
});