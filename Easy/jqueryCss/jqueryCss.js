/**
 * @param {string} selector
 * @return {{css: Function}}
 */
function $(selector) {
    const element = document.querySelector(selector);
  
    return {
      css: function (prop, value) {
        // Getter case.
        if (value === undefined) {
          // No matching elements.
          if (element == null) {
            return undefined;
          }
  
          const value = element.style[prop];
          return value === '' ? undefined : value;
        }
  
        // Setter case.
        if (element != null) {
          element.style[prop] = value;
        }
  
        return this;
      },
    };
}
  
const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');

$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');
