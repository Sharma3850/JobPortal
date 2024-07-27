import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {


  faqs = [
    { question: 'How do I create an account on the job portal?', answer: 'To create an account, click on the "Sign Up" button on the homepage and fill out the registration form. You will receive a confirmation email to activate your account.', show: false },
    { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page. Enter your registered email address, and you will receive instructions to reset your password.', show: false },
    { question: 'How can I update my profile information?', answer: 'Log in and navigate to the "Profile" section. Here, you can update your personal details, resume, and other information.', show: false },
    { question: 'How do I search for job openings?', answer: 'Use the search bar on the homepage to enter job-related keywords. You can also apply filters based on location, job type, and other criteria.', show: false },
    { question: 'How do I apply for a job?', answer: "Find the job listing you're interested in, click on it, and then select the 'Apply Now' button to submit your application.", show: false },
    { question: 'Can I save job listings to apply later?', answer: 'Yes, you can bookmark job listings by clicking the "Bookmark" icon. Your saved jobs can be accessed from the "Bookmarked Jobs" section in your profile.', show: false },
    { question: 'How can I track the status of my job applications?', answer: 'Track your application status in the "Applications" section of your profile, where you can see updates such as "Under Review", "Shortlisted", or "Rejected".', show: false },
    { question: 'What should I do if I encounter issues with my application?', answer: 'Contact our support team through the "Contact Us" page. Provide detailed information about the issue, and our team will assist you.', show: false },
    { question: 'How do I delete my account?', answer: 'Go to the "Account Settings" in your profile. Scroll to the "Delete Account" option and follow the instructions. Note that this action cannot be undone.', show: false },
    { question: 'What types of job listings are available on the portal?', answer: 'The portal features various job listings, including full-time, part-time, freelance, and remote positions across multiple industries such as technology, healthcare, and finance.', show: false }
  ];
  

  constructor() { }

  ngOnInit() {
  }


  toggleFAQ(faq: any) {
    faq.show = !faq.show;
  }

}
