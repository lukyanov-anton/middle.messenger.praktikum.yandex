import Handlebars from "handlebars";

export default function registerIfHelper() {
  Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  });
}
