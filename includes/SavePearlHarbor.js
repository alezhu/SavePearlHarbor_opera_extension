(function(){
	var LOG = 0;
	var PREFIX = 'SPH';
	if(window.parent == window && /https?\:\/\/habrahabr\.ru/.test(window.location.href) ){	

		window.addEventListener("DOMContentLoaded", function(){
			if(LOG)opera.postError(PREFIX + ": Loaded. " + window.location.href);

			var div = window.document.getElementById('reg-wrapper');
			if(div){
				if (div.getElementsByTagName('H1')[0].innerText == 'Доступ к публикации закрыт' ) {
					var ps = div.getElementsByTagName('P');
					for(var i = 0; i < ps.length; i++) {
						if (ps[i].innerText == 'Автор переместил топик в черновики.') {
							var ids = /\/post\/(\d+)\//.exec(window.location.href);
							if (ids){
								var id = ids[1];
								var href = 'http://savepearlharbor.com/?p=' + id;
								if (widget.preferences["autoRedirect"] === "false"){
									var newP = window.document.createElement('P');
									newP.innerText = 'Возможно сайт SavePearlHarbor успел сделать копию по ';
									var a = window.document.createElement('A');
									a.href = href;
									a.innerText = 'адресу';
									newP.appendChild(a);
									div.appendChild(newP);
								} else {
									window.location.href = href;
								}
								break;
							}
						}
					}
				}
			}
		}, false);
	}
})();