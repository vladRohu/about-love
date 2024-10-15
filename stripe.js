// const stripe = Stripe(
//   "-pk_test_51PDvtrGIY8D6miTkVp4XUqO5riDd1iPPpP9WfjUFURwtcYhJNKiPQ2itER7DbR7a5LJ7MYuO5XAl37lM6NXNzrHT0008rXjCjB"
// );

// var buttons = document.querySelectorAll(".check");

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     stripe
//       .redirectToCheckout({
//         lineItems: [{ price: "-price_1PFxYJGIY8D6miTkXAm0df7b", quantity: 1 }],
//         mode: "payment",
//         successUrl: "https://about-the-love.com/",
//         cancelUrl: window.location.href,
//       })
//       .then(function (result) {
//         if (result.error) {
//           console.error(result.error.message);
//         } else {
//
//           showPopup();
//         }
//       });
//   });
// });

// function showPopup() {
//   document.getElementById("popup").style.display = "block";
// }

// document.getElementById("close-popup").addEventListener("click", function () {
//   document.getElementById("popup").style.display = "none";
// });
