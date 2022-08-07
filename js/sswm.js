//SIBERIAN SCRRIPT VIDEO MODULE


function _sswm_showvideo(videoid){

//NEXT VIDEO (LOGO OF SITE)
//var nextvideo=''; //Default 1P3fL5noeLM
    if(typeof _ssvm_nextvideo == "undefined"){
        var _ssvm_nextvideo=''; //Default 1P3fL5noeLM
    }
    if(typeof _ssvm_hideonclick == "undefined"){
        var _ssvm_hideonclick=0; //Default 0
    }


    if(videoid!=""){
        $( '._sswm_popup' ).addClass( '_sswm_jsVisible' );
        $('#_sswm_videocontainer iframe')[0].src= 'https://www.youtube.com/embed/'+videoid+'?rel=0&autoplay=1&modestbranding=1&showinfo=0&theme=light&color=white&version=3&hl=ru&autohide=1&iv_load_policy=3&origin={$url}/&cc_load_policy=1&showinfo=0&playlist='+_ssvm_nextvideo+'&vhs=1';
    }
}

function _sswm_hidevideo(){
    $( '._sswm_popup' ).removeClass( '_sswm_jsVisible' );
    $('#_sswm_videocontainer iframe')[0].src= '';
}

function _sswm_hideonclick(){
    if(_ssvm_hideonclick==1){
        _sswm_hidevideo();
    }
}
