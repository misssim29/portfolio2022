$(function(){
    const List = $(".content").find("ul");
    const popupList = $(".popup_list").find("ul");    
    const popupMain = $(".popup_main");
    let cNum;
    let count = 0;
    let page = 0;
    let navName  = "all";
    let listIdx;
    var arrContent = [
        {cNum: -2, thumbSrc: "images/thumb/4578.png", ListH3: "유저참여형", ListP: "#FAQ #검색 #발표", ListCategory: "유저참여형"},
        {cNum: -1, thumbSrc: "images/thumb/3383.png", ListH3: "애니메이션", ListP: "#질답형태 #환자케이스 #발표", ListCategory: "애니메이션"},
        {cNum: 0,  thumbSrc: "images/thumb/4359_1.png", ListH3: "애니메이션,그래프", ListP: "#나타나기 #강조 #도넛그래프", ListCategory: "애니메이션,그래프"},
        {cNum: 1,  thumbSrc: "images/thumb/4274_1.png", ListH3: "애니메이션", ListP: "#골프 #이미지전환 #이동 #발표", ListCategory: "애니메이션"},
        {cNum: 2,  thumbSrc: "images/thumb/4244_1.png", ListH3: "그래프,애니메이션", ListP: "#도넛그래프 #카운트", ListCategory: "그래프,애니메이션"},
        {cNum: 3,  thumbSrc: "images/thumb/3940_1.png", ListH3: "유저참여형", ListP: "#클릭 #드래그 #팝업", ListCategory: "유저참여형"},
        {cNum: 4,  thumbSrc: "images/thumb/3590_1.png", ListH3: "그래프,애니메이션", ListP: "#선그래프 #막대그래프 #강조 #나타나기", ListCategory: "그래프,애니메이션"},
        {cNum: 5,  thumbSrc: "images/thumb/3437_1.png", ListH3: "애니메이션", ListP: "#이동 #나타나기 #형태변화", ListCategory: "애니메이션"},
        {cNum: 6,  thumbSrc: "images/thumb/3433_1.png", ListH3: "애니메이션", ListP: "#강조 #나타나기", ListCategory: "애니메이션"},
        {cNum: 7,  thumbSrc: "images/thumb/3277_1.png", ListH3: "그래프,애니메이션", ListP: "#도넛그래프 #강조", ListCategory: "그래프,애니메이션"},
        {cNum: 8,  thumbSrc: "images/thumb/3263_1.png", ListH3: "애니메이션", ListP: "#나타나기", ListCategory: "애니메이션"},
        {cNum: 9,  thumbSrc: "images/thumb/3064_1.png", ListH3: "애니메이션", ListP: "#채우기 #강조 #이동 #나타나기", ListCategory: "애니메이션"},
        {cNum: 10, thumbSrc: "images/thumb/2970_1.png", ListH3: "유저참여형", ListP: "#드래그 #회전판 #채우기", ListCategory: "유저참여형"},
        {cNum: 11, thumbSrc: "images/thumb/2848_1.png", ListH3: "애니메이션", ListP: "#모기 #나타나기 #강조 #이동", ListCategory: "애니메이션"},
        {cNum: 12, thumbSrc: "images/thumb/2832_1.png", ListH3: "애니메이션,유저참여형", ListP: "#나타나기 #이미지전환 #강조 #펼치기 #클릭 #드래그", ListCategory: "애니메이션,유저참여형"},
        {cNum: 13, thumbSrc: "images/thumb/2794_1.png", ListH3: "애니메이션", ListP: "#강조 #박스 #나타나기 #채우기 #선그래프 #도넛그래프", ListCategory: "애니메이션"},
        {cNum: 14, thumbSrc: "images/thumb/2688_1.png", ListH3: "애니메이션,그래프", ListP: "#나타나기 #강조 #색채우기 #선그래프", ListCategory: "애니메이션,그래프"},
        {cNum: 15, thumbSrc: "images/thumb/2429_1.png", ListH3: "유저참여형, 애니메이션", ListP: "#탭 #작성페이지 #강조", ListCategory: "유저참여형,애니메이션"},
        {cNum: 16, thumbSrc: "images/thumb/2408_1.png", ListH3: "애니메이션", ListP: "#이동", ListCategory: "애니메이션"},
        {cNum: 17, thumbSrc: "images/thumb/2380_1.png", ListH3: "애니메이션,그래프", ListP: "#나타나기 #선그래프 #막대그래프 #표 #박스", ListCategory: "애니메이션,그래프"},
        {cNum: 18, thumbSrc: "images/thumb/2378_1.png", ListH3: "애니메이션", ListP: "#발표", ListCategory: "애니메이션"},
        {cNum: 19, thumbSrc: "images/thumb/2367_1.png", ListH3: "그래프,애니메이션", ListP: "#선그래프 #막대그래프 #강조", ListCategory: "그래프,애니메이션"},
        {cNum: 20, thumbSrc: "images/thumb/2360_1.png", ListH3: "애니메이션,유저참여형", ListP: "#바람개비 #회전 #팝업", ListCategory: "애니메이션,유저참여형"},
        {cNum: 21, thumbSrc: "images/thumb/2206_1.png", ListH3: "애니메이션,그래프", ListP: "#나타나기 #강조 #박스 #카드 #뒤집기 #선그래프", ListCategory: "애니메이션,그래프"},
        {cNum: 22, thumbSrc: "images/thumb/2205_1.png", ListH3: "애니메이션", ListP: "#강조 #블러 #표", ListCategory: "애니메이션"},
        {cNum: 23, thumbSrc: "images/thumb/1949_1.png", ListH3: "유저참여형", ListP: "#클릭 #이미지전환 #팝업", ListCategory: "유저참여형"},
        {cNum: 24, thumbSrc: "images/thumb/1855_1.png", ListH3: "애니메이션,유저참여형", ListP: "#차오르기 #나타나기 #이미지전환 #동영상 #클릭 #펼치기", ListCategory: "애니메이션,유저참여형"},
        {cNum: 25, thumbSrc: "images/thumb/1838_1.png", ListH3: "애니메이션", ListP: "#강조 #뒤집기 #이동", ListCategory: "애니메이션"},
        {cNum: 26, thumbSrc: "images/thumb/1513_1.png", ListH3: "애니메이션", ListP: "#이미지전환", ListCategory: "애니메이션"},
        {cNum: 27, thumbSrc: "images/thumb/1427_1.png", ListH3: "애니메이션", ListP: "#나타나기 #강조", ListCategory: "애니메이션"},
        {cNum: 28, thumbSrc: "images/thumb/1226_1.png", ListH3: "그래프,애니메이션", ListP: "#막대그래프 #사선그래프 #나타나기 #강조", ListCategory: "그래프,애니메이션"},
        {cNum: 29, thumbSrc: "images/thumb/1140_1.png", ListH3: "유저참여형,애니메이션", ListP: "#LP판 #이미지전환 #클릭", ListCategory: "유저참여형,애니메이션"},
        {cNum: 30, thumbSrc: "images/thumb/1013_1.png", ListH3: "유저참여형", ListP: "#뽑기 #랜덤 #퀴즈 #드래그", ListCategory: "유저참여형"},
        {cNum: 31, thumbSrc: "images/thumb/1012_1.png", ListH3: "유저참여형,애니메이션", ListP: "#벨트 #드래그 #타이핑 #나타나기", ListCategory: "유저참여형,애니메이션"},
        {cNum: 32, thumbSrc: "images/thumb/sample_1.png", ListH3: "유저참여형", ListP: "#낚시 #퍼즐", ListCategory: "유저참여형"},
    ];
    // 리스트 뿌리기
    for (cNum = -2; cNum <= 32; cNum++) {
        listIdx = arrContent.findIndex(obj=>obj.cNum == cNum); 
        List.append("<li cNum="+cNum+" class="+arrContent[listIdx]["contentType"]+"><img alt='썸네일' class='thumb' src="+arrContent[listIdx]["thumbSrc"]+"><div class='list_box'><h3>"+arrContent[listIdx]["ListH3"]+"</h3><p>"+arrContent[listIdx]["ListP"]+"</p></div></li>");
        popupList.append("<li cNum="+cNum+" class="+arrContent[listIdx]["contentType"]+"><img alt='썸네일' class='thumb' src="+arrContent[listIdx]["thumbSrc"]+"><div class='list_box'><h3>"+arrContent[listIdx]["ListCategory"]+"</h3></div></li>");
    }
    for (var l = 0; l < 6; l++) {
        List.find("li:eq("+l+")").fadeIn();
    }
    
    // 카테고리
    const ListNum = $(".content").find("li:last").index();
    $(".category").find("ul").find("li").on('click',function(){
        $(".search_txt").val("");
        List.find("li").hide();
        $(".category ul li").css({'color':'#444','background':'none'});
        $(this).css({'color':'#fff','background':'#70b5c9'});
        navName = $(this).attr("class");
        List.find("li").removeClass();
        for (cNum = -2; cNum <= 32; cNum++) {
            listIdx = arrContent.findIndex(obj=>obj.cNum == cNum); 
            if(arrContent[listIdx]["Web"] == 1){
                List.find("li[cNum ="+cNum+"]").addClass("web");
            }
        }
        popupList.find("li").hide();
        if(navName == "all"){
            page = 0;
            List.find("li").hide();
            for(all=0;all<6;all++){
                List.find("li:eq("+all+")").fadeIn();
            }
            for(all=0;all<ListNum;all++){
                popupList.find("li:eq("+all+")").fadeIn();
            }
            $(".view_more").show().removeClass('ani').addClass('all');
            $(".list_number").show().text("총 "+(ListNum+1)+"개");
        }
        else{
            page = 0;
            List.find("li").hide();
            let Val;
            if(navName == "animation"){
                Val = "애니메이션";
            }
            else if(navName =="graph"){
                Val = "그래프";
            }
            else if(navName == "user"){
                Val = "유저참여형";
            }
            else if(navName == "presentation"){
                Val = "발표";
            }
            count = 0;

            for(ani=0;ani<=ListNum;ani++){
                let Category = $(".content ul li:eq("+ani+")").text();
                let ani2;
                console.log(Category);
                if(Category.indexOf(Val) != -1){
                    count++;
                    List.find("li:eq("+ani+")").fadeIn().addClass('num'+count);
                    popupList.find("li:eq("+ani+")").show();
                }
            }
            if(count >= 6){
                $(".view_more").show().removeClass('all').addClass('ani');
                for(countAni=7;countAni<=count;countAni++){
                    List.find(".num"+countAni).hide();
                }
            }
            else{
                $(".view_more").hide();
            }
            
            $(".list_number").show().text("총 "+count+"개");
        }
    });
    // 검색
    const search = $(".search button");
    search.on('click',function(){
        List.find("li").hide();
        let search_txt = $(".search_txt").val();
        count = 0;
        if(navName == "animation"){
            for(e=0;e<=ListNum;e++){
                let HashTag = $(".content").find("ul").find("li:eq("+e+")").text();
                let CategoryName = $(".content").find("ul").find("li:eq("+e+")").find("h3").text();
                if(CategoryName.indexOf("애니메이션") != -1){
                    if(HashTag.indexOf(search_txt) != -1){
                        count ++;
                        $(".content").find("ul").find("li:eq("+e+")").show();
                    }
                }
            }
        }
        else if(navName == "graph"){
            for(e=0;e<=ListNum;e++){
                let HashTag = $(".content").find("ul").find("li:eq("+e+")").text();
                let CategoryName = $(".content").find("ul").find("li:eq("+e+")").find("h3").text();
                if(CategoryName.indexOf("그래프") != -1){
                    if(HashTag.indexOf(search_txt) != -1){
                        count ++;
                        $(".content").find("ul").find("li:eq("+e+")").show();
                    }
                }
            }
        }
        else if(navName == "user"){
            for(e=0;e<=ListNum;e++){
                let HashTag = $(".content").find("ul").find("li:eq("+e+")").text();
                let CategoryName = $(".content").find("ul").find("li:eq("+e+")").find("h3").text();
                if(CategoryName.indexOf("유저참여형") != -1){
                    if(HashTag.indexOf(search_txt) != -1){
                        count ++;
                        $(".content").find("ul").find("li:eq("+e+")").show();
                    }
                }
            }
        }
        else if(navName == "presentation"){
            for(e=0;e<=ListNum;e++){
                let HashTag = $(".content").find("ul").find("li:eq("+e+")").text();
                if(HashTag.indexOf("발표") != -1){
                    if(HashTag.indexOf(search_txt) != -1){
                        count ++;
                        $(".content").find("ul").find("li:eq("+e+")").show();
                    }
                }
            }
        }
        else{
            for(e=0;e<=ListNum;e++){
                let HashTag = $(".content").find("ul").find("li:eq("+e+")").text();
                if(HashTag.indexOf(search_txt) != -1){
                    count ++;
                    $(".content").find("ul").find("li:eq("+e+")").show();
                }
            }
        }
        $(".view_more").hide();
        $(".list_number").show().text("총 "+count+"개");
    });

    // 검색-엔터키
    $(".search_txt").on('keyup',function(){
        if (window.event.keyCode == 13) {
            $(".search").find("button").click();
        }
    });

    // 더보기
    $(".view_more").on('click',function(){
        if($(this).hasClass('all')){
            page = page+1;
            let Num = page*6;
            let Num2 = Num+6;
            for(pAll=Num;pAll<Num2;pAll++){
                List.find("li:eq("+pAll+")").fadeIn();
            }
            if(Num2 > ListNum){
                $(this).hide();
                page = 0;
            }
        }
        console.log(count)
        if($(this).hasClass('ani')){
            page = page+1;
            let Num = page*6;
            let Num2 = Num+6;
            
            for(pAni=Num;pAni<=Num2;pAni++){
                List.find(".num"+pAni).fadeIn();
            }
            if(Num2 >= count){
                $(this).hide();
                page = 0;
            }
        }
    });
    // 팝업
    let infoIdx;
    let pageLastIdx = 1;
    let pageIdx = 1;
    let loadUrl;
    var arrInfo = [
        {cNum: -2, loadUrl: "contents/4578/", pageLastIdx: 1, ContentH3: "유저참여형", ContentH4: "#FAQ #검색", Contentp: ""},
        {cNum: -1, loadUrl: "contents/3383/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#질답형태 #환자케이스", Contentp: ""},
        {cNum: 0,  loadUrl: "contents/4359/", pageLastIdx: 2, ContentH3: "애니메이션,그래프", ContentH4: "#나타나기 #강조 #도넛그래프", Contentp: "차오르는 도넛그래프와 제목 및 밑줄 강조효과 애니메이션을 확인하실 수 있습니다."},
        {cNum: 1,  loadUrl: "contents/4274/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#골프 #이미지전환 #이동", Contentp: "이미지 전환과 골프 슈팅 애니메이션 모션을 확인하실 수 있습니다."},
        {cNum: 2,  loadUrl: "contents/4244/", pageLastIdx: 1, ContentH3: "그래프,애니메이션", ContentH4: "#도넛그래프 #카운트", Contentp: "그래프가 도넛모양으로 차오르고 숫자가 카운트 되는 모션을 확인하실 수 있습니다."},
        {cNum: 3,  loadUrl: "contents/3940/", pageLastIdx: 1, ContentH3: "유저참여형", ContentH4: "#클릭 #드래그 #팝업", Contentp: "사용자가 직접 참여하는 형태로 버튼을 눌러 팝업을 열고 드래그바를 움직여 항목을 선택할 수 있습니다."}, 
        {cNum: 4,  loadUrl: "contents/3590/", pageLastIdx: 3, ContentH3: "그래프,애니메이션", ContentH4: "#선그래프 #막대그래프 #강조 #나타나기", Contentp: "기본형 선그래프, 막대그래프, 강조 모션과 하단 오른쪽 버튼 클릭시 스크롤형태의 팝업페이지를 확인하실 수 있습니다."}, 
        {cNum: 5,  loadUrl: "contents/3437/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#이동 #나타나기 #형태변화", Contentp: "형태변화와 움직이는 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 6,  loadUrl: "contents/3433/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#강조 #나타나기", Contentp: "강조와 등장의 기본형 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 7,  loadUrl: "contents/3277/", pageLastIdx: 1, ContentH3: "그래프,애니메이션", ContentH4: "#도넛그래프 #강조", Contentp: "그래프가 도넛모양으로 차오르는 모션과 강조 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 8,  loadUrl: "contents/3263/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#나타나기", Contentp: "순서대로 나타나는 등장 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 9,  loadUrl: "contents/3064/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#채우기 #강조 #이동 #나타나기", Contentp: "그림에 색이 채워지고 요소가 움직이는 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 10, loadUrl: "contents/2970/", pageLastIdx: 2, ContentH3: "유저참여형", ContentH4: "#드래그 #회전판 #채우기", Contentp: "사용자가 직접 참여하는 형태로 첫페이지에선 회전침을 드래그시 회전판이 움직이고 다음페이지에선 버튼을 드래그시 색이 채워집니다."}, 
        {cNum: 11, loadUrl: "contents/2848/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#모기 #나타나기 #강조 #이동", Contentp: "모기형태의 요소가 이동하고, 제목이 강조되는 등의 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 12, loadUrl: "contents/2832/", pageLastIdx: 4, ContentH3: "애니메이션,유저참여형", ContentH4: "#나타나기 #이미지전환 #강조 #펼치기 #클릭 #드래그", Contentp: "버튼 클릭으로 형태를 바꾸고 내용을 열람할 수 있으며, 마지막페이지에서는 버튼을 드래그하여 이미지를 전환할 수 있습니다."}, 
        {cNum: 13, loadUrl: "contents/2794/", pageLastIdx: 3, ContentH3: "애니메이션", ContentH4: "#강조 #박스 #나타나기 #채우기 #선그래프 #도넛그래프", Contentp: "선그래프와 박스로 내용을 강조하는 효과, 모양이 순서대로 채워지는 효과와 조각조각 채워지는 도넛그래프 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 14, loadUrl: "contents/2688/", pageLastIdx: 2, ContentH3: "애니메이션,그래프", ContentH4: "#나타나기 #강조 #색채우기 #선그래프", Contentp: "글씨의 색이 차오르고 선그래프, 등장, 강조 등의 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 15, loadUrl: "contents/2429/", pageLastIdx: 2, ContentH3: "유저참여형, 애니메이션", ContentH4: "#탭 #작성페이지 #강조", Contentp: "탭을 누르면 내용이 바뀌고 마지막페이지에서는 텍스트를 작성하실 수 있습니다."}, 
        {cNum: 16, loadUrl: "contents/2408/", pageLastIdx: 1, ContentH3: "애니메이션", ContentH4: "#이동", Contentp: "이동하는 아기의 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 17, loadUrl: "contents/2380/", pageLastIdx: 5, ContentH3: "애니메이션,그래프", ContentH4: "#나타나기 #선그래프 #막대그래프 #표 #박스", Contentp: "선,막대 형태의 그래프와 박스형태의 강조, 표 강조 등의 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 18, loadUrl: "contents/2378/", pageLastIdx: 1, ContentH3: "애니메이션", ContentH4: "#표", Contentp: "표의 등장 애니메이션을 확인하실 수 있습니다. 스크롤을 내려 내용을 더 확인하세요."}, 
        {cNum: 19, loadUrl: "contents/2367/", pageLastIdx: 3, ContentH3: "그래프,애니메이션", ContentH4: "#선그래프 #막대그래프 #강조", Contentp: "기본형 선,막대 그래프와 강조 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 20, loadUrl: "contents/2360/", pageLastIdx: 2, ContentH3: "애니메이션,유저참여형", ContentH4: "#바람개비 #회전 #팝업", Contentp: "바람개비가 회전하는 애니메이션과 클릭시 뜨는 팝업을 확인하실 수 있습니다."}, 
        {cNum: 21, loadUrl: "contents/2206/", pageLastIdx: 4, ContentH3: "애니메이션,그래프", ContentH4: "#나타나기 #강조 #박스 #카드 #뒤집기 #선그래프", Contentp: "카드가 뒤집히는 애니메이션과 선그래프, 박스형태의 강조 등의 애니메이션을 확인하실 수 있습니다.", width: 1152}, 
        {cNum: 22, loadUrl: "contents/2205/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#강조 #블러 #표", Contentp: "블러와 강조, 표가 하나씩 등장하는 애니메이션을 확인하실 수 있습니다.", width: 1152}, 
        {cNum: 23, loadUrl: "contents/1949/", pageLastIdx: 3, ContentH3: "유저참여형", ContentH4: "#클릭 #이미지전환 #팝업", Contentp: "버튼 클릭시 팝업이 뜨고 이미지가 전환되는 모션을 확인하실 수 있습니다."}, 
        {cNum: 24, loadUrl: "contents/1855/", pageLastIdx: 3, ContentH3: "애니메이션,유저참여형", ContentH4: "#차오르기 #나타나기 #이미지전환 #동영상 #클릭 #펼치기", Contentp: "버튼 클릭시 이미지가 전환되고 내용이 펼쳐집니다. 마지막페이지에서는 동영상을 확인하실 수 있습니다."}, 
        {cNum: 25, loadUrl: "contents/1838/", pageLastIdx: 2, ContentH3: "애니메이션", ContentH4: "#강조 #뒤집기 #이동", Contentp: "화살표가 이동하며 강조하는 애니메이션과 제목 강조 등의 애니메이션을 확인하실 수 있습니다.", width: 1152}, 
        {cNum: 26, loadUrl: "contents/1513/", pageLastIdx: 1, ContentH3: "애니메이션", ContentH4: "#이미지전환", Contentp: "역기를 드는 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 27, loadUrl: "contents/1427/", pageLastIdx: 3, ContentH3: "애니메이션", ContentH4: "#나타나기 #강조", Contentp: "강조와 등장의 기본형 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 28, loadUrl: "contents/1226/", pageLastIdx: 5, ContentH3: "그래프,애니메이션", ContentH4: "#막대그래프 #사선그래프 #나타나기 #강조", Contentp: "막대와 사선그래프, 강조와 등장의 애니메이션을 확인하실 수 있습니다.", width: 1152}, 
        {cNum: 29, loadUrl: "contents/1140/", pageLastIdx: 2, ContentH3: "유저참여형,애니메이션", ContentH4: "#LP판 #이미지전환 #클릭", Contentp: "왼쪽의 작은 LP판을 클릭시 LP판이 돌아가는 애니메이션이 실행됩니다."}, 
        {cNum: 30, loadUrl: "contents/1013/", pageLastIdx: 2, ContentH3: "유저참여형", ContentH4: "#뽑기 #랜덤 #퀴즈 #드래그", Contentp: "오브젝트를 드래그시 정답에 따라 결과물이 뜨고, 2페이지에선 랜덤뽑기로 50% 확률로 당첨될 수 있습니다."}, 
        {cNum: 31, loadUrl: "contents/1012/", pageLastIdx: 2, ContentH3: "유저참여형,애니메이션", ContentH4: "#벨트 #드래그 #타이핑 #나타나기", Contentp: "벨트를 움직여 안전벨트를 채우고, 다음페이지에서는 타이핑되는 텍스트 애니메이션을 확인하실 수 있습니다."}, 
        {cNum: 32, loadUrl: "contents/sample/", pageLastIdx: 2, ContentH3: "유저참여형", ContentH4: "#낚시 #퍼즐", Contentp: "낚싯대를 클릭해 낚시를 하고 퍼즐을 드래그하여 퍼즐을 맞출 수 있습니다."}
    ];

    List.find("li").on('click',function(e){
        //리스트에서 클릭 한 컨텐츠의 cNum
        cNum = $(this).attr("cNum");
        //리스트에서 가져온 cNum를 컨텐츠의 세부정보 arrInfo의 cNum와 매칭하여 배열번호 가져옴
        infoIdx = arrInfo.findIndex(obj=>obj.cNum == cNum);
        loadUrl = arrInfo[infoIdx]["loadUrl"];                
        pageIdx = 1;
        pageLastIdx = arrInfo[infoIdx]["pageLastIdx"];

        //선택 한 컨텐츠가 웹사이트인 경우 새창으로 사이트를 열고 종료.
        if($(this).attr("class") == "web") {
            window.open(loadUrl, 'pop_website');
            return;
        }
        
        $.fn.fncShowPopup = function(){
            
            $(".prev").hide();
            $(".content_list").show();
            $(".popup").fadeIn().css({'display':'flex'});
            $(".wrap").css({"position":'fixed'});
            $(".popup_page_frame").attr('width','1024');
            window.history.forward();

            pageLastIdx > 1 ? $(".next").show() : $(".next").hide();

            $(".content_list").find("h3").find("span").text(arrInfo[infoIdx]["ContentH3"]);
            $(".content_list").find("h4").text(arrInfo[infoIdx]["ContentH4"]);
            $(".content_list").find("p").text(arrInfo[infoIdx]["Contentp"]);

            arrInfo[infoIdx]["width"] ? $(".popup_page_frame").attr('width',arrInfo[infoIdx]["width"]) : '';

            $(".popup_page_frame").attr('src', loadUrl+"1/index.html");
            popupList.find(".list_box").show();
            popupList.find("li[cNum="+cNum+"]").find(".list_box").hide();

            // iframe 뒤로가기막기
            const iFrame = $('.popup_page_frame');
            const iFrameParent = iFrame.parent();
            iFrame.remove();
            iFrameParent.append(iFrame);
        }
        
        $(window).fncShowPopup();
        // const target = popupList.find("li:eq("+listIdx+")");
        const target = popupList.find("li[cNum="+cNum+"]");
        const ListScrollSize = parseInt(target.position().top);
        $(".popup_list").scrollTop(ListScrollSize);
        
    });
    
    // 팝업목록
    popupList.find("li").on('click',function(){       
        //리스트에서 클릭 한 컨텐츠의 cNum
        cNum = $(this).attr("cNum");
        //리스트에서 가져온 cNum를 컨텐츠의 세부정보 arrInfo의 cNum와 매칭하여 배열번호 가져옴
        infoIdx = arrInfo.findIndex(obj=>obj.cNum == cNum);
        pageIdx = 1;
        pageLastIdx = arrInfo[infoIdx]["pageLastIdx"];
        loadUrl = arrInfo[infoIdx]["loadUrl"]; 
        if($(this).attr("class") == "web") {
            window.open(loadUrl, 'pop_website');
            return;
        }
        else{
            $(window).fncShowPopup();
        }
        

        
    });

    // 팝업닫기
    $(".popup .close").on('click',function(){
        $(".wrap").css({"position":'relative'});
        $(".popup").fadeOut();
    });

    // 페이지넘기기
    popupMain.find(".next").on('click',function(){

        $(".prev").show();
        pageIdx = pageIdx+1;
        if(pageIdx == pageLastIdx){
            $(".next").hide();
        }
        else{
            $(".next").show();
        }
        $(".popup_page_frame").attr('src', loadUrl+pageIdx+"/index.html");
    });
    // 페이지이전으로
    popupMain.find(".prev").on('click',function(){

        $(".next").show();
        pageIdx = pageIdx-1;
        if(pageIdx == 1){
            $(".prev").hide();
        }
        else{
            $(".prev").show();
        }
        $(".popup_page_frame").attr('src', loadUrl+pageIdx+"/index.html");
    });

    //팝업화면 제목 클릭시
    popupMain.find("h3").on('click',function(){
        window.open(loadUrl+pageIdx+"/index.html");
    });

});