function  getdata(){

    firebase.database().ref('Parcel/').once('value').then(function (snapshot) {

        var length=snapshot.val().Length;
        var height=snapshot.val().Height;
        var width=snapshot.val().Width;

        //var timeStamp = snapshot.val().TimeStamp;
        //var deviceId = snapshot.val().DeviceId;
        var id = snapshot.val().ID;

        var wronglength=snapshot.val().Length;
        var wrongwidth=snapshot.val().Width;
        var wrongheight=snapshot.val().Height;

        var remark = "Data in Range";
        var wrongremark = "Range Exceed";
        var wrongremark1 = "Range Below Limit"
        var wrongremark2 = "Some elements of data are out of defined range"

        var empty = "";

        document.getElementById("id").innerHTML=id;
        //document.getElementById("timeStamp").innerHTML=timeStamp;
        //document.getElementById("deviceID").innerHTML=deviceId;

        var upperlimit = 120;
        var lowerlimit = 12;
//REMARK
        if((length > upperlimit || width > upperlimit || height > upperlimit)&&(length < lowerlimit || width < lowerlimit || height < lowerlimit)){
            document.getElementById("wrongremark").innerHTML = wrongremark2;
            document.getElementById("remark").innerHTML = empty;
        }
        else if(length > upperlimit || width > upperlimit || height > upperlimit){
            document.getElementById("wrongremark").innerHTML = wrongremark;
            document.getElementById("remark").innerHTML = empty;
        }
        else if(length < lowerlimit || width < lowerlimit || height < lowerlimit) {
            document.getElementById("wrongremark").innerHTML = wrongremark1;
            document.getElementById("remark").innerHTML = empty;
        }
        else{
            document.getElementById("remark").innerHTML= remark;
            document.getElementById("wrongremark").innerHTML = empty;
        }
//LENGTH
        if(length > upperlimit){
            document.getElementById("wronglength").innerHTML=wronglength;
            document.getElementById("length").innerHTML = empty;
        }
        else if (length < lowerlimit){
            document.getElementById("wronglength").innerHTML=wronglength;
            document.getElementById("length").innerHTML = empty;
        }
        else {
            document.getElementById("length").innerHTML=length;
            document.getElementById("wronglength").innerHTML = empty;
        }
//WIDTH
        if(width > upperlimit){
            document.getElementById("wrongwidth").innerHTML=wrongwidth;
            document.getElementById("width").innerHTML = empty;
        }
        else if (width < lowerlimit){
            document.getElementById("wrongwidth").innerHTML=wrongwidth;
            document.getElementById("width").innerHTML = empty;
        }
        else {
            document.getElementById("width").innerHTML=width;
            document.getElementById("wrongwidth").innerHTML = empty;
        }
//HEIGHT
        if(height > upperlimit){
            document.getElementById("wrongheight").innerHTML=wrongheight;
            document.getElementById("height").innerHTML = empty;
        }
        else if (height < lowerlimit){
            document.getElementById("wrongheight").innerHTML=wrongheight;
            document.getElementById("height").innerHTML = empty;
        }
        else {
            document.getElementById("height").innerHTML=height;
            document.getElementById("wrongheight").innerHTML = empty;
        }

    })
}

