
const nav_toggle = document.querySelector(".nav-toggle");
const nav_list = document.querySelector("nav ol");

const package_links = document.querySelectorAll(".package-link.external-link");
const become_member_overlay = document.querySelector(".become-member-overlay");

become_member_overlay.addEventListener('click', closeOverlay);

const mail_link = document.querySelector('.become-member-overlay a');

mail_link.addEventListener('click', event => {
    become_member_overlay.classList.remove('visible');
});

nav_toggle.addEventListener('click', event => {
    nav_list.classList.toggle("visible");
    nav_toggle.classList.toggle("open");
    console.log('clicked');
});
package_links.forEach(package_link => {
    package_link.addEventListener('click', event => {
        event.preventDefault();
    
        let availabilitySubject = '';
        event.currentTarget.classList.forEach(className => {
            if(className === 'resident') {
                availabilitySubject = 'Inquiry about availability for a Resident Membership';
            } else if(className === 'nomad') {
                availabilitySubject = 'Inquiry about availability for a Nomad Resident Membership';
            } else {
                availabilitySubject = 'Inquiry about availability for a Escape From Home Membership';
            }
        });
        become_member_overlay.classList.add('visible');
        document.querySelector(".become-member-overlay .check-availability").href = 'mailto:hello@batch.works?subject=' + availabilitySubject;
        document.querySelector(".become-member-overlay .book-a-tour").href = 'mailto:hello@batch.works?subject=I would like to book a tour through the studio';
    });
})



function closeOverlay(event) {  
    become_member_overlay.classList.remove('visible');
}



// const temp_content_toggle = document.querySelector(".covid a");
const covid = document.querySelector(".covid");

/*temp_content_toggle.addEventListener('click', e => {
    covid.classList.toggle('visible');
})*/