/* 
    Created on : Jan 14, 2018, 8:40:09 PM
    Author     : Mohamed Al Moelef
    Email      : info@fullstackdeveloper.org
    Website    : fullstackdeveloper.org
*/

// Generate Unique ID for Elemnts
const uniqId = () => {
  return Math.round(new Date().getTime() + (Math.random() * 100));
};

const openNewTab = (url) => {
  var win = window.open(url, '_blank');
  win.focus();
};




export {uniqId, openNewTab};
    