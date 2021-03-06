let timelineData = {
    0: {
        title: '2019-2020',
        text: 'My final position at HP was in printhead health and servicing. I was working on the newest generation of deskjets, using all-new thermal inkjet technology. I was responsible for the interior maintaince-ink storage and control, parts that funnel the excess ink that printers jet while cleaning and preparing to print so that ink does not spill out of the printer. I was also in charge of the servo system the printer used to wipe the ink cartriges.',
        url: 'media/right_facing.png',       
        tip: 'The printer I worked on ended up getting canceled due to the COVID-19 pandemic, this printer shares design cues with our concept',
        alt: 'a white desktop printer with a blocky modern design'
    },
    1: {
        title: '2018',
        text: 'I worked on a special project within the Vancouver R&D lab to attempt to improve the print experience with modern voice assistants. This was a collaboration between designers, UX specialists, and engineers to explore how print and voice can go together. We ideated many new concepts and studied the ways people want to interact with their devices.',
        url: 'media/voiceprinter.jpg',
        tip: 'A functional model I built of our voice activated printer, intended to be interacted with by test subjects to learn how people interact with voice activated printers',
        alt: 'a grey device with a large screen and a white paper tray sticking out of the top'
    },
    2: {
        title: '2013-2017',
        text: 'My first four years at HP, I worked in their office print lab developing the Pagewide Pro. This was an ambitions printer which brought inkjet technology to the office. I worked in drive systems, designing and analyzing servo driven paper handling systems. I was responsible for ~30 injection molded plastic parts.',
        url: 'media/pagewide.png',    
        tip: 'The pagewide-pro 7xx series. Using an array of inkjets spanning the whole page, it can print at 70 pages per minute. I designed and tested the servo motors, as well as the mechanism that pulls paper out of the paper trays',
        alt: 'a large white sleek office printer with a large screen surrounded by black glass'
    },
    3: {
        title: '2013',
        text: 'My undergraduate capstone project was a plastic filament extruder to create filament for 3D printers using recycled plastic. We used a large stepper motor with gear reduction to turn a ship auger in a heated cylinder which melted the plastic and forced it through an opening. In addition to designing the drive mechanism, I also wrote the software to control filament feed and measure for quality checks.',
        url: 'media/extruder.jpg',
        tip: 'Our plastic extruder. Pellets go in the funnel on top, the metal mid-section is where the heater is. Some parts of our final product were printed using filament that earlier versions of the extruder produced.',
        alt: 'a device made of metal and plastic pipes, a motor is visible at the top and a bundle of wires runs down the side'
    }
}

var sml = window.matchMedia("(max-width: 575px");
var med = window.matchMedia("(min-width: 576px) and (max-width: 1023px)");
var lrg = window.matchMedia("(min-width: 1024px)")


$(document).ready(() => {
    let row=1;
    $('#timeline').css({
        display: 'grid',
        gridTemplateRows:'repeat(400px)',
        gap: '10px'
    })
    if(sml.matches) {
        console.log('small');
        $('#timeline').css({
            gridTemplateColumns: '1fr 4fr',
        })
    } else if(med.matches) {
        console.log('medium');
        $('#timeline').css({
            gridTemplateColumns: '1fr 4fr 3fr',
        })
    } else if(lrg.matches) {
        console.log('large');
        $('#timeline').css({
            gridTemplateColumns: '1fr 2fr 4fr 4fr',
        })
    }
    Object.keys(timelineData).forEach((key) => {
        $('#timeline')
            .append(
                $('<div>').text(timelineData[key].title)
                    .attr({class: 'timeTitle'})
                    .css({gridRow: row})
            )
        /* if window is large, stay on the same row, otherwise skip to next row */
        if(sml.matches || med.matches) {
            ++row;
        }
        $('#timeline')
            .append(
                $('<div>').append(
                    $('<img>').attr({
                        src: timelineData[key].url,
                        class: 'timeImg',
                        alt: timelineData[key].alt
                    })
                ).attr({
                    class: 'timePhoto',
                    title: timelineData[key].tip
                })
                .css({gridRow: row,
                    paddingLeft: '25px'})
            ).attr({
                class: 'timelineItem'
            })
        /* if the  window is small, skip rows again*/
        if(sml.matches) {
            ++row;
        }$('#timeline')
        .append(
            $('<div>').text(timelineData[key].text)
            .attr({class: 'timeBody'})
            .css({gridRow: row})
        )
        ++row;
    })
    $('#line').css({
        gridRowStart:'1',
        gridRowEnd: row,
        gridColumn: '1',
        width: '100%',
        height: '100%'
    })
    console.log('timeline entries: ' + (row-1))
})

$(window).bind('resize', () => {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(() => {
    this.location.reload();
  }, 100);
});