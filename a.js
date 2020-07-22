function creatIEAlert() {
	
    var ieAlertTable = document.createElement('div');
    ieAlertTable.style.cssText +=
        ';padding: 10px;opacity: 1;border:none;position: fixed;top: 0;left: 50%;margin-left: -12%;background: white;width: 450px;text-align: center;top: 20%;border:1px solid #ededed;z-index: 10000;'
    ieAlertTable.setAttribute('class', 'sb-ie-alert-table');
    ieAlertTable.setAttribute('id', 'sb-ie-alert-table');
    var body = document.createElement('div');
    
    ieAlertTable.appendChild(body);



    var sbIeBody = document.createElement('div');
    sbIeBody.setAttribute('class', 'sb-ie-body');
    sbIeBody.style.cssText += ';background-color: white;color: #333;padding-top: 20px;'

    var sbIeHead = document.createElement('div');
    sbIeHead.setAttribute('class', 'sb-ie-head');
    sbIeHead.style.cssText += ';padding: 15px 0;font-size: 24px;'

    var img = document.createElement('img');
    img.setAttribute('src', 'https://static.woshipm.com/2019122619263098318alert.png');
    img.style.cssText += ';vertical-align: middle;width: 50px;'
    sbIeHead.appendChild(img);
    sbIeHead.innerText = "浏览器版本过低！";

    var sbIeText = document.createElement('div');
    sbIeText.setAttribute('class', 'sb-ie-text');
    sbIeText.innerHTML = "为了保障您的信息和数据安全，建议使用谷歌浏览器、QQ浏览器、360浏览器等高版本浏览器访问";
    sbIeText.style.cssText += 'line-height: 1.7;font-size: 14px;margin-bottom: 7px;text-align: left;padding: 0 30px;'

    var sbIeCopy = document.createElement('div');
    sbIeCopy.setAttribute('class', 'sb-ie-copy');
    sbIeCopy.innerText = "*可直接复制本页面链接到其他浏览器中访问"
    sbIeCopy.style.cssText+=';text-align: left;padding-left: 30px;font-size: 14px;color: #FEA348;'

    var sbIeClose = document.createElement('div');
    sbIeClose.setAttribute('class', 'sb-ie-close');
    sbIeClose.style.cssText += ";margin-top: 20px;padding-bottom:10px;"
    var btn = document.createElement('button');
    
    
    
    btn.innerText = "关闭";
    btn.style.cssText +=
        ';width: 150px;height: 30px;background: #f3f2f2;border-radius: 4px;text-align: center;color: #333;font-size: 14px;margin-right: 19px;border:none;outline: none;cursor: pointer;'
    // btn.setAttribute('onclick','closeIe()')
    
    var sbIeBtmTxt=document.createElement('div');
    sbIeBtmTxt.setAttribute('class','sb-ie-btm-txt')
    sbIeBtmTxt.innerText="了解使用低版本浏览器的危害";
    sbIeBtmTxt.style.cssText+=";text-decoration: underline;text-align: left;padding-left: 30px;font-size: 12px;padding-bottom: 5px;cursor: pointer;"
    sbIeBtmTxt.onclick = function() {
        window.location.href = "http://support.dmeng.net/upgrade-your-browser.html?referrer=" +
            encodeURIComponent(window.location.href);
    }
    
    
    btn.onclick = function() {
        ieAlertTable.style.display = "none";
    }


    sbIeClose.appendChild(btn);
    sbIeBody.appendChild(sbIeHead);
    sbIeBody.appendChild(sbIeText);
    sbIeBody.appendChild(sbIeCopy);
    sbIeBody.appendChild(sbIeClose);
    sbIeBody.appendChild(sbIeBtmTxt);
    body.appendChild(sbIeBody);
    document.body.appendChild(ieAlertTable);
}