var CurrentCards = new Array();
var currentRandom = 0;
var finalString = "";

function ToggleDominion(idElement,boolToFlip)
{
  if(document.getElementById(idElement).getAttribute("class") == "alert button")
  {
    document.getElementById(idElement).setAttribute("class", "button");
  }
  else
  {
    document.getElementById(idElement).setAttribute("class", "alert button")
  }
}

function random()
{
  return (Math.floor(Math.random() * 156));
}

function getImageTag(num) 
{
    var img = '<img height=\"236\"  width=\"148\" src=\"assets/Cards/';
    var randomIndex = Math.floor(Math.random() * 156);
    img += randomIndex;
    currentRandom = randomIndex;
    img += '.jpg\" id = \"';
    img += num;
    img += '\" onClick= \"javascript:ChangeSpecificCard(';
    img += num;
    img += ');\" alt=\"\"/>';
    return img;
}
function getImagePath() 
{
	var img = 'assets/Cards/';
    var randomIndex = Math.floor(Math.random() * 156);
    img += randomIndex;
    currentRandom = randomIndex;
    img += '.jpg';
    return img;
}

function PlaceCards()
{
	for (var i = 0; i < 10; i++)
	{
		document.write(getImageTag(i));
		if(i == 4)
		{
			document.write("<br />");
		}
		CurrentCards[i] = currentRandom;
		  

	}

finalString = "";
  for(var i = 0; i < 10 ; i++)
  {
    finalString += CurrentCards[i];
    if(i < 9)
    finalString += ",";
  }
  del_cookie("CCards");
  setCookie("CCards", finalString, 30);
}

function PlaceSavedCards(temp)
{
	var n = temp.split(",");
	for (var i = 0; i < 10; i++)
	{
		var img = '<img height=\"236\"  width=\"148\" src=\"../assets/Cards/';
    	img += n[i];
    	img += '.jpg\">';
    	console.log(CurrentCards[i]);

		document.write(img);
		if(i == 4)
		{
			document.write("<br />");
		}

	}
}

function ChangeSpecificCard(idElement)
{
	document.getElementById(idElement).src=getImagePath();
	CurrentCards[idElement] = currentRandom;

	finalString = "";
  for(var i = 0; i < 10 ; i++)
  {
    finalString += CurrentCards[i];
    if(i < 9)
    finalString += ",";
  }

  del_cookie("CCards");
  setCookie("CCards", finalString, 30);
}

function ChangeAllCard()
{
	for (var i = 0; i < 10; i++)
	{
		document.getElementById(i).src=getImagePath();
		CurrentCards[i] = currentRandom;
	}

finalString = "";
  for(var i = 0; i < 10 ; i++)
  {
    finalString += CurrentCards[i];
    if(i < 9)
    finalString += ",";
  }

  del_cookie("CCards");
  setCookie("CCards", finalString, 30);


}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function del_cookie(c_name)
{
    document.cookie = c_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}





