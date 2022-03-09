(() => {
  let instrumentsBoard = document.querySelector(".generalDropZone"),
      instruments = document.querySelectorAll("#generalDragZone *"),
		  dropZones = document.querySelectorAll(".dropzone");

  const instrumentsPaths = ["guitar", "bass", "drum", "maracas"]

  function dragStarted(event) {
		console.log('started draggin a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
	}

  function allowDragOver(event) {
    event.preventDefault();
    console.log('dragged over me');
  }

  function allowDrop(event) {
    event.preventDefault();
    console.log('dropped on me');

    //if (detectImg(event.currentTarget.className)== false){return;};

    let droppedEl = event.dataTransfer.getData('currentItem');
    console.log(droppedEl);

    this.appendChild(document.querySelector(`#${droppedEl}`));
  }

   instruments.forEach(piece => piece.addEventListener ("dragstart", dragStarted));

   dropZones.forEach(zone => {
     zone.addEventListener("dragover", allowDragOver);
     zone.addEventListener("drop", allowDrop);
   });

  })();
