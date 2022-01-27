$(document).ready(function () {
    // console.log('hello main js');

    //querySelectorAll像似於 fatchAll
    const navLinkList = document.querySelectorAll('.navbar .nav-link');
    // console.log(navLinkList, 'navLinkList')

    const navbar = document.getElementById('navbar')
    console.log(navbar, 'navbar')
    // console.log('navbar.offsetHeight',navbar.offsetHeight);

    const navbarJquery=$("#navbar");
    console.log( 'navbarJquery',navbarJquery)
    // console.log('navbarJquery.offsetHeight',navbarJquery.offsetHeight); //沒有這個東西

    const scrollReport = document.getElementById('scrollReport')
    // console.log(scrollReport, 'scrollReport')

    const navigationTable = {};
    //透過forEach 取出 navlinkList 所有的dom
    //因為有很多個 所以用forEach
    navLinkList.forEach(value => {
        // console.log('value',value);  <-value就是抓的每個<a>

        //data-target="section1"
        //js dataset
        const sectionID=value.dataset.target;
        // console.log("sectionID",sectionID);

        navigationTable[sectionID]={
            link: value,
            //<a class="nav-link" data-target="section1" href="#section1">Link 1</a>
            section : document.getElementById(sectionID)
            //<section id='section1' class='bg-warning'></section>
        };
        
   
    });
    console.log('navigationTable', navigationTable);

    window.addEventListener('scroll', function () {
        // console.log('window',window);
        const y = Math.round(window.scrollY + navbar.offsetHeight); //讓他變整數
        scrollReport.innerText = `目前所在的位置${y}`;
        // console.log('目前所在的位置'+y);

        for(const key in navigationTable){
            // console.log('navigationTable[key]',navigationTable[key]);
            const link= navigationTable[key].link;
            const section= navigationTable[key].section;
            // console.log('link',link);
            // console.log('section',section);

            //section top
            const top =section.offsetTop;
            //section bottom
            const bottom = top +section.offsetHeight; //沒有辦法抓最低點，所以要用加法的方式去算出最低點
            

            //讓navbar的link顏色更改 ** 重要
            if(y>top && y< bottom){
                link.classList.add('text-warning');
                section.classList.add('is-active');
            }else{
                link.classList.remove('text-warning');
                section.classList.remove('is-active');
            }

        }
    });

});