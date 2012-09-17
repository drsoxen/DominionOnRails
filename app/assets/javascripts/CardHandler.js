var CurrentCards = new Array();
var currentRandom = 0;

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
		//console.log(CurrentCards[i]);
	}
}

function PlaceSavedCards(temp)
{
	console.log(temp);
	for (var i = 0; i < 10; i++)
	{
		var img = '<img height=\"236\"  width=\"148\" src=\"../assets/Cards/';
    	img += temp;
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
}

function ChangeAllCard()
{
	for (var i = 0; i < 10; i++)
	{
		document.getElementById(i).src=getImagePath();
		CurrentCards[i] = currentRandom;
		//console.log(CurrentCards[i]);
	}
}





