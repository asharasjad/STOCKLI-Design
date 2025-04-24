const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  // Add secure APIs if needed
});
zv