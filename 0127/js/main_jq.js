$(document).ready(function () {

    //fetchAll 很多個
    const navLinkList = $('.navbar .nav-link');
    console.log('navLinkList', navLinkList);

    const navbar = $("#navbar");
    console.log('navbar', navbar)
    // console.log('navbarJquery.offsetHeight',navbarJquery.offsetHeight); //沒有這個東西

    const scrollReport = $('#scrollReport')
    console.log('scrollReport', scrollReport)

    const navigationTable = {};

    //jquery為jquery object 需使用each() //w3cschool misc 裡面可以查詢使用方法
    navLinkList.each(function (key) {
        const sectionID = $(this).data('target');
        console.log(sectionID);
        navigationTable[sectionID] = {
            link: $(this),
            //section: $('#' +sectionID),
            section: $(`#${sectionID}`),
        };
    });
    console.log('navigationTable', navigationTable);

    window.addEventListener('scroll', function () {
        // console.log('window',window);
        const y = Math.round(window.scrollY + navbar.height()); //讓他變整數
        // scrollReport.html(`目前所在的位置${y}`); //這裡也要改***
        scrollReport.text('目前所在的位置'+y); //這裡也要改***

        for(const key in navigationTable){
            const link= navigationTable[key].link;
            const section= navigationTable[key].section;
            // console.log('link',link);
            // console.log('section',section);

            //section top
            const top =section.offset().top;
            //section bottom
            const bottom = top +section.height(); //沒有辦法抓最低點，所以要用加法的方式去算出最低點
            

            //讓navbar的link顏色更改 ** 重要
            if(y>top && y< bottom){
                link.addClass('text-warning');
                section.addClass('is-active');
            }else{
                link.removeClass('text-warning');
                section.removeClass('is-active');
            }

        }
    });



});