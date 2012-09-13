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

function ResetCards()
{
  console.log(Math.floor(Math.random() * 100) + 1);
}
