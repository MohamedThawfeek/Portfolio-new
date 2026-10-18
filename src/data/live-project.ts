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

import {
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d18,
  d19,
  d20,
  d21,
  d22,
  d23,
  d24,
  d25,
  d26,
  d27,
  d28,
  d29,
  d30,
  d31,
  d32,
  d33,
  d34,
  k35,
  k36,
  k37,
  k38,
  k39,
  k40,
  t1,
  t2,
  w1,
  w2,
  w3,
  w4,
  p1,
  p2,
  p3,
  p4,
  p5
} from "@/assets/jagopos/jagopos.js";

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
      "A multi-tenant Restaurant Management & Billing System featuring customer and admin dashboards, POS, KDS, and CDS. It supports real-time order synchronization, menu and billing management, Stripe and Aurora payments, SMS notifications through AWS SNS and Twilio, and automated voice announcements when orders are ready.",
    // TODO: replace with real screenshots of the project (add/remove entries freely)
    images: [Jagopos, d1,
      d2,
      d3,
      d4,
      d5,
      d6,
      d7,
      d8,
      d9,
      d10,
      d11,
      d12,
      d13,
      d14,
      d15,
      d16,
      d17,
      d18,
      d19,
      d20,
      d21,
      d22,
      d23,
      d24,
      d25,
      d26,
      d27,
      d28,
      d29,
      d30,
      d31,
      d32,
      d33,
      d34,
      k35,
      k36,
      k37,
      k38,
      k39,
      k40,
      t1,
      t2,
      w1,
      w2,
      w3,
      w4,
      p1,
      p2,
      p3,
      p4,
      p5],
    technologies: [
      "Vite",
      "React",
      "React Native",
      "Tailwind CSS",
      "Node Js",
      "Express",
      "MongoDB",
      "AWS SNS",
      "Pushy",
      "Stripe",
      "Aurora",
      "OpenAI",
      "GCP",
      "CI/CD",
      "html-pdf-node",
      "FCM",
      "Yup",
      "Twilio",
      "Tenent Database"
    ],
    demoUrl: null,
    githubUrl: null,
    fullDescription: `Restaurant Management & Billing System

    A comprehensive, multi-tenant restaurant management and billing platform designed to digitize and streamline the complete restaurant workflow—from menu management and order placement to kitchen operations, billing, customer communication, and payment processing.

    The system supports multiple restaurants or business branches through a secure tenant-based database architecture. Each tenant has an isolated workspace for managing its menu, staff, customers, orders, inventory, payments, settings, and reports. This architecture protects tenant data while allowing the platform to scale efficiently as new restaurants and branches are added.

    The platform includes a Customer Dashboard, Admin Dashboard, Point of Sale (POS), Kitchen Display System (KDS), and Customer Display System (CDS), providing a connected experience for customers, cashiers, kitchen staff, managers, and administrators.

    Customers can browse digital menus, customize items, and place dine-in, takeaway, or delivery orders. They can track order progress in real time and complete secure online payments using integrated payment gateways such as Stripe and Aurora. The system also stores customer preferences and order history to support faster repeat ordering and personalized service.

    The Admin Dashboard allows restaurant owners and managers to control daily operations from a centralized interface. Administrators can manage menu items, categories, modifiers, pricing, inventory, tables, branches, staff roles, taxes, service charges, discounts, and promotional offers. They can also monitor orders, payments, refunds, expenses, and sales performance through detailed reports and analytics.

    The POS application enables restaurant staff to create and update orders quickly, assign tables, handle takeaway or delivery orders, split or merge bills, transfer orders between tables, apply taxes and discounts, process multiple payment methods, generate invoices, and print or share digital receipts.

    The Kitchen Display System receives new orders instantly and organizes them based on order type, priority, preparation time, and kitchen station. Kitchen staff can update each order through statuses such as Pending, Accepted, Preparing, Ready, Served, or Cancelled. These updates are synchronized across the POS, customer dashboard, admin panel, and display systems in real time.

    The Customer Display System provides customers with live order information and progress updates. When an order is ready, the system can automatically announce the customer’s name or order number using voice notifications, making it especially useful for takeaway counters, food courts, cafés, and quick-service restaurants.
    The platform integrates AWS SNS and Twilio to deliver automated SMS notifications. Customers can receive messages for order confirmation, payment confirmation, preparation updates, pickup readiness, delivery dispatch, order completion, cancellation, refunds, and promotional campaigns. Restaurant administrators can configure notification templates and choose the preferred messaging provider for each tenant or branch.

    The multi-tenant architecture allows every restaurant to maintain its own branding, configuration, tax rules, menus, pricing, staff permissions, payment credentials, notification settings, and operational data. Role-based access control ensures that platform administrators, restaurant owners, branch managers, cashiers, kitchen staff, and delivery personnel can only access the features and information relevant to their responsibilities.

    With real-time synchronization, secure tenant-level data isolation, inventory tracking, integrated online payments, automated billing, SMS communication through AWS SNS and Twilio, voice-based pickup announcements, and advanced reporting, the platform improves operational efficiency, reduces order errors and customer wait times, and delivers a smooth, scalable, and modern restaurant management experience.
    `,
  },
  {
    // TODO: replace this whole entry with your next spotlight project
    slug: "sanas-app",
    badge: "Live Project",
    title: "Sanas Invite (Create Digital Invitations)",
    tagline:
      "Create, customize, and send digital invitations with automated emails, real-time RSVP tracking, and seamless guest management.",
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
      "AWS SNS",
      "Node Mailer",
      "GCP",
      "pdfkit",
      "ffmpeg",
      "Google Auth",
      "CI/CD",
      "Cron",
      "RBAC"

      // "Generate Email Templates",
    ],

    demoUrl: null,
    githubUrl: "https://sanasinvite.com",
    fullDescription: `Digital Invitation Management Platform

A complete digital invitation platform that enables users to create, customize, send, and manage invitations for weddings, birthdays, corporate events, parties, and other special occasions. The platform includes role-based authentication, Google OAuth, a User Dashboard, an Admin Dashboard, and an interactive Guest RSVP Management module.

The role-based authentication system provides secure access based on user roles and permissions. Administrators can manage the entire platform, while regular users can access and manage only their own invitations, guests, templates, and RSVP data. Users can also register and sign in securely using their Google accounts.

The Admin Dashboard allows administrators to create and manage professionally designed invitation templates, organize them by category, control template availability, manage users, monitor invitations, and view platform-wide analytics.

The User Dashboard enables users to browse invitation templates, select a design, and fully customize it by editing text, images, colors, fonts, and event details. Users can save drafts, preview their designs, and generate personalized digital invitation cards.

The platform dynamically generates responsive email templates using invitation and guest data. Once an invitation is finalized, users can send personalized emails directly to their guests. Each email contains the customized invitation, event information, guest details, and a unique RSVP option.

Guests can Accept or Reject an invitation and specify the number of people attending. Whenever a guest submits or updates an RSVP, the invitation owner receives an instant email notification.

Users can track invitation responses in real time through a dashboard that displays:

* Total invitations sent
* Accepted invitations
* Rejected invitations
* Pending responses
* Total confirmed attendees
* Individual guest responses
* RSVP update history

The platform also provides RSVP analytics to help event organizers estimate attendance, arrange seating, plan catering, and monitor guest engagement.

Automated cron jobs hosted on Google Cloud Platform handle scheduled processes such as invitation delivery, RSVP reminders, follow-up emails, event notifications, and other background tasks. This ensures reliable automation and timely communication without requiring manual intervention.

With secure role-based access, Google authentication, dynamically generated email templates, automated GCP cron jobs, customizable invitation designs, real-time notifications, and comprehensive RSVP tracking, the platform delivers a modern and efficient digital invitation and event-management experience.`,
  },
];

export type LiveProject = (typeof liveProjects)[number];
