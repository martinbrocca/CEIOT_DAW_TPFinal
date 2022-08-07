class FrameWork{
                     
  public ejecutarRequest(metodo: string, url: string,lister:ResponseLister,data?:any) {
    let xmlHttp: XMLHttpRequest = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
          console.log("toy en framework,  url = " + url)
          if (xmlHttp.readyState == 4) {
            if (metodo == "GET") {
              lister.handlerResponse(xmlHttp.status,xmlHttp.responseText)
            } else if (metodo == "POST" && url.includes("UpdateDevice") ) {
              lister.handlerResponseUpdateDevice(xmlHttp.status,xmlHttp.responseText)
            } else if (metodo == "POST" && url.includes("deleteDevice") ) {
              lister.handlerResponseRemoveDevice(xmlHttp.status,xmlHttp.responseText)
            }
            }
    }

        xmlHttp.open(metodo, url, true);
        if (metodo == "POST") {
          xmlHttp.setRequestHeader("Content-Type", "application/json")
          xmlHttp.send(JSON.stringify(data))
        } else {
          xmlHttp.send();  
        }
    
          
  }
}