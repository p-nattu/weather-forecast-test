document.addEventListener("DOMContentLoaded", () => {
    // セレクタ対象とボタンの取得
    const areaName = document.getElementById("city-select");
    const button = document.getElementById("get-weather");
    // ボタンがクリックされた処理
    button.addEventListener("click", () => {
        const value = areaName.value;
        let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/" + value + ".json";
        fetch(url)
            .then(response => response.json())
            .then(function (weather) {
                console.log(weather);
                // 選択した地域を変数へ
                let area = weather[0].timeSeries[0].areas[0];
                let areas = weather[1].tempAverage.areas[0];
                console.log(area);
                // 地域の気象情報を表示
                document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
                document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
                document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
                document.getElementById("todayHighTemperature").lastElementChild.textContent = areas.max + "℃";
                document.getElementById("todayLowTemperature").lastElementChild.textContent = areas.min + "℃";
                document.getElementById("today").lastElementChild.textContent = area.weathers[0];
                document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
                document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];

            })

            // エラー処理
            .catch(error => console.error("エラー：", error));
    });

});