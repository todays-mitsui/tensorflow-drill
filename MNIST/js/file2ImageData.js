function file2ImageData(file, width, height) {
  return new Promise(function(resolve){
    const img = new Image();

    img.onload = () => {
      const tmpCanvas = document.createElement('canvas').getContext('2d');
      tmpCanvas.drawImage(img, 0, 0, width, height);

      const imageData = tmpCanvas.getImageData(0, 0, width, height);
      resolve(imageData);
    };

    img.src = URL.createObjectURL(file);
  });
}
