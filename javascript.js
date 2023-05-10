

      function saveText() {
        var textToSave = document.getElementById("text").value;
        var fileName = "textFile.txt";
        var fileToSave = new Blob([textToSave], {
          type: "text/plain"
        });
        var downloadLink = document.createElement("a");
        downloadLink.download = fileName;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
          downloadLink.href = window.webkitURL.createObjectURL(fileToSave);
        } else {
          downloadLink.href = window.URL.createObjectURL(fileToSave);
          downloadLink.onclick = destroyClickedElement;
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
        }
        downloadLink.click();
      }

      function uploadFile() {
        document.getElementById("fileInput").click();
        document.getElementById("fileInput").addEventListener("change", function() {
          var reader = new FileReader();
          reader.onload = function() {
            document.getElementById("text").value = reader.result;
          }
          reader.readAsText(document.getElementById("fileInput").files[0]);
        });
      }
   
