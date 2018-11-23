function onDropImage(callback) {
  window.addEventListener('dragover', function(e) {
    e.preventDefault();
  });

  window.addEventListener('drop', function(e) {
    e.preventDefault();

    file = e.dataTransfer.files[0];
    console.info('droped: ', file);

    // 画像以外は無視
    if (!file || file.type.indexOf('image/') < 0) { return; }

    callback(file);
  });
}
