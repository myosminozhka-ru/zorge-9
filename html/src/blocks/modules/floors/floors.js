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
            $.ajax({
                url: this.apartmentsLink,
                success: (data) => {
                    this.apartments = JSON.parse(data).apartments;
                    // this.apartments = data.apartments;
                    $.ajax({
                        url: this.filtersLink,
                        success: (result) => {
                            this.filters = result.filter;
                            this.addAttributes();
                            this.parseUrl();
                            this.addFloorChanger();
                            this.addRoomsChanger();
                            this.addViewsChanger();
                            this.addCorpseChanger();
                            setTimeout(() => {
                                this.setRooms(this.rooms);
                                this.setView(this.view);
                                this.setFloor(this.floor);
                                this.setCorpse(this.corpse);
                            }, 500)
                        }
                    });
                }
            });
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
                
                if ($(rect).length && !$(rect).hasClass('active')) {
                    this.addClickHandler(rect);
                    $(rect).on('mouseenter', () => {
                        this.showInfo(rect, item);
                    });
                    $(rect).on('mouseleave', () => {
                        this.hideInfo(rect);
                    });
                    $(rect).attr('data-area', item.area)
                        .attr('data-rooms', item.rooms)
                        .attr('data-price', item.price)
                        .attr('data-number', item.number)
                        .attr('data-link', item.link)
                        .attr('data-window_view', item.window_view)
                        .addClass('active')
                        .closest('.floor_center__svg')
                        .prepend(`<div class="apart_popup n2-19-2050 act_vis3" style="top:${rect.getBoundingClientRect().top + (rect.getBoundingClientRect().height / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().top}px;left:${rect.getBoundingClientRect().left + (rect.getBoundingClientRect().width / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().left}px;"><div class="value">${item.area}<span>м<sup>2</sup></span></div></div>`);
                }
            });
            
        }
        getUrl() {
            return new Promise((resolve, reject) => {
                resolve(window.location.pathname);
            })
        }
        setUrl({state, title, url}) {
            window.history.pushState(state, title, window.location.origin + '/' + url + '/');
            // if ((this.filters.section[this.corpse].NAME).toLowerCase() !== this.urlObject[2].toLowe)
            $(`svg:not([data-corpse="${this.corpse+1}"][data-floor*="-${this.floor}-"])`).closest('.floor_center--item_wrap').css({display: 'none'});
            $(`[data-corpse="${this.corpse+1}"][data-floor*="-${this.floor}-"]`).closest('.floor_center--item_wrap').css({display: 'block'});
        }
        async parseUrl() {
            this.url = await this.getUrl();
            this.urlObject = this.url.split('/');
            
            this.setUrl({
                state: "Apartments",
                title: this.filters.section[this.corpse].NAME,
                url: `floor/${(this.filters.section[this.corpse].NAME).toLowerCase()}/${this.floor}`
            });
        }
        setFloor(floor) {
            if (floor > 20 || floor < 2) return;
            this.floor = floor;
            $('.floor_changer .value').text(this.floor);
            this.parseUrl();
            setTimeout(() => {
                this.setRooms(this.rooms);
                this.setView(this.view);
            }, 600)
        }
        addFloorChanger() {
            $('.floor_changer').on('click', '.next', async () => {
                let curFloor = this.floor;
                this.setFloor(++curFloor);
            });
            $('.floor_changer').on('click', '.prev', async () => {
                let curFloor = this.floor;
                this.setFloor(--curFloor);
            });
        } 
        setRooms(rooms) {
            if (rooms < +this.filters.minRooms || rooms > +this.filters.maxRooms) return;
            this.rooms = rooms;
            // console.log(321);
            $('.rooms_changer .value').text(this.rooms);
            this.parseUrl();
            $('.floor_center--item_wrap[style="display: block;"]').find('[data-position]').removeClass('active');
            $('.floor_center--item_wrap[style="display: block;"]').find('.apart_popup').remove();
            $(`.floor_center--item_wrap[style="display: block;"] [data-rooms="${this.rooms}"]`).addClass('active')
            
            $(`.floor_center--item_wrap[style="display: block;"] apart_popup`).remove();
            document.querySelectorAll(`.floor_center--item_wrap[style="display: block;"] [data-rooms="${this.rooms}"].active`).forEach((rect) => {
                $(rect).closest('.floor_center__svg')
                .prepend(`<div class="apart_popup n2-19-2050 act_vis3" style="top:${rect.getBoundingClientRect().top + (rect.getBoundingClientRect().height / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().top}px;left:${rect.getBoundingClientRect().left + (rect.getBoundingClientRect().width / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().left}px;"><div class="value">${rect.dataset.area}<span>м<sup>2</sup></span></div></div>`);
            });
        }
        showInfo(item, attributes) {

            $(item).closest('.floor_center').append(`<div class="hover_bl">
            <div class="hover_bl__block">
                <div class="hover_bl__block--title">Номер <br>
                    апартамента</div>
                <div class="hover_bl__block--text">${attributes.number}</div>
            </div>
            <div class="hover_bl__block">
                <div class="hover_bl__block--title">Комнат</div>
                <div class="hover_bl__block--text">${attributes.rooms}</div>
            </div>
            <div class="hover_bl__block">
                <div class="hover_bl__block--title">Площадь, м<sup>2</sup></div>
                <div class="hover_bl__block--text">${attributes.area}</div>
            </div>
            <div class="hover_bl__block">
                <div class="hover_bl__block--title">Цена 
                    без отделки, руб</div>
                <div class="hover_bl__block--text">${attributes.price}</div>
            </div>
        </div>`)
        }
        hideInfo(item) {
            $(item).closest('.floor_center').find('.hover_bl').remove();
        }
        addRoomsChanger() {
            $('.rooms_changer').on('click', '.next', async () => {
                let curRooms = this.rooms;
                this.setRooms(++curRooms);
            });
            $('.rooms_changer').on('click', '.prev', async () => {
                let curRooms = this.rooms;
                this.setRooms(--curRooms);
            });
        }
        setView(viewId) {
            if (viewId < 0 || viewId > +this.filters.windowsView.length) return;
            this.view = viewId;
            // console.log(123);
            $('.views_changer .value').text(this.filters.windowsView[this.view]);
            this.parseUrl();
            $('.floor_center--item_wrap[style="display: block;"]').find('[data-position]').removeClass('active');
            $('.floor_center--item_wrap').find('.apart_popup').remove();
            $(`.floor_center--item_wrap[style="display: block;"] [data-rooms="${this.rooms}"]`).addClass('active')
            
            $(`.floor_center--item_wrap[style="display: block;"] apart_popup`).remove();
            $(`.floor_center--item_wrap[style="display: block;"] apart_popup`).remove();
            $(`.floor_center--item_wrap[style="display: block;"] apart_popup`).remove();
            document.querySelectorAll(`.floor_center--item_wrap[style="display: block;"] [data-rooms="${this.rooms}"].active`).forEach((rect) => {
                $(rect).closest('.floor_center__svg')
                .prepend(`<div class="apart_popup n2-19-2050 act_vis3" style="top:${rect.getBoundingClientRect().top + (rect.getBoundingClientRect().height / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().top}px;left:${rect.getBoundingClientRect().left + (rect.getBoundingClientRect().width / 2) - rect.closest('.floor_center__svg').getBoundingClientRect().left}px;"><div class="value">${rect.dataset.area}<span>м<sup>2</sup></span></div></div>`);
            });
        }
        addViewsChanger() {
            $('.views_changer').on('click', '.next', async () => {
                let curView = this.view;
                this.setView(++curView);
            });
            $('.views_changer').on('click', '.prev', async () => {
                let curView = this.view;
                this.setView(--curView);
            });
        }
        setCorpse(corpse) {
            if (corpse < 0 || corpse > this.filters.section.length - 1) return;
            this.corpse = corpse;
            $('.sort-js').removeClass('active');
            $(`.sort-js[data-corpse="${this.corpse}"]`).addClass('active');
            $('.corpse_changer .value').text(this.filters.section[this.corpse].NAME);
            this.parseUrl();
            setTimeout(() => {
                this.setRooms(this.rooms);
                this.setView(this.view);
            }, 600);
        }
        addCorpseChanger() {
            $('.corpse_changer').on('click', '.next', async () => {
                let curCorpse = this.corpse;
                this.setCorpse(++curCorpse);
            });
            $('.corpse_changer').on('click', '.prev', async () => {
                let curCorpse = this.corpse;
                this.setCorpse(--curCorpse);
            });
        }
        addClickHandler(item) {
            $(item).click(() => {
                window.location.href = $(item).attr('data-link');
            });
        }
        init() {
            if (!$('.floor_center--item_wrap').length) return;
            if (this.url.split('/')[2] && this.url.split('/')[3]) {
                if (this.url.split('/')[2] == 'madison') {
                    this.corpse = 0;
                } else if (this.url.split('/')[2] == 'manhattan' || this.url.split('/')[2] == 'manhatten') {
                    this.corpse = 1;
                } else {
                    this.corpse = 2;
                }
                this.floor = this.url.split('/')[3];
            }
            this.getApartments();

        }
    }
    window.apartments = new Apartments({
        apartmentsLink: '/ajax/floor.php',
        filtersLink: '/local/templates/main/assets/html/dist/static/filter.json'
    });

    // window.apartments = new Apartments({
    //     apartmentsLink: '/static/apartments.json',
    //     filtersLink: '/static/filter.json'
    // });
    apartments.init();
});

