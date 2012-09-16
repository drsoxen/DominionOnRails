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
    img += '.jpg';
    return img;
}

var card1 = "";
var card2 = "";
var card3 = "";
var card4 = "";
var card5 = "";
var card6 = "";
var card7 = "";
var card8 = "";
var card9 = "";
var card10 = "";

function PlaceCards()
{
	card1 = getImageTag(1);
	card2 = getImageTag(2);
	card3 = getImageTag(3);
	card4 = getImageTag(4);
	card5 = getImageTag(5);
	card6 = getImageTag(6);
	card7 = getImageTag(7);
	card8 = getImageTag(8);
	card9 = getImageTag(9);
	card10 = getImageTag(10);

  document.write(card1);
  document.write(card2);
  document.write(card3);
  document.write(card4);
  document.write(card5);
  document.write(card6);
  document.write(card7);
  document.write(card8);
  document.write(card9);
  document.write(card10);
}

function ChangeSpecificCard(idElement)
{
	document.getElementById(idElement).src=getImagePath();
}

function ChangeAllCard()
{
	document.getElementById("1").src=getImagePath();
	document.getElementById("2").src=getImagePath();
	document.getElementById("3").src=getImagePath();
	document.getElementById("4").src=getImagePath();
	document.getElementById("5").src=getImagePath();
	document.getElementById("6").src=getImagePath();
	document.getElementById("7").src=getImagePath();
	document.getElementById("8").src=getImagePath();
	document.getElementById("9").src=getImagePath();
	document.getElementById("10").src=getImagePath();
}





