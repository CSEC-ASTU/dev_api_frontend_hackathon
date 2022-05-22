
/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}



function formSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    var imagefile = upload = $("#upload")[0];
    const url = "http://192.168.0.66:4545/api/digit/recognition/"
    formData.append("image", imagefile.files[0]);
    axios.post(url, formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    }).then((response)=>{
        $("#result").toggleClass("d-none");
        $("#number").text(response.data[0][1]);
    })
}