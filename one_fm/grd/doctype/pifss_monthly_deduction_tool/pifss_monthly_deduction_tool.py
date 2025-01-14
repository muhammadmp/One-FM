# Copyright (c) 2021, omar jaber and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe, erpnext
from datetime import date, timedelta
from dateutil.relativedelta import relativedelta
from frappe.utils import get_url, getdate, cint,cstr,  flt, date_diff, rounded
from frappe.core.doctype.communication.email import make
from frappe import _
import pandas as pd

from one_fm.api.notification import create_notification_log
class PIFSSMonthlyDeductionTool(Document):

	def on_submit(self):
		self.check_flag_for_additional_salary()

	def validate(self):
		self.compare_employee_in_months()
		self.set_grd_user()

	def set_grd_user(self):
		self.grd_operator = frappe.db.get_single_value("GRD Settings", "default_grd_operator_pifss")

	def on_update(self):
		pass
		# self.check_workflow_status()

	def get_piffs_dict(self, datastack):
		pifss_dict = {}
		for i in datastack:
			pifss_dict[i.employee] = i
		return pifss_dict

	def calculate_difference(self, state):
		if state:
			pass
			self.pifss_tracking_changes.clear()
			new_pifss = frappe.get_doc('PIFSS Monthly Deduction',self.new_pifss_monthly_deduction)
			old_pifss = frappe.get_doc('PIFSS Monthly Deduction',self.old_pifss_monthly_deduction)
			new_pifss_dict = self.get_piffs_dict(new_pifss.deductions)
			old_pifss_dict = self.get_piffs_dict(old_pifss.deductions)

			for i in new_pifss.deductions:
				employee = frappe._dict({'date_of_joining':''})
				if(frappe.db.exists('Employee', {'name':i.employee})):
					employee = frappe.get_doc('Employee', i.employee)

				# ckeck diff
				data_dict = {'employee':i.employee,
					'civil_id':i.civil_id,
					'employee_name':i.employee_name,
					'new_value':i.employee_contribution,
					'pifss_no': i.pifss_id_no,
					'date_of_joining':employee.date_of_joining,
					'total_contribution':i.total_contribution,
				}
				if(old_pifss_dict.get(i.employee)):
					data_dict['old_value'] = old_pifss_dict[i.employee].employee_contribution if old_pifss_dict[i.employee].employee_contribution else 0
					data_dict['delta_amount'] = i.employee_contribution - data_dict['old_value']
					if(i.employee_contribution > data_dict['old_value']):
						data_dict['status'] = 'Increased'
					elif(i.employee_contribution < data_dict['old_value']):
						data_dict['status'] = 'Increased'
					else:
						data_dict['status'] = 'No Change'
					data_dict['date_of_change'] = new_pifss.creation

				self.append('pifss_tracking_changes',data_dict)

			# check old
			for i in old_pifss.deductions:
				if(not new_pifss_dict.get(i.employee)):
					employee = frappe._dict({'date_of_joining':''})
					if(frappe.db.exists('Employee', {'name':i.employee})):
						employee = frappe.get_doc('Employee', i.employee)
					# ckeck diff
					data_dict = {'employee':i.employee,
						'civil_id':i.civil_id,
						'employee_name':i.employee_name,
						'pifss_no': i.pifss_id_no,
						'date_of_joining':employee.date_of_joining,
						'total_contribution':i.total_contribution,
						'status':'Left',
						'relieving_date':employee.relieving_date
					}
					self.append('pifss_tracking_changes',data_dict)
		else:
			new_pifss = frappe.get_doc('PIFSS Monthly Deduction',self.new_pifss_monthly_deduction)
			self.pifss_tracking_changes.clear()
			for i in new_pifss.deductions:
				employee = frappe._dict({'date_of_joining':''})
				if(frappe.db.exists('Employee', {'name':i.employee})):
					employee = frappe.get_doc('Employee', i.employee)
				self.append('pifss_tracking_changes',{
					'employee':i.employee,
					'employee_name':i.employee_name,
					'new_value':i.employee_contribution,
					'pifss_no': i.pifss_id_no,
					'status': 'New',
					'date_of_joining':employee.date_of_joining,
					'total_contribution':i.total_contribution
				})

	def compare_employee_in_months(self):
		"""
		This function is comparing two child tables and setting the differences in a tracking table.
		It compares the child table `deductions` in the current `PIFSS Monthly Deduction` record and the child table `deductions` in the previous `PIFSS Monthly Deduction` record
		and stores the changes in (new employee, left employee, decreased in total subscription, increased in total subscription) of the two records.

		"""
		if((self.new_pifss_monthly_deduction==self.old_pifss_monthly_deduction)
			or
			(not self.old_pifss_monthly_deduction and self.new_pifss_monthly_deduction)):
			self.old_pifss_monthly_deduction = ''
			self.calculate_difference(False)
		else:
			self.calculate_difference(True)
		#
		#
		# if self.old_pifss_monthly_deduction and self.new_pifss_monthly_deduction and not self.pifss_tracking_changes:
		# 	doc_old = frappe.get_doc('PIFSS Monthly Deduction',self.old_pifss_monthly_deduction)# Old monthly deduction doctype (previous month)
		# 	doc_new = frappe.get_doc('PIFSS Monthly Deduction',self.new_pifss_monthly_deduction)# New monthly deduction doctype (current month)
		# 	list_of_old=frappe.db.get_list('PIFSS Monthly Deduction Employees',{'parent':doc_old.name},['pifss_id_no','total_subscription'])# Deductions table in the old pifss monthly deduction doctype
		# 	list_of_new=frappe.db.get_list('PIFSS Monthly Deduction Employees',{'parent':doc_new.name},['pifss_id_no','total_subscription'])# Deductions table in the new pifss monthly deduction doctype
		# 	# Create a list of all values in the `list_of_old` and `list_of_new` dictionary lists
		# 	list_of_old_values = [value for elem in list_of_old for value in elem.values()]
		# 	list_of_new_values = [value for elem in list_of_new for value in elem.values()]
		# 	list_of_changed_values=[]
		# 	table=[]
		# 	for employee_new in doc_new.deductions:# Fetching new employee that aren't appearing in the old monthly deduction
		# 		if employee_new.pifss_id_no not in list_of_old_values:
		# 			table.append({
		# 				'employee':frappe.get_value('Employee',{'pifss_id_no':employee_new.pifss_id_no},['name']),
		# 				'pifss_no':employee_new.pifss_id_no,
		# 				'old_value':None,
		# 				'new_value':employee_new.total_subscription,
		# 				'status':"New",
		# 				'delta_amount':None
		# 			})
		# 		elif employee_new.pifss_id_no in list_of_old_values:# Fetching employee who got changes in their monthly deduction
		# 			for value in list_of_old:
		# 				if employee_new.pifss_id_no == value.pifss_id_no and employee_new.total_subscription != value.total_subscription:
		# 					if employee_new.pifss_id_no not in list_of_changed_values:
		# 						list_of_changed_values.append(employee_new.pifss_id_no)
		# 						status = sub_total_subscription(employee_new.total_subscription,value.total_subscription)# This line returns list of status and delta amount like: status = ['Increased',90]
		# 						if status:
		# 							table.append({
		# 							'employee':frappe.get_value('Employee',{'pifss_id_no':employee_new.pifss_id_no},['name']),
		# 							'pifss_no':employee_new.pifss_id_no,
		# 							'old_value':value.total_subscription,
		# 							'new_value':employee_new.total_subscription,
		# 							'status':status[0],
		# 							'delta_amount':status[1]
		# 							})
		#
		# 	for employee_old in doc_old.deductions:
		# 		if employee_old.pifss_id_no not in list_of_new_values:# Fetching left employee who are not showing in the current monthly deduction
		# 			table.append({
		# 				'employee':frappe.get_value('Employee',{'pifss_id_no':employee_old.pifss_id_no},['name']),
		# 				'pifss_no':employee_old.pifss_id_no,
		# 				'old_value':value.total_subscription,
		# 				'new_value':None,
		# 				'status':"Left",
		# 				'delta_amount':None
		# 			})
		#
		# 	if len(table)>0:
		# 		for row in table:
		# 			pifss = self.append('pifss_tracking_changes', {})
		# 			pifss.employee = row['employee']
		# 			pifss.pifss_no = row['pifss_no']
		# 			pifss.old_value = row['old_value']
		# 			pifss.new_value = row['new_value']
		# 			pifss.status = row['status']
		# 			pifss.delta_amount = row['delta_amount']
		# 			pifss.save()
		# 			frappe.db.commit()

	def check_workflow_status(self):
		"""
		This method checks the workflow status and throw the required fields
		"""
		if self.workflow_state == "Pending By Operator":
			field_list = [{'Old PIFSS Monthly Deduction':'old_pifss_monthly_deduction'},{'New PIFSS Monthly Deduction':'new_pifss_monthly_deduction'}]
			self.set_mendatory_fields(field_list)
			self.check_mandatory_fields()
			self.validate_dates()
			# self.add_update_total_supscription()
			# self.set_has_tracking_record_flag()

		if self.workflow_state == "Rejected By Supervisor":
			field_list = [{'Reason Of Rejection':'reason_of_rejection'}]
			self.set_mendatory_fields(field_list)

	def set_mendatory_fields(self,field_list):
		"""The method throw message with the rows that contains missing fields"""
		mandatory_fields = []
		for fields in field_list:
			for field in fields:
				if not self.get(fields[field]):
					mandatory_fields.append(field)
		if len(mandatory_fields) > 0:
			message= 'Mandatory fields are required in the Form<br><br><ul>'
			for mandatory_field in mandatory_fields:
				message += '<li>'+ mandatory_field +'</li>'
			message += '</ul>'
			frappe.throw(message)

	def check_mandatory_fields(self):
		"""This method setting the mendatory fields"""
		mandatory_fields_list = []
		for row in self.pifss_tracking_changes:#each item in the preparation_record row
			if row.status == "Decreased" or row.status == "Increased":
				if not row.date_of_change or not row.details:
					mandatory_fields_list.append({'idx':row.idx})
			if row.status == "Left":
				if not row.relieving_date:
					mandatory_fields_list.append({'idx':row.idx})

		if len(mandatory_fields_list) > 0:
			message = 'Mandatory fields required in PIFSS Monthly Deduction Tool to Submit<br><br><b style="color:red;">First, You Need to Check <a href="{0}" target="_blank">MGRP Website</a></b><br><ul>'.format(self.mgrp_website)
			for mandatory_field in mandatory_fields_list:
				message += '<li>' +'<p> Missing fields are Required in row number {0}</p>''</li>'.format(mandatory_field['idx'])
			message += '</ul>'
			frappe.throw(message)

	def validate_dates(self):
		"""
		This method validate the relieving date and date of change fields, and throw message for Operator to modify the dates if they set future dates
		"""
		for row in self.pifss_tracking_changes:
			if row.status == "Left" and row.relieving_date:
				if date_diff(row.relieving_date, date.today()) >= 0:
					frappe.throw("Cannot create Additional Salary for Left Employee")
			if row.status == "Decreased" or row.status == "Increased" and row.date_of_change:
				if date_diff(row.date_of_change, date.today()) >= 0:
					frappe.throw("Future Dates are not Accepted for Employee who has Changes in their Total Subscription")

	def add_update_total_supscription(self):
		"""
		This method is adding new total supscription amount based on the date_of_change field, so it increases the total subscription * number_of_months,
		`number_of_months` will be calculated once PRO set the date_of_change` field
		"""
		for row in self.pifss_tracking_changes:
			if row.status == "Decreased" or row.status == "Increased":
				number_of_months = self.set_update_total_subscription(row.date_of_change)
				row.updated_total_subscription = rounded(number_of_months*flt(row.new_value), 3)
				row.save()
				frappe.db.commit()

			if row.status == "New":
				row.updated_total_subscription = flt(row.new_value)
				row.save()
				frappe.db.commit()

	def set_update_total_subscription(self,date_input):
		"""This method will return the number of months from the input date value"""
		month_of_pifss = date.today()#end date
		date_of_change = getdate(date_input)#start date
		num_of_months = (month_of_pifss.year - date_of_change.year) * 12 + (month_of_pifss.month - date_of_change.month)#calculating the months between 2 dates
		if num_of_months >0:
			return num_of_months
		if num_of_months == 0:
			return 1

	def set_has_tracking_record_flag(self):
		"""
		This method will set the flag `has_tracking_record` per employee in the pifss monthly deduction doctype
		based on if they have record in the pifss monthly deduction tool doctype
		"""
		list_of_employee=[row.pifss_no for row in self.pifss_tracking_changes]# Creating list of pifss_id for all employee in the tracking table, convert pifss_id to int because it will be fetched from monthly deduction table as an integer
		monthly_doc = frappe.get_doc('PIFSS Monthly Deduction',self.new_pifss_monthly_deduction)
		# Fetch child table for pifss monthly deduction for all employee
		for row in monthly_doc.deductions:
			if frappe.db.exists("Employee", {"pifss_id_no": row.pifss_id_no}):
				if row.pifss_id_no in list_of_employee:# If employee in the tracking system get their updated total subscription
					row.has_tracking_record = 1
					row.save()
			frappe.db.commit()


def sub_total_subscription(new_value,old_value):
	"""
	This method checks the status of the total subscription and returns the status with delta amount.

	Param:
	------

	new_value: total subscription in the current `PIFSS Monthly Deduction` doctype
	old_value: total subscription in the previous `PIFSS Monthly Deduction` doctype

	"""
	if new_value and old_value:
		value = rounded(new_value-old_value,3)
		if value > 0:
			return ["Increased",value]
		if value < 0:
			return ["Decreased",value]


#this method has been called from pifss monthly deduction js file
@frappe.whitelist()
def track_pifss_changes(pifss_monthly_deduction_name):
	"""
	This method is fetching the two csv files of current and previous month,
	and listing employee who got increase or decrease in their total subscription and who are the new and left kuwaiti employees.
	It returns record name to pifss monthly deduction.
	"""

	if not frappe.db.exists('PIFSS Monthly Deduction Tool',{'new_pifss_monthly_deduction':pifss_monthly_deduction_name}):
		first_day_in_previous_month = date.today().replace(day=1) + relativedelta(months=-1)# Calculate first date in pervious month
		pifss_previous_doc_name = frappe.get_value('PIFSS Monthly Deduction',{'deduction_month':first_day_in_previous_month},['name'])# Fetch name of previous month record
		if pifss_previous_doc_name:
			pmd_tool = frappe.new_doc('PIFSS Monthly Deduction Tool')
			pmd_tool.old_pifss_monthly_deduction= pifss_previous_doc_name
			pmd_tool.new_pifss_monthly_deduction=pifss_monthly_deduction_name
			pmd_tool.insert()
			return pmd_tool.name
	elif frappe.db.exists('PIFSS Monthly Deduction Tool',{'new_pifss_monthly_deduction':pifss_monthly_deduction_name}):
		name = frappe.db.get_value('PIFSS Monthly Deduction Tool',{'new_pifss_monthly_deduction':pifss_monthly_deduction_name},['name'])
		return name
