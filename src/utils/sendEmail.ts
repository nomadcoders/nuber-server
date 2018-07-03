import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox6dc95a40763144f59f34911bf0fb8eaf.mailgun.org"
});
