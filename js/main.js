(() => {
  let instrumentsBoard = document.querySelector(".generalDropZone"),
      instruments = document.querySelectorAll("#generalDragZone *"),
      dropZones = document.querySelectorAll(".dropZone"),
		  dropZonesOut = document.querySelectorAll(".containerExtern");

  const instrumentsPaths = ["guitar", "bass", "drum", "maracas"];
  var audio = new Array();
  audio["guitar"] = new Audio("assets/guitar.mp3");
  audio["bass"] = new Audio("assets/bass.mp3");
  audio["drum"] = new Audio("assets/drum.mp3");
  audio["maracas"] = new Audio("assets/maracas.mp3");

  function dragStarted(event) {
		event.dataTransfer.setData('currentItem', event.target.id);
	}

  function allowDragOver(event) {
    event.preventDefault();
  }

  function allowDrop(event) {
    event.preventDefault();
    let droppedEl = event.dataTransfer.getData('currentItem');
    this.appendChild(document.querySelector(`#${droppedEl}`));
    playAudio(droppedEl);
  }

  function allowDropOut(event) {
    event.preventDefault();
    let droppedEl = event.dataTransfer.getData('currentItem');
    stopAudio(droppedEl);
    this.appendChild(document.querySelector(`#${droppedEl}`));
  }

  function playAudio(instrumentSel){
    audio[instrumentSel].loop= true;
    audio[instrumentSel].play();
  }

  function stopAudio(instrumentSel){
    audio[instrumentSel].pause();
  }

  instruments.forEach(piece => piece.addEventListener ("dragstart", dragStarted));

  dropZones.forEach(zone => {
     zone.addEventListener("dragover", allowDragOver);
     zone.addEventListener("drop", allowDrop);
  });

  dropZonesOut.forEach(zone => {
     zone.addEventListener("drop", allowDropOut);
  });

})();