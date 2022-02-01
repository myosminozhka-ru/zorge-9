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
                        $(`[data-corpse="1"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`)
                            .attr('data-area', item.area)
                            .attr('data-rooms', item.rooms)
                            .attr('data-price', item.price)
                            .attr('data-number', item.number)
                            .attr('fill', 'red')
                        break;
                    case 'Manhattan':
                        $(`[data-corpse="2"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`)
                            .attr('data-area', item.area)
                            .attr('data-rooms', item.rooms)
                            .attr('data-price', item.price)
                            .attr('data-number', item.number)
                            .attr('fill', 'red')
                        break;
                    case 'Soho':
                        $(`[data-corpse="3"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`)
                            .attr('data-area', item.area)
                            .attr('data-rooms', item.rooms)
                            .attr('data-price', item.price)
                            .attr('data-number', item.number)
                            .attr('fill', 'red')
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
                    console.log(error)
                });
        }
    }
    let apartments = new Apartments({
        apartmentsLink: 'static/apartments.json',
    });
    apartments.init();
});