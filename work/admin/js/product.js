




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
                'key': 'product',
                'value': 'Product'
            },
            {
                'key': 'original',
                'value': 'Original'
            },
            {
                'key': 'discount',
                'value': 'Discount'
            },
            {
                'key': 'size',
                'value': 'Size'
            },
            {
                'key': 'color',
                'value': 'Color'
            },
            {
                'key': 'inventory',
                'value': 'Inventory'
            },
            {
                'key': 'status',
                'value': 'Status'
            },
        ],
        users: [{
            "product": "Mauris non tem.",
            "original": "$3,200",
            "discount":"$2,800",
            "size": "L",
            "color": ["Gray","Black"],
            "inventory": "15,20",
            "status": "327-626-5542",
            
        }, {
            "product": "Curabitur lobo.",
            "original": "$3,200",
            "discount":"$2,800",
            "size": "L",
            "color": ["Gray","Black"],
            "inventory": "15,20",
            "status": "144-190-8956",
            
        }, {
            "product": "Curabitur lobo.",
            "original": "$3,200",
            "discount": "$2,800",
            "size": "L",
            "color": ["Gray","Black"],
            "inventory": "15,20",
            "status": "350-937-0792",
            
        }, 
    ],
        selectedRows: [],

        open: false,
        
        
        

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





$("#file-uploader").change(function(){
    $("#file-imgs").html(""); 
    readURL(this);
  });
  
  function readURL(input){
    if (input.files && input.files.length >= 0) {
      for(var i = 0; i < input.files.length; i ++){
        var reader = new FileReader();
        reader.onload = function (e) {
          var img = $("<img width='100' height='100'>").attr('src', e.target.result);
          $("#file-imgs").append(img);
        }
        reader.readAsDataURL(input.files[i]);
      }
    }else{
       
       $("#file-imgs").append(noPictures);
    }
  }