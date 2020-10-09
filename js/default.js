document.addEventListener(
  "DOMContentLoaded",
  function () {
    var code = document.getElementsByClassName("codemirror-textarea")[0];
    var editor = CodeMirror.fromTextArea(code, {
      lineNumbers: true,
      mode: "text/x-csharp",
    });
  },
  false
);
