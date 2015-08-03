// ==UserScript==
// @name         CDCNoticeBoardOnHomePage
// @namespace    http://your.homepage/
// @version      0.1
// @description  Adds the CDC Notice Board to your home page in place of the alerts window
// @author       You
// @include      /^https://erp\.iitkgp\.ernet\.in/IIT_ERP2/welcome\.jsp?$/
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

$(setTimeout(run, 3000));

function run() {
    parent_frame = $('#myframe')
    alert_frame = $('#alert_win', parent_frame.contents())[0]
    alert_frame.contentWindow.location = 'https://erp.iitkgp.ernet.in/TrainingPlacementSSO/Notice.jsp'
    alert_frame_parent = alert_frame.parentNode
    alert_frame_parent.style.width = '67%'
    workflow_frame = $('#workflow_win', parent_frame.contents())[0]
    workflow_frame.parentNode.remove()
}
