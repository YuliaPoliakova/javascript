/* Task 1*/
var city = prompt('Введіть Ваше місто проживання:');
var age = prompt('Введіть Ваш вік:');
var name = prompt('Введіть Ваше ім\'я:');
var cityElement = document.createElement('p');
var ageElement = document.createElement('p');
var nameElement = document.createElement('p');
cityElement.innerText = city;
ageElement.innerText = age;
nameElement.innerText = name;
document.body.appendChild(cityElement);
document.body.appendChild(ageElement);
document.body.appendChild(nameElement);
console.log('ім\'я:', name);
console.log('вік:', age);
console.log('місто:', city);
/* End of Task1 */

/* Task 2 */
var x = 6;
var y = 14;
var z = 4;
x += y - x++ * z; // Спочатку інкремент х, потім множення, потім віднімання, потім додавання 
z = --x - y*5; // Спочатку декремент x, потім множення та віднімання
y /= x + 5%z;
z - x++ + y*5;
x = y - x++ * z;
console.log('x=', x, 'y=', y, 'z=', z);
/* End of Task1 */