const subscriptions = {};
const webpush = require("web-push");

const vapidKeys = {
  "subject": "mailto: <raol.sharma15@gmail.com>",
  "publicKey": "BK_YLgj3eEZljszRkxHpcAfb4ajs6UTLAGB9Pim2khkLCYCC3lX454JBzCLT-NK6rnJu-hudt-mjG2vnOxs7JHs",
  "privateKey": "n5Vmoi_jNMCwVQdtg_Tq3Q0Zqw2GTBPvP6ElsqxOG0o"
  }

webpush.setVapidDetails(vapidKeys.subject, vapidKeys.publicKey, vapidKeys.privateKey);

function handlePushNotificationSubscription(req, res) {
  const subscriptionRequest = req.body.userSubscription;
  const susbscriptionId = req.body.USER_ID;
  subscriptions[susbscriptionId] = subscriptionRequest;
  res.status(201).json({ id: susbscriptionId });
}

function sendPushNotification(req, res) {
  const subscriptionId = req.body.sender.user_id;
  const pushSubscription = subscriptions[subscriptionId];
  webpush
    .sendNotification(
      pushSubscription,
      JSON.stringify({
        title: "Restricted Message Received!",
        text: "You've sent a message which may contain explicit language.",
        image: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
        tag: "new-product",
        url: "/new-product-jason-leung-HM6TMmevbZQ-unsplash.html"
      })
    )
    .catch(err => {
      console.log(err);
    });

  res.status(202).json({});
}

module.exports = { handlePushNotificationSubscription, sendPushNotification };
