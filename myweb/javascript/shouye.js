// JavaScript Documentfunction check()
function check{
	fr=document.userlogon;
	if ((fr.username.value=="") || (fr.userpwd.value=="")){ 
		alert("姓名或密码不能为空");
        fr.username.focus(); 
        return false;
	}                            
    if((fr.username.value=="18xg")&&(fr.userpwd.value=="123"))
    {
	   return True;
	}
    else{
	   alert("用户名或密码错误，请重新输入！");
	   fr.username.focus();
	   return false;
	 }
	}
function nextpage(){
	var pages=new Array(4);
	pages[0]="fengmian.html"//首页链接
	pages[1]=""//一级子页链接
	pnum=eval(window.localStorage.getItem("pagenum"))+1
	window.localStorage.getItem("pagenum",pnum)
	return pages[pnum]
}
function huanying(){
	d=document.getElementById('huanying')
	d.innerText="    "+localStorage.getItem("myname")+"结课汇报"；
}
function tuichu(){
	flag=confirm("确定退出？");
	if (flag==true){
		localStorage.setItem('myname',"游客");
		window.location.reload();
	};
}