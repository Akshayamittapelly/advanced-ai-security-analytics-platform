function analyzeThreat(){

    let ip =
    document.getElementById("ip").value;

    let activity =
    document.getElementById("activity").value;

    document.getElementById("loading").style.display =
    "block";

    document.getElementById("resultBox").style.display =
    "none";

    setTimeout(() => {

        document.getElementById("loading").style.display =
        "none";

        document.getElementById("resultBox").style.display =
        "block";

        document.getElementById("resIp").innerText = ip;

        document.getElementById("resActivity").innerText =
        activity;

        let risk = "";
        let score = "";
        let port = "";
        let attempts = "";
        let country = "";
        let recommendation = "";
        let confidence = "";
        let progress = "";
        let statusText = "";
        let bgColor = "";

        if(activity === "DDoS Attack"){

            risk = "CRITICAL";
            score = "9.8 / 10";
            port = "80";
            attempts = "1500";
            country = "Russia";

            recommendation =
            "Immediate firewall lockdown suggested.";

            confidence = "99%";

            progress = "95%";

            statusText =
            "🔴 CRITICAL THREAT DETECTED";

            bgColor = "red";
        }

        else if(activity === "SQL Injection"){

            risk = "HIGH";
            score = "8.8 / 10";
            port = "3306";
            attempts = "450";
            country = "China";

            recommendation =
            "Block malicious database requests.";

            confidence = "96%";

            progress = "85%";

            statusText =
            "🟠 HIGH RISK DETECTED";

            bgColor = "orange";
        }

        else{

            risk = "LOW";
            score = "2.0 / 10";
            port = "8080";
            attempts = "5";
            country = "India";

            recommendation =
            "No major suspicious activity detected.";

            confidence = "80%";

            progress = "25%";

            statusText =
            "🟢 SAFE ACTIVITY DETECTED";

            bgColor = "green";
        }

        document.getElementById("riskLevel").innerText =
        risk;

        document.getElementById("score").innerText =
        score;

        document.getElementById("port").innerText =
        port;

        document.getElementById("attempts").innerText =
        attempts;

        document.getElementById("country").innerText =
        country;

        document.getElementById("recommendation").innerText =
        recommendation;

        document.getElementById("confidence").innerText =
        confidence;

        document.getElementById("threatStatus").innerText =
        statusText;

        document.getElementById("threatStatus").style.background =
        bgColor;

        document.getElementById("progressBar").style.width =
        progress;

        let now = new Date();

        document.getElementById("time").innerText =
        now.toLocaleString();

    }, 2500);
}