const express = require("express");
const app = express();
const sgMail = require("@sendgrid/mail");
const key = ""; //process.env.SENDGRID_API_KEY
sgMail.setApiKey(key);

let CustomerEmail = "";
let salesTeamEmail = "sales@polyte.com"; // add sales team email
let from = "sendgrid_from_email@gmail.com"; // add from send grid email
let subject = "New Customer Plan Request";
let html = "";

app.use(express.json());

app.post("/send", (req, res) => {
  console.log(req.body);
  CustomerEmail = req.body.form.email;
  sendToSalesTeam(req, res);
});

async function sendToCustomerEmail(req, res) {
  let firstname = req.body.form.firstname;
  let lastname = req.body.form.lastname;
  subject = "Your Plan Request Created Successfully";
  let selected_plan = req.body.selected_plan;
  let products = req.body.products;
  html = `
    <h1>Your Plan Request</h1>
    </br>
    <h3>Selected Plan</h3>
    `;

  products.forEach((product) => {
    html += `
        <ul>
            <li>Product: ${product.name}</li>
            <li>Difficulty: ${product.difficulty}</li>
            <li>Qty: ${product.qty}</li>
            <li>Price: ${product.price}</li>
        </ul>
        `;
  });
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price * product.qty;
  });
  totalPrice = totalPrice + selected_plan.yearly;

  html += `
    <h3>Total Price: ${totalPrice}</h3>
    `;

  const msg = {
    to: CustomerEmail,
    from: from,
    subject: subject,
    html: html,
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.send({
        status: "success",
        message: "Email sent",
        code: 200,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send({
        status: "error",
        message: "Email not sent",
        code: 500,
      });
    });
}

async function sendToSalesTeam(req, res) {
  let firstname = req.body.form.firstname;
  let lastname = req.body.form.lastname;

  let selected_plan = req.body.selected_plan;
  let products = req.body.products;
  html = `
    <h1>Customer Plan Request</h1>
    <h3>Customer Information</h3>
    <ul>
        <li>First Name: ${firstname}</li>
        <li>Last Name: ${lastname}</li>
        <li>Email: ${CustomerEmail}</li>
    </ul>
    <h3>Selected Plan</h3>
    <ul>
        <li>Plan: ${selected_plan.name}</li>
        <li>Monthly: Price: ${selected_plan.monthly}</li>
        <li>Yearly: Price: ${selected_plan.yearly}</li>
    </ul>
    <h3>Selected Products</h3>
    `;
  products.forEach((product) => {
    html += `
        <ul>
            <li>Product: ${product.name}</li>
            <li>Difficulty: ${product.difficulty}</li>
            <li>Qty: ${product.qty}</li>
            <li>Price: ${product.price}</li>
        </ul>
        `;
  });
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price * product.qty;
  });
  totalPrice = totalPrice + selected_plan.yearly;

  html += `
    <h3>Total Price: ${totalPrice}</h3>
    `;

  const msg = {
    to: salesTeamEmail,
    from: from,
    subject: subject,
    html: html,
  };
  await sgMail
    .send(msg)
    .then(() => {
      sendToCustomerEmail(req, res);
    })
    .catch((error) => {
      console.log(error);
      res.send({
        status: "error",
        message: "Email not sent",
        code: 500,
      });
    });
}

module.exports = {
  path: "/api",
  handler: app,
};