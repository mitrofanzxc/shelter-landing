import Mail from "./assets/img/mail.svg";
import Phone from "./assets/img/phone.svg";
import Location from "./assets/img/location.svg";

const FooterList = [
  {
    name: "For questions and suggestions",
    firstName: "email@shelter.com",
    secondName: "+13 674 567 75 54",
    hrefFirst: "mailto:email@shelter.com",
    hrefSecond: "tel:+136745677554",
    srcFirst: Mail,
    altFirst: "Mail",
    srcSecond: Phone,
    altSecond: "Phone",
  },
  {
    name: "We are waiting for your visit",
    firstName: "1 Central Street, Boston (entrance from the store)",
    secondName: "18 South Park, London ",
    hrefFirst: "https://goo.gl/maps/j1jYjnpuqneY7LNc8",
    hrefSecond: "https://goo.gl/maps/4YV3Deb2wmEvb8CQ9",
    srcFirst: Location,
    altFirst: "Location",
    srcSecond: Location,
    altSecond: "Location",
  },
];

export { FooterList };
