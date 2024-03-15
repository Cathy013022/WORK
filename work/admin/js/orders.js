

$(document).ready( function () {
    $('#myTable').DataTable({
        searching: false,
        lengthChange: false,
        info :false,
        ordering: false,
        processing: true,
       

    });
} );


function hiddentd(){
    var t =document.getElementById("orderID");
    if (t.style.display === 'block'){
        t.style.display ="block";
    }else{
            t.style.display ="none";
        }
    
}

function datatables() {
    return {
        headings: [
            {
                'key': 'orderID',
                'value': 'Order ID'
            },
            {
                'key': 'customer',
                'value': 'Customer'
            },
            {
                'key': 'productList',
                'value': 'Product List'
            },
            {
                'key': 'quantity',
                'value': ''
            },
            {
                'key': 'total',
                'value': 'Total'
            },
            {
                'key': 'addtocart',
                'value': 'Add to Cart'
            },
            {
                'key': 'checkout',
                'value': 'Check-out'
            },
            {
                'key': 'address',
                'value': 'Address'
            },
            {
                'key': 'phone',
                'value': 'Phone'
            },
            {
                'key': 'emaill',
                'value': 'Emaill'
            }
            ,
            {
                'key': 'status',
                'value': 'Status'
            }
        ],
        users: [{
            "orderID": 1,
            "customer": "Ian Medina",
            "productList": ["Vestibulum.","Fusce vehicu."],
            "quantity":"1",
            "total": "$2,200",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 2,
            "customer": "Manuel Stephens",
            "productList": "Donec facili.",
            "quantity":"1",
            "total": "$1,400",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 3,
            "customer": "Daisy Reynolds",
            "productList": "Curabitur lo.",
            "quantity":"1",
            "total": "$3,000",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 4,
            "customer": "Daisy Reynolds",
            "productList": "Lorem ipsum.",
            "quantity":"1",
            "total": "$2,800",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "PAID",
        }, {
            "orderID": 5,
            "customer": "Daisy Reynolds",
            "productList": "Nam porttito.",
            "quantity":"1",
            "total": "$2,800",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "PAID",
        }, {
            "orderID": 6,
            "customer": "Daisy Reynolds",
            "productList": "Oliy",
            "quantity":"1",
            "total": "Mairs",
            "addtocart": "2018/6/8 13:39",
            "checkout": "Female",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "PAID",
        }, {
            "orderID": 7,
            "customer": "Ian Medina",
            "productList": ["Vestibulum.","Fusce vehicu."],
            "quantity":"1",
            "total": "$2,200",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        },{
            "orderID": 8,
            "customer": "Ian Medina",
            "productList": ["Vestibulum.","Fusce vehicu."],
            "quantity":"1",
            "total": "$2,200",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 9,
            "customer": "Manuel Stephens",
            "productList": "Donec facili.",
            "quantity":"1",
            "total": "$1,400",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 10,
            "customer": "Daisy Reynolds",
            "productList": "Curabitur lo.",
            "quantity":"1",
            "total": "$3,000",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "SHIPPING",
        }, {
            "orderID": 11,
            "customer": "Daisy Reynolds",
            "productList": "Lorem ipsum.",
            "quantity":"1",
            "total": "$2,800",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "PAID",
        }, {
            "orderID": 12,
            "customer": "Daisy Reynolds",
            "productList": "Nam porttito.",
            "quantity":"1",
            "total": "$2,800",
            "addtocart": "2018/6/8 13:39",
            "checkout": "2018/6/8 20:23",
            "address": "386 Windler Drives Apt. 358",
            "phone": "327-626-5542",
            "emaill": "ccc@gmail.com",
            "status": "PAID",
        },
    ],
        selectedRows: [],

        open: false,
        
        toggleColumn(key) {
            let columns = document.querySelectorAll('.' + key);

            if (this.$refs[key].classList.contains('hidden') && this.$refs[key].classList.contains(key)) {
                columns.forEach(column => {
                    column.classList.remove('hidden');
                });
            } else {
                columns.forEach(column => {
                    column.classList.add('hidden');
                });
            }
        },

       

        selectAllCheckbox($event) {
            let columns = document.querySelectorAll('.rowCheckbox');

            this.selectedRows = [];

            if ($event.target.checked == true) {
                columns.forEach(column => {
                    column.checked = true
                    this.selectedRows.push(parseInt(column.name))
                });
            } else {
                columns.forEach(column => {
                    column.checked = false
                });
                this.selectedRows = [];
            }
        }
    }
}
