// Original tutorial & code : 
// https://superplug.in/supermarquee/demo/7
// https://www.letswrite.tw/leaflet-osm-basic/

document.addEventListener('DOMContentLoaded', () => {  



  let center = [24.7824571,120.9957021]; // 預設中心點為台北市動物園
  // 跟使用者要位置
  function successGPS(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      center = [lat, lng];
      // 接著寫確認了座標後要執行的事
      triggerLeaflet()
    };
    function errorGPS() {
      window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 NCHC');
      // 接著寫使用者「封鎖」位置資訊請求後要執行的事
      triggerLeaflet()
    }
  
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successGPS, errorGPS);
      console.log(successGPS);

    } else {
      window.alert('您的裝置不具備GPS，無法使用此功能');
      // 接著寫使用者裝置不支援位置資訊時要執行的事
      triggerLeaflet();
  
  
    }
    function triggerLeaflet() {
  
      let zoom = 16; // 0 - 18
      let center = [24.7825236,120.9957928]; // 中心點座標
      let map = L.map('map').setView(center,zoom);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
  
      const marker = L.marker(center, {
          title: 'aaaa', // 跟 <a> 的 title 一樣
          opacity: 1.0
        }).addTo(map);
  
        marker.bindPopup('<b>Hello Guys !</b><br>I am in NCHC. <a target="_blank" title="另開視窗" href="https://www.google.com/maps/dir//No.%207,%20R&D%206th%20Rd,%20East%20District,%20Hsinchu%20City,%20300">click me to here</a>').openPopup();

        marker.bindTooltip("my tooltip text", {
          direction: 'bottom', // right、left、top、bottom、center。default: auto
          sticky: true, // true 跟著滑鼠移動。default: false
          permanent: false, // 是滑鼠移過才出現，還是一直出現
          opacity: 1.0
        }).openTooltip();
  
        const popup = L.popup();
  
        function onMapClick(e) {
          let lat = e.latlng.lat; // 緯度
          let lng = e.latlng.lng; // 經度
          popup
            .setLatLng(e.latlng)
            .setContent(`緯度：${lat}<br/>經度：${lng}`)
            .openOn(map);
        }
        map.on('click', onMapClick);
  
    }
    const mySuperMarquee = new SuperMarquee( document.getElementById( "supermarquee" ),{"content" : "國家科學及技術委員會財團法人國家實驗研究院國家高速網路與計算中心"});
    document.querySelector( ".demo-button-container" ).addEventListener( "click", e => {
        const { target } = e;
        if ( target.classList.contains( "btn-primary"  ) ) {
            const oldBtn = document.querySelector( ".btn-light" );
            oldBtn.classList.remove( "btn-light" );
            oldBtn.classList.add( "btn-primary" );
            target.classList.remove( "btn-primary" );
            target.classList.add( "btn-light" );
            mySuperMarquee.setScrollSpeed( target.innerHTML.toLowerCase() );
        }
    });
  

})
