import Handlebars from "handlebars";

export default function registerIfHelper() {
  Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Так надо)
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  });
}
