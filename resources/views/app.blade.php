<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js" integrity="sha256-XF29CBwU1MWLaGEnsELogU6Y6rcc5nCkhhx89nFMIDQ=" crossorigin="anonymous"></script>
        <script>
            /*Toggle dropdown list*/
            /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

            var userMenuDiv = document.getElementById("userMenu");
            var userMenu = document.getElementById("userButton");

            var navMenuDiv = document.getElementById("nav-content");
            var navMenu = document.getElementById("nav-toggle");

            document.onclick = check;

            function check(e) {
                var target = (e && e.target) || (event && event.srcElement);

                //User Menu
                if (!checkParent(target, userMenuDiv)) {
                    // click NOT on the menu
                    if (checkParent(target, userMenu)) {
                        // click on the link
                        if (userMenuDiv.classList.contains("invisible")) {
                            userMenuDiv.classList.remove("invisible");
                        } else { userMenuDiv.classList.add("invisible"); }
                    } else {
                        // click both outside link and outside menu, hide menu
                        userMenuDiv.classList.add("invisible");
                    }
                }

                //Nav Menu
                if (!checkParent(target, navMenuDiv)) {
                    // click NOT on the menu
                    if (checkParent(target, navMenu)) {
                        // click on the link
                        if (navMenuDiv.classList.contains("hidden")) {
                            navMenuDiv.classList.remove("hidden");
                        } else { navMenuDiv.classList.add("hidden"); }
                    } else {
                        // click both outside link and outside menu, hide menu
                        navMenuDiv.classList.add("hidden");
                    }
                }

            }

            function checkParent(t, elm) {
                while (t.parentNode) {
                    if (t == elm) { return true; }
                    t = t.parentNode;
                }
                return false;
            }
            </script>
                                    <script>
                                        new Chart(document.getElementById("chartjs-4"), {
                                            "type": "doughnut",
                                            "data": {
                                                "labels": ["P1", "P2", "P3"],
                                                "datasets": [{
                                                    "label": "Issues",
                                                    "data": [300, 50, 100],
                                                    "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                                }]
                                            }
                                        });
                                        </script>
                        <script>
                            new Chart(document.getElementById("chartjs-1"), {
                                "type": "bar",
                                "data": {
                                    "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                    "datasets": [{
                                        "label": "Likes",
                                        "data": [65, 59, 80, 81, 56, 55, 40],
                                        "fill": false,
                                        "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                        "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                        "borderWidth": 1
                                    }]
                                },
                                "options": {
                                    "scales": {
                                        "yAxes": [{
                                            "ticks": {
                                                "beginAtZero": true
                                            }
                                        }]
                                    }
                                }
                            });
                            </script>
                                                    <script>
                                                        new Chart(document.getElementById("chartjs-0"), {
                                                            "type": "line",
                                                            "data": {
                                                                "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                                                "datasets": [{
                                                                    "label": "Views",
                                                                    "data": [65, 59, 80, 81, 56, 55, 40],
                                                                    "fill": false,
                                                                    "borderColor": "rgb(75, 192, 192)",
                                                                    "lineTension": 0.1
                                                                }]
                                                            },
                                                            "options": {}
                                                        });
                                                        </script>
                                                                                <script>
                                                                                    new Chart(document.getElementById("chartjs-7"), {
                                                                                        "type": "bar",
                                                                                        "data": {
                                                                                            "labels": ["January", "February", "March", "April"],
                                                                                            "datasets": [{
                                                                                                "label": "Page Impressions",
                                                                                                "data": [10, 20, 30, 40],
                                                                                                "borderColor": "rgb(255, 99, 132)",
                                                                                                "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                                                                            }, {
                                                                                                "label": "Adsense Clicks",
                                                                                                "data": [5, 15, 10, 30],
                                                                                                "type": "line",
                                                                                                "fill": false,
                                                                                                "borderColor": "rgb(54, 162, 235)"
                                                                                            }]
                                                                                        },
                                                                                        "options": {
                                                                                            "scales": {
                                                                                                "yAxes": [{
                                                                                                    "ticks": {
                                                                                                        "beginAtZero": true
                                                                                                    }
                                                                                                }]
                                                                                            }
                                                                                        }
                                                                                    });
                                                                                    </script>



        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
               <style>
            .texto_blanco{
                    color: white;
            }
            .titulo{
                text-align: center;
                font-size: 30px;
                font-weight: bold;
            }
            .negritas{
                font-weight:bold;
                text-align: center;
                font-size: 20px;
            }
            .texto-normal{
                text-align: center;
                font-size: 20px;

            }
            .imagen{
                width: 300px;
                height: 300px;
            }
            .precio{
                color:red;
            }


	.barcode {
		left: 50%;
		box-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;
		display: inline-block;
		transform: translateX(-90px);
	}

        </style>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
