"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Khalel Abaquin
   Date:   3.28.19

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array

*/

//Generate outline based on h1 through h6 headings in source document
window.addEventListener("load", makeOutline);

function makeOutline() {
      //Location of document outline
      var outline = document.getElementById("outline");
      //Source document for outline
      var source = document.getElementById("doc");

      var mainHeading = document.createElement("h1");
      var outlineList = document.createElement("ol");
      var headingText = document.createTextNode("Outline");

      mainHeading.appendChild(headingText);
      outline.appendChild(mainHeading);
      outline.appendChild(outlineList);

      createList(source, outlineList);
}

function createList(source, outlineList) {
      //Headings for outline
      var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
      //States previous level of the headings
      var prevLevel = 0;
      //Loop through all child nodes of source article until no chid nodes are left behind.
      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
            var headLevel = headings.indexOf(n.nodeName);
            if (headLevel !== -1) {
                  var listElem = document.createElement("li");
                  listElem.innerHTML = n.firstChild.nodeValue;
                  if (headLevel === prevLevel) {
                        //Append list item to current list
                        outlineList.appendChild(listElem);
                  } else if (headLevel > prevLevel) {
                        //Start new nested list
                        var nestedList = document.createElement("ol");
                        nestedList.appendChild(listElem);
                        //Append nested list to last item in current list
                        outlineList.lastChild.appendChild(nestedList);
                        //Change current list to nested list
                        outlineList = nestedList;
                  } else {
                        //Append list item to higher list

                  }
                  //Update value of prevLevel
                  prevLevel = headLevel;
            }
      }
}