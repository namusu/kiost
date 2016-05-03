/**
 * Created by acego on 2016. 4. 27..
 */


/* MSIE 9이하 버전체크 */
function ms_ver(){ 
    if(navigator.userAgent.match('MSIE')){
        var msie = navigator.userAgent;
        var ms_ver = msie.substr(msie.lastIndexOf('MSIE')).split('MSIE')[1];
        ms_ver = Number(ms_ver.split('.')[0]);

        return ms_ver;
    }else{
        return null;
    }
}

function mediaRespond(){

    if(ms_ver() != true){

    }else{
        //익스8
        $('head').append("<link rel='stylesheet' type='text/css' href='css/ie8.css'>");
    }
}
