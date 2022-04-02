import Handlebars from 'handlebars';

export default function registerDateHelper() {
    Handlebars.registerHelper('dateFormat', function (date, {hash}) {   
        const options = {  month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
    });
    Handlebars.registerHelper('timeFormat', function (date, {hash}) {   
        const options = {  hour:'numeric', minute:'numeric' };
        return date.toLocaleDateString('ru-RU', options);
    });
}  