var list = document.getElementsByTagName("LI");
var i;
for(i=0;i<list.length;i++) 
{
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "cross";
  span.appendChild(text);
  list[i].appendChild(span);
}

var cross = document.getElementsByClassName("cross");
var i;
for(i=0;i<cross.length;i++)
{
  cross[i].onclick = function()
  {
     var div = this.parentElement;
     div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev)
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
},false);

function newElement() {
  var li = document.createElement("li");
  var ivalue = document.getElementById("Input").value;
  var t = document.createTextNode(ivalue);
  li.appendChild(t);
  document.getElementById("UL").appendChild(li);
  document.getElementById("Input").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "cross";
  span.appendChild(text);
  li.appendChild(span);

  for(i=0;i<cross.length;i++)
  {
    cross[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
