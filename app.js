$.ajax("data.json").then(function(response){
    var i = 0;
    for(i; i<response.length; i++){
        var $content = '';
        $id = response[i].id;
        $gender = response[i].gender;
        $firstname = response[i].first_name;
        $lastname = response[i].last_name;
        $email = response[i].email;
        $content = 'ID: ' + $id + '</br>' + 'Gender: ' + $gender + '</br>' + 'First Name: ' + $firstname + '</br>' + 'Last Name: ' + $lastname + '</br>' + 'Email: ' + $email + '</br> </br>';
        console.log($content);
        if ($email == undefined){
            $content = 'ID: ' + $id + '</br>' + 'Gender: ' + $gender + '</br>' + 'First Name: ' + $firstname + '</br>' + 'Last Name: ' + $lastname + '</br>' + 'Email: No Email on File' + '</br> </br>';

        }
        $(".content").append($content);
    }
});