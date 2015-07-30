// ==UserScript==
// @name         ERP TimeTable Improver
// @namespace    http://your.homepage/
// @version      0.1
// @description  Imrove the ERP time table.
// @author       You
// @match        https://erp.iitkgp.ernet.in/IIT_ERP2/welcome.jsp?module_id=16&menu_id=40&parent_menu_id=231
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==


$(setTimeout(run, 2000));

var subjectHash = {
    'CS60045' : 'Artificial Intelligence',
    'CS60017' : 'Social Computing',
    'CS60026' : 'Parallel and Distributed Algorithms'
}

function beautify(bee) {
    parts = bee.innerHTML.split('<br>')
    code = parts[0]
    room = parts[1]
    newHTML = '<span style="font-size: 10px; color: green;">' + code + '</span><br><span style="">' + subjectHash[code] + '</span><br><span style="font-size: 10px; color: red;">' + room + '</span>'
    bee.innerHTML = newHTML;
}

function run() {
    alert('script running')
    iframe = $('iframe')
    bees = $('b', iframe.contents())
    console.log(bees)
    re = /[A-Z]{2}[0-9]{5}/i
    arr = []
    for(i = 0; i < bees.length; i++) {
        if(re.exec(bees[i].innerHTML) != null) {
            arr.push(bees[i]);
        }
    }
    console.log(arr)
    for(i = 0; i < arr.length; i++) {
        beautify(arr[i])
    }
}


