# RestoConnect – Seamless Dining, Effortless Management

**Group ID:** 42  
**Project Title:** RestoConnect  
**SPOC:** 
Name: Vempati Nitin, 
Email: nitin.v23@iiits.in,
Roll No: S20230010258 

---

## Team Members & Roles

| Name                      | Role / Contribution                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nitin Vempati             | Backend – Node.js, Express, MongoDB; Customer & Admin Dashboard; Menu & Restaurant request bug fixes; dynamic dropdowns; AJAX setup; small frontend adjustments       |
| Sofiya Tentu              | Backend & Frontend – Owner/Manager Dashboard; Staff Dashboard; Inventory management; Reservation validation; Dashboard styling & chart updates                        |
| Giresh Velaga             | Fullstack – Core Dashboards (Admin, Customer, Owner); Home Page; Restaurant selection; Order & Reservation flow; Menu management; Ajax integration; Seed data updates |
| Mandapati Deekshith Kumar | Frontend – Owner Dashboard CSS; Dynamic restaurant listing with Ajax; Feedback system (model, routes, display, styling); Login/Register enhancements                  |
| Nagaraju Thokala          | Frontend & Info Collection – Staff Dashboard; Feedback page styling & functionality; Admin & Menu page CSS updates; MenuController & JS updates                       |

---

## Project Idea

RestoConnect is a system to manage multiple restaurants easily. It helps owners and managers with reservations, orders, staff, menu updates, and reports. Customers can browse menus, place orders, make reservations, and give feedback. The system uses Node.js, Express, MongoDB, and JavaScript for fast and safe communication between frontend and backend.

---

## How to Run Locally

### Prerequisites
- Node.js
- MongoDB 
- Git

### Steps
```bash
# Clone the project
git clone https://github.com/Giresh-458/RestoConnect.git
cd RestoConnect

# Install dependencies
npm install

# Start the server
node server.js

# Open in browser
http://localhost:3000
```

## Key Files & Functions

### Validation

- **`/source/passwordAuth.js`**  
  - Validator and middleware for signup and login forms.  
  - Ensures new users provide correct details and passwords meet requirements.  

- **`/source/authenticationMiddleware.js`**  
  - Checks role-based authorization for customers, staff, owners, and admin.  
  - Ensures each user can access only allowed features.  

- **`/views/login.ejs`**  
  - Performs **DOM validation** for signup and login forms (required fields, email format, password checks).  
  - Dynamically switches between **signup and login forms** based on user clicking signup/login links **without page reload**.  

---

### Dynamic HTML / DOM Updates

- **`/public/js/admin_dash_script.js`**  
  - Updates statistics on admin dashboard (e.g., total users, total restaurants) **without reloading** the page.  

- **`/views/home_page.ejs`**  
  - Filters restaurants dynamically based on user input or selected location **without page reload**.  

---

### Async Calls / API

- **`/public/js/admin_dash_script.js`**  
  - Sends AJAX requests for admin CRUD operations: find, update, delete users/restaurants, accept/reject new restaurant requests.  

- **`/public/js/ownerHomepage.js`**  
  - Handles AJAX CRUD operations for staff management and table management for owners.  

- **`/views/home_page.ejs`**  
  - Sends AJAX requests to fetch restaurant list after a customer logs in.  


## Demo Link & Timestamps

Video Link (Unlisted / Drive): <https://youtu.be/TwauAgzmyv4?feature=shared>

# Presentation Timeline

**00:00–00:46** – Title slide & project idea  
**00:46–02:33** – Form validation demo + code  
**02:33–04:04** – Dynamic HTML demo + code  
**04:04–05:33** – Async calls demo (3 flows)  
**05:33–06:22** – Individual contributions (10–20 sec each)  
**06:22–07:39** – Wrap-up & location of artifacts  



# Evidence Locations

## Network screenshots: 
![alt text](</network_evidence/Customer Homepage- Fetching Restaurants.png>) 
![alt text](</network_evidence/OwnerHomepage- Table Management.png>) 
![alt text](</network_evidence/OwnerHomepage- Staff Management.png>)

### Git logs: [Git Logs](git-logs.txt)

### Task assignment: [Task Assignment](task_assignment.md)

 
## Database Dump

A dump of the MongoDB database is included for local setup and testing.
- **Folder:**
[Mongo Dump](mongo_dump)
  This folder contains all collections for the project, including:
  - Users
  - People
  - Orders
  - Restaurants
  - Restaurants Requests
  - Dishes
  - Feedback

### Test cases & results: [Test Plan](test_plan.md)

