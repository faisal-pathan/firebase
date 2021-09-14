<html>
<head>
    <title>Retrive Data</title>
</head>
<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        font-size: 20px;
    }
    strong {
        color: red;
    }
    em {
        color: black;
    }
    fa {
        padding: 20px;
    }
</style>

<body>

<center>
    <table id="table" border="1", style="width: 10%">
        <tr>
            <!--<th>Device ID</th>-->
            <th>BOX ID</th>
            <!--<th>Timestamp</th>-->
            <th>Length</th>
            <th>Width</th>
            <th>Height</th>
            <th>Remark</th>
        </tr>

        <tr>
            <!--<th><p id="deviceID"></p></th>-->
            <th><p id="id"></p></th>
            <!--<td><p id="timeStamp"</p></td>-->
            <td><fa><em id="length"></em><strong id="wronglength"></strong></fa></td>
            <td><fa><em id="width"></em><strong id="wrongwidth"></strong></fa></td>
            <td><fa><em id="height"></em><strong id="wrongheight"></strong></fa></td>
            <td><em id="remark"></em><strong id="wrongremark"></strong></td>
        </tr>

    </table>


</center>
<br>
<br>
<center>
    <button id="getbtn" type="button" onclick="getdata();">GET</button>
</center>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase.js"></script>



<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>



<script>
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCCVL5a5gifa9lJ9JSW3JCR84r7ur8gu9w",
        authDomain: "fir-senddata-73949.firebaseapp.com",
        databaseURL: "https://fir-senddata-73949-default-rtdb.firebaseio.com",
        projectId: "fir-senddata-73949",
        storageBucket: "fir-senddata-73949.appspot.com",
        messagingSenderId: "1055015658230",
        appId: "1:1055015658230:web:89c1e2ceb7dca7289b42d7",
        measurementId: "G-Q1YMF10M2K"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


</script>
<!-- <script type="text/javascript" src="js/Firebase.js"></script> -->


<script type="text/javascript" src="js/Read.js"></script>

</body>
</html>
