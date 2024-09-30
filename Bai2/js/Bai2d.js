function fristname() {
    
    let regex = /^[\S]$/;
    let username = document.getElementById("username").value;
    let kq = regex.test(username);
    if(kq == true){
        document.getElementById('pls3').style.display = 'none';
        document.getElementById('lg3').style.display = 'inline';
    }
    else{
        document.getElementById('lg3').style.display = 'none';
        document.getElementById('pls3').style.display = 'inline';
    }
}
