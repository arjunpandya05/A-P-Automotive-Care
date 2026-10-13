// Lab 3, Problem 1: collect form data and store customer objects.
const customers = [];

const customerForm = document.getElementById("customer-form");
const formMessage = document.getElementById("form-message");

customerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const customer = {
    id: customers.length + 1,
    name: document.getElementById("customer-name").value.trim(),
    email: document.getElementById("customer-email").value.trim(),
    phone: document.getElementById("customer-phone").value.trim(),
    vehicle: document.getElementById("vehicle").value.trim()
  };

  customers.push(customer);

  console.clear();
  console.log(customers);

  formMessage.textContent = "Customer added. Open the browser developer console to see the customers array.";
  customerForm.reset();
});
