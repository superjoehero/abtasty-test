function click_me() {
    dataLayer.push({
        'event': 'testclick',
        'items': [{
            'item_id': "productId",
            'item_name': "productName",
            'currency': "THB",
            'discount': 2.22, //regular price - final price
            'price': 9.99, //regular price
        }]
    })
}

function sub_push() {
    dataLayer.push({
        'event': 'sub_push'
    })
}

function unsub_push() {
    dataLayer.push({
        'event': 'unsub_push'
    })
}