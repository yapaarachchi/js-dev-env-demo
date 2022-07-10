import numeral from "numeral";
import './index.css'

const courseValue = numeral(1000).format('$0.00');
//debugger;
console.log(`I would like to pay ${courseValue}for this course`);
