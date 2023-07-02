//1 단계 : 움직일 대상을 지정
//gnb를 타겟 잡습니다
//타겟잡는방법 =>  $("타겟을 잡을 대상")
//$("#gnb")
//2 단계 : 대상에 어떤 동작을 시킬지 정합니다
//=> 이벤트를 정하는 내용
//$("#gnb").on("mouseenter",function(){});
// #gnb라는 요소에 마우스엔터라는 이벤트가 작동하면
// , 다음에 있는 함수를 실행하라는 명령입니다

//3 단계 : 이벤트 발생시 실행할 함수의 내용을 정합니다
$(".gnb").on("mouseenter",function(){
    $(".sub").stop().slideDown(500);
});

$(".gnb").on("mouseleave",function(){
    $(".sub").stop().slideUp(500);
})

//슬라이드
// 반복적으로 함수를 3초마다 실행하도록하는 코드
//setInterval은 반복적으로 실행하라는 명령
setInterval(function(){
    //반복할 내용이 들어옵니다
    $(".frame").animate({"top":"-300px"},function(){
        $(".frame>li").eq(0).appendTo(".frame");
        //frame의 첫번째 li를 frame의 맨 마지막에 붙여
        //달라는 코드입니다
        $(".frame").css({top:0});
    })
    //ul.frame을 top 0에서 top -300px로 이동시키는
    //모션을 코딩한것입니다 
},3000);

//tab메뉴
//ul.tab 안에 li를 지정해서, click이라는 이벤트를 걸어
//함수안에 클릭했을때의 동작을 코딩합니다
$(".tab>li").on("click",function(){
    //1단계 on클래스를 모두 제거합니다
    $(".tab").find("li").removeClass("on");
    $(".content").find("div").removeClass("on");

    //2-1단계 클릭한 대상의 li에 on을 붙입니다
    $(this).addClass("on");
    //2-2단계 클릭한 대상의 li안에 a태그안의
    //href속성을 연동해서 해당 값과 연결된
    //div에 on클래스를 붙입니다
    var conId = $(this).children("a").attr("href");
    console.log(conId);
    $(conId).addClass("on");

})

// 공지사항의 첫번째 컨텐츠를 클릭하면~
$("#notice>ul>li").eq(0).on("click",function(){
    //popup이 나타난다
    $(".popup").css("display","block");
    // 팝업에 접근해서 css를 조정합니다 display:block;으로
});

//닫기버튼을 클릭하면~
$("#close").on("click",function(){
    //popup을 안보이게 한다
    $(".popup").css("display","none");
});