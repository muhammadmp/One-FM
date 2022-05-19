{
 "actions": [],
 "autoname": "EMP-ONB-.YYYY.-.#####",
 "creation": "2021-03-15 11:54:56.014421",
 "doctype": "DocType",
 "editable_grid": 1,
 "engine": "InnoDB",
 "field_order": [
  "progress_section",
  "progress_html",
  "onboarding_section",
  "job_offer",
  "job_applicant",
  "reports_to",
  "employee",
  "employee_name",
  "employee_name_in_arabic",
  "date_of_joining",
  "boarding_status",
  "erf",
  "notify_users_by_email",
  "applicant_is_overseas_or_local",
  "is_transferable",
  "column_break_7",
  "employee_onboarding_template",
  "onboard_employee_template",
  "company",
  "department",
  "designation",
  "employee_grade",
  "project",
  "operations_site",
  "operations_shift",
  "day_off_category",
  "number_of_days_off",
  "leave_policy",
  "applicant_details_section",
  "gender",
  "date_of_birth",
  "place_of_birth",
  "religion",
  "marital_status",
  "column_break_20",
  "height",
  "agency",
  "nationality",
  "source",
  "contact_details_section",
  "email_id",
  "contact_number",
  "secondary_contact_number",
  "nationality_details_section",
  "nationality_no",
  "nationality_subject",
  "column_break_35",
  "date_of_naturalization",
  "passport_section",
  "passport_number",
  "passport_holder_of",
  "passport_issued",
  "column_break_42",
  "passport_expire",
  "passport_type",
  "visa_and_residency_section",
  "visa_type",
  "civil_id",
  "cid_expire",
  "job_offer_details_section",
  "salary_structure",
  "job_offer_total_salary",
  "provide_salary_advance",
  "salary_advance_amount",
  "provide_accommodation_by_company",
  "provide_transportation_by_company",
  "column_break_26",
  "salary_details",
  "salary_mode",
  "uniform_measurements_section",
  "is_uniform_needed_for_this_job",
  "shoulder_width",
  "column_break_58",
  "waist_size",
  "shoe_size",
  "documents_section",
  "applicant_documents",
  "amended_from",
  "g2g_and_residency_section",
  "is_g2g_fees_needed",
  "g2g_fee_amount",
  "is_residency_fine_needed",
  "residency_fine_amount",
  "total_g2g_residency_amount",
  "applicant_agree_to_pay_the_amount",
  "down_payment_amount",
  "g2g_residency_mop",
  "update_document_and_create_payment_request",
  "payment_request",
  "payment_entry_reference",
  "payment_receipt_attach",
  "column_break_81",
  "net_loan_amount",
  "loan_type",
  "repayment_method",
  "repayment_periods",
  "monthly_repayment_amount",
  "repayment_start_date",
  "loan_application_form",
  "btn_create_loan",
  "loan_application",
  "loan",
  "orientation_section",
  "orientation_location",
  "orientation_on",
  "column_break_75",
  "informed_applicant",
  "applicant_attended_orientation",
  "applicant_attended",
  "work_contract_section",
  "work_contract_name",
  "work_contract",
  "column_break_73",
  "work_contract_status",
  "work_contract_docstatus",
  "work_contract_progress",
  "duty_commencement_section",
  "duty_commencement_name",
  "duty_commencement",
  "column_break_90",
  "duty_commencement_status",
  "duty_commencement_docstatus",
  "duty_commencement_progress",
  "pifss_form_103_section",
  "pifss_form_103",
  "pifss_form_103_docstatus",
  "column_break_124",
  "pifss_form_103_status",
  "pifss_form_103_progress",
  "mgrp_section",
  "mgrp",
  "column_break_102",
  "mgrp_status",
  "mgrp_docstatus",
  "mgrp_progress",
  "bank_account_section",
  "account_name",
  "bank",
  "iban",
  "new_bank_account_needed",
  "attach_bank_form",
  "btn_create_bank_account",
  "column_break_139",
  "bank_account_name",
  "bank_account",
  "bank_account_status",
  "bank_account_docstatus",
  "bank_account_progress",
  "erp_user_section",
  "company_email",
  "create_user_permission",
  "btn_create_erpnext_user",
  "column_break_107",
  "user_created",
  "role_profile",
  "enrol_face_recognition_section",
  "inform_and_send_enrolment_details_to_employee",
  "enrolled",
  "enrolled_on",
  "employee_id_section",
  "employee_id_name",
  "employee_id",
  "column_break_112",
  "employee_id_status",
  "employee_id_docstatus",
  "employee_id_progress",
  "accommodation_section",
  "accommodation_provided",
  "checkin_reference",
  "accommodation",
  "floor",
  "column_break_120",
  "accommodation_unit",
  "bed",
  "transportation_section",
  "added_to_bus_schedule",
  "uniform_for_work_section",
  "uniform_issued",
  "employee_uniform_issue_reference",
  "tools_for_work_section",
  "tools_needed_for_work",
  "tools_issued",
  "column_break_133",
  "request_for_material",
  "request_for_material_status",
  "request_for_material_docstatus",
  "request_for_material_progress",
  "column_break_96"
 ],
 "fields": [
  {
   "fieldname": "job_applicant",
   "fieldtype": "Link",
   "label": "Job Applicant",
   "options": "Job Applicant",
   "reqd": 1
  },
  {
   "fieldname": "job_offer",
   "fieldtype": "Link",
   "label": "Job Offer",
   "options": "Job Offer",
   "reqd": 1
  },
  {
   "fetch_from": "job_applicant.applicant_name",
   "fieldname": "employee_name",
   "fieldtype": "Data",
   "in_list_view": 1,
   "label": "Employee Name",
   "reqd": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee",
   "fieldtype": "Link",
   "label": "Employee",
   "options": "Employee",
   "read_only": 1
  },
  {
   "fieldname": "date_of_joining",
   "fieldtype": "Date",
   "in_list_view": 1,
   "label": "Date of Joining"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "boarding_status",
   "fieldtype": "Select",
   "hidden": 1,
   "label": "Status",
   "options": "\nPending\nIn Process\nCompleted"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "notify_users_by_email",
   "fieldtype": "Check",
   "hidden": 1,
   "label": "Notify users by email"
  },
  {
   "fieldname": "column_break_7",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "employee_onboarding_template",
   "fieldtype": "Link",
   "hidden": 1,
   "label": "Employee Onboarding Template",
   "options": "Employee Onboarding Template"
  },
  {
   "fieldname": "company",
   "fieldtype": "Link",
   "label": "Company",
   "options": "Company"
  },
  {
   "fieldname": "department",
   "fieldtype": "Link",
   "in_list_view": 1,
   "label": "Department",
   "options": "Department"
  },
  {
   "fieldname": "designation",
   "fieldtype": "Link",
   "in_list_view": 1,
   "label": "Designation",
   "options": "Designation"
  },
  {
   "fieldname": "employee_grade",
   "fieldtype": "Link",
   "label": "Employee Grade",
   "options": "Employee Grade"
  },
  {
   "fetch_from": "job_offer.project",
   "fetch_if_empty": 1,
   "fieldname": "project",
   "fieldtype": "Link",
   "label": "Project",
   "options": "Project",
   "read_only": 1
  },
  {
   "fieldname": "amended_from",
   "fieldtype": "Link",
   "label": "Amended From",
   "no_copy": 1,
   "options": "Onboard Employee",
   "print_hide": 1,
   "read_only": 1
  },
  {
   "collapsible": 1,
   "fieldname": "documents_section",
   "fieldtype": "Section Break",
   "label": "Documents"
  },
  {
   "fieldname": "applicant_documents",
   "fieldtype": "Table",
   "label": "Applicant Documents",
   "options": "Job Applicant Required Document"
  },
  {
   "fieldname": "onboard_employee_template",
   "fieldtype": "Link",
   "label": "Onboard Employee Template",
   "options": "Onboard Employee Template"
  },
  {
   "collapsible": 1,
   "fieldname": "applicant_details_section",
   "fieldtype": "Section Break",
   "label": "Applicant Details"
  },
  {
   "collapsible": 1,
   "fieldname": "job_offer_details_section",
   "fieldtype": "Section Break",
   "label": "Job Offer and Salary Details"
  },
  {
   "fieldname": "email_id",
   "fieldtype": "Data",
   "label": "Email Address",
   "options": "Email"
  },
  {
   "fieldname": "agency",
   "fieldtype": "Link",
   "label": "Agency",
   "options": "Agency"
  },
  {
   "fieldname": "gender",
   "fieldtype": "Link",
   "label": "Gender",
   "options": "Gender"
  },
  {
   "fieldname": "date_of_birth",
   "fieldtype": "Date",
   "label": "Date of Birth"
  },
  {
   "fieldname": "religion",
   "fieldtype": "Data",
   "label": "Religion"
  },
  {
   "fieldname": "column_break_20",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "salary_structure",
   "fieldtype": "Link",
   "label": "Salary Structure",
   "options": "Salary Structure"
  },
  {
   "fieldname": "job_offer_total_salary",
   "fieldtype": "Currency",
   "label": "Job Offer Total Salary"
  },
  {
   "fieldname": "column_break_26",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "salary_details",
   "fieldtype": "Table",
   "label": "Salary Details",
   "options": "ERF Salary Detail",
   "read_only": 1
  },
  {
   "fieldname": "source",
   "fieldtype": "Link",
   "label": "Source",
   "options": "Job Applicant Source"
  },
  {
   "fieldname": "erf",
   "fieldtype": "Link",
   "label": "ERF",
   "options": "ERF"
  },
  {
   "fieldname": "place_of_birth",
   "fieldtype": "Data",
   "label": "Place of Birth"
  },
  {
   "fieldname": "marital_status",
   "fieldtype": "Select",
   "label": "Marital Status",
   "options": "\nSingle\nMarried\nDivorced\nWidowed"
  },
  {
   "fieldname": "nationality",
   "fieldtype": "Link",
   "label": "Nationality",
   "options": "Nationality"
  },
  {
   "collapsible": 1,
   "fieldname": "contact_details_section",
   "fieldtype": "Section Break",
   "label": "Contact Details"
  },
  {
   "fieldname": "contact_number",
   "fieldtype": "Data",
   "label": "Contact Number"
  },
  {
   "fieldname": "secondary_contact_number",
   "fieldtype": "Data",
   "label": "Secondary Contact Number"
  },
  {
   "collapsible": 1,
   "fieldname": "nationality_details_section",
   "fieldtype": "Section Break",
   "label": "Nationality Details"
  },
  {
   "fieldname": "nationality_no",
   "fieldtype": "Data",
   "label": "Nationality No"
  },
  {
   "fieldname": "nationality_subject",
   "fieldtype": "Select",
   "label": "Nationality Subject",
   "options": "\n\u0627\u0644\u0623\u0648\u0644\u064a\n\u0627\u0644\u062b\u0627\u0646\u064a\u0629\n\u0627\u0644\u062b\u0627\u0644\u062b\u0629\n\u0627\u0644\u0631\u0627\u0628\u0639\u0629\n\u0627\u0644\u062e\u0627\u0645\u0633\u0629\n\u0627\u0644\u0633\u0627\u0628\u0639\u0629\n\u0627\u0644\u062b\u0627\u0645\u0646\u0629"
  },
  {
   "fieldname": "column_break_35",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "date_of_naturalization",
   "fieldtype": "Date",
   "label": "Date of Naturalization"
  },
  {
   "collapsible": 1,
   "fieldname": "passport_section",
   "fieldtype": "Section Break",
   "label": "Passport"
  },
  {
   "fieldname": "passport_number",
   "fieldtype": "Data",
   "label": "Passport Number"
  },
  {
   "fieldname": "passport_holder_of",
   "fieldtype": "Link",
   "label": "Passport Holder of",
   "options": "Country"
  },
  {
   "fieldname": "column_break_42",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "passport_type",
   "fieldtype": "Select",
   "label": "Passport Type",
   "options": "\nDiplomat\nNormal"
  },
  {
   "collapsible": 1,
   "fieldname": "visa_and_residency_section",
   "fieldtype": "Section Break",
   "label": "Visa and Residency"
  },
  {
   "fieldname": "visa_type",
   "fieldtype": "Link",
   "label": "Visa Type",
   "options": "Visa Type"
  },
  {
   "fetch_from": "job_applicant.one_fm_cid_number",
   "fetch_if_empty": 1,
   "fieldname": "civil_id",
   "fieldtype": "Data",
   "label": "CIVIL ID"
  },
  {
   "fieldname": "cid_expire",
   "fieldtype": "Date",
   "label": "Civil ID Valid Till"
  },
  {
   "fieldname": "applicant_is_overseas_or_local",
   "fieldtype": "Select",
   "label": "Applicant Is Overseas or Local",
   "options": "\nLocal\nOverseas"
  },
  {
   "fieldname": "is_transferable",
   "fieldtype": "Select",
   "label": "Is Transferable",
   "options": "\nYes\nNo\nLater"
  },
  {
   "collapsible": 1,
   "fieldname": "uniform_measurements_section",
   "fieldtype": "Section Break",
   "label": "Uniform Measurements"
  },
  {
   "fieldname": "shoulder_width",
   "fieldtype": "Float",
   "label": "Shoulder Width in Centi Meter"
  },
  {
   "fieldname": "column_break_58",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "waist_size",
   "fieldtype": "Float",
   "label": "Waist Size in Centi Meter"
  },
  {
   "fieldname": "shoe_size",
   "fieldtype": "Float",
   "label": "Shoe Size in Centi Meter"
  },
  {
   "default": "0",
   "fieldname": "provide_salary_advance",
   "fieldtype": "Check",
   "label": "Provide Salary Advance"
  },
  {
   "depends_on": "provide_salary_advance",
   "fieldname": "salary_advance_amount",
   "fieldtype": "Currency",
   "label": "Amount"
  },
  {
   "default": "0",
   "fieldname": "provide_accommodation_by_company",
   "fieldtype": "Check",
   "label": "Provide Accommodation by Company"
  },
  {
   "default": "0",
   "fieldname": "provide_transportation_by_company",
   "fieldtype": "Check",
   "label": "Provide Transportation by Company"
  },
  {
   "fieldname": "height",
   "fieldtype": "Float",
   "label": "Height in cm"
  },
  {
   "fieldname": "passport_issued",
   "fieldtype": "Date",
   "label": "Passport Issued on"
  },
  {
   "fieldname": "passport_expire",
   "fieldtype": "Date",
   "label": "Passport Expires on"
  },
  {
   "fieldname": "employee_name_in_arabic",
   "fieldtype": "Data",
   "label": "Employee Name in Arabic"
  },
  {
   "depends_on": "eval:doc.docstatus > 0",
   "fieldname": "work_contract_section",
   "fieldtype": "Section Break",
   "label": "Work Contract"
  },
  {
   "fieldname": "column_break_73",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "work_contract_status",
   "fieldtype": "Data",
   "label": "Work Contract Status",
   "read_only": 1
  },
  {
   "collapsible": 1,
   "fieldname": "onboarding_section",
   "fieldtype": "Section Break",
   "label": "Onboarding"
  },
  {
   "collapsible": 1,
   "fieldname": "progress_section",
   "fieldtype": "Section Break",
   "label": "Progress"
  },
  {
   "fieldname": "progress_html",
   "fieldtype": "HTML",
   "label": "Progress HTML"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "work_contract_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "Work Contract Progress",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus < 2",
   "fieldname": "work_contract",
   "fieldtype": "Link",
   "label": "Work Contract",
   "options": "Work Contract",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "work_contract_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "Work Contract Docstatus"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus > 1",
   "fieldname": "work_contract_name",
   "fieldtype": "Data",
   "label": "Work Contract",
   "read_only": 1
  },
  {
   "fieldname": "orientation_section",
   "fieldtype": "Section Break",
   "label": "Orientation Details"
  },
  {
   "default": "0",
   "fieldname": "is_uniform_needed_for_this_job",
   "fieldtype": "Check",
   "label": "Is Uniform Needed for This Job"
  },
  {
   "depends_on": "eval:doc.docstatus > 0",
   "fieldname": "duty_commencement_section",
   "fieldtype": "Section Break",
   "label": "Duty Commencement"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus > 1",
   "fieldname": "duty_commencement_name",
   "fieldtype": "Data",
   "label": "Duty Commencement",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus < 2",
   "fieldname": "duty_commencement",
   "fieldtype": "Link",
   "label": "Duty Commencement",
   "options": "Duty Commencement",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus < 2",
   "fieldname": "duty_commencement_status",
   "fieldtype": "Data",
   "label": "Duty Commencement Status",
   "read_only": 1
  },
  {
   "fieldname": "column_break_90",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "duty_commencement_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "Duty Commencement Docstatus"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "duty_commencement_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "Duty Commencement Progress",
   "read_only": 1
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee && doc.salary_mode == 'Bank'",
   "fieldname": "bank_account_section",
   "fieldtype": "Section Break",
   "label": "Bank Account"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus < 2",
   "fieldname": "bank_account",
   "fieldtype": "Link",
   "label": "Bank Account",
   "options": "Bank Account",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.docstatus > 1",
   "fieldname": "bank_account_name",
   "fieldtype": "Data",
   "label": "Bank Account",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "bank_account_status",
   "fieldtype": "Data",
   "label": "Bank Account Status",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "bank_account_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "Bank Account Progress"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "new_bank_account_needed",
   "fieldtype": "Check",
   "label": "New Bank Account Needed",
   "read_only_depends_on": "bank_account"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "account_name",
   "fieldtype": "Data",
   "label": "Account Name"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "bank",
   "fieldtype": "Link",
   "label": "Bank",
   "options": "Bank"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "new_bank_account_needed",
   "fieldname": "attach_bank_form",
   "fieldtype": "Attach",
   "label": "Attach Bank Form"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "bank_account_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "Bank Account Docstatus"
  },
  {
   "depends_on": "employee",
   "fieldname": "erp_user_section",
   "fieldtype": "Section Break",
   "label": "ERP User"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "company_email",
   "fieldtype": "Data",
   "label": "Company Email",
   "options": "Email"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "description": "This will restrict user access to other employee records",
   "fieldname": "create_user_permission",
   "fieldtype": "Check",
   "label": "Create User Permission",
   "read_only_depends_on": "user_created"
  },
  {
   "fieldname": "column_break_107",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fetch_from": "designation.role_profile",
   "fetch_if_empty": 1,
   "fieldname": "role_profile",
   "fieldtype": "Link",
   "label": "Role Profile",
   "options": "Role Profile",
   "read_only": 1
  },
  {
   "depends_on": "employee",
   "fieldname": "employee_id_section",
   "fieldtype": "Section Break",
   "label": "Employee ID Card"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee_id_name",
   "fieldtype": "Data",
   "label": "Employee ID Name",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee_id",
   "fieldtype": "Link",
   "label": "Employee ID Card",
   "options": "Employee ID",
   "read_only": 1
  },
  {
   "fieldname": "column_break_112",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee_id_status",
   "fieldtype": "Data",
   "label": "Employee ID Status",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee_id_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "Employee ID Docstatus"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "employee_id_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "Employee ID Progress"
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee && doc.provide_accommodation_by_company",
   "description": "Section will be updated on Accommodation Checkin",
   "fieldname": "accommodation_section",
   "fieldtype": "Section Break",
   "label": "Accommodation"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "accommodation_provided",
   "fetch_from": "checkin_reference.accommodation",
   "fieldname": "accommodation",
   "fieldtype": "Link",
   "label": "Accommodation",
   "options": "Accommodation",
   "read_only": 1
  },
  {
   "depends_on": "provide_transportation_by_company",
   "fieldname": "transportation_section",
   "fieldtype": "Section Break",
   "label": "Transportation"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "added_to_bus_schedule",
   "fieldtype": "Check",
   "label": "Added to Bus Schedule",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "depends_on": "is_uniform_needed_for_this_job",
   "fieldname": "uniform_issued",
   "fieldtype": "Check",
   "label": "Uniform Issued",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "request_for_material",
   "fieldtype": "Link",
   "label": "Request for Material",
   "options": "Request for Material",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "request_for_material_status",
   "fieldtype": "Data",
   "label": "Request for Material Status",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "request_for_material_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "Request for Material Docstatus"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "request_for_material_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "Request for Material Progress"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "accommodation_provided",
   "fieldname": "checkin_reference",
   "fieldtype": "Link",
   "label": "Checkin Reference",
   "options": "Accommodation Checkin Checkout",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "accommodation_provided",
   "fieldtype": "Check",
   "label": "Accommodation Provided",
   "read_only": 1
  },
  {
   "fieldname": "column_break_120",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "accommodation_provided",
   "fetch_from": "checkin_reference.floor",
   "fieldname": "floor",
   "fieldtype": "Link",
   "label": "Floor",
   "options": "Floor",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "accommodation_provided",
   "fetch_from": "checkin_reference.accommodation_unit",
   "fieldname": "accommodation_unit",
   "fieldtype": "Link",
   "label": "Accommodation Unit",
   "options": "Accommodation Unit",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "accommodation_provided",
   "fetch_from": "checkin_reference.bed",
   "fieldname": "bed",
   "fieldtype": "Link",
   "label": "Bed",
   "options": "Bed",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "uniform_issued",
   "fieldname": "employee_uniform_issue_reference",
   "fieldtype": "Link",
   "label": "Employee Uniform Issue Reference",
   "options": "Employee Uniform"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "depends_on": "tools_needed_for_work",
   "fieldname": "tools_issued",
   "fieldtype": "Check",
   "label": "Tools Issued",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "orientation_location",
   "fieldtype": "Link",
   "label": "Orientation Location",
   "options": "Location"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "orientation_on",
   "fieldtype": "Datetime",
   "label": "Orientation on"
  },
  {
   "fieldname": "column_break_75",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "informed_applicant",
   "fieldtype": "Check",
   "label": "Informed Applicant",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "depends_on": "informed_applicant",
   "fieldname": "applicant_attended",
   "fieldtype": "Check",
   "label": "Applicant Attended",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fetch_from": "job_offer.reports_to",
   "fetch_if_empty": 1,
   "fieldname": "reports_to",
   "fieldtype": "Link",
   "label": "Reports To",
   "options": "Employee"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "user_created",
   "fieldtype": "Check",
   "label": "User Created",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "tools_needed_for_work",
   "fieldtype": "Check",
   "label": "Tools Needed for Work",
   "read_only": 1
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee",
   "description": "Section will be updated on Employee Uniform Issue",
   "fieldname": "uniform_for_work_section",
   "fieldtype": "Section Break",
   "label": "Uniform for Work"
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee",
   "fieldname": "tools_for_work_section",
   "fieldtype": "Section Break",
   "label": "Tools for Work"
  },
  {
   "fieldname": "column_break_133",
   "fieldtype": "Column Break"
  },
  {
   "depends_on": "eval:!doc.bank_account",
   "fieldname": "btn_create_bank_account",
   "fieldtype": "Button",
   "label": "Create Bank Account"
  },
  {
   "depends_on": "eval:!doc.user_created",
   "fieldname": "btn_create_erpnext_user",
   "fieldtype": "Button",
   "label": "Create ERPNext User"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "applicant_attended_orientation",
   "fieldtype": "Datetime",
   "label": "Applicant Attended Orientation",
   "read_only": 1
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee && doc.nationality == 'Kuwaiti'",
   "fieldname": "pifss_form_103_section",
   "fieldtype": "Section Break",
   "label": "PIFSS Form 103"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "pifss_form_103",
   "fieldtype": "Link",
   "label": "PIFSS Form 103",
   "options": "PIFSS Form 103",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "pifss_form_103_status",
   "fieldtype": "Data",
   "label": "PIFSS Form 103 Status",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "pifss_form_103_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "PIFSS Form 103 Docstatus",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "pifss_form_103_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "PIFSS Form 103 Progress"
  },
  {
   "depends_on": "eval:doc.docstatus > 0 && doc.employee && doc.nationality == 'Kuwaiti'",
   "fieldname": "mgrp_section",
   "fieldtype": "Section Break",
   "label": "MGRP"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "mgrp",
   "fieldtype": "Link",
   "label": "MGRP",
   "options": "MGRP",
   "read_only": 1
  },
  {
   "fieldname": "column_break_102",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "mgrp_status",
   "fieldtype": "Data",
   "label": "MGRP Status",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "fieldname": "mgrp_docstatus",
   "fieldtype": "Data",
   "hidden": 1,
   "label": "MGRP Docstatus"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "mgrp_progress",
   "fieldtype": "Float",
   "hidden": 1,
   "label": "MGRP Progress"
  },
  {
   "fetch_from": "job_offer.operations_shift",
   "fetch_if_empty": 1,
   "fieldname": "operations_shift",
   "fieldtype": "Link",
   "label": "Operations Shift",
   "options": "Operations Shift"
  },
  {
   "fetch_from": "job_offer.operations_site",
   "fetch_if_empty": 1,
   "fieldname": "operations_site",
   "fieldtype": "Link",
   "label": "Operations Site",
   "options": "Operations Site"
  },
  {
   "collapsible": 1,
   "fieldname": "g2g_and_residency_section",
   "fieldtype": "Section Break",
   "label": "G2G and Residency"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "is_g2g_fees_needed",
   "fieldtype": "Check",
   "label": "G2G Fees Needed"
  },
  {
   "depends_on": "eval: doc.employee && doc.user_created",
   "fieldname": "enrol_face_recognition_section",
   "fieldtype": "Section Break",
   "label": "Enrol Face Recognition"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "depends_on": "eval: doc.employee && doc.user_created",
   "fieldname": "inform_and_send_enrolment_details_to_employee",
   "fieldtype": "Check",
   "label": "Inform and Send Enrolment Details to Employee",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "depends_on": "eval: doc.employee && doc.user_created",
   "fieldname": "enrolled",
   "fieldtype": "Check",
   "label": "Enrolled",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "enrolled",
   "fieldname": "enrolled_on",
   "fieldtype": "Datetime",
   "label": "Enrolled On",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "is_g2g_fees_needed",
   "fieldname": "g2g_fee_amount",
   "fieldtype": "Currency",
   "label": "G2G Fee Amount"
  },
  {
   "allow_on_submit": 1,
   "default": "0",
   "fieldname": "is_residency_fine_needed",
   "fieldtype": "Check",
   "label": "Residency Fine Needed"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "is_residency_fine_needed",
   "fieldname": "residency_fine_amount",
   "fieldtype": "Currency",
   "label": "Residency Fine Amount"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.g2g_fee_amount > 0 || doc.residency_fine_amount > 0",
   "fieldname": "total_g2g_residency_amount",
   "fieldtype": "Currency",
   "label": "Total Amount"
  },
  {
   "fieldname": "column_break_81",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.total_g2g_residency_amount > 0",
   "fieldname": "applicant_agree_to_pay_the_amount",
   "fieldtype": "Select",
   "label": "Applicant Agree to Pay the Amount",
   "options": "\nYes\nNo"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval: doc.applicant_agree_to_pay_the_amount == 'Yes'",
   "fieldname": "down_payment_amount",
   "fieldtype": "Currency",
   "label": "Down Payment Amount"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.down_payment_amount > 0 && doc.applicant_agree_to_pay_the_amount == 'Yes' && doc.payment_request",
   "fieldname": "payment_entry_reference",
   "fieldtype": "Link",
   "label": "Payment Entry Reference",
   "options": "Payment Entry"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "net_loan_amount",
   "fieldtype": "Currency",
   "label": "Net Loan Amount",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "loan_application_form",
   "fieldtype": "Attach",
   "label": "Loan Application Form"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "loan_application",
   "fieldtype": "Link",
   "label": "Loan Application",
   "options": "Loan Application",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "loan",
   "fieldtype": "Link",
   "label": "Loan",
   "options": "Loan",
   "read_only": 1
  },
  {
   "allow_on_submit": 1,
   "depends_on": "payment_entry_reference",
   "fieldname": "payment_receipt_attach",
   "fieldtype": "Attach",
   "label": "Payment Receipt Attach"
  },
  {
   "depends_on": "eval: doc.down_payment_amount > 0 && !doc.payment_request",
   "fieldname": "update_document_and_create_payment_request",
   "fieldtype": "Button",
   "label": "Update Document and Create Payment Request"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "payment_request",
   "fieldtype": "Link",
   "label": "Payment Request",
   "options": "Payment Request"
  },
  {
   "depends_on": "eval: doc.down_payment_amount > 0 && !doc.payment_request",
   "fieldname": "g2g_residency_mop",
   "fieldtype": "Link",
   "label": "Mood of Payment",
   "options": "Mode of Payment"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "loan_type",
   "fieldtype": "Link",
   "label": "Loan Type",
   "options": "Loan Type"
  },
  {
   "depends_on": "eval:doc.net_loan_amount>0 && !doc.loan",
   "fieldname": "btn_create_loan",
   "fieldtype": "Button",
   "label": "Create Loan"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "repayment_method",
   "fieldtype": "Select",
   "label": "Repayment Method",
   "options": "\nRepay Fixed Amount per Period\nRepay Over Number of Periods"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0 && doc.repayment_method == \"Repay Over Number of Periods\"",
   "fieldname": "repayment_periods",
   "fieldtype": "Int",
   "label": "Repayment Period in Months"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0 && doc.repayment_method == \"Repay Fixed Amount per Period\"",
   "fieldname": "monthly_repayment_amount",
   "fieldtype": "Currency",
   "label": "Monthly Repayment Amount"
  },
  {
   "allow_on_submit": 1,
   "depends_on": "eval:doc.net_loan_amount>0",
   "fieldname": "repayment_start_date",
   "fieldtype": "Date",
   "label": "Repayment Start Date"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "leave_policy",
   "fieldtype": "Link",
   "label": "Leave Policy",
   "options": "Leave Policy"
  },
  {
   "fieldname": "column_break_124",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "column_break_139",
   "fieldtype": "Column Break"
  },
  {
   "fieldname": "column_break_96",
   "fieldtype": "Column Break"
  },
  {
   "allow_on_submit": 1,
   "fieldname": "iban",
   "fieldtype": "Data",
   "label": "IBAN"
  },
  {
   "fetch_from": "job_offer.day_off_category",
   "fieldname": "day_off_category",
   "fieldtype": "Select",
   "label": "Day Off Category",
   "options": "Weekly\nMonthly"
  },
  {
   "fetch_from": "job_offer.number_of_days_off",
   "fieldname": "number_of_days_off",
   "fieldtype": "Int",
   "label": "Number Of Days Off"
  },
  {
   "allow_on_submit": 1,
   "default": "Bank",
   "fieldname": "salary_mode",
   "fieldtype": "Select",
   "label": "Salary Mode",
   "options": "\nBank\nCash\nCheque"
  }
 ],
 "index_web_pages_for_search": 1,
 "is_submittable": 1,
 "links": [],
 "modified": "2022-05-12 15:50:16.108193",
 "modified_by": "Administrator",
 "module": "Hiring",
 "name": "Onboard Employee",
 "owner": "Administrator",
 "permissions": [
  {
   "amend": 1,
   "cancel": 1,
   "create": 1,
   "delete": 1,
   "email": 1,
   "export": 1,
   "print": 1,
   "read": 1,
   "report": 1,
   "role": "System Manager",
   "share": 1,
   "submit": 1,
   "write": 1
  },
  {
   "cancel": 1,
   "create": 1,
   "delete": 1,
   "email": 1,
   "export": 1,
   "print": 1,
   "read": 1,
   "report": 1,
   "role": "HR Manager",
   "share": 1,
   "submit": 1,
   "write": 1
  },
  {
   "cancel": 1,
   "create": 1,
   "delete": 1,
   "email": 1,
   "export": 1,
   "print": 1,
   "read": 1,
   "report": 1,
   "role": "Onboarding Officer",
   "share": 1,
   "submit": 1,
   "write": 1
  }
 ],
 "sort_field": "modified",
 "sort_order": "DESC",
 "title_field": "employee_name",
 "track_changes": 1
}