function showAlert() {
    navigator.notification.alert(
        'This is a simple alert message!',  // message
        alertDismissed,                     // callback
        'Alert',                            // title
        'OK'                                // buttonName
    );
}

function alertDismissed() {
    console.log('Alert dismissed');
}
