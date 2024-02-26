var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsdDJ4cWFxNDAxZHEya241bDZqbnllb2oifQ.uAbu5n0pd6dJuqVaqhBOLw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'Roboto\'; font-weight: 400; padding: 5vh 0.2vh 0.2vh 0.2vh; border-radius: 10px; color: #ffffff; font-size: 1.3rem; display: block; margin-bottom: 2px;">Minighid pentru colectarea deșeurilor</span>',
    subtitle: '<span style="font-family: \'Roboto\'; color: #ffffff; font-size: 2.2rem; font-weight: 500;">Cum ne mai separăm astăzi gunoiul și de câte coșuri avem nevoie?',

    byline: '<a href="https://panorama.ro/author/anca-iosif/" target="_blank" style="color:white;">Anca Iosif</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 26 februarie 2024 <br> <a href="https://panorama.ro/author/edit/" target="_blank">Design: Edit Gyenge</a> <br><a href="" target="_blank">Editor: Ioana Moldoveanu</a> <br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> ',
    chapters: [
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '',
            image: '',
            description: 'În România suntem încă departe de a ne împărți sau recupera cum „trebuie” gunoiul, deși colectarea selectivă ne privește pe toți. Și pe producătorii obligați să recupereze jumătate din ambalajele de pe piață, și pe cetățenii înconjurați acum de coșuri, pubele și clopote colorate, și pe asociațiile de proprietari care trebuie, prin lege, <a href="https://green-report.ro/fara-ghene-de-gunoi/" target="_blank">să renunțe la folosirea ghenelor</a> din interiorul blocurilor până în 2025.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu avem un sistem național de management al deșeurilor, așa că fiecare oraș și sector din București procedează după cum crede. În plus, urmează câteva luni de confuzie, din cauza <a href="https://panorama.ro/mize-sistem-garantie-returnare-obligatoriu-ambalaje/" target="_blank">noului Sistem de Garanție-Returnare (SGR).</a> Din ianuarie 2024 ai început să plătești 50 de bani în plus la fiecare sticlă, doză și PET achiziționat, pe care îi recuperezi dacă vei colecta separat la automatele instalate în magazine. ',
            overlayImage: 'gen1.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap2.1',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Programul își propune să recupereze șapte miliarde de recipiente anual. Are însă reguli diferite față de cum colectai până acum și te obligă să faci spațiu în casă pentru încă un coș de gunoi.',
            overlayImage: 'gen2.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },


        {
            id: 'cap2.1',
            daysAgo: 700,
            showTimeline: false,   
            horizontalScroll: false,     
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<i>„Dar obiceiurile de consum și responsabilizarea cetățenilor și a autorităților nu se întâmplă peste noapte. <b>E un sistem care se reglează în câteva generații</b>”, </i> subliniază pentru Panorama expertul în managementul deșeurilor Raul Pop. ',
            overlayImage: 'gen3.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, 29.5, null],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului',
        },

        {
            id: 'cap2.2',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Colectarea selectivă a deșeurilor va deveni însă o prioritate în următorii ani. Amenzile pentru sortarea greșită a gunoiului vor începe să circule și la noi, odată cu răspândirea ghenelor inteligente, care <a href="https://www.aradon.ro/aradon-stirile-judetului-arad/cartele-electronice-de-acces-la-gunoiul-aradenilor-1469459/" target="_blank">vor monitoriza pubelele</a> și consumul individual.  ',
            overlayImage: 'reciclat.gif',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [10.5, 8.6, 29.5, 27.2, 30.7, 26, 28.2, 26, 21.5,22.9, 19.7, 22.3, 21.6, 24.2, 20.5, 20.8, 17.7, 21.4, 16.6, 15.1, 15.9, 18.4, 20, 16.1, 17 ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului',
        },



        {
            id: 'cap3',
            daysAgo: 731,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Recuperarea gunoiului este o necesitate, în timp ce producem, la nivel global, <a href="https://www.un.org/sustainabledevelopment/blog/2023/08/explainer-what-is-plastic-pollution/" target="_blank">peste 400 de tone de plastic</a> pe an și consumăm <a href="https://www.plasticsoupfoundation.org/en/2017/07/the-worlds-population-consumes-1-million-plastic-bottles-every-minute/" target="_blank">un milion de sticle de plastic</a> pe minut – fiecare român lasă anual <a href="https://panorama.ro/avalansa-plastic-romania-comert-deseuri/" target="_blank">25 kilograme de plastic</a> în urma sa. Cantitățile consumate <a href="https://www.plasticsoupfoundation.org/en/2017/07/the-worlds-population-consumes-1-million-plastic-bottles-every-minute/" target="_blank">s-ar putea dubla</a> în anii ce vin, în condițiile în care am ajuns să avem avem plastic și în <a href="https://scienceline.org/2022/09/a-look-into-the-plastic-inside-your-clothes/" target="_blank">haine,</a> și <a href="https://www.washingtonpost.com/climate-solutions/2024/01/12/microplastics-fish-chicken-tofu-protein/" target="_blank">în mâncare,</a>  iar polimerii poluează sute de ani. În plus, depozitarea la groapă costă, deci nevoia de recuperare crește. ',
            overlayImage: 'gunoi.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap3.1',
            daysAgo: 731,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Aproape 40% dintre deșeuri au fost reciclate în UE în 2020. România însă, rămâne codașă în ultimii (mulți) ani, cu un procent de 11% incert, având în vedere că <a href="https://recorder.ro/video-reciclarea-in-romania-haos-coruptie-si-incompetenta/" target="_blank">există diferențe mari între datele colectate și cele raportate de autoritățile române. </a> ',
            overlayImage: 'gen4.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [15.9, 11.4, ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        {
            id: 'cap3.2',
            daysAgo: 650,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Între timp, „facem ce putem”, cu ajutorul ecologistului Raul Pop: un ghid practic despre cum și unde ne putem desprinde responsabil de gunoi.  Cel puțin trei coșuri de gunoi sunt necesare în casă, din ianuarie 2024, în funcție de cele mai des întâlnite proceduri de colectare la nivel național:',
            overlayImage: 'gunoieri.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [15.9, 11.4, 22.1, 22.8, 30.3, ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        
        {
            id: 'cap13galben',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;"><span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;">Pubela galbenă</span></span> pentru deșeuri reciclabile, adică tot ce poate fi recuperat: plastic, metal, Tetra Pak, carton (în lipsa pubelei albastre și în măsura în care ambalajul încape în sacul sau <span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;">pubela galbenă</span> – spre exemplu un ambalaj de carton de la pasta de dinți etc.). Dacă ambalajul e curat – nu e îmbibat cu uleiuri, resturi de mâncare sau băuturi, aici intră și are o șansă spre reciclare.',
            overlayImage: 'galben.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap13sgr',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #F98715; color: white; font-weight: bold; padding: 5px;">Coșul pentru ambalajele SGR</span> imprimate cu sigla programului, dacă vrei să-ți recapeți garanția de 50 de bani.',
            overlayImage: 'sgr.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap14',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #000000; color: white; font-weight: bold; padding: 5px;">Pubela neagră</span> sau ghena blocului pentru deșeuri menajere, adică tot ce nu poate fi reciclat și este în general, umed: resturi alimentare, scutece și ambalaje de unică folosință - ar trebui să fie cea mai „sărăcăcioasă” și mai mică pubelă din casă. ',
            overlayImage: 'negru.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap15',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #516BBF; color: white; font-weight: bold; padding: 5px;">Pubela albastră</span> pentru carton și cea <span style="background-color: #26881B; color: white; font-weight: bold; padding: 5px;">verde</span> pentru sticlă nu apar peste tot. În orașele mici sau în zonele cu vile și case cartonul e colectat separat sau vândut de oameni la reciclatori.',
            overlayImage: 'albastru.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap15maro',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #8B4513; color: white; font-weight: bold; padding: 5px;">Pubela maro</span> pentru compost, care implică separarea și recuperarea resturilor alimentare, este și mai puțin implementată. În practică, gunoaiele de-aici tot la menajer și la groapă ajung.',
            overlayImage: 'pubcompost.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap16',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Cum se ridică gunoiul ', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În majoritatea orașelor vine o mașină pentru deșeurile menajere și o alta pentru reciclabile. Ambalajele uscate sunt luate „la grămadă”, ceea ce este corect, atâta vreme cât sunt uscate și curate în interior. Ele ajung pe o bandă de sortare, unde mai multe persoane (dar și tehnologia) le vor categorisi în funcție de tipul de material din care sunt făcute. Dacă sunt amestecate cu resturi alimentare, lucrătorii de la salubritate tot vor trebui să le ridice și să le ducă la bandă. ',
            overlayImage: 'reciclare.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap17',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Spălarea ambalajelor', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu scrie asta nicăieri, „dar e o treabă de bun simț”, spune Raul Pop. E neplăcut să se îmbine resturile unei conserve cu diverse lichide, atât pentru coșul tău de reciclabile, cât și pentru cei care sortează gunoiul. În plus, lichidele compromit anumite materiale, precum cartonul.',
            overlayImage: 'spalare.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },




        {
            id: 'cap18',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Ce se reciclează cu adevărat ', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu totul ajunge la reciclare. Unele ambalaje, cum ar fi dopurile sticlelor de plastic, sunt prea mici ca să poată fi sortate. De aici și regula europeană care spune <a href="https://ec.europa.eu/commission/presscorner/detail/en/IP_19_2631" target="_blank">să nu mai separi sticla de dop.</a> Cu cât deșeurile sunt mai voluminoase, cu atât au șanse mai mari să fie categorisite. O folie de plastic de câțiva metri poate fi reciclată, una de la pachetul de țigări nu. Pentru unele categorii de plastic nu avem tehnologie, așa că ele ajung la incinerare sau la fabrici de ciment, unde sunt transformate în energie.',
            overlayImage: 'gunoi.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        {
            id: 'cap4',
            daysAgo: 760,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'Viitorul PET-ului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: ' Plătești 50 de bani în plus pe sticlele din plastic, marcate cu logoul Sistemului de Garanție-Returnare (SGR). Măsura e în vigoare de la finalul lui 2023. Îți vei primi banii înapoi când returnezi recipientele în aparatele speciale deja instalate de hipermarketuri în interior sau în parcare. Trebuie să le duci goale, curate, nedeformate, cu eticheta pe care se află logoul, intactă.',
            overlayImage: 'plastic.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap4.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Aparatul turtește ambalajele, apoi emite un voucher. Deși poți returna PET-urile în alt magazin decât cel de unde le-ai cumpărat, voucherul îl poți cheltui doar unde returnezi sticlele. Ele pot fi în continuare reciclate și la <span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;">pubela galbenă</span>, doar că pierzi banii de garanție. Dozele de aluminiu vor trece și ele în sistemul SGR, cu aceleași reguli ca pentru PET-uri și de preferat cu cheița culcată. ',
            overlayImage: 'plastic.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        
        {
            id: 'cap5.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'Plastic non-SGR ', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pe lângă dozele și sticlele care nu au sigla SGR, pentru că încă nu s-au epuizat stocurile „vechi”, există ambalaje din plastic care nu intră în program, cum ar fi PET-urile de lapte, o sticlă de borș sau bidoanele peste trei litri. Pop crede însă că sistemul garanție-returnare va evolua și în timp acestea vor fi integrate în flux. ',
            overlayImage: 'reciclare.gif',
            showChart: false,
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [5.8, 5, 0, 0, 0, 0, 0, 1.4, 3.3, 3.6, 2.3, 3.3, 2.8, 3.1, 3.5, 2.5, 1.2, 1.8, 0.2, 0, 0,1, 1, 2.5, 4.3, 4,],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 6,
            // chartTitle: 'Exporturile de cereale prin porturile de la Marea Neagră (milioane tone)',
        },





        
        {
            id: 'cap11',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            endCustomScroll: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            overlayImage: 'reciclare.gif',
            description: 'Până atunci, toate vor merge în continuare la <span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;">pubela galbenă</span> de reciclabile, cu dopul pus, după ce au fost clătite și aplatizate. Gândirea e una comunitară – încerci să ocupi cât mai puțin spațiu în pubela blocului, ca să aibă toată lumea loc. Altfel, „colectăm aer”, spune Raul Pop, manager de programe în cadrul ONG-ului Ecoteca. ',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 2000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 0
                // }
            ]
        },


        

        {
            id: 'cap19',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            alignment: 'center',
            hidden: false,
            title: 'Sticla', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În unele orașe, se colectează în clopote verzi. Românii nu o separă încă pe culori, cum fac alte țări, așa că poți arunca aici sticle și borcane de orice fel. Încearcă să nu le spargi. Asta va ușura munca celor care sortează sticla pe culori și-i va ține departe de tăieturi. Urmărește eticheta unor sticle de vin sau băuturi răcoritoare, în caz că sunt integrate în SGR. ',
            overlayImage: 'clopotverde.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0,
            //         duration: 6000
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0
            //     }
            ],
        },

        {
            id: 'cap20',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dacă nu ai clopot pentru sticlă la bloc, soluția e să le duci la un intermediar privat. Oglinzile, vesela, geamurile, parbrizele și ceramica nu intră aici. Dacă spargi un pahar, pune-l la menajer. Dacă sunt obiecte mai mari, sună la firma care ridică gunoiul în orașul sau sectorul tău – pe unele le vor lua. ',
            overlayImage: 'clopotgalben.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Data-driven-circles',
                    opacity: 1,
                    duration: 6000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Data-driven-circles',
                    opacity: 0
                }
            ],
            
        },

        {
            id: 'cap21',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din păcate, majoritatea vor ajunge la groapă, în lipsa unor tehnologii de reparații sau refolosire a acestora, dar sunt mici obiecte pe care le poți salva separat – sticlele de parfum <a href="https://www.facebook.com/100064710937555/posts/3336040063170322/" target="_blank">pot fi colectate la Sephora.</a> Altfel – nu uita că sticla e cel mai bun material în care-ți poți depozita mâncarea, așa că, înainte de toate, refolosește-o. ',
            overlayImage: 'sticla.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap22',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Cutiile Tetra Pak', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<a href="https://hartareciclarii.ro/material/tetrapak-cutii-de-lapte-suc/" target="_blank">Cutiile Tetra Pak</a> au în compoziție și carton, și plastic, și aluminiu, ceea ce le face unul dintre cele mai sofisticate ambalaje de pe piață. Se clătesc, se aplatizează, li se pune dopul și se aruncă în <span style="background-color: #F4B80F; color: white; font-weight: bold; padding: 5px;">pubela galbenă</span>. ',
            overlayImage: 'tetra.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap23',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Companiile de reciclare recuperează în primul rând cartonul din compoziție, spune Pop, printr-un proces de înmuiere și dezlipire a straturilor de materiale. Polietilena (folia de plastic) și aluminiul din compoziție pot fi și ele transformate în granule, care apoi se reintroduc în circuitul economic ca materii prime.',
            overlayImage: 'tetra.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap24',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Uleiul folosit la gătit', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Uleiul folosit la gătit nu trebuie scurs niciodată în chiuvetă. Când ajunge în țevi, se răcește, se întărește și blochează trecerea apei. Devine o problemă pentru stațiile de epurare, care sunt proiectate să trateze deșeuri organice. Lasă-l să se răcească, strecoară-l de resturi alimentare și depozitează-l în sticle de plastic care nu se sparg la transport.',
            overlayImage: 'ulei.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap25',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Poate fi dus în aproape orice benzinărie sau hipermarket, fiecare cu politici diferite de primire. În general, nu poți preda mai puțin de doi litri, iar în unele locuri poți primi o sticlă nouă pentru uleiul uzat. ',
            overlayImage: 'ulei.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap26',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Compostul', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Compostul include coji de legume, resturi alimentare și zaț de cafea, printre altele. Mixul ar putea fi transformat în bioenergie sau în pământ de flori. <a href="https://www.dor.ro/asta-e-si-gunoiul-nostru/" target="_blank">Avem o lege</a> care încurajează compostarea la bloc, dar este un eșec. În cea mai mare parte a zonelor urbane nu există un sistem de colectare a resturilor „bio”, nici educație în sensul ăsta sau vreo pubelă în plus la scările de bloc.',
            overlayImage: 'compost.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap27',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din cauza asta, pungile „compostabile”, făcute din amidon de porumb pentru a se descompune rapid, ajung tot la menajer. Și-n loc să fie valorificate, se descompun în câteva luni la groapa de gunoi. Ce funcționează însă la bloc este ridicarea compostului „comun”, cum ar fi frunzele și crengile, pe care firmele de salubritate le colectează separat.',
            overlayImage: 'compost.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap28',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Au apărut și comunități care-și fac gropi și <a href="https://eeco.ro/detalii_informatii_despre_sustenabilitate/academia-de-compost-un-proiect-pentru-valorificarea-bio-de%C8%99eurilor-1700575874718x452354088484995100" target="_blank">sisteme pentru compost în grădina blocului.</a> Aceasta este o soluție și pentru cei care stau la casă și au curte. Ia însă timp să-nveți să prepari compost și să-l întreții, așa că încă este văzut ca o activitate specifică zonelor rurale, unde se face asta din timpuri vechi, pentru a scăpa de gunoi. ',
            overlayImage: 'compost.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap29',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Ambalajele de unică folosință', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ambalajele de unică folosință sunt interzise de peste cinci ani, conform normelor europene: punguța aia cu care insistă piețarii - cea mai pasibilă de a fi luată de vânt -, tacâmuri și paie din plastic, caserole din polistiren. În România încă se folosesc fără repercusiuni, deși în locul lor au apărut variante „compostabile”.',
            overlayImage: 'unica.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap30',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Lanțurile din HoReCa care se respectă au trecut la paie din carton. Ele rămân însă de unică folosință, în lipsa unui sistem de compostare. Nu pot fi puse la pubelele pentru reciclare, dar reprezintă un pas înainte, pentru că se descompun mai repede, la fel ca punga din amidon.',
            overlayImage: 'unica.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap31',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Mobila și materialele de construcții', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Prin lege, autoritățile locale sunt obligate să asigure un loc unde să te debarasezi de ele gratuit. Se numește Centru de aport voluntar, iar prin PNRR ar trebui să <a href="https://ecoteca.ro/cum-vor-arata-centrele-de-colectare-cu-aport-voluntar-cav-finantate-prin-pnrr.html" target="_blank">avem gata vreo 250,</a> până în toamna acestui an. Momentan, doar câteva sunt funcționale. La Iași și la Oradea oamenii pot lăsa gratuit de la soluții toxice precum resturi de vopsea, până la mobilă sau textile. ',
            overlayImage: 'mobila.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap32',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Până apare un astfel de centru în zona ta, cel mai bine e să întrebi la primărie ce opțiuni ai. Unele firme de salubritate ridică la cerere, contra cost. Alții ridică gratuit, cum se întâmplă în sectoarele 3 și 6, din București. Obiectele sunt apoi evaluate, dezmembrate, iar o parte din componente sunt reciclate. Lemnul ajunge la producători din industrie, iar deșeurile metalice se duc la centre de reciclare a fierului. ',
            overlayImage: 'mobila.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap33',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Resturile de textile și bureți sunt incinerate la fabricile de ciment. Înlocuiesc, astfel, combustibili clasici precum petrolul și cărbunele. Ca soluție temporară, poate ajută să știi că la Ikea poți <a href="https://www.ikea.com/ro/ro/customer-service/services/buy-back/" target="_blank">vinde</a> din mobila folosită (cumpărată de la ei) și poți cumpăra obiecte cu mici defecte sau second-hand, la prețuri mai mici, prin <a href="https://www.ikea.com/ro/ro/stores/circular-hub-pub1d9516e1" target="_blank">Atelierul de circularitate.</a> ',
            overlayImage: 'mobila.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap34',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Deșeuri electrice ', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pune deoparte becurile și bateriile și du-le în recipientele dedicate aflate în hipermarketuri sau în magazinele de electrocasnice. Dacă nu se află la intrare, întreabă echipa de ele și amintește-le că ai acest drept. Magazinele de electrocasnice sunt obligate să primească și aparatele de mici dimensiuni, precum un prăjitor de pâine. ',
            overlayImage: 'electrice.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap35',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru cele mari, precum o mașină de spălat, urmărește campaniile de ridicare gratuită organizate de agenții de salubritate sau de privați de-a lungul anului. În anumite zone le preiau și gratuit, la cerere, dacă depășesc <a href="https://www.ecotic.ro/predare-deseuri-electrice-pf/" target="_blank">câteva zeci de kilograme.</a> Dacă îți cumperi un frigider nou, beneficiezi de o reducere în schimbul celui vechi.  ',
            overlayImage: 'electrice1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap36',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Prin reciclarea corectă a deșeurilor electrice, se recuperează o serie de materii prime secundare care sunt folosite la fabricarea altor produse: fier, aluminiu, cupru, plastic, sticlă, dar și metale precum aurul sau argintul.',
            overlayImage: 'electrice1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap37',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Hainele', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu avem o industrie de reciclare a textilelor. Ca să scapi de hainele pe care nu le mai vrei, donează-le pe grupuri dedicate de Facebook, precum Free Cycle. Sau debarasează-le în containerele de haine amplasate pentru comunitățile vulnerabile, în unele orașe. În București, le poți dona la <a href="https://omanadeajutor.eu/despre-proiect-2/" target="_blank">Centrul de economie circulară,</a> un proiect al Direcției Generale de Asistență Socială București și Asociația Eco Durabil. ',
            overlayImage: 'haine.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap38',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Magazinele care colectează, precum H&M sau Zara, le repară și le reintroduc ca second-hand, le transformă în „cârpe” pentru curățenie sau le toacă mărunt pentru a fi folosite în construcții, ca izolație. În multe cazuri, hainele sunt și incinerate, pentru valoarea lor energetică, explică Pop. ',
            overlayImage: 'haine.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap39',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Alte soluții pe care le poți aplica pentru combaterea fast-fashion sunt închirierea ținutelor de ocazie, <a href="https://www.dressbox.ro/" target="_blank">de brand</a>, <a href="https://fainsisimplu.ro/garderoba-capsula-ce-este-ce-beneficii-are-2789.html" target="_blank">garderoba capsulă</a> sau shopping mai puțin, dar de o calitate superioară. Participă și tu la <a href="https://remake.world/2023nonewclothes/" target="_blank">#NoNewClothes Challenge.</a>  ',
            overlayImage: 'haine.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap40',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Medicamentele expirate', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Medicamentele expirate sunt printre cele mai toxice deșeuri care ajung în sol și-n apă. Aproape jumătate din ele nu sunt colectate în condiții de siguranță pentru mediu. Doar în România, circa 1.500 de tone de medicamente expirate ajung anual la gropile de gunoi sau în sistemul de canalizare. ',
            overlayImage: 'medicamente.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap41',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'De la finalul lui 2023, <a href="https://www.avocatnet.ro/articol_62470/E-oficial-Medicamentele-expirate-vor-putea-fi-predate-la-spitale-care-se-vor-ocupa-de-eliminarea-lor.html" target="_blank">pot fi duse în spitale</a> – atât de stat cât și private –, unde deja se colectează și se distrug medicamente. Nu le mai poți duce în farmacii de anul acesta, cum se întâmpla înainte de această reglementare.',
            overlayImage: 'medicamente.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap42',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Nereciclabilele', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Există multe gunoaie dăunătoare mediului și imposibil de reciclat, cum ar fi <a href="https://lionrecycle.ro/poluare-cosmetice-lacul-de-unghii-si-efectele-asupra-mediului/" target="_blank">lacul de unghii,</a> brichetele, scutecele și absorbantele sau majoritatea sprayurilor. Ia în considerare variantele reutilizabile ale acestor produse – avem astăzi chiloți menstruali și scutece refolosibile, precum și deodorante solide ambalate în carton. ',
            overlayImage: 'nereciclabile.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap43',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Economia circulară', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Reciclarea este importantă, dar contribuie la gestionarea deșeurilor, nu la reducerea lor. ',
            overlayImage: 'circularitate.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap44',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Este necesar să ne schimbăm obiceiurile de consum: să împrumutăm, să închiriem, să folosim în comun, să refolosim, să reparăm. Adică să adoptăm tot mai mult un stil de viață bazat pe o economie circulară, explică specialistul Raul Pop. ',
            overlayImage: 'circularitate.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap45',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Momentan însă, nici măcar nu știm să definim acest tip de economie. „Câți dintre noi se gândesc că metroul sau troleul sunt un model de economie circulară”, se întreabă expertul. La fel cum e și taxiul – plătești un serviciu, ca să nu-ți cumperi toată mașina. Există companii care nu mai vând tehnică, doar o închiriază. ',
            overlayImage: 'circularitate.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap46',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Au apărut multe ateliere de reparații – <a href="https://flip.ro/" target="_blank">Flip</a> recondiționează și vinde telefoane second hand. Există <a href="https://gaianca.ro/magazine-zero-waste-in-romania/" target="_blank">din ce în ce mai multe</a> magazine zero waste, care vând produse vrac, în recipientele cu care vii de-acasă, pentru a reduce cantitatea de ambalaje. ',
            overlayImage: 'circularitate.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap47',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Reciclarea este, de fapt, ultima treaptă pe scara priorităților. Mai întâi, ar trebui să integrăm în viețile noastre celelalte principii ale „Re-ului": reducere, refolosire, reparare. Astfel, pubelele vor fi mai goale.',
            overlayImage: 'circularitate.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


















        


        
        

    ]
};