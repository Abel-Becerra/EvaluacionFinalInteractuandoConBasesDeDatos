
class EventManager {
    constructor() {
        this.urlBase = "/events"
        this.obtenerDataInicial()
        this.inicializarFormulario()
        this.guardarEvento()
        Date.prototype.addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        }
    }

    obtenerDataInicial() {
        let url = this.urlBase + "/all"
        $.get(url, {user:location.href.split('?')[1].split('=')[1]}, (response) => {
            let eventos = new Array()
            for (var v in response) {
              let x = {
                id: response[v].id,
                title: response[v].title,
                start: response[v].startDate + ' ' + response[v].startTime,
                end: response[v].endDate == undefined ? response[v].startDate : response[v].endDate + ' ' + response[v].endTime,
                isFullDay: response[v].isFullDay,
                resourceEditable: true
              }
              eventos.push(x)
            }
            this.inicializarCalendario(eventos)
        })
    }

    eliminarEvento(evento) {
        let eventId = evento.id
        $.post('/events/delete/'+eventId, {id: eventId}, (response) => {
            alert(response)
        })
    }

    guardarEvento() {
        $('.addButton').on('click', (ev) => {
            ev.preventDefault()
            let nombre = $('#titulo').val(),
            start = $('#start_date').val(),
            title = $('#titulo').val(),
            end = $('#start_date').val(),
            start_hour = '08:00:00',
            end_hour = '18:00:00';

            if (!$('#allDay').is(':checked')) {
                end = $('#end_date').val()
                start_hour = $('#start_hour').val()
                end_hour = $('#end_hour').val()
            }
            start = start + 'T' + start_hour
            end = end + 'T' + end_hour
            let url = this.urlBase + "/new"
            if (title != "" && start != "") {
                let ev = {
                    title: title,
                    start: start,
                    end: end,
                    isFullDay: $('#allDay').is(':checked'),
                    user:location.href.split('?')[1].split('=')[1]
                }
                $.post(url, ev, (response) => {
                    alert(response)
                })
                $('.calendario').fullCalendar('renderEvent', ev)
            } else {
                alert("Complete los campos obligatorios para el evento")
            }
        })
    }

    inicializarFormulario() {
        $('#start_date, #titulo, #end_date').val('');
        $('#start_date, #end_date').datepicker({
            dateFormat: "yy-mm-dd"
        });
        $('.timepicker').timepicker({
            timeFormat: 'HH:mm:ss',
            interval: 30,
            minTime: '5',
            maxTime: '23:59:59',
            defaultTime: '',
            startTime: '5:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        });
        $('#allDay').on('change', function(){
            if (this.checked) {
                $('.timepicker, #end_date').attr("disabled", "disabled")
            }else {
                $('.timepicker, #end_date').removeAttr("disabled")
            }
        })
    }

    inicializarCalendario(eventos) {
        $('.calendario').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,basicDay'
            },
            defaultDate: '2018-12-11',
            navLinks: true,
            editable: true,
            eventLimit: true,
            droppable: true,
            dragRevertDuration: 0,
            timeFormat: 'H:mm',
            eventDrop: (event, da) => {
              this.actualizarEvento(event,da._days)
            },
            events: eventos,
            eventDragStart: (event,jsEvent) => {
                $('.delete').find('img').attr('src', "img/trash-open.png");
                $('.delete').css('background-color', '#a70f19')
            },
            eventDragStop: (event,jsEvent) => {
                var trashEl = $('.delete');
                var ofs = trashEl.offset();
                var x1 = ofs.left;
                var x2 = ofs.left + trashEl.outerWidth(true);
                var y1 = ofs.top;
                var y2 = ofs.top + trashEl.outerHeight(true);
                if (jsEvent.pageX >= x1 && jsEvent.pageX<= x2 &&
                    jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                        this.eliminarEvento(event)
                        $('.calendario').fullCalendar('removeEvents', event.id);
                    }
                }
            })
        }

    actualizarEvento(evento,dias){
      var s = new Date(evento.start._d)
      s.addDays(dias)
      var e = ''
      if (evento.end != null){
        e = new Date(evento.end._d)
        e.addDays(dias)
      }
      let pad = "00", url = this.urlBase + "/update"
      let  json={
        id: evento.id,
        title: evento.title,
        user:location.href.split('?')[1].split('=')[1],
        isFullDay:evento.allDay,
        startDate:s.getFullYear() + '-' + (pad.substring(0, pad.length - (s.getMonth() + 1).toString().length) + (s.getMonth() + 1)) + '-' + (pad.substring(0, pad.length - s.getDate().toString().length) + s.getDate()),
        startTime:evento.start._i.split(' ')[1],
        endDate:e.getFullYear() + '-' + (pad.substring(0, pad.length - (e.getMonth() + 1).toString().length) + (e.getMonth() + 1)) + '-' + (pad.substring(0, pad.length - e.getDate().toString().length) + e.getDate()),
        endTime:evento.end._i.split(' ')[1]
      }
      $.post(url, json, (response) => {
          alert(response)
      })
    }
}

const Manager = new EventManager()
