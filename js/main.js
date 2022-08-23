/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const celsius = Number(prompt('Température en celsius'));
  if (isNaN(celsius)) {
    alert(`Entrez un nombre`);
  } else {

    let Farenheit = Number('celsius * 9 / 5 + 32');

    alert(`${celsius}°C = ${Farenheit}°F`);

    console.log(Farenheit);
}
}()); // Main IIFE

