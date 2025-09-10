// 巨大画像のアップロードを防止する
document.addEventListener("turbo:load", function() {
  document.addEventListener("change", function(event) {
    let image_upload = document.querySelector('#micropost_image');
    if (image_upload && image_upload.files.length > 0) { 
      const size_in_megabytes = image_upload.files[0].size/1024/1024;
      if (size_in_megabytes > 5) {
        alert("画像が大きすぎます。容量5MB以下の画像をお試しください。");
        image_upload.value = "";
      }
    }
  });
});