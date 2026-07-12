import Taxi from "@/assets/taxi.jpeg";
import Ecommerce from "@/assets/ecommerce.jpeg";
import Jagopos from "@/assets/Jagopos.png";

import Img from "@/assets/sanas/image.png";
import Img2 from "@/assets/sanas/image2.png";
import Img3 from "@/assets/sanas/image3.png";
import Img4 from "@/assets/sanas/image4.png";
import Img5 from "@/assets/sanas/image5.png";
import Img6 from "@/assets/sanas/image6.png";
import Img7 from "@/assets/sanas/image7.png";
import Img8 from "@/assets/sanas/image8.png";
import Img9 from "@/assets/sanas/image9.png";
import Img10 from "@/assets/sanas/image10.png";
import Img11 from "@/assets/sanas/image11.png";
import Img12 from "@/assets/sanas/image12.png";
import Img13 from "@/assets/sanas/image13.png";
import Img14 from "@/assets/sanas/image14.png";
import Img15 from "@/assets/sanas/image15.png";
import Img16 from "@/assets/sanas/image16.png";
import Img17 from "@/assets/sanas/image17.png";
import Img18 from "@/assets/sanas/image18.png";
import Img19 from "@/assets/sanas/image19.png";

// Single source of truth for the "Live Project" spotlight — used by both the
// homepage spotlight section and the full-page detail view it links to.
// Add or remove entries to change which projects are featured. Each project
// needs a unique `slug` — it's used in the /live-project/:slug detail route.
export const liveProjects = [
  {
    slug: "jagopos-app",
    badge: "Live Project",
    title: "Jagopos (Restaurant Management)",
    tagline:
      "A full-featured Restaurant Management & Billing System with a User Dashboard, Admin Dashboard, POS, Kitchen Display System (KDS), and Customer Display System (CDS). The application enables seamless menu management, real-time order processing, billing, and secure payments through Stripe and Aurora payment gateways. Orders are synchronized across all modules, and when an order is marked as Ready, the system automatically announces the customer name or order number for quick and efficient pickup.",
    // TODO: replace with real screenshots of the project (add/remove entries freely)
    images: [Jagopos],
    technologies: [
      "Vite",
      "React",
      "React Native",
      "Tailwind CSS",
      "Node Js",
      "Express",
      "MongoDB",
      "AWS",
      "Pushy",
      "Stripe",
      "Aurora",
    ],
    demoUrl: null,
    githubUrl: null,
    fullDescription: `Restaurant Management & Billing System

A comprehensive restaurant management solution that digitizes the entire restaurant workflow, from menu management and order placement to kitchen operations, billing, customer notifications, and payment processing. The system includes a User Dashboard, Admin Dashboard, Point of Sale (POS), Kitchen Display System (KDS), and Customer Display System (CDS), providing a seamless experience for customers, cashiers, kitchen staff, and administrators.

Customers can browse the menu, place dine-in, takeaway, or delivery orders, track their order status in real time, and make secure online payments using Stripe and Aurora payment gateways. The Admin Dashboard allows restaurant managers to manage menu items, categories, pricing, inventory, tables, staff, taxes, discounts, and monitor orders, payments, and sales through detailed reports and analytics.

The POS application enables staff to create and manage orders quickly, split or merge bills, apply discounts and taxes, generate invoices, and print or share digital receipts. The Kitchen Display System (KDS) receives orders instantly, helping kitchen staff organize and update order statuses from Pending to Preparing, Ready, and Served. The Customer Display System (CDS) provides real-time order progress and automatically announces the customer's name or order number through voice notifications when an order is ready for pickup.

With real-time synchronization across all modules, secure payment integration, automated order tracking, and voice-based customer notifications, the platform improves operational efficiency, reduces wait times, and delivers a smooth and modern restaurant management experience.`,
  },
  {
    // TODO: replace this whole entry with your next spotlight project
    slug: "sanas-app",
    badge: "Live Project",
    title: "Sanas Invite (Create Digital Invitations)",
    tagline:
      "A comprehensive digital invitation platform that enables users to create, customize, send, and manage invitations for weddings, birthdays, corporate events, parties, and other special occasions. The system includes a User Dashboard, Admin Dashboard, and an interactive Guest RSVP Management module, providing a seamless experience for event organizers and guests.",
    // TODO: replace with real screenshots of the project (add/remove entries freely)
    images: [
      Img,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      Img10,
      Img11,
      Img12,
      Img13,
      Img14,
      Img15,
      Img16,
      Img17,
      Img18,
      Img19,
    ],
    technologies: [
      "Vite",
      "React",
      "Tailwind CSS",
      "Konva",
      "Node Js",
      "Express",
      "MongoDB",
      "AWS",
      "Node Mailer",
      "GCP",
      "pdfkit",
      "ffmpeg",
    ],

    demoUrl: null,
    githubUrl: "https://sanasinvite.com",
    fullDescription: `Digital Invitation Management Platform

A complete digital invitation platform that enables users to create, customize, send, and manage invitations for weddings, birthdays, corporate events, parties, and other special occasions. The system includes a User Dashboard, Admin Dashboard, and an interactive Guest RSVP Management module, providing a seamless experience for event organizers and guests.

The Admin Dashboard allows administrators to create and manage professionally designed invitation templates, organize them by category, and control template availability. Admins can update designs, manage users, monitor invitations, and view platform analytics.

The User Dashboard enables users to browse available invitation templates, select a design, and fully customize it by editing text, images, colors, fonts, and event details. Users can save drafts, preview invitations, and generate personalized digital invitation cards.

Once the invitation is finalized, users can send invitations directly to guests via email. Each guest receives a personalized invitation containing event details and an RSVP option. Guests can respond by Accepting or Rejecting the invitation and specify the number of people who will attend the event.

Whenever a guest submits or updates their RSVP, the invitation owner receives an instant email notification. Users can track invitation responses in real time through a dashboard that displays:

* Total invitations sent
* Accepted invitations
* Rejected invitations
* Pending responses
* Total number of attendees confirmed by guests
* Individual guest responses and RSVP history

The platform also provides RSVP analytics, helping event organizers estimate attendance, manage seating arrangements, plan catering, and monitor guest engagement. With real-time notifications, customizable invitation templates, email-based invitation delivery, and comprehensive RSVP tracking, the system simplifies event planning while delivering a modern and interactive digital invitation experience.`,
  },
];

export type LiveProject = (typeof liveProjects)[number];
