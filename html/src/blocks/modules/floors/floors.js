import $ from "jquery";

$(function() {
    class Apartments {
        constructor({apartmentsLink, filtersLink}) {
            this.apartmentsLink = apartmentsLink;
            this.filtersLink = filtersLink;
            this.apartments = null;
            this.filters = null;
            this.url = window.location.pathname;
            this.urlObject = null;
            this.floor = 2;
            this.corpse = 0;
            this.rooms = 1;
            this.view = 0;
        }
        getApartments() {
            return new Promise((resolve, reject) => {
                BX.ajax({
                    url: this.apartmentsLink,
                    method: 'GET',
                    dataType: 'json',
                    timeout: 30,
                    async: true,
                    processData: true,
                    scriptsRunFirst: true,
                    emulateOnload: true,
                    start: true,
                    cache: false,
                    onsuccess: function(result) {
                        resolve(data.apartments);
                    }
                });
            })
        }
        getFilters() {
            return new Promise((resolve, reject) => {
                BX.ajax({
                    url: this.filters,
                    method: 'GET',
                    dataType: 'json',
                    timeout: 30,
                    async: true,
                    processData: true,
                    scriptsRunFirst: true,
                    emulateOnload: true,
                    start: true,
                    cache: false,
                    onsuccess: function(result) {
                        resolve(data.apartments);
                    }
                });
            })
        }
        addAttributes() {
            this.apartments.forEach(item => {
                switch (item.corpus) {
                    case 'Madison':
                        var rect = document.querySelector(`[data-corpse="1"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`);
                        break;
                    case 'Manhattan':
                        var rect = document.querySelector(`[data-corpse="2"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`);
                        break;
                    case 'Soho':
                        var rect = document.querySelector(`[data-corpse="3"][data-floor*="-${item.floor}-"] [data-position="${item.position}"]`);
                        break;
                }
                if (!$(rect).hasClass('active')) {
                    $(rect).attr('data-area', item.area)
                        .attr('data-rooms', item.rooms)
                        .attr('data-price', item.price)
                        .attr('data-number', item.number)
                        .attr('data-link', item.link)
                        .addClass('active')
                        .closest('.floor_center__svg')
                        .prepend(`<div class="apart_popup n2-19-2050 act_vis3" style="top:${rect.getBoundingClientRect().top + (rect.getBoundingClientRect().height / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().top}px;left:${rect.getBoundingClientRect().left + (rect.getBoundingClientRect().width / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().left}px;"><div class="value">${item.area}<span>м<sup>2</sup></span></div></div>`);
                }
            })
        }
        getUrl() {
            return new Promise((resolve, reject) => {
                resolve(window.location.pathname);
            })
        }
        setUrl({state, title, url}) {
            window.history.pushState(state, title, window.location.origin + '/' + url);
            $('.floor_center--item_wrap').fadeOut('fast');
            $(`[data-corpse="${this.corpse+1}"][data-floor*="-${this.floor}-"]`).closest('.floor_center--item_wrap').fadeIn('fast');
        }
        async parseUrl() {
            this.url = await this.getUrl();
            this.urlObject = this.url.split('/');
            this.setUrl({
                state: "Apartments",
                title: this.filters.section[this.corpse].NAME,
                url: `apartments/${(this.filters.section[this.corpse].NAME).toLowerCase()}/${this.floor}`
            });
        }
        setFloor(floor) {
            if (floor > 20 || floor < 2) return;
            this.floor = floor;
            $('.floor_changer .value').text(this.floor);
            this.parseUrl();
        }
        addFloorChanger() {
            $('.floor_changer').on('click', '.next', async () => {
                let curFloor = this.floor;
                console.log(curFloor);
                this.setFloor(++curFloor);
            });
            $('.floor_changer').on('click', '.prev', async () => {
                let curFloor = this.floor;
                console.log(curFloor);
                this.setFloor(--curFloor);
            });
        }
        setRooms(rooms) {
            if (rooms < +this.filters.minRooms || rooms > +this.filters.maxRooms) return;
            this.rooms = rooms;
            $('.rooms_changer .value').text(this.rooms);
            this.parseUrl();
        }
        addRoomsChanger() {
            $('.rooms_changer').on('click', '.next', async () => {
                let curRooms = this.rooms;
                console.log(curRooms);
                this.setRooms(++curRooms);
            });
            $('.rooms_changer').on('click', '.prev', async () => {
                let curRooms = this.rooms;
                console.log(curRooms);
                this.setRooms(--curRooms);
            });
        }
        setView(viewId) {
            console.log(this.filters.windowsView);
            if (viewId < 0 || viewId > +this.filters.windowsView.length) return;
            this.view = viewId;
            $('.views_changer .value').text(this.filters.windowsView[this.view]);
            this.parseUrl();
        }
        addViewsChanger() {
            $('.views_changer').on('click', '.next', async () => {
                let curView = this.view;
                console.log(curView);
                this.setView(++curView);
            });
            $('.views_changer').on('click', '.prev', async () => {
                let curView = this.view;
                console.log(curView);
                this.setView(--curView);
            });
        }
        setCorpse(corpse) {
            console.log(this.filters.section.length);
            if (corpse < 0 || corpse > this.filters.section.length - 1) return;
            this.corpse = corpse;
            $('.corpse_changer .value').text(this.filters.section[this.corpse].NAME);
            this.parseUrl();
        }
        addCorpseChanger() {
            $('.corpse_changer').on('click', '.next', async () => {
                let curCorpse = this.corpse;
                console.log(curCorpse);
                this.setCorpse(++curCorpse);
            });
            $('.corpse_changer').on('click', '.prev', async () => {
                let curCorpse = this.corpse;
                console.log(curCorpse);
                this.setCorpse(--curCorpse);
            });
        }
        async init() {
            this.apartments = await this.getApartments();
            this.filters = await this.getFilters();
            console.log(this.filters);
            // this.setUrl({
            //     state: "Apartments",
            //     title: "Апартаменты",
            //     url: "apartments/madison/2"
            // })
            // this.parseUrl();
            this.addAttributes();
            // this.getUrl();
            console.log(this.filters.section[this.corpse].NAME);
            this.setUrl({
                state: "Apartments",
                title: this.filters.section[this.corpse].NAME,
                url: `apartments/${(this.filters.section[this.corpse].NAME).toLowerCase()}/${this.floor}`
            })
            this.addFloorChanger();
            this.addRoomsChanger();
            this.addViewsChanger();
            this.addCorpseChanger();
            this.setRooms(this.rooms);
            this.setFloor(this.floor);
            this.setView(this.view);
            this.setCorpse(this.corpse);
        }
    }
    window.apartments = new Apartments({
        apartmentsLink: 'ajax/floor.php',
        filtersLink: 'static/filter.json'
    });
    apartments.init();

    window.onpopstate = function(event) {
        alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
    }
    let BX = $;
});

