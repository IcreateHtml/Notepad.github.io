function saveText() {
        var e = document.getElementById("text").value,
          t = new Blob([e], {
            type: "text/plain"
          }),
          n = document.createElement("a");
        n.download = "SavedFileInNotepad.txt", n.innerHTML = "Download File", null != window.webkitURL ? n.href = window.webkitURL.createObjectURL(t) : (n.href = window.URL.createObjectURL(t), n.onclick = destroyClickedElement, n.style.display = "none", document.body.appendChild(n)), n.click()
      }

      function uploadFile() {
        document.getElementById("fileInput").click(), document.getElementById("fileInput").addEventListener("change", function() {
          var e = new FileReader;
          e.onload = function() {
            document.getElementById("text").value = e.result
          }, e.readAsText(document.getElementById("fileInput").files[0])
        })
      }
