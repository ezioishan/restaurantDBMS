/*var log_email= document.querySelector('#log_email').value ;
var log_passwd = document.querySelector('#log_passwd').value ;
var sig_email = document.querySelector('#sig_email').value ; 
var sig_passwd = document.querySelector('#sig_passwd').value ;
var sig_usr  =  document.querySelector('#sig_usr').value ;
var sig_rep_passwd = document.querySelector('#sig_rep_passwd').value ;
*/


var log_email = $('#log_email').val() ;
var log_passwd = $('#log_passwd').val() ;
var sig_email= $('#sig_email').val() ;
var sig_passwd = $('#sig_passwd').val() ;
var sig_usr = $('#sig_usr').val() ;
var sig_rep_passwd = $('#sig_rep_passwd').val() ;

var compare = function(s1,s2) {
    if (s1===s2){
        return true;
    }
    else{
        return false;
    }
}
